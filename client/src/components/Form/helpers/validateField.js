import {regex} from '../../../shared/regex'


export const validateField = (value) => {
  const minLength =  value.length >= 6;
  const space =  value.match(regex.validationSpace)
  return [minLength, !!space]
}
