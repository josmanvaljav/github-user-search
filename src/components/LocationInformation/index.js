import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';


const LocationInformation = (props) => {
    const { 
        location,
        twitter_username,
        blog,
        company
    } = props.userState;

    return (
        <Grid container spacing={2} sx={{marginTop: "15px"}}>
            <Grid item xs={6}>
                <Stack direction="row" spacing={2}>
                    <LocationOnIcon />
                    {(!location) 
                        ? <Typography>Not available</Typography>
                        : <Typography>{location}</Typography>}
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack direction="row" spacing={2}>
                    <TwitterIcon />
                    {(!twitter_username) 
                        ? <Typography>Not available</Typography>
                        : <Typography>{twitter_username}</Typography>}
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack direction="row" spacing={2}>
                    <LanguageIcon />
                    {(!blog) 
                        ? <Typography>Not available</Typography>
                        : <a target="_blank" href={blog}><Typography>{blog}</Typography></a>}
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack direction="row" spacing={2}>
                    <BusinessIcon />
                    {(!company) 
                        ? <Typography>Not available</Typography>
                        : <Typography>{company}</Typography>}
                </Stack>
            </Grid>
        </Grid>
    );
};

export default LocationInformation;