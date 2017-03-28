import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name;
  country;
  ngOnInit() {
    this.name = "Kevin Pietersen";
    this.country = "England";
  }
}
