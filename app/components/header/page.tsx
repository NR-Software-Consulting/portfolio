"use client";
import React from "react";
import { styles } from "./styles";
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { HeaderData } from "@/app/jsonData/data";
import ResponsiveHeader from "./responsiveHeader";
const Header = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar sx={styles.Head}>
      <Toolbar>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{ justifyContent: "flex-end" }}
        >
          {isMatch ? (
            <ResponsiveHeader />
          ) : (
            <Grid item xs={12} sm={7} md={6} lg={5} sx={styles.headData}>
              {HeaderData.map((item: any, id: any) => {
                return (
                  <Typography key={id} fontSize={"14px"}>
                    {item.name}
                  </Typography>
                );
              })}
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
