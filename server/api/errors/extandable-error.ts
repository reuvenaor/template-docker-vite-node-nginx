import { APIErrorPayload } from './api-errors';

/**
 * @extends Error
 */
class ExtendableError extends Error {
  errors: any;
  status: number;
  isPublic: boolean;
  isOperational: boolean;
  message: string;
  stack?: string;

  constructor({ message, errors, status, isPublic, stack }: APIErrorPayload) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.errors = errors;
    this.status = status;
    this.isPublic = isPublic;
    this.isOperational = true; // This is required since bluebird 4 doesn't append it anymore.
    // Error.captureStackTrace(this, this.constructor.name);
    this.stack = stack;
  }
}

export default ExtendableError;
