// @ts-ignore
import * as express from "express";
import * as bodyParser from 'body-parser';
import user_routes from "./handlers/users";
import order_routes from "./handlers/orders";
import products_routes from "./handlers/products";
import dashboardRoutes from "./handlers/dashboard";

const app: express.Application = express();

const address: string = 'localhost:5000';
app.use(bodyParser.json());


user_routes(app);
products_routes(app);
order_routes(app);
dashboardRoutes(app);

app.listen(5000, function () {
  console.log(`starting app on: ${address}`);
});