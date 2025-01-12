import Category from '@/entities/category/ui/Category';
import { getCategories } from '@/shared/lib/getCategory';

const CategoryContainer = async () => {
  const categorys = await getCategories();

  return (
    <div className="flex flex-wrap gap-8">
      {categorys.map((category) => (
        <Category category={category} />
      ))}
    </div>
  );
};

export default CategoryContainer;
