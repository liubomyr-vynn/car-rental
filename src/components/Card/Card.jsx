const Card = ({ car }) => {
  const addressParts = car.address.split(', ');
  const city = addressParts[1];
  const country = addressParts[2];

  return (
    <div>
      <div>
        <div>
          <div>
            {car.make}
            {car.model},{car.year}
          </div>
          <div>{car.rentalPrice}</div>
        </div>
        <div>
          {city}
          {country}
          {car.rentalCompany}
          {'Premium'}
        </div>
        <div>
          {car.type}
          {car.model}
          {car.id}
          {car.accessories[car.accessories.length - 1]}
        </div>
      </div>
      <button type="button">Learn more</button>
    </div>
  );
};

export default Card;
