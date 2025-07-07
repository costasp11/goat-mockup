import { AttachMoney, SpaceDashboardOutlined } from "@mui/icons-material";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";



import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider
} from "@mui/material";

import { useState } from "react";
import React from "react";

const SideBar = () => {
  // use state hooks, click will set active item to the clicked item
  const [activeItem, setActiveItem] = useState("Overview");
  return (
    <Box
      className="sidebar-container"
      sx={{
        width: 300,
        backgroundColor: "#121621", // TODO: update color later
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 0 30px rgba(0, 0, 0, 0.5)", // add shadow to the right border
        borderRadius: "5px",
      }}
    >
      {/* Top Logo of SideBar */}
      <Box
        sx={{ padding: 2, display: "flex", justifyContent: "space-between"}}
      >
        <Typography
          variant="h6"
          sx={{ color: "white", textAlign: "center", pt: .6}}
        >
          CRM Copilot {/* TODO: update logo */}
        </Typography>
        <IconButton
        sx={{
          borderRadius: "8px",
          width: "40px",
          height: "40px",
          "&:hover":{
            backgroundColor: "rgba(71, 159, 246, 0.3)"
          }
        }}
        
        
        >
          <Menu/>
        </IconButton>
      </Box>

      {/* Create Deal Button */}
      <Box sx={{ p: 1, display: "flex", justifyContent: "center" }}>
        <Button
          sx={{ width: "85%" }}
          variant="contained"
          size="medium"
          color="primary"
        >
          Create Deal
        </Button>
      </Box>
      <Divider variant="middle" sx={{ mt: 1, mb: 1, backgroundColor: "rgba(255, 255, 255, 0.1)" }} />

      {/* Main Navigation */}
      <List sx={{ flexGrow: 1, padding: 1, paddingLeft: 3, paddingRight: 3 }}>
        {/* Section Header */}
        <Typography
          variant="h6"
          sx={{
            color: "rgba(221, 212, 212, 0.83)",
            mb: 1,
            fontSize: "0.9rem",
            fontWeight: "bold",
          }}
        >
          Main Navigation
        </Typography>
        <ListItem disablePadding sx={{ mb: 0.7 }}>
          <ListItemButton
            sx={{
              borderRadius: "7px",
              "&:hover": {
                backgroundColor: "primary.dark", // change background color on hover of the button
                "& .MuiListItemIcon-root": {
                  color: "white", // change icon color on hover
                },
                "& .MuiListItemText-primary": {
                  color: "white", // change text color on hover
                },
              },
              // spread operator to apply styles if true, after && excecutes if activeItem is "Overview"
              ...(activeItem === "Overview" && {
                backgroundColor: "primary.dark", // change background color if active
                "& .MuiListItemIcon-root": {
                  color: "white", // change icon color if active
                },
                "& .MuiListItemText-primary": {
                  color: "white", // change text color if active
                },
              }),
            }}
            onClick={() => {
              console.log("Navigate to Overview");
              setActiveItem("Overview");
            }}
          >
            {" "}
            {/* TODO: react router navigation*/}
            <ListItemIcon sx={{ color: "#A6ACB9", minWidth: "33px" }}>
              <SpaceDashboardOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Overview" sx={{ color: "#A6ACB9" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ mb: 0.7 }}>
          <ListItemButton
            sx={{
              borderRadius: "7px",
              "&:hover": {
                backgroundColor: "primary.dark", // change background color on hover of the button
                "& .MuiListItemIcon-root": {
                  color: "white", // change icon color on hover
                },
                "& .MuiListItemText-primary": {
                  color: "white", // change text color on hover
                },
              },
              ...(activeItem === "Analytics" && {
                backgroundColor: "primary.dark", // change background color if active
                "& .MuiListItemIcon-root": {
                  color: "white", // change icon color if active
                },
                "& .MuiListItemText-primary": {
                  color: "white", // change text color if active
                },
              }),
            }}
            onClick={() => {
              console.log("Navigate to Analytics");
              setActiveItem("Analytics");
            }}
          >
            {" "}
            <ListItemIcon sx={{ color: "#A6ACB9", minWidth: "33px" }}>
              <AnalyticsOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Analytics" sx={{ color: "#A6ACB9" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ mb: 0.7 }}>
          <ListItemButton
            sx={{
              borderRadius: "7px",
              "&:hover": {
                backgroundColor: "primary.dark", // change background color on hover of the button
                "& .MuiListItemIcon-root": {
                  color: "white", // change icon color on hover
                },
                "& .MuiListItemText-primary": {
                  color: "white", // change text color on hover
                },
              },
              ...(activeItem === "Deals" && {
                backgroundColor: "primary.dark", // change background color if active
                "& .MuiListItemIcon-root": {
                  color: "white", // change icon color if active
                },
                "& .MuiListItemText-primary": {
                  color: "white", // change text color if active
                },
              }),
            }}
            onClick={() => {
              console.log("Navigate to Deals");
              setActiveItem("Deals");
            }}
          >
            {" "}
            <ListItemIcon sx={{ color: "#A6ACB9", minWidth: "33px" }}>
              <AttachMoney fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Deals" sx={{ color: "#A6ACB9" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ mb: 0.7 }}>
          <ListItemButton
            sx={{
              borderRadius: "7px",
              "&:hover": {
                backgroundColor: "primary.dark", // change background color on hover of the button
                "& .MuiListItemIcon-root": {
                  color: "white", // change icon color on hover
                },
                "& .MuiListItemText-primary": {
                  color: "white", // change text color on hover
                },
              },
              ...(activeItem === "Contacts" && {
                backgroundColor: "primary.dark", // change background color if active
                "& .MuiListItemIcon-root": {
                  color: "white", // change icon color if active
                },
                "& .MuiListItemText-primary": {
                  color: "white", // change text color if active
                },
              }),
            }}
            onClick={() => {
              console.log("Navigate to Contacts");
              setActiveItem("Contacts");
            }}
          >
            {" "}
            <ListItemIcon sx={{ color: "#A6ACB9", minWidth: "33px" }}>
              <PeopleAltOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Contacts" sx={{ color: "#A6ACB9" }} />
          </ListItemButton>
        </ListItem>
      </List>

      {/* Footer List */}
      <List sx={{ padding: 1, paddingLeft: 3, paddingRight: 3 }}>
        <ListItem disablePadding sx={{ mb: 0.7 }}>
          <ListItemButton
            sx={{
              borderRadius: "7px",
              "&:hover": {
                backgroundColor: "primary.dark", // change background color on hover of the button
                "& .MuiListItemIcon-root": {
                  color: "white", // change icon color on hover
                },
                "& .MuiListItemText-primary": {
                  color: "white", // change text color on hover
                },
              },
              ...(activeItem === "Settings" && {
                backgroundColor: "primary.dark", // change background color if active
                "& .MuiListItemIcon-root": {
                  color: "white", // change icon color if active
                },
                "& .MuiListItemText-primary": {
                  color: "white", // change text color if active
                },
              }),
            }}
            onClick={() => {
              console.log("Navigate to Settings");
              setActiveItem("Settings");
            }}
          >
            <ListItemIcon sx={{ color: "#A6ACB9", minWidth: "33px" }}>
              <SettingsOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Settings" sx={{ color: "#A6ACB9" }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default SideBar;
