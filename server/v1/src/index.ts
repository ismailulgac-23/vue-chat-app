import express, { Request, Response } from 'express';
import http from 'http';
import cors from 'cors';
import { User } from './routes/index';
(async () => {

  const app = express();
  const server = http.createServer(app);
  const serverPort = process.env.PORT || 3000;

  app.use(cors());
  app.use(express.json());

  app.use("/api/user", User),

    server.listen(serverPort, () => {
      console.log(`Server is running on ${serverPort} port..`);
    });

})();