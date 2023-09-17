import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/Card/Card';
import { CardContainer } from './FavoritesPage.styled';
import Container from 'components/Container/Container';

const FavoritesPage = () => {
  const [favoriteCarIds, setFavoriteCarIds] = useState([]);
  const [favoriteCars, setFavoriteCars] = useState([]);

  useEffect(() => {
    const favoritesData = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteCarIds(favoritesData);
  }, []);

  useEffect(() => {
    axios
      .get('https://648cbfdc8620b8bae7ed56b5.mockapi.io/advert')
      .then(response => {
        const carsData = response.data;

        const favoriteCarsData = carsData.filter(car =>
          favoriteCarIds.includes(car.id)
        );
        setFavoriteCars(favoriteCarsData);
      })
      .catch(error => {
        console.error('Помилка при отриманні даних:', error);
      });
  }, [favoriteCarIds]);

  const removeFavorite = carId => {
    const updatedFavorites = favoriteCarIds.filter(id => id !== carId);
    setFavoriteCarIds(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <Container>
      <CardContainer>
        {favoriteCars.map(car => (
          <div key={car.id}>
            <Card
              car={car}
              isFavoriteProp={true}
              updateFavorites={() => removeFavorite(car.id)}
            />
          </div>
        ))}
      </CardContainer>
    </Container>
  );
};

export default FavoritesPage;
