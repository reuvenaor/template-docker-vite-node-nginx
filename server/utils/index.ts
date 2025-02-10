const getEnvironment =
  process.env.NODE_ENV === 'production' ? 'production' : 'dev';

export { getEnvironment };
