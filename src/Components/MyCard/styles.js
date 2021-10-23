import {makeStyles} from "@mui/styles";

export default makeStyles((theme) => ({
    card: {
        transition: "ease-in-out all .5s",
        '&:hover':{
            transform: "scale(1.05)",
            boxShadow: "0px 4px 2px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 2px 6px 0px rgb(0 0 0 / 12%)",
            cursor: "Pointer"
        }
    }
}));