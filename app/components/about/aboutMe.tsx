import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles";
import { AboutMeData } from "@/app/jsonData/data";
const AboutMe = () => {
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
          <Typography fontSize={"36px"}>About Me:</Typography>
          {AboutMeData.map((item: any) => {
            return <Typography sx={{ color: "grey" }}>{item.name}</Typography>;
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutMe;
