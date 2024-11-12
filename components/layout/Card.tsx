import { Box, Button, Card, CardActions, CardContent } from "@mui/material";
import React from "react";
import Car from "../../public/DBX707.png";
import Image from "next/image";

const CommonCard = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <Box>
            <Image src={Car} alt="Aston Martin Car" style={{ width: "100%" }} />
          </Box>
        </CardContent>
        <CardActions>
          <Button size="small"></Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CommonCard;
