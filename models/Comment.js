import mongoose from "mongoose";

const CommentSchema = mongoose.Schema({
    text: {
        type: String,
        required: "Text is required"
    },

    createdAt: {
        type: Date,
        default: Date.now // 현재시각
    },
     video: {
         type: mongoose.Schema.Types.ObjectId, // 비디오의 ID를 타입으로 받는데..
         ref: "Video" // 어떤 모델을 참조하는지 작성, 실제 객제로 변경하는 작업도 겸직 ㅎㅎ
     }
})

const model = mongoose.model("Comment", CommentSchema);
export default model;