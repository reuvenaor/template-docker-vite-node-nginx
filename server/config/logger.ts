import winston from 'winston';
import querystring from 'querystring';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

logger.add(
  new winston.transports.Console({
    format: winston.format.simple(),
  }),
);

logger
  .stream({
    write: (message: string, obj?: querystring.ParsedUrlQueryInput) => {
      logger.info(message.trim() + '\n' + querystring.encode(obj));
    },
  })
  .on('log', function (log) {
    console.log('log', log);
  });

export default logger;
