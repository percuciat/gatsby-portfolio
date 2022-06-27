import { useState, useCallback } from "react";

export default function useFilterCategory(dataNode) {
  const [categoryName, setCategoryName] = useState(0);

  const filterCategory = useCallback((type) => {
    setCategoryName(type);
  }, []);

  const filteredData = dataNode.filter((elemProject) =>
    +categoryName === 0 ? elemProject : elemProject.category === categoryName
  );
  return {
    actionFilter: filterCategory,
    filteredData,
    activeCategoryName: categoryName,
  };
}
