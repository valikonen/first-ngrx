import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";
import { UserI } from "../../models/user.model";
import { UsersService } from "../../services/users.service";
import { getUsersList, getUsersListError, getUsersListSuccess } from "../actions/get-users.actions";

@Injectable()
export class GetUsersListEffect {

    constructor(private actions$: Actions, private usersService: UsersService) {}

    getUsersList$ = createEffect(() => this.actions$.pipe(

        ofType(getUsersListSuccess),

        switchMap(() => {
            return this.usersService.getUsers().pipe(
                map((usersList: UserI[]) => {
                    console.log('getUsersList$ -> usersList: ', usersList)
                    return getUsersListSuccess({usersList})
                }),

                catchError((err) => {
                    const error = 'Cannot get users list';
                    return of(getUsersListError({error}))
                })
            )
        })
    ))
}