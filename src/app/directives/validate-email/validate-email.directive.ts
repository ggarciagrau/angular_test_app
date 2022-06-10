import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms'; 

@Directive({
  selector: '[appValidateEmail]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ValidateEmailDirective,
    multi: true
  }]
})
export class ValidateEmailDirective implements Validator {

  emailPattern: RegExp;
  constructor() { 
    this.emailPattern = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/);
  }

  validate(emailField: AbstractControl): { [key: string]: any } | null {
      if (emailField?.value && !this.emailPattern.test(emailField.value)) {
        return { invalid: true };
      }
      return null;
  }

}
