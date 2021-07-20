import { PostComponent } from './../../components/post/post.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard',      component: DashboardComponent },
    { path: 'post',      component: PostComponent }
];
