import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RommakImage from "../../assets/images/romaak-main.webp";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userAction";

const s = {
  headerBtn: {
    color: "#636363",
    textTransform: "uppercase",
    p: "1rem 1rem",
    fontWeight: "300",
    borderRadius: 0,
    fontSize: "1.6rem",
    ":hover": {
      color: "primary.main"
    }
  },
  headerBtnActive: {
    color: "primary.main",
    textTransform: "uppercase",
    p: "1rem 1rem",
    fontWeight: "300",

    borderRadius: 0,
    fontSize: "1.6rem",
    boxShadow: "inset 0px -3px  0px #644B91"
  },
  headerBtnChangeLang: {
    color: "primary.main",
    textTransform: "uppercase",
    p: "1rem 1.2rem",
    borderRadius: 0,
    fontWeight: "300",
    ml: "3rem",
    fontSize: "1.6rem",
    ":hover": {
      backgroundColor: "transparent"
    }
  },
  menuStyle: {
    "& .MuiPaper-root": {
      borderRadius: "1rem",
      marginTop: "8px",
      // minWidth: 180,
      background: "transparent",
      color: "rgb(55, 65, 81)",
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "::before": {
        content: "''",
        background: "#fff",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        filter: "blur(18px)"
      },
      "& .MuiMenu-list": {
        padding: "0",
        textAlign: "center",
        "& .MuiLink-root": {
          justifyContent: "center",
          color: "#8D6E9C"
        }
      }
    }
  },
  expansion: {
    "&.MuiPaper-root": {
      fontSize: {
        xs: "1.2rem",
        sm: "1.4rem",
        md: "1.6rem"
      },
      boxShadow: "inset 0px 3px 6px rgba(0,0,0,0.06), 0px 3px 6px rgba(0,0,0,0.03)",
      borderRadius: "1rem",
      borderBottom: "",

      mb: "2rem",

      "& .MuiButtonBase-root.MuiAccordionSummary-root": {
        minHeight: "auto",
        py: "0.8rem",
        "& .MuiAccordionSummary-expandIconWrapper": {
          color: "primary.main"
        }
      },
      "& .MuiCollapse-root": {
        mb: "2rem"
      }
    },

    "&.Mui-expanded": {
      margin: 0,
      borderBottom: 0,
      color: "primary.main"
    },

    borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
  },

  expansionSummary: {
    "& .MuiAccordionSummary-content": {
      m: 0
    },
    "& .MuiAccordionSummary-content.Mui-expanded": {
      p: "0 0",
      m: 0
    },
    "& .MuiListItem-root": {
      borderBottom: 0,
      py: 0,
      pl: 0
    },

    "&.Mui-expanded": {
      minHeight: "4.8rem",
      borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
    },
    "& .Mui-expanded": {
      m: "0"
    },
    "& .MuiListItem-root:hover": {
      backgroundColor: "transparent"
    },
    "& .MuiListItemText-root": {
      m: "0",
      p: "6px 0",
      color: "primary.main",

      ":hover": {
        backgroundColor: "transparent !imporatant"
      }
    },
    "& .MuiLink-root-MuiButtonBase-root-MuiListItem-root:hover": {
      backgroundColor: "transparent !imporatant"
    }
  },
  expansionDetails: {
    padding: 0
  },
  drawerListStyle: {
    fontSize: {
      xs: "1.2rem",
      sm: "1.4rem",
      md: "1.6rem"
    },
    mb: "2rem",
    boxShadow: "inset 0px 3px 6px rgba(0,0,0,0.06), 0px 3px 6px rgba(0,0,0,0.03)",
    borderRadius: "1rem",
    cursor: "pointer"
  },
  mainDrawer: {
    "& .MuiDrawer-paper": {
      backgroundColor: "#fff",
      color: "primary.main",
      width: 250,
      pt: "4rem",
      px: "2rem"
    }
  },
  logout: {
    backgroundColor: "#000",
    color: "#fff",
    px: "2rem",
    ":hover": {
      backgroundColor: "#556f23",
      color: "#fff"
    }
  }
};

const HeaderPrimary = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error } = userLogin;

  const onLogout = () => {
    dispatch(logout());
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const mainMenu = [
    {
      title: "Simple Table",
      url: "/hompage",
      ariaLabel: "Simple Table"
    },
    {
      title: "MUI Table",
      url: "/mui-table",
      ariaLabel: "MUI Table"
    },
    {
      title: "Ag-grid Table",
      url: "/ag-grid",
      ariaLabel: "Ag-grid Table"
    }
  ];

  const tabs = (
    <>
      {userInfo && Object.keys(userInfo).length !== 0 ? (
        <Grid item sx={{ display: { xs: "none", md: "block" } }}>
          <Grid container sx={{ gap: "2.4rem" }}>
            {mainMenu.map(({ title, url, ariaLabel, subTitles, click }) => (
              <React.Fragment key={title}>
                <Button
                  sx={s.headerBtn}
                  component={url ? Link : Button}
                  to={url}
                  aria-label={ariaLabel}
                  onClick={click ? click : undefined}>
                  {title}
                </Button>
                {click && (
                  <>
                    <Menu
                      id="product-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "product-items"
                      }}
                      sx={s.menuStyle}>
                      {subTitles.map(({ title, urlTwo }) => (
                        <MenuItem divider key={title} component={Link} to={urlTwo}>
                          {title}
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                )}
              </React.Fragment>
            ))}

            <Button sx={s.logout} onClick={onLogout}>
              Log out{" "}
            </Button>
          </Grid>
        </Grid>
      ) : (
        <></>
      )}
    </>
  );

  const drawer = (
    <>
      {" "}
      {userInfo && Object.keys(userInfo).length !== 0 ? (
        <Box sx={{ display: { md: "none", xs: "block" } }}>
          <SwipeableDrawer
            anchor="right"
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            onOpen={() => setOpenDrawer(true)}
            sx={s.mainDrawer}>
            <List disablePadding>
              {mainMenu.map(({ title, url, ariaLabel, subTitles, click }) => (
                <React.Fragment key={Math.random()}>
                  {subTitles !== undefined ? (
                    <Accordion elevation={0} sx={s.expansion}>
                      <AccordionSummary sx={s.expansionSummary} expandIcon={<ExpandMoreIcon />}>
                        <ListItem aria-label={ariaLabel}>
                          <ListItemText disableTypography>{title}</ListItemText>
                        </ListItem>
                      </AccordionSummary>

                      {subTitles.map(({ title, urlTwo }) => (
                        <AccordionDetails key={Math.random()} sx={s.expansionDetails}>
                          <ListItem
                            aria-label={ariaLabel}
                            onClick={() => {
                              setOpenDrawer(false);
                            }}
                            // divider
                            button
                            component={Link}
                            to={urlTwo}>
                            <ListItemText disableTypography>{title}</ListItemText>
                          </ListItem>
                        </AccordionDetails>
                      ))}
                    </Accordion>
                  ) : (
                    <>
                      <ListItem
                        onClick={() => {
                          setOpenDrawer(false);
                        }}
                        divider
                        component={url ? Link : ListItem}
                        to={url}
                        sx={s.drawerListStyle}>
                        <ListItemText disableTypography>{title}</ListItemText>
                      </ListItem>
                    </>
                  )}
                </React.Fragment>
              ))}
              <ListItem onClick={onLogout} sx={s.drawerListStyle}>
                <ListItemText disableTypography>logout</ListItemText>
              </ListItem>
            </List>
          </SwipeableDrawer>
          <IconButton
            sx={{ color: "#556f23", fontSize: "4rem" }}
            onClick={() => setOpenDrawer(!openDrawer)}
            disableRipple
            size="large">
            <MenuIcon />
          </IconButton>
        </Box>
      ) : (
        <></>
      )}
    </>
  );

  return (
    <Box
      component="header"
      sx={{
        height: { lg: "10rem" },
        boxShadow: 8,
        position: "relative",
        zIndex: 1000
      }}>
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{
            height: { lg: "10rem" }
          }}>
          <Grid item>
            <Button
              component={Link}
              to="/"
              disableRipple
              aria-label="romaak"
              sx={{
                p: 0,
                textDecoration: "none",
                m: 0,
                ":hover": {
                  bgcolor: "transparent"
                }
              }}>
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "8rem ", lg: "10rem" },
                  height: { xs: "8rem", lg: "10rem" }
                }}>
                <img src={RommakImage} alt="Homa Pharmed Logo" width="100%" height="100%" />
              </Box>
            </Button>
          </Grid>
          {tabs}
          {drawer}
        </Grid>
      </Container>
    </Box>
  );
};

export default HeaderPrimary;
