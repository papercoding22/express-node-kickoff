import { ValidationError } from 'express-validator';
import BaseError from './BaseError';

export default class RequestValidationError extends BaseError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super('Invalid request parameters');
    // Only because we are extending a built-in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map(err => ({
      message: err.msg,
      field: err.type === 'field' ? err.path : '',
    }));
  }
}
