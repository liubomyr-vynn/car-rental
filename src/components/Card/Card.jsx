import React, { useState } from 'react';
import {
  CarImg,
  CarImgWrap,
  CarInfo,
  CarText,
  IconBtn,
  InfoWrapper,
  Item,
  LearnMoreBtn,
  MainInfo,
  ModelBlue,
  SecondaryCarText,
  SecondaryInfo,
} from './Card.styled';

import Modal from 'components/Modal/Modal'; // Переконайтеся, що Modal імпортується вірно

const Card = ({ car }) => {
  const addressParts = car.address.split(', ');
  const city = addressParts[1];
  const country = addressParts[2];

  const firstFunctionality = car.functionalities[0];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Item>
      <CarImgWrap>
        <CarImg src={car.img} alt={car.make} />
        <IconBtn
          onClick={openModal} // Відкрити модальне вікно при кліку на іконку
          type="button"
        >
          {/* Додайте іконку серця або іншу іконку */}
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
        <LearnMoreBtn
          onClick={openModal} // Відкрити модальне вікно при кліку на "Learn more"
        >
          Learn more
        </LearnMoreBtn>
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
