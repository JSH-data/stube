import routes from "./routes";

export const localMiddleware = (req, res, next) => {
    res.locals.siteName = "STube" // local에 존재하는 것은 변수명처럼 존재하게 된다
    res.locals.routes = routes;
    next(); //미들웨어가 다음 라우터들에게 req을 전달합니다.
};