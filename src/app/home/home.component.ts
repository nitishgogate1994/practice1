import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { HomeForm } from './home.model';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeForm: HomeForm = new HomeForm();

  constructor(private _homeService: HomeService) {}

  ngOnInit(): void {}

  submit() {
    this._homeService.submitForm(this.homeForm).subscribe({
      next: () => alert('Form Submitted Successfully'),
      error: () => alert('Something went wrong'),
    });
  }
}
