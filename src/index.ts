import * as express from "express";
import { Request, Response } from "express";
import Person from "@/person";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send(new Person().sayHello());
});

app.listen(8081, () => console.log("Listening on port 8081!"));
