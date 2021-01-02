// mongodb 자료형 지정하기위한 작업
import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: "File URL is required" // FileUrl이 없는경우 받게되는 에러 메시지
    },
    title: {
        type: String,
        required: "Title is required"
    },
    description: String,
    views:{
        type: Number,
        default:0
    },
    createdAt: {
        type: Date,
        default: Date.now // 현재시각
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId, // 각 코멘트의 ID 타입
        ref:"Comment" // 어떤 모델을 참조하는지 작성, 실제 객제로 변경하는 작업도 겸직 ㅎㅎ
    }]
});

const model = mongoose.model("Video", VideoSchema);

export default model;