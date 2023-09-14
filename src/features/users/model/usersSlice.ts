import {createSlice} from "@reduxjs/toolkit";
import {createAppAsyncThunk} from "common/utils/create-app-async-thunk";
import {User, UtilResponse} from "common/types/apiTypes";
import {Params} from "react-router-dom";
import {usersAPI} from "features/users/api/usersAPI";

const setUsers = createAppAsyncThunk<UtilResponse<User[]>, Params>("user/getUsers", async (arg, thunkAPI) => {
    const res = await usersAPI.users(arg)
    return res.data
})

const slice = createSlice({
    name: "users",
    initialState: {
        users: [] as User[],
        totalCount: 0,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(setUsers.fulfilled, (state, action)=>{
                state.users = action.payload.items
            })
    }
})
export const usersSlice = slice.reducer
export const usersThunk = { setUsers }