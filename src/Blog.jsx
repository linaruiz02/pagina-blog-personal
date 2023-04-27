import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import TextInfo from "./components/TextInfo";
import Experience from "./components/Experience";


function Blog () {
    return(
        <Box sx={{overflow:"hidden"}}>
        <Navbar />
        <TextInfo />
        <Skills />
        <Experience/>
        </Box>
    );
}

export default Blog;