import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator} from '@angular/forms';

@Directive({
  selector: '[appValidatePassword]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ValidatePasswordDirective,
    multi: true
  }]
})
export class ValidatePasswordDirective implements Validator {

  passwordPattern: RegExp;
  constructor() { 
    this.passwordPattern = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
  }

  validate(passwordField: AbstractControl) : { [key: string]: any } | null {
    if (passwordField?.value && !this.passwordPattern.test(passwordField.value)) {
      return { invalid: true };
    }
    return null;    
  }
}
