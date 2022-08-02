import { UserI } from "src/app/modules/users/models/user.model";
import { UsersStateI } from "src/app/modules/users/models/users-state.model";

export interface AppStateI {
    users: UsersStateI
}