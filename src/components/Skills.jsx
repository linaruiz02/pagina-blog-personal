import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./style.css";
import SkillSlider from "./SkillSlider";
import { arraySkills } from "../core/helpers/arraySkills";

function Skills() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box className="elipse4"></Box>
      </Box>
      <Card className="cardImage">
        <CardMedia>
          <img src="/images/image-card.png" alt="image" className="imgCard" />
        </CardMedia>
      </Card>
      <Card className="cardSkills">
        <CardContent px={4}>
          <Typography
            mt={3}
            variant="h6"
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            HABILIDADES
          </Typography>
          {arraySkills.map((skills) => (
            <Box  key={skills.id} >
              <SkillSlider
                icono={skills.icono}
                nombre={skills.nombre}
                valor={skills.valor}
              />
            </Box>
          ))}
        </CardContent>
        <img src="/images/img-react.png" alt="react" className="imgReact" />
      </Card>
    </>
  );
}

export default Skills;
