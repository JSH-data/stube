 //import express from "express"

//export const userRouter = express.Router(); // 한방에 모듈 export하기

/*
userRouter.get("/", (req,res) => res.send("user index")) // index 기준이 됨
userRouter.get("/edit", (req,res) => res.send("user edit"))
userRouter.get("/password", (req,res) => res.send("user password")) userRouter.js로 이전*/


// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";
 
// Users
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id"; // express가 자동으로 id를 값이 변하는 값이라고 인식하게된다.
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";


// 객체를 생성합니다. 
const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: (id) => {
      if(id) {
        return `/users/${id}`;
      } else {
        return USER_DETAIL;
      }
    },
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: (id) => {
      if(id) {
        return `/videos/${id}`;
      } else {
        return VIDEO_DETAIL;
      }
    },
    editVideo : (id) => {
      if(id) {
        return `/videos/${id}/edit`
      } else {
        return EDIT_VIDEO;
      }
    },
    deleteVideo : (id) => {
      if(id) {
        return `/videos/${id}/delete`;
      } else {
        return DELETE_VIDEO;
      }
    }
  };
  
  export default routes; // 객체를 어디서든지 사용할 수 있도록 도와줍니다. 