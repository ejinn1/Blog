import { useCategoryStore } from '@/features/category/store/useCategoryStore';
import { CustomMetadata } from '@/shared/types/meta';

interface useFilterPostProps {
  posts: {
    slug: string;
    meta: CustomMetadata;
  }[];
}

export const useFilterPost = ({ posts }: useFilterPostProps) => {
  const { selectedCategory } = useCategoryStore();

  if (selectedCategory.length === 0) {
    return posts;
  }

  return posts.filter((post) => selectedCategory.includes(post.meta.category));
};
