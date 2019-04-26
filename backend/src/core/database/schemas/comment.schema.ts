import * as mongoose from 'mongoose';

export const CommentSchema: mongoose.Schema = new mongoose.Schema({
    id: String,
    taskId: String,
    message: String,
    createDate: String
});
