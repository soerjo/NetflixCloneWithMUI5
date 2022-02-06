import React from "react";
import Accordion from "@mui/material/Accordion";

import { styled } from "@mui/material/styles";

const CustomAccor = styled(Accordion)(({ theme }) => ({
  background: theme.palette.grey[900],
  color: theme.palette.common.white,
}));

export default CustomAccor;
