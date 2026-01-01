"use client";

import { Flex, Heading, SmartImage, SmartLink, Tag, Text } from '@/once-ui/components';
import styles from './Posts.module.scss';
import { formatDate } from '@/app/utils/formatDate';

interface PostProps {
    post: any;
    thumbnail: boolean;
}

export default function Post({ post, thumbnail }: PostProps) {
    return (
        <SmartLink
            fillWidth
            className={styles.hover}
            style={{
                textDecoration: 'none',
                margin: '0',
                height: 'fit-content',
            }}
            key={post.slug}
            href={`/blog/${post.slug}`}>
            <Flex
                position="relative"
                mobileDirection="column"
                fillWidth paddingY="12" paddingX="16" gap="32">
                {post.metadata.image && thumbnail && (
                    <Flex
                        fillWidth
                        style={{ aspectRatio: '16 / 9' }}
                        className={styles.image}>
                        <SmartImage
                            priority
                            sizes="(max-width: 768px) 100vw, 640px"
                            style={{
                                cursor: 'pointer',
                                border: '1px solid var(--neutral-alpha-weak)',
                                objectPosition: post.metadata.imagePosition || 'center',
                                width: '100%',
                                height: '100%'
                            }}
                            radius="m"
                            src={post.metadata.image}
                            alt={'Thumbnail of ' + post.metadata.title}
                            objectFit="cover"
                        />
                    </Flex>
                )}
                <Flex
                    position="relative"
                    fillWidth gap="8"
                    direction="column" justifyContent="center">
                    <Heading
                        as="h2"
                        variant="heading-strong-l"
                        wrap="balance">
                        {post.metadata.title}
                    </Heading>
                    <Text
                        variant="label-default-s"
                        onBackground="neutral-weak">
                        {formatDate(post.metadata.publishedAt, false)}
                    </Text>
                    { post.metadata.tag &&
                        <Tag
                            className="mt-8"
                            label={post.metadata.tag}
                            variant="neutral" />
                    }
                </Flex>
            </Flex>
        </SmartLink>
    );
}