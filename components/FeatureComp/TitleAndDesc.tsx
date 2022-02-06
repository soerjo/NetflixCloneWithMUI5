import React from "react";
import Typography from "@mui/material/Typography";

const TitleAndDesc = ({
  textTitle,
  desc,
}: {
  textTitle: string;
  desc: string;
}) => {
  return (
    <>
      <Typography
        variant="h3"
        component="h2"
        color="white"
        fontWeight={500}
        sx={{
          textAlign: {
            xs: "center",
            md: "left",
          },
        }}
        gutterBottom
      >
        {textTitle}
      </Typography>
      <Typography
        variant="h5"
        component="h3"
        color="white"
        sx={{
          textAlign: {
            xs: "center",
            md: "left",
          },
        }}
      >
        {desc}
      </Typography>
    </>
  );
};

export default TitleAndDesc;
