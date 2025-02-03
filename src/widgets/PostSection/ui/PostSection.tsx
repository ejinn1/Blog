import PostContainer from './PostContainer';

import { getAllPosts } from '@/entities/post/model/getAllPosts';

const PostSection = async () => {
  const posts = await getAllPosts();

  return (
    <section aria-labelledby="posts-list" className="flex justify-between">
      <PostContainer posts={posts} />
    </section>
  );
};

export default PostSection;
