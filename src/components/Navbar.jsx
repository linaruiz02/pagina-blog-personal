import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";


const CustomButton = styled(Button)(() => ({
  color: "#000000",
  textTransform: "capitalize",
  fontFamily:"Poppins"
}));

function Navbar() {
  return (
    <AppBar
      sx={{
        backgroundColor: "#C7EBB3",
        boxShadow: 0,
        borderRadius: "0 0 15px 15px",
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: "#000000" }}>
          Sobre mi
        </Typography>
        <CustomButton>Habilidades</CustomButton>
        <CustomButton>Formación</CustomButton>
        <CustomButton>Experiencia</CustomButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
