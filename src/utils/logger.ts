type LogType = 'log' | 'warn' | 'error' | 'info' | 'debug';

export function logMessage(
  logType: LogType,
  message: string,
  error?: unknown,
): void;
export function logMessage(message: string, error?: unknown): void;

export function logMessage(
  logTypeOrMessage: LogType | string,
  messageOrError?: string | unknown,
  error?: unknown,
): void {
  if (__DEV__) {
    let logType: LogType = 'log';
    let message: string;
    let err: unknown;

    if (
      typeof logTypeOrMessage === 'string' &&
      ['log', 'warn', 'error', 'info', 'debug'].includes(logTypeOrMessage)
    ) {
      logType = logTypeOrMessage as LogType;
      message = messageOrError as string;
      err = error;
    } else {
      message = logTypeOrMessage;
      err = messageOrError;
    }

    const logFunction = console[logType] || console.log;
    err ? logFunction(message, err) : logFunction(message);
  }
}
