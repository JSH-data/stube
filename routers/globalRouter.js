import express from "express";
import { postJoin, getJoin, getLogin, postLogin, logout } from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin); // controller로 함수를 분리하고 export한 변수를 받아온다. 
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home); // get은 특정 경로를 일치시키고 처리
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);


export default globalRouter;