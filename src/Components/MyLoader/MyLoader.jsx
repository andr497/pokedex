import {Backdrop} from "@mui/material";
import Lottie from 'react-lottie';
import animationData from "../../Assets/json/loader.json";

const MyLoader = (props) => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return(
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={props.open}
            >
                <Lottie
                    options={defaultOptions}
                    width={200}
                    height={200}
                />
            </Backdrop>
        </div>
    );
}

export default MyLoader;