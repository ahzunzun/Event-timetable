import axios from "axios";

export const event = axios.create({
    baseURL: "http://localhost:3000/api/events"
  });

