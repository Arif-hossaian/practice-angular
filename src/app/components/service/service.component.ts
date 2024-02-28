import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

interface dataType {
  body: string,
  id: number,
  userId: number,
  title: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, HttpClientModule],
  templateUrl: './service.component.html',
})
export class ServiceComponent implements OnInit {
  title = 'crew-managment service';
  httpClient = inject(HttpClient);
  data: any = []
  loading:boolean = false

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData() {
    this.loading = true
    this.httpClient
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .subscribe((data) => {
        console.log(data)
        this.data = data
        this.loading = false
      });
  }
}
