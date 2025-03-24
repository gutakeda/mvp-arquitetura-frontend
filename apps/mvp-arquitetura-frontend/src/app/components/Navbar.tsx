import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth0();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Expense Tracker
        </Typography>
        {isAuthenticated && (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1" sx={{ marginRight: 2 }}>
              {user?.email}
            </Typography>
            <Button
              color="inherit"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
