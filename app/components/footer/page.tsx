"use client";
import { Box, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles";
import { FooterData } from "@/app/jsonData/data";
import Link from "next/link";

const Footer = () => {
  return (
    <Box sx={styles.MainBox}>
      <Toolbar>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={styles.MainGrid}
        >
          <Grid item xs={12} sm={12} md={12} lg={6} sx={styles.typoData}>
            {FooterData.map((data: any) => {
              return (
                <Link
                  href={data.link}
                  target="blank"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <Typography>{data.name}</Typography>
                </Link>
              );
            })}
          </Grid>
        </Grid>
      </Toolbar>
    </Box>
  );
};

export default Footer;
