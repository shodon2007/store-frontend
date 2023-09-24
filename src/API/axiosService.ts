import axios from "axios";
import { URL } from "../consts/consts";

const defaultAxios = axios.create({
  baseURL: URL,
})
export default defaultAxios