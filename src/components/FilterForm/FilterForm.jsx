import React, { useState } from 'react';
import { FilterContainer } from './FilterForm.styled';

const FilterForm = ({ carBrands, onFilterChange }) => {
  const [selectedPrice, setSelectedPrice] = useState('');

  const handleFilterChange = e => {
    e.preventDefault();
    const brand = e.target.brand.value;
    const maxPrice = parseFloat(selectedPrice);
    const minMileage =
      e.target.minMileage.value.trim() === ''
        ? -Infinity
        : parseFloat(e.target.minMileage.value);
    const maxMileage = parseFloat(e.target.maxMileage.value);
    onFilterChange({ brand, maxPrice, minMileage, maxMileage });
  };

  const handlePriceChange = e => {
    setSelectedPrice(e.target.value);
  };

  return (
    <FilterContainer>
      <form onSubmit={handleFilterChange}>
        <select name="brand">
          <option value="">Enter the text</option>
          {carBrands.map(brand => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
        <input
          type="number"
          name="maxPrice"
          placeholder="To $"
          value={selectedPrice}
          onChange={handlePriceChange}
        />
        <label>Сar mileage / km</label>
        <input type="number" name="minMileage" placeholder="From" />
        <input type="number" name="maxMileage" placeholder="To" />

        <button type="submit">Search</button>
      </form>
    </FilterContainer>
  );
};

export default FilterForm;
