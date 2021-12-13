import { Component } from '@angular/core';
// import { title } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'siteweb';


  datosMenu=[{
    'titulo': 'Barrio',
    'icon':'bx bxs-store',
    'url':'https://github.com/'
  }]
}
