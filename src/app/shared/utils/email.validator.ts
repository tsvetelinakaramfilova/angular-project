import { ValidatorFn } from '@angular/forms';
import { EMAIL_DOMAINS_FIRST_PART } from 'src/app/constants';

export function emailValidator(domains: string[]): ValidatorFn {
  const domainString = domains.join('|');
  const domainStringFirstPart = EMAIL_DOMAINS_FIRST_PART.join('|')
  const regExp = new RegExp(`[A-Za-z0-9]+@(${domainStringFirstPart})\.(${domainString})`);

  return (control) => {
    const isEmailInvalid = control.value === '' || regExp.test(control.value);
    return isEmailInvalid ? null : { emailValidator: true };
  };
}
