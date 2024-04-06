import BaseError from './BaseError';

export default class NotAuthorizedError extends BaseError {
  statusCode = 401;

  constructor() {
    super('Not authorized');

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [
      {
        message: 'Not authorized',
      },
    ];
  }
}
