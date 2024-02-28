import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TestWishItem } from './shared/model/testModel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  item : TestWishItem[]= [
    new TestWishItem('Learning angular', true),
    new TestWishItem('Learning decorator', true),
    new TestWishItem('Learning somthing in deepth',)
  ]
  title = 'crew-managment';
}
