import React from "react";
import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";

const ImageComp01: React.FC = () => {
  return (
    <Box position="relative">
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Image
          src="/_image/tv.png"
          alt="tv"
          width={640}
          height={480}
          layout="responsive"
        />
      </Box>
      <video
        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
        autoPlay
        playsInline
        muted
        loop
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          maxWidth: "74%",
          top: "48%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></video>
    </Box>
  );
};

const ImageComp02: React.FC = () => {
  return (
    <Box position="relative">
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Image
          src="/_image/mobile-0819.jpg"
          alt="tv"
          width={640}
          height={480}
          layout="responsive"
        />
      </Box>
      <Grid
        container
        sx={{
          position: "absolute",
          bgcolor: "common.black",
          width: "75%",
          maxHeight: "100px",
          overflow: "hidden",
          padding: ".5rem",
          borderRadius: ".5rem",
          border: "2px solid rgba(255,255,255,0.2)",
          zIndex: 2,
          color: "white",
          top: "85%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <Grid item xs={2.5}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              maxWidth: "60%",
            }}
          >
            <Image
              src="/_image/boxshot.png"
              alt="tv"
              width={150}
              height={210}
              layout="responsive"
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={7}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <Box>
            <Typography variant="h6">Stranger Things</Typography>
            <Typography color="blue">Downloading...</Typography>
          </Box>
        </Grid>
        <Grid item xs={2.5}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              maxWidth: "90%",
            }}
          >
            <Image
              src="/_icon/download-icon.gif"
              alt="tv"
              width={190}
              height={190}
              layout="responsive"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const ImageComp03: React.FC = () => {
  return (
    <Box position="relative">
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Image
          src="/_image/device-pile-id.png"
          alt="tv"
          width={640}
          height={480}
          layout="responsive"
        />
      </Box>
      <video
        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-id.m4v"
        autoPlay
        playsInline
        muted
        loop
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          maxWidth: "60%",
          top: "34%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></video>
    </Box>
  );
};

const ImageComp04: React.FC = () => {
  return (
    <Box>
      <Image
        src="/_image/anime.png"
        alt="tv"
        width={640}
        height={480}
        layout="responsive"
      />
    </Box>
  );
};

export { ImageComp01, ImageComp02, ImageComp03, ImageComp04 };
