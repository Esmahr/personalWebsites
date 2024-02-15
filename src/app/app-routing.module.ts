import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AbouthEditComponent } from './abouth-edit/abouth-edit.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ThemeEditComponent } from './theme-edit/theme-edit.component';
import { PageEditComponent } from './page-edit/page-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  {
    path: 'admin',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'abouth', pathMatch: 'full' }, // Varsayılan sayfa
      { path: 'abouth', component: AbouthEditComponent, title: 'Profilim' },
      { path: 'blog', component: BlogEditComponent, title: 'Profilim' },
      { path: 'project', component: ProjectEditComponent, title: 'Profilim' },
      { path: 'theme', component: ThemeEditComponent, title: 'Profilim' },
      { path: 'page', component: PageEditComponent, title: 'Profilim' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
