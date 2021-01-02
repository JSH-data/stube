import "./db"; // db완 연동합니다. 
import app from "./app"; // app 모듈을 불러옵니다. 서버 시작을 담당하게됨
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";
import "./models/Comment";

const PORT = process.env.PORT || 4000; //못찾으면 4000번 key를 숨기는 방법! .env는 키를 숨기기위해 gitignore에 올려야 합니다. 

const handelListening = () =>
    console.log(`Listening on: http://Localhost:${PORT}`);

app.listen(PORT, handelListening);