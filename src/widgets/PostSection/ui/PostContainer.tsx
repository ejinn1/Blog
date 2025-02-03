import Post from '@/entities/post/ui/Post';
import { CustomMetadata } from '@/shared/types/meta';

interface PostContainerProps {
  posts: {
    slug: string;
    meta: CustomMetadata;
  }[];
}

const PostContainer = ({ posts }: PostContainerProps) => {
  return (
    <div className="flex w-full flex-col flex-wrap gap-8">
      {posts.map((post) => (
        <Post key={post.slug} slug={post.slug} meta={post.meta} />
      ))}
    </div>
  );
};

export default PostContainer;
