import { getAllPosts } from '@/shared/lib/getPost';
import { Header } from '@/widgets/Header';

export default async function Home() {
  const posts = await getAllPosts();

  console.log('files', posts);

  return (
    <div>
      <Header />
      <main>
        <h1>My Blog</h1>
        <p>main page</p>

        <article>
          {posts.map((post) => (
            <div>
              <h2>{post.slug}</h2>
              <p>{post.meta.title}</p>
            </div>
          ))}
        </article>
      </main>
    </div>
  );
}
