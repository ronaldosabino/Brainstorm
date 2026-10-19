import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  courseData: any = {};
  courseLessons: any[] = [
    {
      title: 'Lógica de Programação',
      courseId: 'programming-logic',
      lessons: [
        {
          id: 'lesson-1',
          title: '1 - Introdução à Lógica de Programação',
          duration: '3:52',
          description:
            'Nesta aula, você será introduzido aos conceitos básicos de lógica de programação, incluindo algoritmos e fluxogramas.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/FaG3s12nRJM?si=tIIB4EUL9aTrcy7f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-2',
          title: '2 - Conceitos',
          duration: '11:10',
          description:
            'Nesta aula, você aprenderá sobre os principais conceitos da programação.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/eqCqa8eBK0k?si=-zCR8T9KgB8Lub6P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-3',
          title: '3 - Criar e executar projetos',
          duration: '5:41',
          description:
            'Nesta aula, você aprendaerá como criar e executar projetos',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/SEUdBpZpt-Y?si=2WLs_yS2acL8JixK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-4',
          title: '4 - Comentários',
          duration: '3:47',
          description:
            'Nesta aula, você aprendaerá como comentar em seus códigos',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/AauLCrYUzZo?si=658uY6pN5EC7P2EO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-5',
          title: '5 - Exibir mensagens',
          duration: '3:31',
          description:
            'Nesta aula, você aprendaerá como comentar em seus códigos',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/mr39pOaXcJo?si=_sjflzt5fNLJ6Acq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-6',
          title: '6 - Variáveis',
          duration: '9:49',
          description: 'Nesta aula, você aprendaerá sobre variáveis',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/k4aJRRA5lmE?si=LYFYlq93vxroIzMX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-7',
          title: '7 - Constantes',
          duration: '5:38',
          description: 'Nesta aula, você aprendaerá sobre constantes',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/TxTV1lwL2Fk?si=EGXKxW1qt_KEZAN2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-8',
          title: '8 - Concatenação',
          duration: '6:34',
          description: 'Nesta aula, você aprenderá sobre concatenação',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/MfLDCTJTUtA?si=mthAp3qEe5gukDLt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-9',
          title: '9 - Comando ReadLine',
          duration: '5:20',
          description: 'Nesta aula, você aprenderá sobre o comando ReadLine',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/kMupRK9GBbE?si=rbMtl88iAhqLUBdt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-10',
          title: '10 - Converter dados',
          duration: '6:22',
          description: 'Nesta aula, você aprenderá sobre como converter dados',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/31eqfLpuC8g?si=oN0scCOxAK55YKDA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-11',
          title: '11 - Operadores aritiméticos',
          duration: '8:26',
          description:
            'Nesta aula, você aprenderá sobre operadores aritiméticos',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/SURlpJhGd-I?si=HMsIP-74udVtMDa-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-12',
          title: '12 - Operadores relacionais',
          duration: '6:49',
          description:
            'Nesta aula, você aprenderá sobre operadores relacionais',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/Yw1xNUkhb_E?si=Z04oj3Jb03ZNx5yZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-13',
          title: '13 - Operadores lógicos',
          duration: '7:05',
          description: 'Nesta aula, você aprenderá sobre operadores lógicos',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/QmCtpCldIYc?si=FzRcLJOGsR3lE99G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-14',
          title: '14 - Condicional simples',
          duration: '7:19',
          description: 'Nesta aula, você aprenderá sobre condicional simples',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/AByS_4gcf2c?si=01SLNORjwM-0Do6h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-15',
          title: '15 - Condicional encadeada',
          duration: '5:20',
          description: 'Nesta aula, você aprenderá sobre condicional encadeada',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/MvpNBd_l6S4?si=bqr7HFsMkvwfCzWD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-16',
          title: '16 - Condicional e operadores lógicos',
          duration: '4:41',
          description:
            'Nesta aula, você aprenderá sobre condicional e operadores lógicos',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/j-WdLhTMFNY?si=LnUyKDyXy5rXQFLm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-17',
          title: '17 - Operador ternário',
          duration: '4:42',
          description: 'Nesta aula, você aprenderá sobre o operador ternário',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/wGi6doAgvD0?si=m0C_8_tmNafe75Dd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-18',
          title: '18 - Estrutura de escolha',
          duration: '5:21',
          description: 'Nesta aula, você aprenderá sobre estrutura de escolha',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/onnBy4J9Bx0?si=h70MezdLxKuenXeL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-19',
          title: '19 - Switch Expression',
          duration: '4:15',
          description: 'Nesta aula, você aprenderá sobre Switch Expression',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/7YG9hQChk-Y?si=3ogo2nbTY7LlN5xG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-20',
          title: '20 - While',
          duration: '4:43',
          description:
            'Nesta aula, você aprenderá sobre o laço de repetição While',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/8jwFJ4I9GLk?si=rl8uGU_u10hIZgJs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-21',
          title: '21 - Do While',
          duration: '5:33',
          description:
            'Nesta aula, você aprenderá sobre o laço de repetição Do While',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/HCdfEn_2cm8?si=-qKmWDKV-7AsoiQd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-22',
          title: '22 - For',
          duration: '5:33',
          description:
            'Nesta aula, você aprenderá sobre o laço de repetição For',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/U9Xuj39bAps?si=QHfMdZk_C8gn62xe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-23',
          title: '23 - Vetor',
          duration: '8:17',
          description: 'Nesta aula, você aprenderá sobre Vetor',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/zHdCBvfZszw?si=eMyHgI4tVtgKd-kh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-24',
          title: '24 - Foreach',
          duration: '4:58',
          description: 'Nesta aula, você aprenderá sobre Foreach',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/o-lXoSW3PE8?si=DlhJhjoNRA2qsEcC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-25',
          title: '25 - Matriz',
          duration: '7:29',
          description: 'Nesta aula, você aprenderá sobre Matriz',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/0kXS5jRe0tE?si=ZeOeyik4YbbnVPS4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
      ],
    },

    {
      title: 'Angular 20',
      courseId: 'angular-20',
      lessons: [
        {
          id: 'lesson-1',
          title: '1 - Introdução ao Angular 20',
          duration: '3:23',
          description:
            'Nesta aula, você será introduzido ao framework Angular 20, aprendendo sobre sua arquitetura e principais conceitos.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/eEADjYxJ-uw?si=gsfVqAhtf3dTQQ0_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-2',
          title: '2 - Conceitos',
          duration: '6:47',
          description:
            'Nesta aula, você aprenderá sobre os conceitos fundamentais do Angular 20.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/qGl6u4mMnLc?si=J5gy2VBFcfOcrlL9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-3',
          title: '3 - Configurar ambiente',
          duration: '7:05',
          description:
            'Nesta aula, você estudará como configurar o ambiente de desenvolvimento para Angular 20.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/_7bVom0G3vQ?si=GF5h58M-RfNotDWe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-4',
          title: '4 - Criar e executar o projeto',
          duration: '5:02',
          description:
            'Nesta aula, você estudará como criar e executar um projeto Angular 20.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/7Yr9WTcHZBw?si=wodVtwTf5N8AWClF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-5',
          title: '5 - Componente',
          duration: '5:35',
          description:
            'Nesta aula, você estudará como criar e configurar componentes no Angular 20.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/rrg2KWeN5Oo?si=Xs5E3NYR0gzsfaLp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-6',
          title: '6 - Interpolação de texto',
          duration: '8:53',
          description:
            'Nesta aula, você estudará como interpolar texto no Angular 20.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/Y8CkfmuP6bg?si=XS_b3jf2V5WL7QA0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-7',
          title: '7 - Data Bindings',
          duration: '11:00',
          description:
            'Nesta aula, você estudará como usar databindings no Angular 20.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZNlRxEKKW9w?si=gajwX23WOowW6ikD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-8',
          title: '8 - FormsModule',
          duration: '8:19',
          description:
            'Nesta aula, você estudará como configurar o FormsModule no Angular 20.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/nrFRGrc19wM?si=Td5mrswO-hf5RHe9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-9',
          title: '9 - Controle de fluxo',
          duration: '7:39',
          description:
            'Nesta aula, você estudará como implementar controle de fluxo no Angular 20.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/bmpxONJutZA?si=xZfSpLzadzR1QACZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-10',
          title: '10 - Diretivas',
          duration: '4:59',
          description:
            'Nesta aula, você estudará sobre diretivas no Angular 20.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/XbCEKwjzQO4?si=1Q-Msd9U_zOlQ58C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-11',
          title: '11 - ngStyle',
          duration: '9:30',
          description: 'Nesta aula, você estudará ngStyle no Angular 20.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/lhMmvG6asbY?si=V587Q01vPv7XUcMX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-12',
          title: '12 - ngClass',
          duration: '5:14',
          description: 'Nesta aula, você estudará ngClass no Angular 20.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/10jVsmsq3BE?si=NBRRRE_Pj-JH5oKW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-13',
          title: '13 - Diretivas customizadas',
          duration: '5:14',
          description:
            'Nesta aula, você estudará sobre diretivas customizadas no Angular 20.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/A19X-0a85wY?si=PicsXnLsLI3NFWcd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-14',
          title: '14 - Formulário reativo',
          duration: '5:33',
          description:
            'Nesta aula, você estudará como configurar um formulário reativo no Angular 20.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/1XcOTyglPDw?si=cYzoHEga0d62c6Ek" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-15',
          title: '15 - Validar formulário reativo',
          duration: '8:22',
          description:
            'Nesta aula, você estudará como validar formulários reativos no Angular 20.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/zoqzGuasaZQ?si=kDYWd9goZhGZHc8K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-16',
          title: '16 - Bootstrap',
          duration: '7:13',
          description:
            'Nesta aula, você estudará como configurar o Bootstrap no Angular 20.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/dOgUiV70jjs?si=-5X8nd2P-mPDvucN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
      ],
    },

    {
      title: 'APIs com ASP.NET Core',
      courseId: 'csharp-dotnet',
      lessons: [
        {
          id: 'lesson-1',
          title: '1 - Introdução',
          duration: '2:56',
          description:
            'Olá pessoal, iniciaremos mais um treinamento no canal Ralf Lima, dessa vez aprendendo a trabalhar com o poderoso framework web ASP.NET Core e o banco de dados MySQL.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/tWguymAOmFo?si=m_N9Eg1oKY_YDNph" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-2',
          title: '2 - Conceitos',
          duration: '3:52',
          description:
            'Nessa segunda aula do treinamento de Criando APIs com ASP.NET Core, iremos aprender os conceitos básicos do nosso poderoso framework ASP.NET Core. Vamos também conhecer o que é uma API e quais são suas características.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/KK2K-B4iy1M?si=OrJ69Cg8OgqU4sPk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-3',
          title: '3 - Criar e executar projeto',
          duration: '4:11',
          description:
            'Nessa terceira aula do treinamento de Criando APIs com ASP.NET Core, iremos aprender a criar e executar nossos projetos criados utilizando o framework ASP.NET Core.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/gJDIUQbtp4k?si=YwdbJGO9EVSEkDR2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-4',
          title: '4 - Controle',
          duration: '5:41',
          description:
            'Nessa quarta aula do treinamento de Criando APIs com ASP.NET Core, iremos implementar a camada de controle.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/nOFRgwAEP9c?si=8VoZXdSclHEWg8jS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-5',
          title: '5 - Configurar Program.cs',
          duration: '2:41',
          description:
            'Nessa quinta aula do treinamento de Criando APIs com ASP.NET Core, vamos configurar o arquivo Program.cs para ter acesso as nossas rotas criadas na última aula.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/tits_yUdpQA?si=dNjobCKiBVaTblla" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-6',
          title: '6 - Watch Run',
          duration: '3:54',
          description:
            'Nessa sexta aula do treinamento de Criando APIs com ASP.NET Core, vamos aprender a trabalhar com o comando dotnet watch run.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/liWK42PYkcM?si=K8msftvsrU6n8Z90" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-7',
          title: '7 - Modelo',
          duration: '2:10',
          description:
            'Nessa sétima aula do treinamento de Criando APIs com ASP.NET Core, vamos criar nossa camada de modelo.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/r8bvvx3YZSQ?si=DDx4G4NxXlhmlakZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-8',
          title: '8 - Implementar controle',
          duration: '4:52',
          description:
            'Nessa oitava aula do treinamento de Criando APIs com ASP.NET Core, vamos criar uma nova rota em nosso arquivo de controle.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/njTG-1pFpYc?si=fNSr5ze0mXp3q3y6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-9',
          title: '9 - Base de dados',
          duration: '2:38',
          description:
            'Nessa nona aula do treinamento de Criando APIs com ASP.NET Core, vamos criar nossa base de dados.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/liAejDaH97M?si=X7bPcBOp4Hk_jq8u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-10',
          title: '10 - Tabela',
          duration: '2:47',
          description:
            'Nessa décima aula do treinamento de Criando APIs com ASP.NET Core, vamos criar nossa tabela.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/iDsOncA6IZA?si=OLtlAGZYEA9-pI-s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-11',
          title: '11 - String de conexão',
          duration: '1:53',
          description:
            'Nessa décima primeira aula do treinamento de Criando APIs com ASP.NET Core, vamos implementar a string de conexão, responsável pela conexão entre nossa aplicação em ASP.NET Core e o banco de dados MySQL.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/odF_DeGAIhI?si=IbrlVHa_T0nDEDFh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-12',
          title: '12 - Repositório',
          duration: '3:47',
          description:
            'Nessa décima segunda aula do treinamento de Criando APIs com ASP.NET Core, vamos implementar a camada de repositório.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/d4u1gpAvTrY?si=zFOsOFAW-HQ7YpKK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-13',
          title: '13 - Implementar Program.cs',
          duration: '2:47',
          description:
            'Nessa décima terceira aula do treinamento de Criando APIs com ASP.NET Core, vamos implementar o arquivo Program.cs.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/4mGf9GsARBs?si=zJbt-S4IMuj06vZX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-14',
          title: '14 - Implementar controle',
          duration: '2:19',
          description:
            'Nessa décima quarta aula do treinamento de Criando APIs com ASP.NET Core, vamos implementar nosso arquivo de controle.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/inbuseSJiXo?si=9pJAZHy_OO4zQdO0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-15',
          title: '15 - Pacote MySQL',
          duration: '2:16',
          description:
            'Nessa décima quinta aula do treinamento de Criando APIs com ASP.NET Core, vamos efetuar a instalação do pacote MySQL.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/kQhMv6Pttjk?si=ISw5_k3bYR66Zdrr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-16',
          title: '16 - Método de cadastro',
          duration: '5:49',
          description:
            'Nessa décima sexta aula do treinamento de Criando APIs com ASP.NET Core, vamos implementar o método de cadastro no arquivo PessoaRepositorio.cs.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/a4QHD_S5tn8?si=IAcguaxAgja3HwZH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-17',
          title: '17 - Rota de cadastro',
          duration: '2:03',
          description:
            'Nessa décima sétima aula do treinamento de Criando APIs com ASP.NET Core, vamos implementar a rota de cadastro no arquivo PessoaControle.cs.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/FTQs1CkQZHQ?si=5ySuQ62EVa_-6iFL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-18',
          title: '18 - Testar cadastro',
          duration: '2:31',
          description:
            'Nessa décima oitava aula do treinamento de Criando APIs com ASP.NET Core, vamos realizar um teste de cadastro.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/8LAP6WNhLZU?si=t5zwC_PxZICpLYc_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-19',
          title: '19 - Método de seleção',
          duration: '3:18',
          description:
            'Nessa décima nona aula do treinamento de Criando APIs com ASP.NET Core, vamos implementar o método de seleção no arquivo PessoaRepositorio.cs.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/1GrftKSIkmo?si=KQ9GHPKMT87KrHx4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-20',
          title: '20 - Rota de seleção',
          duration: '1:50',
          description:
            'Nessa vigésima aula do treinamento de Criando APIs com ASP.NET Core, vamos implementar a rota de seleção no arquivo PessoaControle.cs.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/qHWkJW_PROA?si=kcJFldYmZ6Aa8PC0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-21',
          title: '21 - Testar seleção',
          duration: '1:47',
          description:
            'Nessa vigésima primeira aula do treinamento de Criando APIs com ASP.NET Core, vamos realizar um teste de seleção.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/DXip2iD9y0k?si=zkQhGBzzH48UVNex" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-22',
          title: '22 - Método de alteração',
          duration: '2:19',
          description:
            'Nessa vigésima segunda aula do treinamento de Criando APIs com ASP.NET Core, vamos implementar o método de alteração no arquivo PessoaRepositorio.cs.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/CPCqL5YXK9A?si=A2_vCy9FlICIgpwO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-23',
          title: '23 - Rota de alteração',
          duration: '4:47',
          description:
            'Nessa vigésima terceira aula do treinamento de Criando APIs com ASP.NET Core, vamos implementar a rota de alteração no arquivo PessoaControle.cs.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/18JkfhCh_rE?si=tSdpmRZA8Ep_7bL0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
      ],
    },

    {
      title: 'Banco de dados com MySQL',
      courseId: 'mysql-database',
      lessons: [
        {
          id: 'lesson-1',
          title: '1 - Introdução',
          duration: '4:32',
          description: 'Nesta aula, você será introduzido ao MySQL.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/ljdFIqFrC3U" title="C# e MySQL - 01 Introdução" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-2',
          title: '2 - Criar projeto',
          duration: '2:15',
          description:
            'Nesta aula, você aprenderá como criar um projeto em C# e MySQL.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/0T1Pf1QHktw" title="C# e MySQL - 02 Criar projeto" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-3',
          title: '3 - Criar base de dados e tabela',
          duration: '8:21',
          description:
            'Nesta aula, você aprenderá como criar uma base de dados e uma tabela no MySQL.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/dKywPyY0gNU" title="C# e MySQL - 03 Criar base de dados e tabela" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-4',
          title: '4 - Pacote MySQL',
          duration: '2:47',
          description:
            'Nesta aula, você aprenderá como instalar o pacote MySQL no seu projeto C#.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/HWj70ROaP1s" title="C# e MySQL - 04 Pacote MySQL" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-5',
          title: '5 - Conexão com o MySQL',
          duration: '4:30',
          description: 'Nesta aula, você aprenderá como conectar ao MySQL.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/fHj6k2-5Bi0" title="C# e MySQL - 05 Conexão com o MySQL" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-6',
          title: '6 - Implementar classe de conexão',
          duration: '1:58',
          description:
            'Nesta aula, você aprenderá como implementar uma classe de conexão com o MySQL.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/pUNIPXI0YbI" title="C# e MySQL - 06 Implementar classe de conexão" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-7',
          title: '7 - Classe para executar comandos SQL',
          duration: '5:21',
          description: 'Nesta aula, você aprenderá sobre comandos SQL.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/0nLIxKK4L1Q" title="C# e MySQL - 07 Classe para executar comandos SQL" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-8',
          title: '8 - Método de cadastro',
          duration: '10:59',
          description: 'Nesta aula, você aprenderá sobre o método de cadastro.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/fL56BoRPl4I" title="C# e MySQL - 08 Método de cadastro" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-9',
          title: '9 - Método de seleção',
          duration: '7:02',
          description: 'Nesta aula, você aprenderá sobre o método de seleção.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/0WKmFW38rtc" title="C# e MySQL - 09 Método de seleção" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-10',
          title: '10 - Método de edição',
          duration: '4:48',
          description: 'Nesta aula, você aprenderá sobre o Método de edição.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/jpC-c_P__Gc" title="C# e MySQL - 10 Método de alteração" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-11',
          title: '11 - Método de remoção',
          duration: '3:36',
          description: 'Nesta aula, você aprenderá sobre o método de remoção.',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/BuJ1PH3HbfE" title="C# e MySQL - 11 Método de remoção" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          id: 'lesson-12',
          title: '12 - Operadores relacionais',
          duration: '6:48',
          description:
            'Nesta aula, você aprenderá sobre operadores relacionais',
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/Yw1xNUkhb_E?si=Z04oj3Jb03ZNx5yZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
      ],
    },
  ];

  getCourseData(course: any) {
    this.courseData = course;
  }

  getCourseLessons(courseId: string) {
    const course = this.courseLessons.find(
      (course) => course.courseId === courseId,
    );
    return course ? course.lessons : [];
  }

  getCourseTitle(courseId: string) {
    const course = this.courseLessons.find(
      (course) => course.courseId === courseId,
    );

    return course.title;
  }
}
