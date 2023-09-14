import {createSlice} from "@reduxjs/toolkit";
import {createAppAsyncThunk} from "common/utils/create-app-async-thunk";
import {User, UtilResponse} from "common/types/apiTypes";
import {Params} from "react-router-dom";
import {usersAPI} from "features/users/api/usersAPI";
import {followAPI} from "features/users/api/followAPI";
import {ResultCode} from "common/enums/enums";

const getUsers = createAppAsyncThunk<UtilResponse<User[]>, Params>("users/getUsers", async (arg, thunkAPI) => {
    const res = await usersAPI.users(arg)
    return res.data
})

const followUser = createAppAsyncThunk<{userId:number}, number>("users/follow", async(userId, thunkAPI)=>{
    const {rejectWithValue} = thunkAPI
    const res = await followAPI.follow(userId)
    if(res.data.resultCode === ResultCode.Success){
       return {userId}
    } else {
        return rejectWithValue({data:res.data})
    }
})

const unFollowUser = createAppAsyncThunk<{userId:number}, number>("users/unfollow", async(userId, thunkAPI)=>{
    const {rejectWithValue} = thunkAPI
    const res = await followAPI.unFollow(userId)
    if(res.data.resultCode === ResultCode.Success){
        return {userId}
    } else {
        return rejectWithValue({data:res.data})
    }
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
            .addCase(getUsers.fulfilled, (state, action)=>{
                state.users = action.payload.items
            })
            .addCase(followUser.fulfilled, (state, action)=>{
                const user = state.users.find(el =>  el.id === action.payload.userId )
                if(user){
                    user.followed = true
                }
            })
            .addCase(unFollowUser.fulfilled, (state, action)=>{
                const user = state.users.find(el =>  el.id === action.payload.userId )
                if(user){
                    user.followed = false
                }
            })
    }
})
export const usersSlice = slice.reducer
export const usersThunk = { getUsers, followUser, unFollowUser }