import express from "express"
import { changePassword, editProfile, userDetail, users } from "../controllers/userController";
import routes from "../routes" 

const userRouter = express.Router();

userRouter.get(routes.editProfile, editProfile); // editProfile이 아래있다면 id로 인식해버린다.! 주소 에러
userRouter.get(routes.userDetail(), userDetail); // userDetail이 함수로 바뀌었기 때문에 괄호를 넣어주어야합니다 템플릿에서는 id값을 인잘로 넣어주어야 작동합니다.
userRouter.get(routes.changePassword, changePassword);

export default userRouter;