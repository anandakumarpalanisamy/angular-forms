import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
    selector: 'template-hero-form',
    templateUrl: './template-hero-form.component.html'
})
export class HeroFormTemplateComponent {
    
    powers = [
        'Really Smart', 
        'Super Flexible', 
        'Super Hot', 
        'Weather Changer'
    ];

    hero = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    newHero() {
        this.hero = new Hero(42, '', '');
    }

    get diagnostic() { 
        return JSON.stringify(this.hero); 
    }

    showFormControls(form: any) {
        return form && form.controls['name'] &&
        form.controls['name'].value;
    }

    onSubmit() { this.submitted = true; }

}