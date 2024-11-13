import { Box, Button, Card, CardActions, CardContent } from "@mui/material";
import React from "react";
import { DBX_707_2 } from "@/public/assets/images";
import Image from "next/image";
import CommonCard from "./Card";
const ContentModule = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", paddingInline: "35px" }}
    >
      <Box sx={{ position: "relative" as "relative", width: "100%" }}>
        <Image className="image" src={DBX_707_2} alt="Aston Martin Car" />
        <Box className="car-header">
          <Box className="car-title">POWER.DRIVEN</Box>
          <Box className="car-description">DBX</Box>
          <Box className="car-text">Explore the Aston Martin Range</Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          alignItems: "center",
          gap: "0 15px",
          gridTemplateColumns: "auto auto auto",
          width: "100%",
        }}
      >
        <CommonCard></CommonCard>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
        <CommonCard></CommonCard>
      </Box>
    </div>
  );
};

export default ContentModule;
