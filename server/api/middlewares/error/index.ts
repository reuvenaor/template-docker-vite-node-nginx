import httpStatus from 'http-status';
// import expressValidation from 'express-validation'; use: // https://github.com/cdimascio/express-openapi-validator
import APIError from '../../errors/api-errors';
import { getEnvironment } from '../../../utils';
import { Request, Response } from 'express';

/**
 * Error handler. Send stacktrace only during development
 * @public
 */
const handler = (err: any, _req: Request, res: Response, _next?: any) => {
  const response = {
    code: err.status,
    message: err.message || httpStatus === err.status,
    errors: err.errors,
    stack: err.stack,
  };

  if (getEnvironment !== 'dev') {
    delete response.stack;
  }

  res.status(err.status);
  res.json(response);
};

/**
 * If error is not an instanceOf APIError, convert it.
 * @public
 */
const converter = (err: any, req: Request, res: Response, _next?: any) => {
  let convertedError = err;
  if (!(err instanceof APIError)) {
    convertedError = new APIError({
      message: err.message,
      status: err.status,
      stack: err.stack,
      isPublic: false,
    });
  }

  return handler(convertedError, req, res);
};

/**
 * Catch 404 and forward to error handler
 * @public
 */
const notFound = (req: Request, res: Response, _next?: any) => {
  const err = new APIError({
    message: 'Not found',
    status: httpStatus.NOT_FOUND,
    isPublic: true,
  });
  return handler(err, req, res);
};

export default { handler, converter, notFound };
