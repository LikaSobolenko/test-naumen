import { Component, OnInit, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Dialog, DIALOG_DATA, DialogModule } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  name: string;
  active: boolean;
  email: string;
}

@Component({
  selector: 'app-userslist',
  standalone: true,
  imports: [
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    DialogModule,
    FormsModule
  ],
  templateUrl: './userslist.component.html',
  styleUrl: './userslist.component.scss'
})
export class UserslistComponent implements OnInit {
  users: User[] = [];
  public displayedUsers: User[] = [];
  loading = true;
  public searchText: string = '';
  dialog = inject(Dialog);

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadData(this.dataService.getUsers());
  }

  private loadData(observable: Observable<User[]>): void {
    this.loading = true;
    
    observable.subscribe({
      next: (data) => {
        this.users = data;
        this.displayedUsers = this.users;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        console.error(err);
      }
    });
  }

  public applyFilter() {
    const term = this.searchText.toLowerCase();
    this.displayedUsers = this.users.filter(user => 
      user.name.toLowerCase().includes(term)
    );
  }

  public allUsers() {
    this.displayedUsers = this.users
  }

  public sortActive() {
    this.displayedUsers = this.users.filter(user => user.active)
  }

  public sortInActive() {
    this.displayedUsers = this.users.filter(user => !user.active)
  }

  public openUserWindow(id:number) {
    this.dialog.open(UserDialogComponent, {
      minWidth: '300px',
      data: id
    });
  }
}

@Component({
  selector: 'app-user-dialog',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div *ngIf="isLoading">
    <h1>{{user?.name}}</h1>
    <div>
      User email: {{user?.email}}
    </div>
  </div>
  `,
  styles: [`
  :host {
  display: block;
  background: #fff;
  border-radius: 8px;
  padding: 8px 16px;
}
  `]
})
export class UserDialogComponent {
  private dataService = inject(DataService);
  private dialogData: {userId: number} = inject(DIALOG_DATA);
  isLoading = false
  
  user: User | undefined;

  constructor() {
    this.dataService.getUsers().subscribe(users => {
      this.user = users.find(user => user.id === this.dialogData);
      this.isLoading = true
    });
  }

}
