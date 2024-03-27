import {Box, Typography, useTheme} from "@mui/material";
import {tokens} from "../../theme";
import ProgressCircle from "./ProgressCircle";
import AnimatedNumber from "react-awesome-animated-number";

const StatBox = ({title, subtitle, icon, progress, increase, offset}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box width="100%" m="0 30px">
            <Box display="flex" justifyContent="space-between">
                <Box display="flex" className="items-center justify-center gap-3">
                    {icon}
                    <Typography variant="h4" fontWeight="bold" sx={{color: colors.greenAccent[500]}}>
                        <AnimatedNumber value={title} size={25} hasComma={true} duration={2000} />
                    </Typography>
                </Box>
                <Box className="p-5">
                    <ProgressCircle offset={offset} progress={progress} />
                </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" mt="2px">
                <Typography variant="h6" sx={{color: colors.greenAccent[500]}}>
                    {subtitle}
                </Typography>
                <Typography variant="h5" fontStyle="italic" sx={{color: colors.greenAccent[600]}} className="mx-3">
                    {increase}
                </Typography>
            </Box>
        </Box>
    );
};

export default StatBox;
