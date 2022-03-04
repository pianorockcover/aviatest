import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import { SERVER_PORT } from "../common/constants";
import { UserController } from "./controllers/UserController";
import { initServer } from "./initServer";

initServer();

const app = createExpressServer({
  controllers: [UserController],
});

app.listen(SERVER_PORT, () => {
  console.log("Server was started");
});
