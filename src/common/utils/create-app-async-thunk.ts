import { AppDispatch, AppRootState } from "app/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {BaseResponse} from "common/types/apiTypes";

/**
 Эта функция предназначена для того, чтобы избавиться от дублирования кода по созданию типов в санке
 */
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: AppRootState
    dispatch: AppDispatch
    rejectValue: RejectValue
}>()

export type RejectValue = {
    data: BaseResponse
    showGlobalError?: boolean
}