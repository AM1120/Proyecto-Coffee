import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserSession } from "../../Util/Definitions";

export interface UserState{
    userSession: UserSession | null,
    isLoggedIn: boolean,
}

const initialState:UserState={
    userSession: null,
    isLoggedIn: false
}

const userSlice=createSlice({
    name: 'user',
    initialState:initialState,
    reducers: {
        login: (state:any, action:PayloadAction<UserSession>) => {
            state.userSession=action.payload
            state.isLoggedIn = true;
        },
        logout: (state:any) => {
            state.userSession=null
            state.isLoggedIn = false;
        },
    },
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;