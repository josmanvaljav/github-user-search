import { Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const PaperInformation = (props) => {
    const { 
        public_repos,
        followers,
        following
    } = props.userState;

    return (
        <Paper elevation={3}>
            <Stack 
                spacing={3} 
                direction="row"
                sx={{
                    justifyContent: "space-evenly",
                    margin: "20px"
                }}
            >
                <Stack>
                    <Typography variant="h5">Repos</Typography>
                    <Typography variant="h6">{public_repos}</Typography>
                </Stack>
                <Stack>
                    <Typography variant="h5">Followers</Typography>
                    <Typography variant="h6">{followers}</Typography>
                </Stack>
                <Stack>
                    <Typography variant="h5">following</Typography>
                    <Typography variant="h6">{following}</Typography>
                </Stack>
            </Stack>
        </Paper>
    );
};

export default PaperInformation;