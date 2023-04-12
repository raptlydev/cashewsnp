import mongoose from 'mongoose';

const genicInSilico = mongoose.Schema({
    transcript: String,
    repeat_type: Number,
    repeat_motif: String,
    copy_no: Number,
    repeat_size: Number,
    forward_primer: String,
    reverse_primer: String,
    PCR_product_size: Number,
    ta_oc: Number
    // createdAt: {
    //     type: Date,
    //     default: new Date()
    // }
}, { collection : 'genic-InSilico' });

const GenicInSilico = mongoose.model('genic-InSilico', genicInSilico);

export default GenicInSilico;