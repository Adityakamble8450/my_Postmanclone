import { AppBar, Toolbar, styled } from '@mui/material';

// Styled components
const StyledLogo = styled('img')({
  width: 100,
  padding: 5,
});

const StyledAppBar = styled(AppBar)({
  background: '#000 !important',
  position: 'static !important',
  height: '50px !important',
});

const Header = () => {
  const logo = 'https://miro.medium.com/max/802/1*dLWPk_rziSpWhPx1UWONbQ@2x.png';

  return (
    <>
      <StyledLogo src={logo} alt="logo" />
      {/* <StyledAppBar>
        <Toolbar>
        </Toolbar>
      </StyledAppBar> */}
    </>
  );
};

export default Header;
