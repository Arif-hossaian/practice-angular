import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PostSerive } from './crtService.service';
import { FormsModule } from '@angular/forms';

interface dataType {
  body: string,
  id: number,
  userId: number,
  title: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, HttpClientModule, FormsModule],
  templateUrl: './crtService.component.html',
  providers: [PostSerive]
})
export class CrtServiceComponent {
    console = console;
  title = 'crew-managment service';
  httpClient = inject(HttpClient);
  data: any = []
  loading:boolean = false
  postData = {
    title:'',
    body:''
  }

  constructor(private service: PostSerive){}

  ngOnInit(): void {
   
  }

  createPost() {
    this.service.createPost(this.postData).subscribe((res) => {
        this.loading = true
        this.data.push(res)
        this.loading = false
    }, error => {
        this.loading = false
        console.error(error)
    })
  }
}
