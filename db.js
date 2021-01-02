import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); // .env에 존재하는 변수들을 불러옴

mongoose.connect(
  process.env.MONGO_URL, 
  {
    useNewUrlParser: true,
    useFindAndModify: false, 
    useUnifiedTopology: true
  }
); // 27017은 몽고디비 전용포트

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = (error) => console.log(`Error in DB Connection:${error}`); // 에러 체크용

db.once("open", handleOpen);
db.on("error", handleError);