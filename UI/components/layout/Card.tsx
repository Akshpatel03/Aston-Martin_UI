import { Box, Button, Card, CardActions, CardContent } from "@mui/material";
import React from "react";
import { DBX_707 } from "@/public/assets/images";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import styles from "../../styles/index.module.css";
const CommonCard = () => {
  return (
    <div>
      <Card className="card">
        <CardContent>
          <Box sx={{ position: "relative" as "relative" }}>
            <Image src={DBX_707} alt="Aston Martin Car" />
            <Box className="card-text">
              <Box>New Cars</Box>
            </Box>
          </Box>
        </CardContent>
        <CardActions>
          <Button className="button-explored" variant="contained">
            Explore
          </Button>
          <Button className="button-enquire" variant="outlined">
            Enquire
          </Button>

          <Button className="button-configure">
            Configure <ArrowForwardIcon />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CommonCard;
