import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './components/users-list/users-list.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/users.reducers';
import { UsersService } from './services/users.service';
import { EffectsModule } from '@ngrx/effects';
import { GetUsersListEffect } from './store/effects/get-users-list.effect';

@NgModule({
    declarations: [
        UsersListComponent
    ],
    imports: [ 
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: UsersListComponent
            }
        ]),
        StoreModule.forFeature('users', reducers),
        EffectsModule.forFeature([GetUsersListEffect])
    ],
    exports: [],
    providers: [
        UsersService
    ],
})
export class UsersModule {}
