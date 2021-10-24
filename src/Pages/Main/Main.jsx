import {Container} from "@mui/material";
import MiniDrawer from "../../Components/MiniDrawer";

const Main = () => {
    return(
        <MiniDrawer>
            <Container fixed>
                <h1>Main Page - Welcome</h1>
            </Container>
        </MiniDrawer>
    );
}

export default Main;