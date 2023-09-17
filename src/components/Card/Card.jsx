import React, { useState } from 'react';
import {
  CarImg,
  CarImgWrap,
  CarInfo,
  CarText,
  HeartIcon,
  HeartIconBlue,
  IconBtn,
  InfoWrapper,
  Item,
  LearnMoreBtn,
  MainInfo,
  ModelBlue,
  SecondaryCarText,
  SecondaryInfo,
} from './Card.styled';

import Modal from 'components/Modal/Modal';

const Card = ({ car, isFavoriteProp, updateFavorites }) => {
  const addressParts = car.address.split(', ');
  const city = addressParts[1];
  const country = addressParts[2];

  const firstFunctionality = car.functionalities[0];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(isFavoriteProp);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    updateFavorites(car.id, !isFavorite);
  };

  return (
    <Item>
      <CarImgWrap>
        <CarImg src={car.img} alt={car.make} />
        <IconBtn onClick={toggleFavorite} type="button">
          {isFavorite ? <HeartIconBlue /> : <HeartIcon />}
        </IconBtn>
      </CarImgWrap>
      <InfoWrapper>
        <MainInfo>
          <CarInfo>
            <CarText>{car.make}</CarText>
            <ModelBlue>
              {car.model}
              <span style={{ color: 'black' }}>,</span>
            </ModelBlue>
            <CarText>{car.year}</CarText>
          </CarInfo>
        </MainInfo>
        <SecondaryInfo>
          <SecondaryCarText>{city}</SecondaryCarText>
          <SecondaryCarText>{country}</SecondaryCarText>
          <SecondaryCarText>{car.rentalCompany}</SecondaryCarText>
          <SecondaryCarText>{car.type}</SecondaryCarText>
          <SecondaryCarText>{car.make}</SecondaryCarText>
          <SecondaryCarText>{car.id}</SecondaryCarText>
          <SecondaryCarText>{firstFunctionality}</SecondaryCarText>
        </SecondaryInfo>
        <LearnMoreBtn onClick={openModal}>Learn more</LearnMoreBtn>
      </InfoWrapper>

      {isModalOpen && (
        <Modal
          onClose={closeModal}
          model={car.model}
          make={car.make}
          year={car.year}
          rentalPrice={car.rentalPrice}
          address={car.address}
          rentalCompany={car.rentalCompany}
          functionalities={car.functionalities}
          id={car.id}
          type={car.type}
          img={car.img}
          fuelConsumption={car.fuelConsumption}
          engineSize={car.engineSize}
          description={car.description}
          accessories={car.accessories}
          rentalConditions={car.rentalConditions}
          mileage={car.mileage}
        />
      )}
    </Item>
  );
};

export default Card;
