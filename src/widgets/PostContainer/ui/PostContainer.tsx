'use client';

import Post from '@/entities/post/ui/Post';
import { useFilterPost } from '@/features/post/util/useFilterPost';
import { CustomMetadata } from '@/shared/types/meta';

interface PostContainerProps {
  posts: {
    slug: string;
    meta: CustomMetadata;
  }[];
}

const PostContainer = ({ posts }: PostContainerProps) => {
  const filterdPosts = useFilterPost({ posts });

  return (
    <div className="flex w-full flex-col flex-wrap gap-8">
      {filterdPosts.map((post) => (
        <Post key={post.slug} slug={post.slug} meta={post.meta} />
      ))}
    </div>
  );
};

export default PostContainer;
