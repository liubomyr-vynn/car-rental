import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Card from '../../Card/Card';
import FilterForm from '../../FilterForm/FilterForm';

const CatalogPage = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [carBrands, setCarBrands] = useState([]);
  const [carPrices, setCarPrices] = useState([]);

  useEffect(() => {
    // Отримати всі автомобілі з ресурсу
    axios
      .get('https://648cbfdc8620b8bae7ed56b5.mockapi.io/advert')
      .then(response => {
        const carsData = response.data;
        // Отримати унікальні марки автомобілів
        const uniqueBrands = [...new Set(carsData.map(car => car.make))];
        setCarBrands(uniqueBrands);
        // Отримати унікальні ціни і заокруглити їх до десятків
        const uniquePrices = [
          ...new Set(carsData.map(car => Math.ceil(car.rentalPrice / 10) * 10)),
        ];
        setCarPrices(uniquePrices);
        setCars(carsData);
        setFilteredCars(carsData);
      })
      .catch(error => {
        console.error('Помилка при отриманні даних:', error);
      });
  }, []);

  const handleFilterChange = ({ brand, maxPrice, minMileage, maxMileage }) => {
    const filtered = cars.filter(car => {
      const brandMatch =
        !brand || car.make.toLowerCase() === brand.toLowerCase();
      const priceMatch = !maxPrice || car.rentalPrice <= maxPrice;
      const minMileageMatch = !minMileage || car.mileage >= minMileage;
      const maxMileageMatch = !maxMileage || car.mileage <= maxMileage;
      return brandMatch && priceMatch && minMileageMatch && maxMileageMatch;
    });

    setFilteredCars(filtered);
  };

  return (
    <div>
      <FilterForm
        carBrands={carBrands}
        carPrices={carPrices}
        onFilterChange={handleFilterChange}
      />
      <ul>
        {filteredCars.map(car => (
          <li key={car.id}>
            <Card car={car} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CatalogPage;
