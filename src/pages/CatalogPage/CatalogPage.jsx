import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/Card/Card';
import FilterForm from '../../components/FilterForm/FilterForm';
import Container from 'components/Container/Container';
import {
  CardContainer,
  LoadMoreBtn,
  LoadMoreContainer,
} from './CatalogPage.styled';

const CatalogPage = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [carBrands, setCarBrands] = useState([]);
  const [carPrices, setCarPrices] = useState([]);
  const [carsPerPage, setCarsPerPage] = useState(8);
  const [loadMoreCount, setLoadMoreCount] = useState(1);
  const [remainingCars, setRemainingCars] = useState(0);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios
      .get('https://648cbfdc8620b8bae7ed56b5.mockapi.io/advert')
      .then(response => {
        const carsData = response.data;
        const uniqueBrands = [...new Set(carsData.map(car => car.make))];
        const uniquePrices = [
          ...new Set(carsData.map(car => Math.ceil(car.rentalPrice / 10) * 10)),
        ];

        setCarBrands(uniqueBrands);
        setCarPrices(uniquePrices);
        setCars(carsData);
        setFilteredCars(carsData.slice(0, carsPerPage));
        setRemainingCars(carsData.length - carsPerPage);
      })
      .catch(error => {
        console.error('Помилка при отриманні даних:', error);
      });
  }, [carsPerPage]);

  useEffect(() => {
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
      setFavorites(JSON.parse(favorites));
    }
  }, []);

  const updateFavorites = (carId, isFavorite) => {
    const updatedFavorites = isFavorite
      ? [...favorites, carId]
      : favorites.filter(id => id !== carId);

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const handleFilterChange = ({ brand, maxPrice, minMileage, maxMileage }) => {
    const filtered = cars.filter(car => {
      const brandMatch =
        !brand || car.make.toLowerCase() === brand.toLowerCase();
      const priceMatch = !maxPrice || car.rentalPrice <= maxPrice;
      const minMileageMatch =
        !minMileage || car.mileage >= parseFloat(minMileage);
      const maxMileageMatch =
        !maxMileage || car.mileage <= parseFloat(maxMileage);
      return brandMatch && priceMatch && minMileageMatch && maxMileageMatch;
    });

    setFilteredCars(filtered);
    setRemainingCars(filtered.length - carsPerPage);
  };

  const handleLoadMore = () => {
    const nextCarsPerPage = carsPerPage + 8;
    const loadedCars = cars.slice(
      carsPerPage * loadMoreCount,
      nextCarsPerPage * loadMoreCount
    );

    setCarsPerPage(nextCarsPerPage);

    if (remainingCars - loadedCars.length > 0) {
      setFilteredCars(prevFilteredCars => [...prevFilteredCars, ...loadedCars]);
      setLoadMoreCount(prevCount => prevCount + 1);
    } else {
      setFilteredCars(prevFilteredCars => [
        ...prevFilteredCars,
        ...loadedCars.slice(0, remainingCars),
      ]);
      setRemainingCars(0);
    }
  };

  return (
    <div>
      <Container>
        <FilterForm
          carBrands={carBrands}
          carPrices={carPrices}
          onFilterChange={handleFilterChange}
        />
        <CardContainer>
          {filteredCars.map(car => (
            <div key={car.id}>
              <Card
                car={car}
                isFavoriteProp={favorites.includes(car.id)}
                updateFavorites={updateFavorites}
              />
            </div>
          ))}
        </CardContainer>
        {remainingCars > 0 && (
          <LoadMoreContainer>
            <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>
          </LoadMoreContainer>
        )}
      </Container>
    </div>
  );
};

export default CatalogPage;
