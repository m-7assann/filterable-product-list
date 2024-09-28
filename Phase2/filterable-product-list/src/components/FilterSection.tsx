import React from "react";
import "./FilterSection.css"; // We'll create this CSS file next

interface FilterSectionProps {
  activeCategory: string;
  onFilterChange: (category: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  activeCategory,
  onFilterChange,
}) => {
  const categories: string[] = ["All", "Electronics", "Clothing"];

  return (
    <div className="filter-section">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`filter-btn ${
            activeCategory === category ? "active" : ""
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterSection;
