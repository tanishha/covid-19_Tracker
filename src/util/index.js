import axios from "axios";
const url = process.env.REACT_APP_URL;
const http = axios.create({
    baseURL: url,
    responseType: "json",
});

function GET(url) {
    return http.get(url);
}
// eslint-disable-next-line
export default {
    GET,
};