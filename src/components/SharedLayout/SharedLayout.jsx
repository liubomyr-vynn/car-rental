import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <header>
        {' '}
        <div>
          <span role="img" aria-label="car icon">
            🚙
          </span>{' '}
          Car Rental
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
