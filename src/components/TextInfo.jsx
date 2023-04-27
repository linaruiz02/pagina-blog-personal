import { Box, Grid, Typography } from "@mui/material";
import "./style.css";

function TextInfo() {
  return (
    <Grid mt={10} m={0} container sx={{ position: "relative" }}>
      <Grid item md={6} mt={2}>
        <Box className="elipse1"></Box>

        <Typography variant="h4" mt={15} ml={6} sx={{ fontWeight: "bold" }}>
          !HOLA! Un gusto, Soy:
        </Typography>
        <br />
        <br/>
        <Typography variant="h5" ml={6} sx={{ fontWeight: "bold" }}>
          Lina Alejandra Ruiz
        </Typography>
        <br />
        <br />
        <br/>
        <Typography variant="h6" ml={6}>
          Soy una persona proactiva, organizada, creativa y responsable.
          Apasionada por la tecnología, la innovación y el aprendizaje continúo.
          Soy muy sociable por lo que disfruto mucho a la hora de trabajar en
          equipo.
        </Typography>
      </Grid>

      <Grid item md={6} mt={11}>
        <img
          src="/images/desarrolladora.jpg"
          alt="image"
          className="imgRedonda"
        />
      </Grid>
      <Box className="elipse2"></Box>
      <Box className="elipse3"></Box>
    </Grid>
  );
}

export default TextInfo;
