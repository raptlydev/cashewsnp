import mongoose from 'mongoose';

const users = mongoose.Schema({
    searchName: String,
    searchInstituteName: String,
    searchEmail: String
}, { collection : 'users' });

const Users = mongoose.model('users', users);

export default Users;