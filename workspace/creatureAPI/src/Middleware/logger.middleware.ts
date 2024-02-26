import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

const getProcessingTimeInMS = (time: [number, number]): string => {
    return `${(time[0] * 1000 + time[1] / 1e6).toFixed(2)}ms`;
};

export default function logger(req: Request, res: Response, next: NextFunction) {
    // Generate unique identifier
    const id = uuidv4();

    // Get timestamp
    const now = new Date();
    const timestamp = [
        now.getFullYear(),
        ('0' + (now.getMonth() + 1)).slice(-2), // Pad with leading zero
        ('0' + now.getDate()).slice(-2), // Pad with leading zero
        ' ',
        ('0' + now.getHours()).slice(-2), // Pad with leading zero
        ':',
        ('0' + now.getMinutes()).slice(-2), // Pad with leading zero
        ':',
        ('0' + now.getSeconds()).slice(-2) // Pad with leading zero
    ].join('');

    // Get api endpoint
    const { method, url } = req;

    // Log start of execution process
    const start = process.hrtime();
    const startText = `START: ${getProcessingTimeInMS(start)}`;
    const idText = `[${id}]`;
    const timeStampText = `[${timestamp}]`;

    // All components are ready, show the entry
    console.log(`${idText} ${timeStampText} ${method}:${url} ${startText}`);

    // Trigger once a response is sent to the client
    res.once('finish', () => {
        // Log end of execution process
        const end = process.hrtime(start);
        const endText = `END: ${getProcessingTimeInMS(end)}`;
        console.log(`${idText} ${timeStampText} ${method}:${url} ${res.statusCode} ${endText}`);
    });

    // Execute next middleware event handler
    next();
}