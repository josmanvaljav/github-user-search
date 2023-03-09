import { CardMedia, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import PrincipalInformation from "../../components/PrincipalInformation";
import Description from "../Description";

const UserCard = (props) => {
    const { userState } = props;
    // console.log("UserCard | userState", userState);

    return (
        <Grid container
            spacing={2}
            sx={{
                marginTop: "15px",
                marginLeft: "5px"
            }}
        >
            <Grid item xs={3}>
                <CardMedia
                    component="img"
                    alt="Github User"
                    image={userState.avatar_url}
                    sx={{
                        borderRadius: "50%"
                    }}
                />
            </Grid>
            <Grid item xs={9}>
                <Stack
                    direction="column"
                    spacing={1}
                    sx={{margin: "30px"}}
                >
                    <PrincipalInformation userState={userState} />
                    <Description userState={userState} />
                </Stack>
            </Grid>
        </Grid>
    );
};

export default UserCard;