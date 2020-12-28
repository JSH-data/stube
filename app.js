import express from "express"; // 바벨을 사용하여 
import morgan from "morgan"; // morgan을 middleware로 사용하여 로그정보 수집가능
import helmet from "helmet"; // 보안을 위한 middleware인 헬멧
import cookieParser from "cookie-parser";
import bodyParser from "body-parser"; // 사용자가 입력한 폼을 받아오는 역할, 입력한 정보를 담고있는 request object에 접근
// import { userRouter } from "./routers/userRouter";  default로 export하지 않았을땐 이런식으로 import
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { localMiddleware } from "./middleWares";


const app = express();

/*const PORT = 4000;

const handelListening = () =>
    console.log(`Listening on: https://Localhost:${PORT}`) init.js로 이전 ;
*/
//const handleHome = (req, res) => res.send("hi from ass");  // request object와 response object

//const handleProfile = (req,res) => res.send("You are in my profile"); // javascript의 arrow function


app.use(helmet()); // middleware는 몇개든지 만들 수 있음
app.set("view engine", "pug"); // set의 View engine 기능을 사용
app.use(cookieParser());
app.use(bodyParser.json()); // bodyaparser는 사용자가 웹사이트로 전달하는 정보들을 검사하는 미들웨어이다. request 정보에서 form이나 json형태로 된 body를 검사한다. 
app.use(bodyParser.urlencoded({extended : true})); //서버가 유저로부터 받은 데이터를 이해하는 방법
app.use(morgan("dev")); // middleware를 모든 루트에 적용시킵니다. 
app.use(localMiddleware);


app.use(routes.home, globalRouter); // 각 루트들의 뿌리로 
app.use(routes.users, userRouter); 
app.use(routes.videos, videoRouter);
//app.get("/profile", handleProfile) 

//app.get("/", handleHome); // "/"은 홈을 호출하고 중간에 middleware 실행후 handleHome을 살행

//app.use("/user", userRouter) // .use를 사용하여 누군가 /user로 접속시 userRouter의 모든 접근을 하도록 도와준다
  
/*app.listen(4000, handelListening); init.js로 이전*/


// middleware에서 연결을 끊을 수 있다. 방법은 next함수 대신 res.send를 보내주면 끊을 수 있음

/*const middlewareT = (req, res, next) => {
    console.log("hi")
    next() 다음 함수를 실행시킴
    res.send() 연결 끊어버
}*/

export default app; // 모듈, app객체를 다른 파일에게 넘겨주기위함