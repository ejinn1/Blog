import Post from '@/entities/post/ui/Post';
import { getAllPosts } from '@/shared/lib/getPost';

const PostContainer = async () => {
  const posts = await getAllPosts();
  const orderdPosts = posts.sort(
    (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime(),
  );

  return (
    <div className="flex flex-col flex-wrap gap-8">
      {orderdPosts.map((post) => (
        <Post
          key={post.slug}
          slug={post.slug}
          title={post.meta.title}
          description={post.meta.description}
          date={post.meta.date}
        />
      ))}
    </div>
  );
};

export default PostContainer;
