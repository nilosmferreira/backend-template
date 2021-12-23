import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import http from 'http';
import 'express-async-errors';

const app = express();

const serverHTTP = http.createServer(app);

app.use(cors());
app.use(express.json());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    res.json({ message: err.message });
  }
  next(err);
});

export { serverHTTP };
