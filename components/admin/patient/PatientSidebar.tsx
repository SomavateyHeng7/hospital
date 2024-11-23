"use client";

import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  Box,
  AppBar,
  Toolbar,
  Divider,
  ListItemButton,
} from "@mui/material";
import { Home, History, EventNote, Menu } from "@mui/icons-material";
import Link from "next/link";

const PatientSidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const drawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <Typography variant="h6" sx={{ p: 2 }}>
        Patient Dashboard
      </Typography>
      <Divider />
      <List>
        <Link href="/" passHref>
          <ListItemButton component="a">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </Link>
        <Link href="/patients/patientHistory" passHref>
          <ListItemButton component="a">
            <ListItemIcon>
              <History />
            </ListItemIcon>
            <ListItemText primary="Patient History" />
          </ListItemButton>
        </Link>
        <Link href="/patients/patientAppointments" passHref>
          <ListItemButton component="a">
            <ListItemIcon>
              <EventNote />
            </ListItemIcon>
            <ListItemText primary="Appointments" />
          </ListItemButton>
        </Link>
      </List>
    </Box>
  );

  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        {drawerContent}
      </Drawer>
    </div>
  );
};

export default PatientSidebar;