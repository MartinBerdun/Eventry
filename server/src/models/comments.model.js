import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    user_comments: {
        type: String,
        required: true,
    },
    responses: [
        {
            user_ref: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true,
            },
            response_text: {
                type: String,
                required: true,
            },
        },
    ],
});

const commentModel = mongoose.model('Comment', commentSchema);

export default commentModel;
