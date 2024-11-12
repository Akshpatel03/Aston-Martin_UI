import Header from "@/components/layout/Header/Header";
import { useRouter } from "next/router";
import Car from "../public/aston-martin-db12.jpg";
import { Box, Container } from "@mui/material";
import Image from "next/image";

const style = {
  position: "absolute" as "absolute",
  top: "80%",
  left: "25%",
  transform: "translate(-50%, -50%)",
  color: "white",
};
// const style1 = {
//   position: "absolute" as "absolute",
//   top: "68%",
//   left: "8%",
//   transform: "translate(-50%, -50%)",
//   color: "white",
//   fontSize: "24px",
// };
// const style2 = {
//   position: "absolute" as "absolute",
//   top: "85%",
//   left: "20%",
//   transform: "translate(-50%, -50%)",
//   color: "white",
//   fontSize: "24px",
// };

const Home = () => {
  const router = useRouter();

  return (
    <div>
      <Header></Header>

      <Box sx={{ position: "relative" }}>
        <Image src={Car} alt="Aston Martin Car" style={{ width: "100%" }} />
        <Box sx={style}>
          <Box sx={{ fontSize: "24px" }}>New Cars</Box>
          <Box
            sx={{
              fontSize: "50px",
              fontWeight: "bold",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          >
            Explore the Aston Martin Range
          </Box>
          <Box sx={{ fontSize: "15px" }}>Explore the Aston Martin Range</Box>
        </Box>
      </Box>

      <div style={{ paddingBlock: "50px" }}>
        <Container maxWidth="xl">
          <h1 style={{ marginBottom: "20px" }}>
            Intensely Powerful ,rare and addictive.
          </h1>
          <p
            style={{
              width: "40%",
              display: "flex",
              flexWrap: "wrap",
              fontWeight: "500",
            }}
          >
            From muscular hypercars with enough downforce to drive on the
            ceiling, to commanding SUVs which perform like sports cars, Aston
            Martin vehicles stand at the forefront of automotive engineering and
            deliver unrivalled driving experiences which supercharge the senses.
            Explore our range of models below, book a test drive with us or
            customise the car of your dreams today.
          </p>
        </Container>
      </div>
    </div>
  );
};
export default Home;
