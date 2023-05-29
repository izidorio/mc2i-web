import axios from "axios";
import { cookies } from "@/services/cookies";

export const api = axios.create({
  baseURL: process.env.BASE_URL,
});

const token = cookies.get("token");
if (token) {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
}
