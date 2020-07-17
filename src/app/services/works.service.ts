import { Injectable } from '@angular/core';

@Injectable()
export class WorksService {

    private works: Work[] = [
        {
            name: 'Ricomida',
            technologies: [
                'HTML5',
                'CSS3',
                'Bootstrap 4'
            ],
            description: 'Pagina Web Simple Con HTML para Recetas',
            img: 'assets/ricomida.png',
            url: 'https://hugomoraga.ml/sites/ricomida/'
        },
        {
            name: 'Cuppon',
            technologies: [
                'HTML5',
                'CSS3',
                'Bootstrap 4'
            ],
            description: 'Pagina Web de cupones',
            img: 'assets/cuppon.png',
            url: 'https://hugomoraga.ml/sites/cuppon/'
        },
        {
            name: 'Oliva Ros',
            technologies: [
                'HTML5',
                'CSS3',
                'Bootstrap 4'
            ],
            description: 'Pagina Web tipo portafolio',
            img: 'assets/oliviaros.png',
            url: 'https://hugomoraga.ml/sites/oliviaros/'
        },
        {
            name: 'Hugo Moraga Web',
            technologies: [
                'HTML5',
                'CSS3',
                'Bootstrap 4'
            ],
            description: 'Antigua web personal',
            img: 'assets/oldportafolio.png',
            url: 'https://hugomoraga.ml/sites/old-portafolio/index.html'
        },
        {
            name: 'Meet and Coffe',
            technologies: [
                'HTML5',
                'CSS3',
                'Bootstrap 4'
            ],
            description: 'Web de Reuniones Tecnologicas',
            img: 'assets/meetcoffe.png',
            url: 'https://hugomoraga.ml/sites/meetcoffe'
        },
        {
            name: 'RickAndMorty Apps',
            technologies: [
                'Angular 8',
                'API',
                'TypeScript',
                'Material Design'
            ],
            description: 'Angular Apps, con consumo de API de Rick And Morty',
            img: 'assets/rickandmorty.png',
            url: 'https://hugomoraga.github.io/rickandmorty-app/home'
        },
        {
            name: 'Veganlog',
            technologies: [
                'Ruby on Rails',
                'Crud',
                'Cloud Storage',
            ],
            description: 'Aplicacion Ruby On Rails Con Buscador de Productos Veganos',
            img: 'assets/Veganlog.jpg',
            url: 'https://veganlog.herokuapp.com'
        },
    ];

    constructor() {
        console.log('servicio listo para usar');
    }

    getWorks(): Work[] {
        return this.works;
    }

}
export interface Work {
    name: string;
    technologies: string[];
    description: string;
    img: string;
    url: string;
}

