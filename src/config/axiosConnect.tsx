import axios from "axios";

export const api = axios.create({
    baseURL:"https://68911037944bf437b598258a.mockapi.io/api",
    headers:{
        "Content-Type":"application/json"
    }
})