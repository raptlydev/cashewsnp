import mongoose from 'mongoose';

const cashewSnp = mongoose.Schema({
    genotype_name: String,
    scaffold_no: Number,
    position: Number,
    reference: String,
    variant: String,
    snp_change: String,
    mutation_type: String,
    zygosity: String,
    location_within_gene: String,
    quality: Number,
    coverage: Number,
    gene_id: String,
    trancript_id: String,
    exon_id: String,
    exon_rank: String,
    old_aa_new_aa: String,
    old_codon_new_codon: String,
    codon_num_cds: String

}, { collection : 'masterData' });

const CashewSnp = mongoose.model('masterData', cashewSnp);

export default CashewSnp;