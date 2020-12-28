export const home = (req, res) => res.render("home"); // views 폴더에서 자동적으로 파일명이 home이고 확장자가 pug인 파일을 찾아줌
export const search = (req, res) => res.render("search");
export const videos = (req, res) => res.render("videos");
export const upload = (req, res) => res.render("upload")
export const editVideo = (req, res) => res.render("editVideo");
export const videoDetail = (req, res) => res.render("videoDetail");
export const deleteVideo = (req, res) => res.render("deleteVideo");  // MVC중의 C파트
