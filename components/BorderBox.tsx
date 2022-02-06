import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const BorderBox = styled(Box)(({ theme }) => ({
  borderBottom: `.5rem solid ${grey[900]}`,
  background: "black",
}));

export default BorderBox;
