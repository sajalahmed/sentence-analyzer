const winston = require('winston');
const path = require('path');
const DailyRotateFile = require('winston-daily-rotate-file'); 
const { combine, timestamp, json, } = winston.format;

const env = process.env.NODE_ENV || 'development';

const LoggerService = {
    /**
     *
     * @returns logger
     */
    logger: (level = null, message = null,) => {
        const consoleTransport = new winston.transports.Console();
        const fileTransport = new DailyRotateFile({
            dirname: path.join(__dirname, '../../../storage/logs'),
            filename: 'file-%DATE%.log',
            extension: '.log',
            datePattern: 'YYYY-MM-DD',
            maxSize: '10m',
            prepend: false,
            zippedArchive: true
        });

        let transports = [consoleTransport, fileTransport];

        const logger = winston.createLogger({
            level: level,
            format: combine(
                timestamp({
                    format: 'DD-MM-YYYY hh:mm:ss.SSS A',
                }),
                json()
            ),
            transports: transports
        });

        if (level !== 'http') {
            logger.log({
                level: level,
                message: message
            });
        }
        return logger;
    }
};

module.exports = LoggerService;
