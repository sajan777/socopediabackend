import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 50
    },
    lastName: {
        type: String,
        max: 10,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    likes: {
        type: Map,
        of: Boolean
    },
    location: String,
    description: String,
    picturePath: String,
    userPicturePath: String,
    comments: {
        type: Array,
        default: []
    }
},{timestamps: true});

const Post = mongoose.model("Posts",PostSchema);

export default Post;