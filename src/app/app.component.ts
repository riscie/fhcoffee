import { Component, Inject } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseAuth } from 'angularfire2';
import { info } from "./info";


@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    people: FirebaseListObservable<any[]>;

    constructor(private af: AngularFire, @Inject(FirebaseAuth) private auth: FirebaseAuth) {
    }

    ngAfterViewInit() {
        this.people = this.af.database.list('people');
        this.af.auth.login({ email: 'risc@langaust.com', password: 'mlmlml14' });
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
