import { getCommentsService, createCommentService, updateCommentService, deleteCommentService } from "../services/comments.service.js";

export const getCommentsController = async () => {
    try {
        const comments = await getCommentsService();

        if(!comments) throw new Error("No comments found");

        return res.status(200).json({ ticket });

    } catch (error) {
        return res.status(404).json({ error: error.message })
    }
}

export const createCommentsController = async () => {
    try {
        
    } catch (error) {
        throw new Error(error.message);
    }
}