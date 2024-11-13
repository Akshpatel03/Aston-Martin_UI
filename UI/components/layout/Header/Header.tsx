import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import { LOGO_2 } from "@/public/assets/images";
const pages = [
  "New Cars",
  "Pre-owned Cars",
  "Servicing & Repairs",
  "Value My Car",
  "News",
  "Contact",
];

const Header = () => {
  return (
    <AppBar className="appBar">
      {" "}
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: 0,
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
            marginLeft: 4,
          }}
        >
          <Menu
            id="menu-appbar"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={true}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {pages.map((page) => (
              <MenuItem key={page}>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "0.9rem",
                    marginLeft: "30px",
                  }}
                >
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                textTransform: "none",
                fontSize: "0.9rem",
                marginLeft: "30px",
              }}
            >
              {page}
            </Button>
          ))}
          <Box sx={{ display: "flex", alignItems: "center", marginLeft: 2 }}>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>

        <Box
          sx={{ display: "flex", alignItems: "center", marginRight: "40px" }}
        >
          <Image
            src={LOGO_2}
            alt="Logo"
            height={75}
            width={150}
            style={{ marginTop: "2px" }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
