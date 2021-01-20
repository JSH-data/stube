import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => { // async는 자바스크립트가 함수의 특정 부분을 기다리라고 명령하는 것
    try { // error를 잡아내기 위한 작업
        // throw Error("asdasdasdasd") 에러 테스트 용
        const videos = await Video.find({}).sort( {_id: -1}); // {_id: -1} 새로 올리는 동영상 순서대로 정렬
        res.render("home", { pageTitle : "Home", videos });
    } catch(error) {
        console.log(error); //에러는 출력
        res.render("home", { pageTitle : "Home", videos:[] }); // 원하는 작업인 videos를 못찾고 에러를 일으켰을때 비우고 에러처리를 시키지 않는다.
    }
}; // views 폴더에서 자동적으로 파일명이 home이고 확장자가 pug인 파일을 찾아줌
export const search = async(req, res) => {
    // console.log(req.query.term) 우리가 검색한 term이 request에서 javascript의 객체 형태로 들어온다! 참고로 받아올때 action의 method는 get이여야함 그래야 받아올 수 있음
    const {
        query : { term: searchingBy } 
    } = req; // searchingBy = req.query.term 똑같은 말임,,,
    let videos = []
    try {
        videos = await Video.find({ title : {$regex: searchingBy, $options: "i"} });
    } catch(error) {
        console.log(error)
    }
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
export const getUpload = (req, res) => res.render("upload", { pageTitle : "Upload" }); // 첫줄의 pageTitle이 home.pug 템플릿으로 전달되었다,  MVC의 V파트

export const getEditVideo = async(req, res) => {
    const { params:{ id } } = req;
    try {
        const video = await Video.findById(id); // await은 async안에서만 작동함, 해당작업이 끝날때까지 기다려준다. 
        res.render("editVideo", { pageTitle : `Edit ${video.title}`, video });
    }catch (error) {
        res.redirect(routes.home);
    }
};
export const postEditVideo = async(req, res) => {
    const {body:{title, description}, params:{ id }} = req;
    try {
        await Video.findOneAndUpdate( // const로 변수를 지정하지 않는 이유는 update 하는 값을 굳이 변화시키지 않아도 되기 때문이다. 
            {_id: id}, // mongoose는 id 값을 _id 갖고 있기 때문에 이렇게..
            {title, description} // editVideo에서 변경시 변하는 값만 업데이트 해준다!
        );
        res.redirect(routes.videoDetail(id));
    } catch(error) {
        res.redirect(routes.home);
    }
};

export const videoDetail = async(req, res) => {
    const {params:{ id }} = req;
    try {
        const video = await Video.findById(id); // 몽구스의 findbyid를 활용 인자로 id를 건내주어 video를 찾아온다. 
        console.log(video)
        res.render("videoDetail", { pageTitle : video.title, video })
    }catch(error){
        console.log(error)
        res.redirect(routes.home)
    };    
};
export const deleteVideo = async(req, res) =>{
    const {params:{ id }} = req;
    try {
        await Video.findOneAndDelete({ _id: id })
    } catch(error) {
        console.log(error)
    }
    res.redirect(routes.home)
};  // MVC중의 C파트