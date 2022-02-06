import React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { SxProps } from "@mui/material";
import { ModalContext } from "../../context/ContextModal";

const selectProps: SxProps = {
  border: "solid 2px white",
  width: "100%",
  color: "common.white",
  "& .MuiSelect-icon": {
    color: "white",
  },
  "& 	.MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
};

const AppBarBanner = () => {
  const [language, setlanguage] = React.useState("English");
  const { setModalOpen } = React.useContext(ModalContext);

  const handleChange = () => setModalOpen(true);

  return (
    <AppBar
      position="absolute"
      aria-label="menu"
      color="transparent"
      elevation={0}
      sx={{
        padding: 1,
      }}
    >
      <Toolbar>
        <Grid container>
          <Grid item xs={9} sm={7} md={9}>
            <IconButton>
              <Image
                src="/_icon/logoNetflix.png"
                alt="icon Netflix"
                height="35px"
                width="100%"
              />
            </IconButton>
          </Grid>
          <Grid
            item
            xs={3}
            sm={5}
            md={3}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid
              item
              sm={5}
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                },
                mx: 2,
              }}
            >
              <Select
                labelId="language"
                id="language"
                variant="outlined"
                size="small"
                sx={selectProps}
                value={language}
                onChange={(e) => setlanguage(e.target.value as string)}
              >
                <MenuItem value={"Indonesia"}>Bahasa</MenuItem>
                <MenuItem value={"English"}>English</MenuItem>
              </Select>
            </Grid>
            <Grid
              item
              xs={12}
              sm={7}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                variant="contained"
                fullWidth
                sx={{
                  width: {
                    sm: "80%",
                    md: "100%",
                  },
                }}
                onClick={handleChange}
              >
                SIGN IN
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarBanner;
