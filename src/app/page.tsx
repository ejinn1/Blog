import Post from '@/entities/post/ui/Post';
import { getAllPosts } from '@/shared/lib/getPost';
import { CategoryContainer } from '@/widgets/CategoryContainer';

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="size-full py-24 md:w-750">
      {/* 카테고리 영역 */}
      <section
        aria-labelledby="category-filter"
        className="flex-center my-40 px-16"
      >
        <CategoryContainer />
      </section>

      {/* 게시글 영역 */}
      <section aria-labelledby="posts-list">
        {posts.map((post) => (
          <Post
            key={post.slug}
            slug={post.slug}
            title={post.meta.title}
            describtion={post.meta.description}
            date={post.meta.date}
          />
        ))}
      </section>
    </div>
  );
}
