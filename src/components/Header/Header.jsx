// import Container from 'components/Container/Container';
import Navigation from 'components/Navigation/Navigation';

import { AppBar, HeaderList } from './Header.styled';
import Container from 'components/Container/Container';

const Header = () => {
  return (
    <AppBar>
      <Container>
        {' '}
        <HeaderList>
          {/* <div>
            <span role="img" aria-label="car icon">
              🚙
            </span>{' '}
            Car Rental
          </div> */}
          <div>
            <Navigation />
          </div>
        </HeaderList>
      </Container>
    </AppBar>
  );
};

export default Header;
