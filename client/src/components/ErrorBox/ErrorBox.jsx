import { Box, Typography } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export const ErrorBox = ({errorMessage}) => {
    return (
        <Box style={{ width: "80vw", height: "70vh", border:'solid 4px var(--primary)',boxShadow:'black 1px 2px 20px 0px', display: "flex", flexDirection: 'column', justifyContent: "center", padding:3, textAlign: 'center', background: 'var(--four)', borderRadius: 10, alignItems: "center" }}>

            <ErrorOutlineIcon style={{ color: 'var(--primary)', fontSize: 100 }} />
            <Typography style={{ color: 'var(--primary)', fontSize: 25, fontWeight: 500 }}>{errorMessage}</Typography>
        </Box>
    )
}
