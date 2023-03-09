import React, {Fragment} from "react";
import { Stack, Typography } from "@mui/material";
import PaperInformation from "../../components/PaperInformation";
import LocationInformation from "../../components/LocationInformation";

const Description = (props) => {
    const { bio } = props.userState;
    return (
        <Fragment>
            <Stack sx={{justifyContent: "center"}}>
                {(!bio) 
                    ? <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography> 
                    : <Typography variant="body1">{bio}</Typography>}
            </Stack>
            <PaperInformation userState={props.userState} />
            <LocationInformation userState={props.userState} />
        </Fragment>
    );
};

export default Description;