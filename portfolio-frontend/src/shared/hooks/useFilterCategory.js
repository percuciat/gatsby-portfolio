import { useState, useCallback } from "react";

export default function useFilterCategory(dataNode) {
  const [categoryName, setCategoryName] = useState(0);

  const filterCategory = useCallback((type) => {
    setCategoryName(type);
  }, []);

  const isCategoryAll = +categoryName === 0;

  const filteredData = dataNode.filter((elemProject) =>
    isCategoryAll ? elemProject : elemProject.category === categoryName
  );
  return {
    filterHandler: filterCategory,
    filteredData,
    activeCategoryName: categoryName,
  };
}
