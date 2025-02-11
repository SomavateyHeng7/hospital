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
  AttachMoney,
  BarChart,
  Menu,
  Logout,
  ReceiptLong,
  LocalPharmacy,
  MedicalServices,
  Brightness4,
  Brightness7,
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
            <Typography variant="h6">Billing Officer</Typography>
          </Box>
          <List>
            {/* Admission Bill */}
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/BillingOfficer/AdmissionBill" passHref>
                <ListItemIcon>
                  <MedicalServices />
                </ListItemIcon>
                <ListItemText primary="Admission Bill" />
              </ListItemButton>
            </ListItem>

            {/* Financial Report */}
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/BillingOfficer/FinancialReport" passHref>
                <ListItemIcon>
                  <BarChart />
                </ListItemIcon>
                <ListItemText primary="Financial Report" />
              </ListItemButton>
            </ListItem>

            {/* Invoice */}
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/BillingOfficer/Invoice" passHref>
                <ListItemIcon>
                  <ReceiptLong />
                </ListItemIcon>
                <ListItemText primary="Invoice" />
              </ListItemButton>
            </ListItem>

            {/* Pharmacy Bill */}
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/BillingOfficer/pharmacyBill" passHref>
                <ListItemIcon>
                  <LocalPharmacy />
                </ListItemIcon>
                <ListItemText primary="Pharmacy Bill" />
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
  const [mode, setMode] = useState<"light" | "dark">("light");

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
