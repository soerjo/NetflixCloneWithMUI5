import type { NextPage } from "next";
import Header from "../components/Header";
import Feature from "../components/Feature";
import Faq from "../components/Faq";
import ModalLogin from "../components/ModalLogin";
import { Box } from "@mui/material";
import CustomContext from "../context/ContextModal";

const Home: NextPage = () => {
  return (
    <Box position="relative">
      <CustomContext>
        <Header />
        <Feature />
        <Faq />
        <ModalLogin />
      </CustomContext>
    </Box>
  );
};

export default Home;
