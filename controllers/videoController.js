import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => { // async는 자바스크립트가 함수의 특정 부분을 기다리라고 명령하는 것
    try { // error를 잡아내기 위한 작업
        // throw Error("asdasdasdasd") 에러 테스트 용
        const videos = await Video.find({}); // await은 async안에서만 작동함, 해당작업이 끝날때까지 기다려준다. 
        res.render("home", { pageTitle : "Home", videos });
    } catch(error) {
        console.log(error); //에러는 출력
        res.render("home", { pageTitle : "Home", videos:[] }); // 원하는 작업인 videos를 못찾고 에러를 일으켰을때 비우고 에러처리를 시키지 않는다.
    }
}; // views 폴더에서 자동적으로 파일명이 home이고 확장자가 pug인 파일을 찾아줌
export const search = (req, res) => {
    // console.log(req.query.term) 우리가 검색한 term이 request에서 javascript의 객체 형태로 들어온다! 참고로 받아올때 action의 method는 get이여야함 그래야 받아올 수 있음
    const {
        query : { term: searchingBy } 
    } = req; // searchingBy = req.query.term 똑같은 말임,,,
    res.render("search", { pageTitle : "Search", searchingBy, videos }) // render 함수의 첫번째 인자는 템플릿, 두 번째 인자는 템플릿에 추가할 정보가 담긴 객체이다.  
};

export const postUpload = async (req, res) => {
    const {
        body : { title, description },
        file : { path } // multer로 업로드했을때 file에서 path를 확인가능 
    } = req;
    const newVideo = await Video.create({ // db에 Video 생성
        fileUrl: path,
        title: title,
        description // description : description
    });
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));
    // To do: Upload and save video
}
export const getUpload = (req, res) => res.render("upload", { pageTitle : "Upload" }) // 첫줄의 pageTitle이 home.pug 템플릿으로 전달되었다,  MVC의 V파트
export const editVideo = (req, res) => res.render("editVideo", { pageTitle : "Edit Video" });
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle : "Video Detail" });// .render의두번째 인자로 전달됨 
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle : "Delete Video" });  // MVC중의 C파트