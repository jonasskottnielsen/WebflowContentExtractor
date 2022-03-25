// import the winston library
import winston from "winston";

// filter function,
// that will allow logging only the specified log level
const filter = (level) => winston.format((info) => {
  if (info.level === level) {
    return info;
  }
})();

// log levels system
const levels = {
  fatal: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
  http: 5,
};

const transports = [
  // create a logging target for errors and fatals
  new winston.transports.File({
    filename: "error.log",
    level: "error",
    format: winston.format.combine(
      // add a timestamp
      winston.format.timestamp(),
      // use JSON form
      winston.format.json()
    )
  }),

  // create a logging target for logs of different levels
  new winston.transports.File({
    filename: "info.log",
    level: "info",
    format: winston.format.combine(
		winston.format.timestamp(),
		winston.format.json()
	)
  }),
  
  // create a logging target for debug logs
  new winston.transports.Console({
    level: "debug",
    // specify format for the target
    format: winston.format.combine(
      // process only debug logs
      filter("debug"),
      // colorize the output
      winston.format.colorize(),
      // add a timestamp
      winston.format.timestamp(),
      // use simple form
      winston.format.simple()
    )
  }),

];

// create a Winston logger
const Logger = winston.createLogger({
  // specify the own log levels system
  levels,
  // specify the logging targets
  transports
});

export default Logger;