import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "./styles";
import { ContactMeData } from "@/app/jsonData/data";
import Image from "next/image";
const ContactMe = () => {
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
          <Grid item xs={12}>
            <Typography fontSize={"36px"}>Contact Me:</Typography>
          </Grid>
          <Grid item xs={12}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212.6862884502734!2d74.27105757873504!3d31.46971941278288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919036dd122b5ed%3A0x103db0011b55805a!2sPixel%20Edge!5e0!3m2!1sen!2s!4v1689504053985!5m2!1sen!2s"
              width="100%"
              height="200px"
              frameBorder={0}
              loading="lazy"
            />
          </Grid>
          {ContactMeData.map((item: any) => {
            return (
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingRight: "20px",
                  paddingTop: { xs: "10px" },
                }}
              >
                <Image src={item.logo} alt="logo" height={30} width={30} />
                <Typography sx={{ color: "grey", paddingLeft: "10px" }}>
                  {item.name}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactMe;
