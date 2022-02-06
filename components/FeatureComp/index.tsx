import React from "react";
import BorderBox from "../BorderBox";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import TitleAndDesc from "./TitleAndDesc";
import { IfeatureList } from "../Feature/listFeature";

interface IFeaturePorps extends IfeatureList {
  index: number;
}

const FeatureComp: React.FC<IFeaturePorps> = ({
  desc,
  title,
  imageSrc,
  index,
  CompPendukung,
}) => {
  return (
    <BorderBox>
      <Container
        maxWidth="lg"
        sx={{
          padding: "70px 50px",
        }}
      >
        <Grid
          container
          alignItems="center"
          columnSpacing={6}
          direction={`${index % 2 ? "row-reverse" : "row"}`}
        >
          <Grid item xs={12} md={6}>
            <TitleAndDesc textTitle={title} desc={desc} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              {/* {imageSrc && <ImageComp imageSrc={imageSrc} />} */}
              {CompPendukung}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </BorderBox>
  );
};

export default FeatureComp;
