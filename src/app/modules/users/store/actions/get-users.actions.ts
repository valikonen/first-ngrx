import { createAction, props } from "@ngrx/store";
import { UserI } from "../../models/user.model";
import { UsersActionTypes } from "../users.action-types";

export const getUsersList = createAction(
    UsersActionTypes.GET_USERS,
    props<{ usersList: UserI[] }>()
);

export const getUsersListSuccess = createAction(
    UsersActionTypes.GET_USERS_SUCCESS,
    props<{ usersList: UserI[] }>()
);

export const getUsersListError = createAction(
    UsersActionTypes.GET_USERS_ERROR,
    props<{ error: string }>()
);