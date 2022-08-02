import { Action, createReducer, on } from "@ngrx/store";
import { UserI } from "../models/user.model";
import { UsersStateI } from "../models/users-state.model";
import { getUsersList, getUsersListError, getUsersListSuccess } from "./actions/get-users.actions";

export const usersInitialState: UsersStateI = {
    isLoading: false,
    usersList: null,
    errors: null
};

export const usersReducer = createReducer(
    usersInitialState,

    on(getUsersList, 
        (state): UsersStateI  => ({
            ...state,
            isLoading: true 
        })
    ),

    on(getUsersListSuccess, 
        (state, action): UsersStateI  => ({
            ...state,
            isLoading: false,
            usersList: action.usersList
        })
    ),

    on(getUsersListError, 
        (state): UsersStateI  => ({
            ...state,
            isLoading: false
        })
    )
);

export function reducers(state: UsersStateI, action: Action) {
    return usersReducer(state, action);
}
