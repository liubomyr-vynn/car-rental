import Container from 'components/Container/Container';
import {
  NotFoundContainer,
  NotFoundText,
  NotFoundTitle,
} from './NotFound.styled';

const NotFound = () => {
  return (
    <>
      <Container>
        <NotFoundContainer>
          <NotFoundTitle>404 - Page not found</NotFoundTitle>
          <NotFoundText>
            Sorry, the page you are looking for was not found.
          </NotFoundText>
        </NotFoundContainer>
      </Container>
    </>
  );
};

export default NotFound;
