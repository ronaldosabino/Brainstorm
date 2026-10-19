import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  userChoice: string = '';
  systemResponse: SafeHtml = '';
  isTyping: boolean = false;
  private typingInterval: any;

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
  ) {}

  selectOption(choice: string) {
    this.userChoice = choice;
    this.systemResponse = '';
    this.isTyping = true;

    let fullText = '';

    switch (choice) {
      case 'Lógica de Programação':
        fullText =
          'Excelente escolha!<br> <b>Lógica de programação</b> é a base para qualquer linguagem de programação.<br>Comece por este <a href="http://localhost:4200/classroom/programming-logic/lesson-1">curso gratuito</a>.';
        break;

      case 'Front-End':
        fullText = `Perfeito!<br> Você vai aprender sobre <b>Angular</b>, <b>TypeScript</b> e <b>Bootstrap</b>.<br>
        Para começar agora <a href="http://localhost:4200/classroom/angular-20/lesson-1">clique aqui</a>.`;
        break;

      case 'Back-End':
        fullText = `Perfeito!<br> Você vai aprender sobre <b>C#</b> e <b>.NET</b><br>
        Para começar agora <a href="http://localhost:4200/classroom/csharp-dotnet/lesson-1">clique aqui</a>.`;
        break;

      case 'Banco de Dados':
        fullText = `Ótimo!<br> Vamos explorar <b>SQL</b> e modelagem de dados.<br>
        Você pode começar por este <a href='http://localhost:4200/classroom/mysql-database/lesson-1'>treinamento de SQL</a>.`;
        break;

      default:
        fullText = '';
    }

    let index = 0;
    const typingSpeed = 30;
    let currentText = '';

    clearInterval(this.typingInterval);
    this.typingInterval = setInterval(() => {
      if (index < fullText.length) {
        currentText += fullText.charAt(index);
        this.systemResponse =
          this.sanitizer.bypassSecurityTrustHtml(currentText);
        index++;
      } else {
        clearInterval(this.typingInterval);
        this.isTyping = false;
      }
    }, typingSpeed);
  }

  redirectToClassroom() {
    // Navega para a rota 'classroom'
    this.router.navigate(['/classroom']);
  }

  redirectToAbout() {
    // Navega para a rota 'classroom'
    this.router.navigate(['/about']);
  }
}
