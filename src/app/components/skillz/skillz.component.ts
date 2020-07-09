import { Component, OnInit } from '@angular/core';
declare  var jQuery: any;
declare var $: any;







@Component({
  selector: 'app-skillz',
  templateUrl: './skillz.component.html',
  styleUrls: ['./skillz.component.scss']
})
export class SkillzComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const words = $('#tagi text');
    const l = words.length;
    let current = null;
    const delay = 2000;

    function clearBlink(o) {
        const ca = o.getAttribute('class').split(' ');
        const i = ca.indexOf('blink');

        if (i !== -1) {
            ca.splice(i, 1);
            o.setAttribute('class', ca.join(' '));
        }
    }

    function addBlink(o) {
        const ca = o.getAttribute('class').split(' ');
        ca.push('blink');
        o.setAttribute('class', ca.join(' '));
    }

    function wordblink() {

        let e;

        if (current !== null) {
            clearBlink(words.eq(current)[0]);
        }

        current = Math.floor(Math.random() * l);
        e = words.eq(current);
        addBlink(e[0]);

        setTimeout(wordblink, delay);
    }

    wordblink();
  }

}
