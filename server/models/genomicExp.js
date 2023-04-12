import mongoose from 'mongoose';

const genomicExp = mongoose.Schema({
    marker: String,
    repeat_type: Number,
    repeat_motif: String,
    copy_no: Number,
    repeat_size: Number,
    forward_primer: String,
    reverse_primer: String,
    annealing_temperature_ta_oc: Number,
    allele_size_range_bp: String,
    PIC: Number,
    reference: String
    // createdAt: {
    //     type: Date,
    //     default: new Date()
    // }
}, { collection : 'genomic-exp' });

const GenomicExp = mongoose.model('genomic-exp', genomicExp);

export default GenomicExp;