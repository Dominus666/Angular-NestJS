import * as mongoose from 'mongoose';

export const BookModel = new mongoose.Schema({
    title: String,
    description: String,
    author: Array  
});

