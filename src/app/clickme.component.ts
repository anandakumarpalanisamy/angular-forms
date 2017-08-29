import { Component } from '@angular/core';

@Component({
    selector: 'click-me',
    template: `
                <button md-raised-button (click)="clickMe()">Click Me!</button>
                {{clickMessage}}
    `

})
export class ClickMeComponent {

    clickMessage = '';
    
    clickMe(){
        this.clickMessage = 'Hello there!!! Good Morning !!!';
    }

}