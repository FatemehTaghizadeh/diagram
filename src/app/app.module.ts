import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxDiagramModule} from "../../projects/ngx-diagram/src/lib/ngx-diagram.module";
import{DragDropModule} from '@angular/cdk/drag-drop';
//import {NgxDiagramModule} from 'ngx-diagram';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, NgxDiagramModule,DragDropModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
