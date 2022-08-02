import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateI } from 'src/app/shared/models/app-state.model';
import { UserI } from '../../models/user.model';
import { usersList } from '../../store/users.selectors';

@Component({
    selector: 'ff-users-list',
    templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit {

    users$!: Observable<UserI[] | null>;
    
    constructor(private store: Store<AppStateI>) {
        
    }

    ngOnInit(): void {
        this.users$ = this.store.pipe(select(usersList))
    }
}
