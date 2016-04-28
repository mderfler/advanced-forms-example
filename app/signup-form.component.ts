import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {UsernameValidators} from './usernameValidators';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html'
})
export class SignUpFormComponent {
      form: ControlGroup;
      
      constructor(fb: FormBuilder){
          this.form = fb.group({
              username:['',Validators.compose([
                  Validators.required, 
                  UsernameValidators.cannotContainSpace
                  ]), UsernameValidators.shouldBeUnique], //this array can take 3 params: default value, 1 or more custom synchronous validators, 1 or more async validators
              password:['',Validators.required]
          })
      }
   
    // form = new ControlGroup({
    //     username: new Control('', Validators.required),
    //     password: new Control('', Validators.required)
    // });
    
    signup(){
        //var result = authService.login(this.form.value);
      if (this.form.value.username==="who"){
        this.form.find('username').setErrors({
            invalidLogin: true
        })
      }else
        console.log(this.form.value);
    }
}