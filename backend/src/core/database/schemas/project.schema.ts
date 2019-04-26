import * as mongoose from 'mongoose';

export const ProjectSchemas: mongoose.Schema = new mongoose.Schema({
    id: String,
    name: String,
    createDate: String
});
