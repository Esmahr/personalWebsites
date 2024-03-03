import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AbouthEditComponent } from './abouth-edit/abouth-edit.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { PageEditComponent } from './page-edit/page-edit.component';
import { ThemeEditComponent } from './theme-edit/theme-edit.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { KnownTechnologiesComponent } from './components/known-technologies/known-technologies.component';
import { KnownTechnologiesItemComponent } from './components/known-technologies/known-technologies-item/known-technologies-item.component';
import { ProjectSummaryComponent } from './components/project-summary/project-summary.component';
import { ProjectSummaryItemComponent } from './components/project-summary/project-summary-item/project-summary-item.component';
import { BlogSummaryComponent } from './components/blog-summary/blog-summary.component';
import { BlogSummaryItemComponent } from './components/blog-summary/blog-summary-item/blog-summary-item.component';
import { BlockquoteComponent } from './components/blockquote/blockquote.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    AbouthEditComponent,
    ProjectEditComponent,
    BlogEditComponent,
    PageEditComponent,
    ThemeEditComponent,
    SidebarComponent,
    KnownTechnologiesComponent,
    KnownTechnologiesItemComponent,
    ProjectSummaryComponent,
    ProjectSummaryItemComponent,
    BlogSummaryComponent,
    BlogSummaryItemComponent,
    BlockquoteComponent,
    LoginpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
