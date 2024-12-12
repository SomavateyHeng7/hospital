"use client";

import React, { useState, useContext } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  Box,
  ListItemButton,
  Button,
  useTheme,
} from "@mui/material";
import {
  Home,
  People,
  LocalHospital,
  Event,
  Inventory,
  Menu,
  AttachMoney,
  Science,
  MedicalServices,
  BarChart,
  Business,
  AccountBalance,
  Brightness4,
  Brightness7,
  Logout,
} from "@mui/icons-material";
import Link from "next/link";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Theme Context for Light and Dark Mode
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleSignOut = () => {
    // Add your sign-out logic here
    console.log("Sign out");
  };

  return (
    <>
      <IconButton onClick={toggleDrawer}>
        <Menu />
      </IconButton>
      <Drawer
        variant="temporary"
        open={open}
        onClose={toggleDrawer}
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            bgcolor: theme.palette.background.default,
            color: theme.palette.text.primary,
          },
        }}
      >
        <div>
          <Box sx={{ display: "flex", alignItems: "center", padding: 2 }}>
            <img
              src="/images/hospital.png"
              alt="Hospital Logo"
              style={{ width: 40, height: 40, marginRight: 10 }}
            />
            <Typography variant="h6">Hospital Name</Typography>
          </Box>
          <List>
            {/* Patient Management */}
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/admin/patients" passHref>
                <ListItemIcon>
                  <People />
                </ListItemIcon>
                <ListItemText primary="Patient Management" />
              </ListItemButton>
            </ListItem>

            {/* EHR (Electronic Health Records) */}
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/admin/ehr" passHref>
                <ListItemIcon>
                  <MedicalServices />
                </ListItemIcon>
                <ListItemText primary="EHR" />
              </ListItemButton>
            </ListItem>

            {/* Appointment Scheduling */}
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/appointments" passHref>
                <ListItemIcon>
                  <Event />
                </ListItemIcon>
                <ListItemText primary="Appointment Scheduling" />
              </ListItemButton>
            </ListItem>

            {/* Billing & Invoicing */}
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/admin/Finance" passHref>
                <ListItemIcon>
                  <AttachMoney />
                </ListItemIcon>
                <ListItemText primary="Billing & Invoicing" />
              </ListItemButton>
            </ListItem>

            {/* Pharmacy Management */}
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/pharmacy" passHref>
                <ListItemIcon>
                  <Inventory />
                </ListItemIcon>
                <ListItemText primary="Pharmacy Management" />
              </ListItemButton>
            </ListItem>

            {/* Laboratory Management */}
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/laboratory" passHref>
                <ListItemIcon>
                  <Science />
                </ListItemIcon>
                <ListItemText primary="Laboratory Management" />
              </ListItemButton>
            </ListItem>

            {/* Inventory & Supply Chain */}
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/inventory" passHref>
                <ListItemIcon>
                  <Inventory />
                </ListItemIcon>
                <ListItemText primary="Inventory & Supply Chain" />
              </ListItemButton>
            </ListItem>

            {/* Radiology & Imaging */}
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/radiology" passHref>
                <ListItemIcon>
                  <LocalHospital />
                </ListItemIcon>
                <ListItemText primary="Radiology & Imaging" />
              </ListItemButton>
            </ListItem>

            {/* Staff Management & HR */}
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/staff-management" passHref>
                <ListItemIcon>
                  <Business />
                </ListItemIcon>
                <ListItemText primary="Staff Management & HR" />
              </ListItemButton>
            </ListItem>

            {/* Reporting & Analytics */}
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/reporting" passHref>
                <ListItemIcon>
                  <BarChart />
                </ListItemIcon>
                <ListItemText primary="Reporting & Analytics" />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
        <Box sx={{ padding: 2 }}>
          <Button
            variant="contained"
            color="error"
            startIcon={<Logout />}
            fullWidth
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
          <IconButton
            sx={{ mt: 2 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Drawer>
    </>
  );
};

// Theme Toggle Wrapper Component
export default function SidebarWrapper() {
  const [mode, setMode] = useState("light");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Sidebar />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
