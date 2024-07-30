import commentModel from "../models/comments.model.js";
import jwt from 'jsonwebtoken';
import config from "../config.js";

const {JWT_SECRET} = config;

export const getCommentsService = async ()=> {
    try {
        
        const comments = await commentModel.find().populate('responses.user_ref')
        if (comments.length === 0) {
            throw new Error("No comments found");
          }

        return comments;

    } catch (error) {
        throw new Error(`Error al obtener comentarios: ${error.message}`);
    }
}


export const createCommentService = async ( commentData ) => {
    try {
        const token = jwt.verify(token, JWT_SECRET);
        console.log(token);
        const userId = token.user_id;

        commentData.user_ref = userId;

        const comment = commentModel.create(commentData)

        if(!comment) throw new Error("No comment created");

        return comment;

    } catch (error) {
        throw new Error(error.message);
    }
}

export const updateCommentService = async ( ) => {
    try {
        
        const updatedComment = await commentModel.findByIdAndUpdate()

        if(!updatedComment) throw new Error("No comment updated");

        return updatedComment;

    } catch (error) {
        throw new Error(error.message);
    }
}

export const deleteCommentService = async ( ) => {
    try {
        const deletedComment = await commentModel.findByIdAndDelete();

        if(!deletedComment) throw new Error("No comment deleted");

        return deletedComment;
    } catch (error) {
        throw new Error(error.message);
    }
}