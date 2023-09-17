import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './Layout.styled';

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer>&copy; 2023 Car Rental App. All rights reserved.</Footer>
    </div>
  );
};

export default SharedLayout;
