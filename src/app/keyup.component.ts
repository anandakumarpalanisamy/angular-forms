import { Component } from '@angular/core';

@Component({
    selector: 'key-up1',
    template: `
        <md-input-container>
            <input mdInput (keyup)="onKey($event)" placeholder="demo for plain keyboard event">            
        </md-input-container>
        <p>{{values}}</p>
    `
})
export class KeyupComponentV1 {

    values = '';

    onKey(event: any){
        this.values += event.target.value + ' | ';
    }

    /*onKey(event: KeyboardEvent){
        this.values += (<HTMLInputElement>event.target).value + ' | ';
    }*/
}


@Component({
    selector: 'key-up2',
    template: `
        <md-input-container>
            <input mdInput #box (keyup)="onKey(box.value)" placeholder="demo for template variable">            
        </md-input-container>
        <p>{{values}}</p>
    `
})
export class KeyupComponentV2 {

    values = '';

    onKey(value: string){
        this.values += value + ' | ';
    }
}


@Component({
    selector: 'key-up3',
    template: `
        <md-input-container>
            <input mdInput #box (keyup.enter)="onEnter(box.value)" placeholder="demo for keyup enter">            
        </md-input-container>       
        <p>{{value}}</p> 
    `
})
export class KeyupComponentV3 {

    value = '';

    onEnter(value: string){
        this.value = value;
    }
}


@Component({
    selector: 'key-up4',
    template: `
        <md-input-container>
            <input mdInput #box 
                (keyup.enter)="update(box.value)"
                (blur)="update(box.value)" placeholder="demo for keyup and blur">            
        </md-input-container>  
        <p>{{value}}</p>          
    `
})
export class KeyupComponentV4 {

    value = '';

    update(value: string){
        this.value = value;
    }

}

@Component({
  selector: 'loop-back',
  template: `
        <md-input-container>
            <input mdInput #box (keyup)="0" placeholder="demo for loop back template variable">
        </md-input-container>
        <p>{{box.value}}</p>
    `
})
export class LoopbackComponent { }