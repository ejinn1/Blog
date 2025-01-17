import { getCategories } from '@/entities/category/model/getCategories';
import Category from '@/entities/category/ui/Category';

const CategoryContainer = async () => {
  const categorys = await getCategories();

  return (
    <div className="flex flex-wrap gap-8">
      {categorys.map((category) => (
        <Category key={category} category={category} />
      ))}
    </div>
  );
};

export default CategoryContainer;
