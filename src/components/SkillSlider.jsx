import { Box, Slider, Stack, Typography, styled } from "@mui/material";
import PropTypes from 'prop-types';

const CustomSlider = styled(Slider)(() => ({
    color: "#F4DFCD",
    marginLeft: 50,
    width: 600,
    ".MuiSlider-rail": {
      width: 0,
    },
    ".MuiSlider-thumb": {
      width: 0,
      height: 0,
    },
  }));
function SkillSlider ({icono,nombre,valor}) {

    return(
        <Box className="boxSlider">
            <Stack direction="row" spacing={2}  alignItems="center">
            <img src={icono} alt="html" className="iconCss" />
            <Typography>{nombre}</Typography>
            </Stack>
        <CustomSlider value={valor} />
      </Box>
    );
}

SkillSlider.propTypes = {
    icono:PropTypes.string,
    nombre:PropTypes.string,
    valor:PropTypes.number
  }


export default SkillSlider;