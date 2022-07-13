import express, { Request, Response } from 'express';
import http from 'http';
import cors from 'cors';
(async () => {

  const app = express();
  const server = http.createServer(app);
  const serverPort = process.env.PORT || 3000;

  app.use(cors());
  app.use(express.json());

  app.get("/hello", (req: Request, res: Response) => {
    return res.status(200).json({
      hello: "greeting"
    });
  });

  server.listen(serverPort, () => {
    console.log(`Server is running on ${serverPort} port..`);
  });

})();