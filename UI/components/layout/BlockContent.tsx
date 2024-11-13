import { Box, Container } from "@mui/material";
import React from "react";
import Image from "next/image"; // Import the Image component from Next.js
import { CONTENT, CONTENT_2, CONTENT_3 } from "@/public/assets/images";

const BlockContent = () => {
  return (
    <div>
      <div className="flex-container">
        <Box className="content">
          <Container maxWidth="xl">
            <h3 className="text-h1">After Sales With Dealer-X</h3>
            <p className="content-text">
              From muscular hypercars with enough downforce to drive on the
              ceiling, to commanding SUVs which perform like sports cars, Aston
              Martin vehicles stand at the forefront of automotive engineering
              and deliver unrivalled driving experiences which supercharge the
              senses. Explore our range of models below, book a test drive with
              us or customise the car of your dreams today.
            </p>
          </Container>
        </Box>
        <Box className="content-image">
          <Image src={CONTENT} alt="Aston Martin Car" />
        </Box>
      </div>
      <div className="flex-container">
        <Box className="content-image">
          <Image src={CONTENT_2} alt="Aston Martin Car" />
        </Box>
        <Box className="content">
          <Container maxWidth="xl">
            <h3 className="text-h1">Customize an Aston Martin</h3>
            <p className="content-text">
              From muscular hypercars with enough downforce to drive on the
              ceiling, to commanding SUVs which perform like sports cars, Aston
              Martin vehicles stand at the forefront of automotive engineering
              and deliver unrivalled driving experiences which supercharge the
              senses. Explore our range of models below, book a test drive with
              us or customise the car of your dreams today.
            </p>
          </Container>
        </Box>
      </div>
      <div className="block-container">
        <Box className="content">
          <Container maxWidth="xl">
            <h3 className="text-h1">Buying with Us</h3>
            <p className="content-text">
              From muscular hypercars with enough downforce to drive on the
              ceiling, to commanding SUVs which perform like sports cars, Aston
              Martin vehicles stand at the forefront of automotive engineering
              and deliver unrivalled driving experiences which supercharge the
              senses. Explore our range of models below, book a test drive with
              us or customise the car of your dreams today.
            </p>
          </Container>
        </Box>
        <Box className="content-image">
          <Image
            className="image-block"
            src={CONTENT_3}
            alt="Aston Martin Car"
          />
        </Box>
      </div>
    </div>
  );
};

export default BlockContent;
