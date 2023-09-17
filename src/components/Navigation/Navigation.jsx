import { StyledNav, StyledNavLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <StyledNav>
      <StyledNavLink to="/" end>
        Home
      </StyledNavLink>
      <StyledNavLink to="/catalog"> Catalog </StyledNavLink>
      <StyledNavLink to="/favorites"> Favorites </StyledNavLink>
    </StyledNav>
  );
};

export default Navigation;
