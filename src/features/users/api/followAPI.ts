import { BaseResponse } from "common/types/apiTypes"
import {instance} from "common/api/instance";

export const followAPI = {
    follow(userId: number) {
        return instance.post<BaseResponse>(`follow/${userId}`)
    },
    unFollow(userId: number) {
        return instance.delete<BaseResponse>(`follow/${userId}`)
    }
}


