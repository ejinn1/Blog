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
    <div className="mx-auto grid grid-cols-2 gap-16 px-16 md:grid-cols-3">
      {posts.map((post) => (
        <Post key={post.slug} slug={post.slug} meta={post.meta} />
      ))}
    </div>
  );
};

export default PostContainer;
