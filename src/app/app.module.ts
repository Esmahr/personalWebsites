import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
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
import { BlogSummaryComponent } from './components/blog-summary/blog-summary.component';
import { BlogSummaryItemComponent } from './components/blog-summary/blog-summary-item/blog-summary-item.component';
import { BlockquoteComponent } from './components/blockquote/blockquote.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule, } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBadgeModule } from '@angular/material/badge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { SidenavComponent } from './components/admin/sidenav/sidenav.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { NavComponent } from './components/admin/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AbouthEditComponent,
    ProjectEditComponent,
    BlogEditComponent,
    PageEditComponent,
    ThemeEditComponent,
    SidebarComponent,
    KnownTechnologiesComponent,
    KnownTechnologiesItemComponent,
    ProjectSummaryComponent,
    BlogSummaryComponent,
    BlogSummaryItemComponent,
    BlockquoteComponent,
    LoginpageComponent,
    SidenavComponent,
    AdminPanelComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    MatRadioModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSortModule,
    MatPaginatorModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
