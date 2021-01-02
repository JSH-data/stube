import routes from "./routes";
import multer from "multer";

const multerVideo = multer({ dest: 'uploads/videos/' }); // 서버에 있는 폴더... 업로드할 곳.. multer가 자동으로 만들어줌 맨앞에 / 붙이기 금지

export const localMiddleware = (req, res, next) => {
    res.locals.siteName = "STube" // local에 존재하는 것은 변수명처럼 존재하게 된다
    res.locals.routes = routes; // 테플릿 전체에 뿌려줍니다. 
    res.locals.user = {
        id: 1,
        isAthenticated: true
    };
    next(); //미들웨어가 다음 라우터들에게 req을 전달합니다.
};

export const uploadVideo = multerVideo.single("videoFile"); // 하나의 파일만 업로드할 수 있도록 도와주며 videoFile은 html이 받아오는 name필드의 이름이다. 