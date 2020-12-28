import app from "./app"; // app 모듈을 불러옵니다. 서버 시작을 담당하게됨

const PORT = 4000;

const handelListening = () =>
    console.log(`Listening on: http://Localhost:${PORT}`);

app.listen(PORT, handelListening);