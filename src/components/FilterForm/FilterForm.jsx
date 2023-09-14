import React from 'react';

const FilterForm = ({ carBrands, carPrices, onFilterChange }) => {
  const handleFilterChange = e => {
    e.preventDefault();
    const brand = e.target.brand.value;
    const maxPrice = parseFloat(e.target.maxPrice.value);
    const minMileage = parseFloat(e.target.minMileage.value);
    const maxMileage = parseFloat(e.target.maxMileage.value);
    onFilterChange({ brand, maxPrice, minMileage, maxMileage });
  };

  return (
    <form onSubmit={handleFilterChange}>
      <select name="brand">
        <option value="">Виберіть марку автомобіля</option>
        {carBrands.map(brand => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
      <select name="maxPrice">
        <option value="">Виберіть максимальну ціну</option>
        {carPrices.map(price => (
          <option key={price} value={price}>
            {`До ${price} дол.`}
          </option>
        ))}
      </select>
      <input type="number" name="minMileage" placeholder="Пробіг від" />
      <input type="number" name="maxMileage" placeholder="Пробіг до" />
      <button type="submit">Фільтрувати</button>
    </form>
  );
};

export default FilterForm;
