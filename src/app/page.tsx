import { IntroduceSection } from '@/widgets/Introduce';
import { PostSection } from '@/widgets/PostSection';

export default async function Home() {
  return (
    <div className="size-full py-24 md:w-1000">
      <IntroduceSection />
      <PostSection />
    </div>
  );
}
