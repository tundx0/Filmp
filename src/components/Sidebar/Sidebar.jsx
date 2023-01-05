import React, { useEffect } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useStyles from "./styles";

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
];

const demoCategories = [
  { label: "Action", value: "action" },
  { label: "Comedy", value: "comedy" },
  { label: "Horror", value: "horror" },
  { label: "Animation", value: "animation" },
];

// const demoCategories = ["Action", "Comedy", "Horror", "Animation"];

const redLogo =
  "https://www.google.com/url?sa=i&url=https%3A%2F%2F99designs.com%2Finspiration%2Flogos%2Fred&psig=AOvVaw07SZp4_YlJgkPorkcT2USz&ust=1667342545379000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCICTnJPFi_sCFQAAAAAdAAAAABAE";
const blueLogo =
  "https://www.google.com/url?sa=i&url=https%3A%2F%2F99designs.com%2Finspiration%2Flogos%2Fblue&psig=AOvVaw3Moo9LlqJNhbue2aXFTbeg&ust=1667342663426000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNjlu8vFi_sCFQAAAAAdAAAAABAE";
const Sidebar = ({ setMobileOpen }) => {
  const classes = useStyles();

  const theme = useTheme();

  return (
    <>
      <Link to="/" className={ClassNames.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === "light" ? redLogo : blueLogo}
          alt="Filmpire Logo"
        />
        ;
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {demoCategories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              <ListItemIcon>
                <img
                  src={redLogo}
                  className={classes.genreImages}
                  height={30}
                />
              </ListItemIcon>
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
