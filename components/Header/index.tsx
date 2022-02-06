import React from "react";
import Banner from "./Banner";
import AppBarBanner from "./AppBarBanner";

import Box from "@mui/material/Box";
import BorderBox from "../BorderBox";

const Header = () => {
  return (
    <BorderBox>
      <Box>
        <AppBarBanner />
        <Banner />
      </Box>
    </BorderBox>
  );
};

export default Header;
