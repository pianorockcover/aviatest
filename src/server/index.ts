import "core-js/es7/reflect";
import { createExpressServer } from "routing-controllers";
import { UserController } from "./controllers/UserController";
import { initServer } from "./initServer";
import env from "../../env.json";

initServer();

const app = createExpressServer({
  controllers: [UserController],
  middlewares: [initServer],
});

app.listen(env.serverPort, () => {
  console.log("Server was started");
});
