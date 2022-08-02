import { createSelector } from "@ngrx/store";
import { AppStateI } from "src/app/shared/models/app-state.model";
import { UsersStateI } from "../models/users-state.model";

export const usersFeatureSelector = (state: AppStateI): UsersStateI => state.users

export const isLoadingUsersList = createSelector(
    usersFeatureSelector,
    (usersState: UsersStateI) => usersState.isLoading
);
export const usersList = createSelector(
    usersFeatureSelector,
    (usersState: UsersStateI) => usersState.usersList
);