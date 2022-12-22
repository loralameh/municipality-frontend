import * as React from "react";
import { Link } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";

// mui components
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { green } from "@mui/material/colors";

//pics
import Logo from "assets/images/logo.png";

//redux
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "features/user/userSlice";

function NavBar() {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const title = "بلدية حاصبيا";

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (action) => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      style={{
        // background: "transparent",
        backgroundColor: "rgba(224, 238, 221, 0.4)",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
            sx={{ display: { xs: "none", lg: "block" }, mr: 1 }}
            alt="municipality logo"
            src={Logo}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "primary",
              textDecoration: "none",
            }}
          >
            {title}
          </Typography>

          {/* small screen menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink to="/" className="menu-link">
                  الصفحة الرئيسية
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink to="/municipality-services" className="menu-link">
                  خدمات البلدية
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink to="/about-municipality" className="menu-link">
                  عن البلدية
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink to="/contact-us" className="menu-link">
                  اتصل بنا
                </NavLink>
              </MenuItem>
              {/* <MenuItem onClick={handleCloseNavMenu}>
                <NavLink to="/about-hasbaya" className="menu-link">
                  عن حاصبيا
                </NavLink>
              </MenuItem> */}
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink to="/citizen-services" className="menu-link">
                  خدمات الاهالي
                </NavLink>
              </MenuItem>
            </Menu>
          </Box>
          <Avatar
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            alt="municipality logo"
            src={Logo}
          />

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {title}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <NavLink to="/" className="menu-link">
              الصفحة الرئيسية
            </NavLink>

            <NavLink to="/municipality-services" className="menu-link">
              خدمات البلدية
            </NavLink>

            <NavLink to="/about-municipality" className="menu-link">
              عن البلدية
            </NavLink>

            <NavLink to="/contact-us" className="menu-link">
              اتصل بنا
            </NavLink>

            {/* <NavLink to="/about-hasbaya" className="menu-link">
              عن حاصبيا
            </NavLink> */}

            <NavLink to="/citizen-services" className="menu-link">
              خدمات الاهالي
            </NavLink>
          </Box>

          {/* login button if user is NOT logedin   */}
          {!user && (
            <Link to="/login">
              <Button variant="contained"> تسجيل دخول</Button>
            </Link>
          )}

          {/* user avatar if user is logedin */}
          {user && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="user name/pic" sx={{ bgcolor: green[900] }}>
                    {user.name.charAt(0).toUpperCase()}
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <NavLink to="/user-services" className="menu-link">
                  <MenuItem
                    onClick={() => {
                      handleCloseUserMenu();
                    }}
                  >
                    خدماتي
                  </MenuItem>
                </NavLink>

                <NavLink to="/user-bills" className="menu-link">
                  <MenuItem
                    onClick={() => {
                      handleCloseUserMenu();
                    }}
                  >
                    فاتورة الكهرباء
                  </MenuItem>
                </NavLink>

                <NavLink to="/user-profile" className="menu-link">
                  <MenuItem
                    onClick={() => {
                      handleCloseUserMenu();
                    }}
                  >
                    حسابي الشخصي
                  </MenuItem>
                </NavLink>

                <NavLink to="/citizen-services" className="menu-link">
                  <MenuItem
                    onClick={() => {
                      handleCloseUserMenu();
                      dispatch(logoutUser());
                    }}
                  >
                    خروج
                  </MenuItem>
                </NavLink>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
