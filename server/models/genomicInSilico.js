import mongoose from 'mongoose';

const genomicInSilico = mongoose.Schema({
    scaffold: String,
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
}, { collection : 'genomic-InSilico' });

const GenomicInSilico = mongoose.model('genomic-InSilico', genomicInSilico);

export default GenomicInSilico;