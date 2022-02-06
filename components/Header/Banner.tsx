import React from "react";
import Image from "next/image";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { FiSearch } from "react-icons/fi";
import { SxProps } from "@mui/material";

const boxStyle: SxProps = {
  position: "relative",
  height: 640,
  display: "flex",
  alignItems: "center",
  "&::after": {
    position: "absolute",
    content: '""',
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    background: `rgba(0,0,0,0.3)`,
    backgroundImage: `linear-gradient(
          to bottom,
          rgba(0,0,0,0.8) 0,
          rgba(0,0,0,0) 20%,
          rgba(0,0,0,0) 80%,
          rgba(0,0,0,0) 90%,
          rgba(0,0,0,0.8) 100%
  
      )
      `,
  },
};

const Banner = () => {
  return (
    <Box sx={boxStyle}>
      <Image
        priority
        src="/_image/bgNetflix.png"
        layout="fill"
        objectFit="cover"
        alt="background netflix"
      />
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            padding: "0 30px",
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            color="white"
            fontWeight={600}
            textAlign={"center"}
          >
            Unlimited movies, TV shows, and more.
          </Typography>
          <Typography
            variant="h6"
            component="h2"
            color="white"
            textAlign={"center"}
          >
            Watch anywhere. Cancel anytime.
          </Typography>
          <Typography
            variant="body2"
            component="p"
            color="white"
            textAlign={"center"}
            sx={{
              my: 3,
            }}
          >
            Ready to watch? Enter your email to create or restart your
            membership.
          </Typography>

          <Grid container>
            <Grid item xs={9}>
              <TextField
                fullWidth
                variant="filled"
                label="Search Film"
                sx={{
                  bgcolor: "white",
                }}
              />
            </Grid>
            <Grid item xs>
              <Button
                fullWidth
                disableElevation
                variant="contained"
                size="large"
                sx={{
                  height: "100%",
                  borderRadius: 0,
                }}
              >
                <span
                  style={{
                    position: "relative",
                    left: -7,
                  }}
                >
                  Search
                  <span>
                    <FiSearch
                      style={{
                        position: "absolute",
                        fontSize: "1.5rem",
                        marginLeft: ".5rem",
                      }}
                    />
                  </span>
                </span>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
