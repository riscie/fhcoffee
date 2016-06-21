import { Component, Inject } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseAuth } from 'angularfire2';
import { info } from "./info";
import { CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass } from '@angular/common';
import { CHART_DIRECTIVES } from 'ng2-charts';


@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class AppComponent {
    people: FirebaseListObservable<any[]>;

    // Doughnut
    public doughnutChartLabels: string[] = ['some'];
    public doughnutChartData: number[] = [350, 450, 100];
    public doughnutChartType: string = 'doughnut';

    constructor(private af: AngularFire, @Inject(FirebaseAuth) private auth: FirebaseAuth) {
    }

    ngAfterViewInit() {
        this.people = this.af.database.list('people');
        this.af.auth.login(info);
    }

    addCoffee(person) {
        person.count++;
        this.people.update(person.$key, {count: person.count, disabled: true});
        setTimeout(() => {
            this.people.update(person.$key, {disabled: false});
        }, 2000);
    }

    login() {
        // Anonymous
        this.af.auth.login(info);
    }

    logout() {
        this.auth.logout();
    }
}
