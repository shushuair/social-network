import {instance} from "common/api/instance";
import {Dialogs} from "common/types/apiTypes";


export const dialogsAPI = {
    getAllDialogs() {
        return instance.get<Dialogs[]>(`dialogs`)
    }
}