import React, { useState } from "react";
import { Stack, TextField, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Searcher = (props) => {
    const {
        setInputUser
    } = props;

    const [valueInput, setValueInput] = useState("");

    const onSearchValueChange = (event) => {
        setValueInput(event.target.value);
    };

    const handleSubmit = () => {
        setInputUser(valueInput);
    };

    return(
        <Stack
            direction="row"
            sx={{
                marginTop: "30px",
                width: "80%"
            }}
        >
            <TextField
                id="outlined-basic" label="Github user" variant="outlined"
                placeholder="Write a Github user" size="small"
                value={valueInput}
                onChange={event => onSearchValueChange(event)}
                sx={{
                    width: "90%"
                }}
            ></TextField>
            <IconButton
                size="small"
                onClick={handleSubmit}
                sx={{
                    left: "-45px"
                }}
            >
                <SearchIcon />
            </IconButton>
        </Stack>
    );
};

export default Searcher;