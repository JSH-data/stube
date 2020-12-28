import express from "express";
import { join, login, logout } from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, home); // get은 특정 경로를 일치시키고 처리
globalRouter.get(routes.join, join); // controller로 함수를 분리하고 export한 변수를 받아온다. 
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);


export default globalRouter;