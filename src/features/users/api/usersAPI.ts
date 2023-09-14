import {User, UtilResponse} from "common/types/apiTypes";
import {instance} from "common/api/instance";

type Params = {
    count?: number
    page?: number
    term?: string
}

export const usersAPI = {
    users(params: Params) {
        return instance.get<UtilResponse<User[]>>(`users`, {params})
    }
}

