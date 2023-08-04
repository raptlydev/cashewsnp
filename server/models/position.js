import mongoose from 'mongoose';

const position = mongoose.Schema({
    position: Number
}, { collection : 'position' });

const Position = mongoose.model('position', position);

export default Position;