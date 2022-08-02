import { UserI } from "./user.model";

export interface UsersStateI {
    usersList: UserI[] | null,
    isLoading: boolean,
    errors: string | null
}