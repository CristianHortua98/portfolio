

export const fullName: string = 'Cristian Alejandro Hortua Saenz';
export const role: string = 'Ingeniero de Software | Senior Fullstack Developer';

export const habilidadesBlandas: string[] = ['Liderazgo', 'Mentoría Técnica', 'Análisis y resolución de problemas', 'Pensamiento crítico', 'Orientación a resultados', 'Mejora continua', 'Adaptabilidad', 'Enfoque en objetivos', 'Comunicación efectiva en equipos ágiles'];

interface imgTecnologiaFav {
    name: string;
    linkImg: string;
}

export const imgTecnologiasFav: imgTecnologiaFav[] = [
    {
        name: 'Typescript',
        linkImg: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
    },
    {
        name: 'Javascript',
        linkImg: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
    },
    {
        name: 'React',
        linkImg: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
    },
    {
        name: 'Angular',
        linkImg: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg'
    },
    {
        name: 'NodeJS',
        linkImg: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg'
    },
    {
        name: 'PHP',
        linkImg: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg'
    },
    {
        name: 'Git',
        linkImg: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
    },
    {
        name: 'PostgreSQL',
        linkImg: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg'
    },
];

export interface Tecnologia{
    name: string;
    linkImg: string;
    progress: number;
}

export const tecnologias = {
    frontend: [
        {
            name: 'Angular',
            linkImg: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
            progress: 90
        },
        {
            name: 'Ract',
            linkImg: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
            progress: 85
        },
        {
            name: 'Typescript',
            linkImg: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
            progress: 85
        },
        {
            name: 'Javascript',
            linkImg: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
            progress: 90
        },
        {
            name: 'Tailwind CSS',
            linkImg: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
            progress: 90
        },
        {
            name: 'Bootstrap',
            linkImg: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg',
            progress: 90
        },
        {
            name: 'HTML',
            linkImg: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
            progress: 85
        },
        {
            name: 'CSS',
            linkImg: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
            progress: 80
        },
    ],
    backend: [
        {
            name: 'Node.js',
            linkImg: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg',
            progress: 85
        },
        {
            name: 'NestJS',
            linkImg: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original-wordmark.svg',
            progress: 90
        },
        {
            name: 'PHP',
            linkImg: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
            progress: 95
        },
        {
            name: 'MySQL',
            linkImg: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg',
            progress: 85
        },
        {
            name: 'PostgreSQL',
            linkImg: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg',
            progress: 85
        },
    ],
    otros: [
        {
            name: 'Git',
            linkImg: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
            progress: 90
        },
        {
            name: 'Jest',
            linkImg: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
            progress: 90
        },
        {
            name: 'Vitest',
            linkImg: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg',
            progress: 90
        },
    ],
}

export interface Project {
    title: string;
    description: string;
    tecnologies: string[];
    image: string;
    urlBackend: string;
    urlFrontend: string;
}

export const proyectos: Project[] = [
    {
        title: 'Kanban App',
        description: 'Aplicación full-stack diseñada para la administración y seguimiento de flujo de trabajo en tiempo real, desarrollada con Angular en el frontend y NestJS en el backend.',
        tecnologies: ['Angular', 'NestJS', 'Typescript', 'Jest', 'TypeORM', 'MySQL'],
        image: '/kanbanapp.png',
        urlBackend: 'https://github.com/CristianHortua98/kanban-backend',
        urlFrontend: 'https://github.com/CristianHortua98/kanban-frontend'
    },
    {
        title: 'Heroes App',
        description: 'Aplicación full-stack diseñada para la visualizacion de heroes y sus estadisticas, desarrollada con React en el frontend y NestJS en el backend.',
        tecnologies: ['React', 'TanstackQuery', 'Typescript', 'Shadcn', 'NestJS', 'Vitest'],
        image: '/heroesapp.png',
        urlBackend: 'https://github.com/CristianHortua98/heroes-app-nest',
        urlFrontend: 'https://github.com/CristianHortua98/heroes-app-react'
    },
    {
        title: 'Ventas App',
        description: 'Aplicación de ventas full-stack desarrollada con React en el frontend y NestJS en el backend, con visualización dinámica de productos y gestión de carrito de compras.',
        tecnologies: ['React', 'NestJS', 'Typescript', 'Shadcn', 'Zustand', 'PostgreSQL'],
        image: '/ventasapp.png',
        urlBackend: 'https://github.com/CristianHortua98/ventas-backend',
        urlFrontend: 'https://github.com/CristianHortua98/ventas-frontend'
    },
]