import {Component} from '@angular/core';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    public content: string[] = new Array(50)
        .fill(null)
        .map(_ => 'This is an item');

    constructor() {
    }

}
