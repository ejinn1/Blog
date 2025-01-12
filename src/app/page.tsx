import { getAllPosts } from '@/shared/lib/getPost';
import { CategoryContainer } from '@/widgets/CategoryContainer';

export default async function Home() {
  const posts = await getAllPosts();

  console.log('files', posts);

  return (
    <>
      <h1>My Blog</h1>
      <p>main page</p>

      {/* 카테고리 영역 */}
      <section aria-labelledby="category-filter" className="flex-center">
        <CategoryContainer />
      </section>

      {/* 게시글 영역 */}
      <section aria-labelledby="posts-list">
        {posts.map((post) => (
          <article key={post.slug}>
            <h2>{post.slug}</h2>
            <p>{post.meta.title}</p>
          </article>
        ))}
      </section>
    </>
  );
}
