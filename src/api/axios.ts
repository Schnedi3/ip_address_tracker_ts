import axios from "axios";

const baseURL = "https://ipapi.co";
const customAxios = axios.create({ baseURL });

export default customAxios;
