import BaseError from './BaseError';

export default class NotFoundError extends BaseError {
  statusCode = 404;

  constructor() {
    super('Route not found');

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [
      {
        message: 'Not Found',
      },
    ];
  }
}
