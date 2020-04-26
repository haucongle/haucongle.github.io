import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    const el = document.createElement('output');
    document.body.append(el);
    Object.assign(el.style, {
      position: 'fixed',
      bottom: 0,
      left: 0,
      background: 'green',
      color: 'white',
      padding: '5px',
      fontSize: '11px',
      opacity: 0.7,
    });
    const h1 = document.createElement('output');
    document.getElementsByTagName('h1')[0].append(h1);
    Object.assign(h1.style, {
      background: 'red',
      color: 'white',
      padding: '5px',
      fontSize: '11px',
      opacity: 0.7,
    });
    const h2 = document.createElement('output');
    document.getElementsByTagName('h2')[0].append(h2);
    Object.assign(h2.style, {
      background: 'red',
      color: 'white',
      padding: '5px',
      fontSize: '11px',
      opacity: 0.7,
    });
    const h3 = document.createElement('output');
    document.getElementsByTagName('h3')[0].append(h3);
    Object.assign(h3.style, {
      background: 'red',
      color: 'white',
      padding: '5px',
      fontSize: '11px',
      opacity: 0.7,
    });
    const h4 = document.createElement('output');
    document.getElementsByTagName('h4')[0].append(h4);
    Object.assign(h4.style, {
      background: 'red',
      color: 'white',
      padding: '5px',
      fontSize: '11px',
      opacity: 0.7,
    });
    const h5 = document.createElement('output');
    document.getElementsByTagName('h5')[0].append(h5);
    Object.assign(h5.style, {
      background: 'red',
      color: 'white',
      padding: '5px',
      fontSize: '11px',
      opacity: 0.7,
    });
    const h6 = document.createElement('output');
    document.getElementsByTagName('h6')[0].append(h6);
    Object.assign(h6.style, {
      background: 'red',
      color: 'white',
      padding: '5px',
      fontSize: '11px',
      opacity: 0.7,
    });

    for (const pi of <any>document.getElementsByTagName('p')) {
      const p = document.createElement('output');
      Object.assign(p.style, {
        background: 'blue',
        color: 'white',
        padding: '5px',
        fontSize: '11px',
        opacity: 0.7,
      });
      pi.append(p);
    }

    function updateOutput() {
      const html = document.documentElement;
      el.value = `${html.clientWidth} × ${html.clientHeight}`;

      const h1fontSize = parseFloat(
        window
          .getComputedStyle(document.getElementsByTagName('h1')[0])
          .getPropertyValue('font-size')
      );
      h1.value = `${h1fontSize}`;

      const h2fontSize = parseFloat(
        window
          .getComputedStyle(document.getElementsByTagName('h2')[0])
          .getPropertyValue('font-size')
      );
      h2.value = `${h2fontSize}`;

      const h3fontSize = parseFloat(
        window
          .getComputedStyle(document.getElementsByTagName('h3')[0])
          .getPropertyValue('font-size')
      );
      h3.value = `${h3fontSize}`;

      const h4fontSize = parseFloat(
        window
          .getComputedStyle(document.getElementsByTagName('h4')[0])
          .getPropertyValue('font-size')
      );
      h4.value = `${h4fontSize}`;

      const h5fontSize = parseFloat(
        window
          .getComputedStyle(document.getElementsByTagName('h5')[0])
          .getPropertyValue('font-size')
      );
      h5.value = `${h5fontSize}`;

      const h6fontSize = parseFloat(
        window
          .getComputedStyle(document.getElementsByTagName('h6')[0])
          .getPropertyValue('font-size')
      );
      h6.value = `${h6fontSize}`;

      for (const pi of <any>document.getElementsByTagName('p')) {
        const pfontSize = parseFloat(
          window.getComputedStyle(pi).getPropertyValue('font-size')
        );
        pi.getElementsByTagName('output')[0].value = `${pfontSize}`;
      }
    }
    window.addEventListener('resize', updateOutput);
    updateOutput();
  }
}
