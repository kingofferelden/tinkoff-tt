import * as mongoose from 'mongoose';

export const TaskSchema: mongoose.Schema = new mongoose.Schema({
    id: String,
    projectId: String,
    createDate: String,
    name: String,
    description: String,
    type: String,
    startDate: String,
    dueDate: String,
    priority: String,
    assigned: String,
    reporter: String
});
