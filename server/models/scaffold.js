import mongoose from 'mongoose';

const scaffold = mongoose.Schema({
    Scaffold: String
}, { collection : 'scaffolds' });

const Scaffold = mongoose.model('scaffolds', scaffold);

export default Scaffold;