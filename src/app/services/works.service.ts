import { Injectable } from '@angular/core';

@Injectable()
export class WorksService {

    private works: Work[] = [
        {
            name: 'Ricomida',
            technologies: [
                'HTML5',
                'CSS3',
                'BOOTSTRAP'
            ],
            description: 'Pagina Web Simple Con HTML para Recetas',
            img: 'assets/ricomida.png',
            url: 'https://hugomoraga.ml/ricomida/'
        },
        {
            name: 'Cuppon',
            technologies: [
                'HTML5',
                'CSS3',
                'BOOTSTRAP'
            ],
            description: 'Pagina Web de cupones',
            img: 'assets/cuppon.png',
            url: 'https://hugomoraga.ml/cuppon/'
        },
        {
            name: 'Oliva Ros',
            technologies: [
                'HTML5',
                'CS3S',
                'BOOTSTRAP'
            ],
            description: 'Pagina Web tipo portafolio',
            img: 'assets/oliviaros.png',
            url: 'https://hugomoraga.ml/oliviaros/'
        },
        {
            name: 'Hugo Moraga Web',
            technologies: [
                'HTML5',
                'CS3S',
                'BOOTSTRAP'
            ],
            description: 'Antigua web personal',
            img: 'assets/oldportafolio.png',
            url: 'https://hugomoraga.ml/old-portafolio/index.html'
        },
        {
            name: 'Meet and Coffe',
            technologies: [
                'HTML5',
                'CS3S',
                'BOOTSTRAP'
            ],
            description: 'Web de Reuniones Tecnologicas',
            img: 'assets/meetcoffe.png',
            url: 'https://hugomoraga.ml/meetcoffe'
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

