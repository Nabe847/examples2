const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.
        winston.format.errors({ stack: true }),
        winston.format.json()
    ),
    transports: [new winston.transports.Console({ stderrLevels: ['error'] })],
});

logger.info({ userId: 'xxx-xxx-xxx', message: 'hello winston!' });
logger.info({ userId: 'xxx-xxx-xxx', message: 'aaa' });
logger.info({ userId: 'xxx-xxx-xxx', message: 'bbb' });
logger.info({ userId: 'xxx-xxx-xxx', message: 'ccc' });
logger.info('hogehoge');
