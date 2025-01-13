import { CategoryContainer } from '@/widgets/CategoryContainer';
import { PostContainer } from '@/widgets/PostContainer';

export default async function Home() {
  return (
    <div className="size-full py-24 md:w-750">
      <section
        aria-labelledby="category-filter"
        className="flex-center mb-40 px-16 md:my-80"
      >
        <CategoryContainer />
      </section>

      <section aria-labelledby="posts-list">
        <PostContainer />
      </section>
    </div>
  );
}
