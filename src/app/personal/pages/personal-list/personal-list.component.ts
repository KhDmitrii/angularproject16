import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personal } from 'src/app/shared/interfaces/personal.interface';
import { PersonalService } from 'src/app/shared/services/personal.service';

@Component({
  selector: 'app-personal-list',
  templateUrl: './personal-list.component.html',
  styleUrls: ['./personal-list.component.css'],
})
export class PersonalListComponent implements OnInit {
  personals!: Personal[];

  constructor(
    private personalService: PersonalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    try {
      this.personals = (await this.personalService.getPersonals()) || [];
    } catch (error) {
      console.log(error);
    }
  }

  linkToItem(id?: number) {
    if (id) {
      this.router.navigate([this.router.url, 'item', id]);
    } else {
      this.router.navigate([this.router.url, 'item']);
    }
  }
}
