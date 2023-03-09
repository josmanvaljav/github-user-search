import { urlAPI } from "../constants";

const getGithubUser = async (user) => {
    // console.log("getGithubUser | urlAPI + user", urlAPI + user);
    const response = await fetch(urlAPI + user, {method: "GET"});
    // console.log("getGithubUser | response", response);
    const payload = response.json();
    return payload;
};

export default getGithubUser;