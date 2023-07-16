import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles";
import { SkillsData } from "@/app/jsonData/data";
import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {
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
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography fontSize={"28px"}>Skills:</Typography>
          </Grid>
          {SkillsData.map((item: any) => {
            return (
              <Grid container item xs={12} sx={{ display: "flex" }}>
                <Grid item xs={1.5}>
                  <Typography sx={{ color: "grey" }}>{item.name}</Typography>
                </Grid>
                <Grid item xs={9} width={item.rating}>
                  <ProgressBar
                    completed={item.rating}
                    completedClassName="barCompleted"
                    maxCompleted={item.rating}
                    labelClassName="label"
                  />
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
