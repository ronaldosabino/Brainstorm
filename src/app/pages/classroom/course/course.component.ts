import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../shared/shared.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course',
  imports: [CommonModule, FormsModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    protected sharedService: SharedService,
    private sanitizer: DomSanitizer,
  ) {}

  courseData: any = {};
  courseLessons: any[] = [];
  selectedLesson: any = null;
  safeLessonContent!: SafeHtml;

  // ngOnInit() {
  //   // Redirect if no course data is available
  //   if (Object.keys(this.sharedService.courseData).length === 0) {
  //     this.router.navigate(['/classroom']);
  //     return;
  //   }

  //   this.courseData = this.sharedService.courseData;
  //   console.log('COURSE DATA', this.courseData);

  //   this.getCourseLessons(this.courseData.id);

  //   this.selectedLesson = this.courseLessons[0];

  //   this.selectLesson(this.selectedLesson);
  // }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const courseId = params.get('courseId');
      const lessonId = params.get('lessonId');

      if (!courseId || !lessonId) {
        this.router.navigate(['/classroom']);
        return;
      }

      this.courseData = { id: courseId };
      this.courseData.title = this.sharedService.getCourseTitle(courseId);
      this.courseLessons = this.sharedService.getCourseLessons(courseId);

      const lesson = this.courseLessons.find((l) => l.id === lessonId);

      if (!lesson) {
        // fallback: primeira aula
        this.router.navigate([
          '/classroom',
          courseId,
          this.courseLessons[0].id,
        ]);
        return;
      }

      this.selectLesson(lesson);
    });
  }

  getCourseLessons(courseId: string) {
    this.courseLessons = this.sharedService.getCourseLessons(courseId);
  }

  // selectLesson(lesson: any) {
  //   this.selectedLesson = lesson;

  //   this.safeLessonContent = this.sanitizer.bypassSecurityTrustHtml(
  //     lesson.content,
  //   );
  // }

  selectLesson(lesson: any) {
    this.selectedLesson = lesson;
    this.safeLessonContent = this.sanitizer.bypassSecurityTrustHtml(
      lesson.content,
    );
  }

  goToLesson(lesson: any) {
    this.router.navigate(['/classroom', this.courseData.id, lesson.id]);
  }

  selectLessonMobile(event: Event) {
    const selectedId = (event.target as HTMLSelectElement).value;

    const lesson = this.courseLessons.find((l) => l.id == selectedId);

    if (lesson) {
      this.selectLesson(lesson); // reaproveita o método já pronto
    }
  }

  goToLessonById(lessonId: string) {
    this.router.navigate(['/classroom', this.courseData.id, lessonId]);
  }

  backToClassroom() {
    this.router.navigate(['/classroom']);
  }
}
