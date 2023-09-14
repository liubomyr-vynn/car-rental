import React, { useState } from 'react';

const FilterForm = ({ carBrands, onFilterChange }) => {
  const [selectedPrice, setSelectedPrice] = useState(''); // Додайте стан для вибраної ціни

  const handleFilterChange = e => {
    e.preventDefault();
    const brand = e.target.brand.value;
    const maxPrice = parseFloat(selectedPrice); // Використовуйте вибрану ціну
    const minMileage =
      e.target.minMileage.value.trim() === ''
        ? -Infinity
        : parseFloat(e.target.minMileage.value);
    const maxMileage = parseFloat(e.target.maxMileage.value);
    onFilterChange({ brand, maxPrice, minMileage, maxMileage });
  };

  const handlePriceChange = e => {
    setSelectedPrice(e.target.value); // Оновлюйте вибрану ціну при зміні вибору
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
      <input type="number" name="minMileage" placeholder="Пробіг від" />
      <input type="number" name="maxMileage" placeholder="Пробіг до" />
      <input
        type="number"
        name="maxPrice"
        placeholder="Максимальна ціна"
        value={selectedPrice}
        onChange={handlePriceChange}
      />
      <button type="submit">Фільтрувати</button>
    </form>
  );
};

export default FilterForm;
