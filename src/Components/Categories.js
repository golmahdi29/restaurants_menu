import React, { useState } from "react";


const Categories = ({ allCategory, filterItems }) => {

  const [active, setActive] = useState('all');

  const handleClick = (category) => {
    setActive(category)
    filterItems(category)
  }

  return (
    <div className="btn-container mt-4">
      {allCategory.map((item, index) => {
        return (
          <button
            onClick={() => handleClick(item)}
            type="button"
            className={active === item ? "filter-btn highlight" : "filter-btn"}
            key={index}
          >
            {item}
          </button>
        );
      })}
      
    </div>
  );
};

export default Categories;
