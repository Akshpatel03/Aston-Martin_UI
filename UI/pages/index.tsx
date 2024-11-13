import Header from "@/components/layout/Header/Header";
import { ASTON_MARTIN } from "@/public/assets/images";
import Image from "next/image";
import TabBar from "@/components/layout/Tab";
import ContentModule from "@/components/layout/ContentModule";
import { Box, Container } from "@mui/material";
import BlockContent from "@/components/layout/BlockContent";

const Home = () => {
  return (
    <div>
      <Header></Header>

      <Box sx={{ position: "relative" }}>
        <Image
          src={ASTON_MARTIN}
          alt="Aston Martin Car"
          style={{ width: "100%" }}
        />
        <Box className="image-header">
          <Box className="image-title">New Cars</Box>
          <Box className="image-description">
            Explore the Aston Martin Range
          </Box>
          <Box className="image-text">Explore the Aston Martin Range</Box>
        </Box>
      </Box>

      <div className="image-paragrapg">
        <Container maxWidth="xl">
          <h1 className="text-h1">Intensely Powerful ,rare and addictive.</h1>
          <p className="description-text">
            From muscular hypercars with enough downforce to drive on the
            ceiling, to commanding SUVs which perform like sports cars, Aston
            Martin vehicles stand at the forefront of automotive engineering and
            deliver unrivalled driving experiences which supercharge the senses.
            Explore our range of models below, book a test drive with us or
            customise the car of your dreams today.
          </p>
        </Container>
      </div>
      <div style={{ padding: "20px", backgroundColor: "#f4f4f2" }}>
        <TabBar></TabBar>
        <ContentModule></ContentModule>
        <ContentModule></ContentModule>
        <ContentModule></ContentModule>
        <ContentModule></ContentModule>
        <ContentModule></ContentModule>
        <ContentModule></ContentModule>
      </div>
      <BlockContent></BlockContent>
    </div>
  );
};
export default Home;
