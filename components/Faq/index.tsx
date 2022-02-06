import React from "react";
import Typography from "@mui/material/Typography";
import BorderBox from "../BorderBox";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import CustomAccord from "./CustomAccor";

import { IfaqMateri, faqMateri } from "./materi";

interface IMateriAccor extends IfaqMateri {
  expanded: string | false;
  index: number;
  setExpanded: React.Dispatch<React.SetStateAction<string | false>>;
}

const MateriAccor: React.FC<IMateriAccor> = ({
  titleFaq,
  descFaq,
  index,
  expanded,
  setExpanded,
}) => {
  const newDesc = descFaq.split("\n").map((str, index) => (
    <Typography
      key={index}
      display="block"
      paragraph
      variant="h5"
      fontWeight="regular"
    >
      {str}
    </Typography>
  ));

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <CustomAccord
      square
      expanded={expanded === `panel${index}`}
      onChange={handleChange(`panel${index}`)}
    >
      <AccordionSummary>
        <Typography variant="h5" component="h3">
          {titleFaq}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          borderTop: "1px solid black",
        }}
      >
        {newDesc}
      </AccordionDetails>
    </CustomAccord>
  );
};

const Faq = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  return (
    <BorderBox>
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography
          variant="h3"
          component="h2"
          aria-label="sub judul"
          color="common.white"
          fontWeight={500}
          align="center"
          sx={{
            py: 2,
            marginBottom: 4,
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Stack spacing={1}>
          {faqMateri.map((materi, index) => {
            return (
              <MateriAccor
                key={index}
                expanded={expanded}
                setExpanded={setExpanded}
                titleFaq={materi.titleFaq}
                descFaq={materi.descFaq}
                index={index}
              />
            );
          })}
        </Stack>
      </Container>
    </BorderBox>
  );
};

export default Faq;
