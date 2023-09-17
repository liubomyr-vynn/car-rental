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
          <div>
            <Navigation />
          </div>
        </HeaderList>
      </Container>
    </AppBar>
  );
};

export default Header;
