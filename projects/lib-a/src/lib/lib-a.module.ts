import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpaceComponent } from './space.component';

@NgModule({
    declarations: [
        SpaceComponent,
    ],
    exports: [
        SpaceComponent,
    ],
    imports: [
        CommonModule,
    ],
    providers: [
    ],
    bootstrap: [],
    entryComponents: [],
})
export class LibAModule {
}


export {
    SpaceComponent,
}
