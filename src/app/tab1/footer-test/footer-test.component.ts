import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-footer-test',
    templateUrl: './footer-test.component.html',
    styleUrls: ['./footer-test.component.scss'],
})
export class FooterTestComponent implements OnInit {
    public content: string[] = new Array(50)
        .fill(null)
        .map(_ => 'This is an item');

    constructor() {
    }

    ngOnInit() {
    }

}
