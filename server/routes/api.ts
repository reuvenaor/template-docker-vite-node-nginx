import { Router } from 'express';

export default function api() {
  const router = Router();

  router
    .use((req, _res, next) => {
      if (!req.body) {
        next(new Error('Bad request'));
        return;
      }

      next();
    })
    .use('/v1', apiV1())
    .use((_req, res, _next) => {
      res.json({
        error: 'Invalid route',
      });
    });

  return router;
}

function apiV1() {
  const router = Router();

  router.use((_req, _res, next) => {
    console.log('API V1');
    next();
  });

  return router;
}
