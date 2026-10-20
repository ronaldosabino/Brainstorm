import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css',
})
export class CourseListComponent {
  constructor(
    private router: Router,
    private sharedService: SharedService,
  ) {}

  filters = {
    logic: false,
    frontend: false,
    backend: false,
    database: false,
  };

  coursesList: any[] = [
    {
      title: 'Lógica de programação',
      subtitle: 'Aprenda a base de Programação para qualquer linguagem.',
      category: 'logic',
      id: 'programming-logic',
    },
    {
      title: 'Angular 20',
      subtitle: 'Aprenda Angular com foco em prática e desafios reais.',
      category: 'frontend',
      id: 'angular-20',
    },
    {
      title: 'APIs com ASP.NET Core',
      subtitle: 'Aprenda C# .NET com foco em prática e desafios reais.',
      category: 'backend',
      id: 'csharp-dotnet',
    },
    {
      title: 'Banco de Dados com MySQL',
      subtitle: 'Aprenda MySQL com foco em prática e desafios reais.',
      category: 'database',
      id: 'mysql-database',
    },
  ];

  selectedCategory: string = '';

  // openCourse(course: any) {
  //   this.sharedService.getCourseData(course);
  //   this.router.navigate(['/classroom', course.id]);
  // }

  openCourse(course: any) {
    console.log(course);

    this.sharedService.getCourseData(course);
    const lessons = this.sharedService.getCourseLessons(course.id);

    if (lessons.length > 0) {
      this.router.navigate(['/classroom', course.id, lessons[0].id]);
    }
  }

  applyFilters() {
    const activeFilters = Object.values(this.filters).some((v) => v);

    if (!activeFilters) {
      this.selectedCategory = '';
    }
  }

  selectFilter() {
    this.filters = {
      logic: this.selectedCategory === 'logic',
      frontend: this.selectedCategory === 'frontend',
      backend: this.selectedCategory === 'backend',
      database: this.selectedCategory === 'database',
    };
  }

  showCard(category: string): boolean {
    const active = Object.values(this.filters).some((v) => v);

    if (!active) return true;

    return this.filters[category as keyof typeof this.filters];
  }

  get filteredCourses() {
    const active = Object.values(this.filters).some((v) => v);

    if (!active) {
      return this.coursesList;
    }

    return this.coursesList.filter(
      (course) => this.filters[course.category as keyof typeof this.filters],
    );
  }

  backToHome() {
    this.router.navigate(['/home']);
  }
}
