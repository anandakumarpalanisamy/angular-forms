import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';

export const emailMatcher = (control: AbstractControl ): { [key: string]: boolean} => {

    const email = control.get('email');
    const confirm = control.get('confirm');
    if(!email || !confirm){
        return null;
    }
    return email.value === confirm.value ? null : { nomatch: true };
};

@Component({
    selector: 'signup-form',
    templateUrl: './signup-form.component.html'
})
export class SignUpFormComponent {

    user: FormGroup;

    constructor(private fb: FormBuilder){

    }

    ngOnInit(){
        this.user = this.fb.group({
            name: ['', Validators.required],
            account: this.fb.group({
                email: ['', Validators.required],
                confirm: ['', Validators.required]
            }, {validator: emailMatcher})
        })
    }

}