import { getAllPosts } from '@/entities/post/model/getAllPosts';
import { IntroduceSection } from '@/widgets/Introduce';
import { PostContainer } from '@/widgets/PostContainer';

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="size-full py-24 md:w-750">
      <IntroduceSection />
      <section aria-labelledby="posts-list" className="flex justify-between">
        <PostContainer posts={posts} />
      </section>
    </div>
  );
}
