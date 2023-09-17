import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/Card/Card';
import Container from 'components/Container/Container';
import {
  CardContainer,
  LoadMoreBtn,
  LoadMoreContainer,
} from './CatalogPage.styled';

const CatalogPage = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);

  const [carsPerPage, setCarsPerPage] = useState(8);
  const [loadMoreCount, setLoadMoreCount] = useState(1);
  const [remainingCars, setRemainingCars] = useState(0);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios
      .get('https://648cbfdc8620b8bae7ed56b5.mockapi.io/advert')
      .then(response => {
        const carsData = response.data;

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
