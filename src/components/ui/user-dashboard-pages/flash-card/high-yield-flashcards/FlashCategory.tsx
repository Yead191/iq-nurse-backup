import { useState } from 'react';

// Define a type for category objects
interface Category {
  name: string;
  count: number;
}

interface FlashCategoryProps {
  categories: Category[];
}

const FlashCategory: React.FC<FlashCategoryProps> = ({ categories }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, category: string) => {
    if (e.target.checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter(item => item !== category));
    }
  };

  return (
    <div className="p-6 border border-gray-200 rounded-xl h-full">
     
      <div className="space-y-4">
        {categories.map((category, index) => (
          <div key={index} className="flex items-center">
            <input
              type="checkbox"
              id={category.name}
              name={category.name}
              className="mr-2"
              onChange={(e) => handleChange(e, category.name)}
            />
            <label htmlFor={category.name} className="text-gray-700">
              {category.name} ({category.count})
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashCategory;
