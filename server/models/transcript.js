import mongoose from 'mongoose';

const transcript = mongoose.Schema({
    transcript: String
}, { collection : 'transcripts' });

const Transcript = mongoose.model('transcripts', transcript);

export default Transcript;