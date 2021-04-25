import React from "react";

const FilterGroup=(props)=> {
  return (
    <div>
      <h2>{props.filterName}</h2>
      {props.filterValue !== null && (
        <p className="clear-filter" onClick={() => props.setFilter(null)}>
          x clear filter
        </p>
      )}
      <hr />
      <div className="filters-group">
        {props.filterOptions.map((option, index) => (
          <span
            key={index}
            className={`filter-item ${
              props.filterValue === option ? "active" : undefined
            }`}
            onClick={() => props.setFilter(option)}
          >
            {option}
          </span>
        ))}
      </div>
    </div>
  );
}
export default FilterGroup