import mongoose from "mongoose"

const postSchema = new mongoose.Schema({


    userId : {
        type: String,
        required : true
    },
    content : {
        type: String,
        required : true
    },
    title : {
        type: String,
        required : true,
        unique : true
    },
    image : {
        type : String,
        default : "https://img.freepik.com/free-vector/blogging-concept_23-2148004926.jpg?t=st=1723876057~exp=1723879657~hmac=e7aac76d481bae8773b1d43bbe54f524dcaeed28df1e368b6e3b799787be8fb6&w=740"
    },
    category : {
        type : String,
        default : "uncategorized"
    },
    slug : {
        type : String,
        required : true,
        unique: true,
    },
}, {
    timestamps: true
});


const Post = mongoose.model("Post", postSchema);
export default Post;