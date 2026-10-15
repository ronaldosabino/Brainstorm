import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { CourseListComponent } from './pages/classroom/course-list/course-list.component';
import { CourseComponent } from './pages/classroom/course/course.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // redireciona para 'home'
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'classroom', component: CourseListComponent },
  { path: 'classroom/:courseId/:lessonId', component: CourseComponent },
];
