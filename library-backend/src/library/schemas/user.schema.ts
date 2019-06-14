import * as mongoose from 'mongoose';

export const UserModel = new mongoose.Schema({
    email: String,
    password: String
});