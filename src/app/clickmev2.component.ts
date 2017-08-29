import { Component } from '@angular/core';

@Component({
    selector: 'click-me-v2',
    template: `
                    <button md-raised-button (click)="clickMe($event)">Click Me too!!!</button>
                    {{clickMessage}}
    `
})
export class ClickMeComponentV2 {
    
    clickMessage = '';
    clicks = 1;

    clickMe(event: any){
        let eventMessage = event ? 'Event target is ' + event.target.tagName : '';
        this.clickMessage = (`Click #${this.clicks++}. ${eventMessage}`);
    }
}