import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles";
import Image from "next/image";
import BannerImage from "../../../public/picture.png";
import { ExpertiesData } from "@/app/jsonData/data";
const MainBanner = () => {
  return (
    <Box sx={styles.MainBox}>
      <Container>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={styles.MainGrid}
        >
          <Grid
            container
            item
            xs={12}
            sm={12}
            md={12}
            lg={5}
            sx={{ justifyContent: "center" }}
          >
            <Image
              src={BannerImage}
              alt="Banner Image"
              style={styles.ImageSize}
            />
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={12}
            md={12}
            lg={7}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography sx={styles.Typo}>
              React Js / Next Js Developer
            </Typography>
            <Typography fontSize={"38px"} fontWeight={800}>
              Raza Mughal
            </Typography>
            <Typography sx={styles.Typo}>
              As a front-end developer with two years of experience in React &
              Next Js, I have an excellent command of HTML, CSS, Bootstrap,
              Material UI, and JavaScript which has enabled me to build
              responsive web applications optimized for multiple platforms,
              including mobile devices...{" "}
              <span style={{ color: "White", cursor: "pointer" }}>
                For More
              </span>
            </Typography>
            <Typography>Experties:</Typography>
            <Grid sx={{ display: "flex", flexWrap: "wrap" }}>
              {ExpertiesData.map((item: any) => {
                return (
                  <Typography sx={styles.expertiesList}>
                    {item.name} |{" "}
                  </Typography>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MainBanner;
