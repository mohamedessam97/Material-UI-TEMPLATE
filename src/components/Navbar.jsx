import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { keyframes } from "@mui/material"
import { Link, NavLink } from "react-router-dom";

const pages = ["Home", "About", "Portfolio", "Contact"];
const animation = keyframes`
  0% {
      -webkit-transform: translatex(-200%);
      -ms-transform: translatex(-200%);
      -o-transform: translatex(-200%);
      transform: translatex(-200%)
  }

  100% {
      -webkit-transform: translatex(0%);
      -ms-transform: translatex(0%);
      -o-transform: translatex(0%);
      transform: translatex(0%)
  }
`

const Navbar = () => {
  const [textColor, setTextColor] = React.useState(false)
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    console.log(event);
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (

    <AppBar
      position="static"
      sx={{ borderRadius: "10px", backgroundColor: "#212121", my: 2 }}
      maxWidth="sm"
    >
      <Container>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1, color: "#FF651C" }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#FF651C",
              textDecoration: "none",
              animation: `${animation} 1.5s `

            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} />

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Box
              sx={{
                ":hover":{
                  display:'none'
                }
              }}
              >
                <NavLink to={page} style={({ isActive }) => {
                  return {
                    color: isActive ? '#FF651C' : 'white',
                    display: "block",
                    textDecoration: 'none',
                    margin: 20,
                    fontWeight: '700'
                  }
                }}>

                  {page}
                </NavLink>
              </Box>
            ))}
          </Box>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },

              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }} />

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },

              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} sx={{ backgroundColor: "#212121" }}>
                  <NavLink to={page} style={({ isActive }) => { return { color: isActive ? "#FF651C" : "white" } }}>
                    <Button textAlign="center" sx={{ fontWeight: 700, }}>{page}</Button>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
