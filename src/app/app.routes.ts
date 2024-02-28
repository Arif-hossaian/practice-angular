import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { CrtServiceComponent } from './components/crtService/crtService.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent },
    
    {path: 'service', component: ServiceComponent},
    {path: 'crt/service', component: CrtServiceComponent}
];
