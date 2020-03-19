import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Tab1Page} from './tab1.page';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';
import {FooterTestComponent} from './footer-test/footer-test.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        RouterModule.forChild([
            {path: '', component: Tab1Page},
            {path: 'footer', component: FooterTestComponent}
        ])
    ],
    declarations: [Tab1Page, FooterTestComponent]
})
export class Tab1PageModule {
}
