import { Component } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject } from 'rxjs';
import { map, filter, startWith } from 'rxjs/operators';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent {

  logStream$ = new ReplaySubject<string | number>();

  constructor() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere außerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/

    function producer(o: any) {
      o.next(Math.random());
      o.next(2);
      o.next(3);

      setTimeout(() => o.next(4), 3000);
      setTimeout(() => o.complete(), 4000);
      const myInterval = setInterval(() => o.next('X', 500));

      // Teardown Logic
      return () => {
        clearInterval(myInterval);
      };
    }

    const observer = {
      next: (e: any) => console.log(e),
      error: (e: any) => console.error(e),
      complete: () => console.log('C'),
    };

    const myObs$ = new Observable(producer);

    // producer(observer);
    /*myObs$.subscribe(observer);

    myObs$.subscribe({
      next: e => console.log('BBB', e)
    });
    myObs$.subscribe({
      complete: () => console.log('CCCC')
    });*/

    /*const httpReq$ = new Observable(obs => {
      fetch('https://api.angular.schule/books').then(res => res.json())
        .then(data => obs.next(data))
    })*/

    /******************************/


    // of('A', 'B', 'C')
    // from([1,2,3,4,5])
    // interval(1000)
    // timer(2000)
    timer(2000, 500).pipe(
      map(e => e * 3),
      filter(e => e % 2 === 0)
    ).subscribe({
      next: e => this.log(e),
      error: e => this.log('ERROR: ' + e),
      complete: () => this.log('COMPLETE'),
    });

    /*new Observable(obs => {
      let i = 0;
      setInterval(() => {
        obs.next(i++);
      }, 1000)
    })*/



    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
