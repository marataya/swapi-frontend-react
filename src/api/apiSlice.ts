import {logOut, setCredentials} from "../auth/authSlice.ts";
import {fetchBaseQuery} from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost://3500'
    
})