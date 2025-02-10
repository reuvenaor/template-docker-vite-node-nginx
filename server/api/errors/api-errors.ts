import httpStatus from 'http-status';
import ExtendableError from './extandable-error';

export interface APIErrorPayload {
  message: string;
  errors?: any;
  stack?: string;
  status: number;
  isPublic: boolean;
}

/**
 * Class representing an API error.
 * @extends ExtendableError
 */
// /**
//  * Creates an API error.
//  * @param {string} message - Error message.
//  * @param {number} status - HTTP status code of error.
//  * @param {boolean} isPublic - Whether the message should be visible to user or not.
//  */
class APIError extends ExtendableError {
  constructor({
    message,
    errors,
    stack,
    status = httpStatus.INTERNAL_SERVER_ERROR,
    isPublic = false,
  }: Pick<
    APIErrorPayload,
    'message' | 'errors' | 'status' | 'isPublic' | 'stack'
  >) {
    super({
      message,
      errors,
      status,
      isPublic,
      stack,
    });
  }
}

export default APIError;
