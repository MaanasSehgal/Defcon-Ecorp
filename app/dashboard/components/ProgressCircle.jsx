import {Box, useTheme} from "@mui/material";
import {tokens} from "../../theme";
import "./progressCircle.css";

const ProgressCircle = ({offset, size = "40"}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box
            className="progress-circle"
            sx={{
                animationDelay: `${offset}s`,
                borderRadius: "50%",
                width: `${size}px`,
                height: `${size}px`,
                transition: "background 2s linear",
            }}
        />
    );
};

export default ProgressCircle;
