import CashewSnp from "../models/cashewSnp.js";
import Position from "../models/position.js";
import Users from '../models/users.js';
import fs from 'fs';
import { Parser } from 'json2csv'
import path from "path";

export const getCashewSnpData = async (req, res) => {
    try {
        const position = req.body.positionIds || null;
        const genotype_name = req.body.genotypeName || "";
        const scaffold_no = req.body.scaffoldNo || [];
        const snp_change = req.body.snpTypes || "";
        const mutation_type = req.body.mutationType || "";
        const zygosity = req.body.zygosity || "";
        const location_within_gene = req.body.locationGene || "";

        const searchName = req.body.searchName;
        const searchInstituteName = req.body.searchInstituteName;
        const searchEmail = req.body.searchEmail;
        const page = req.body.pageNo || 1;
        const limit = req.body.pageSize || 10;
        const skip = (page - 1) * limit;

        let query = {};
        if(position) {
            query.position = position
        }
        if(genotype_name && genotype_name.length > 0){
            query.genotype_name = {"$in": genotype_name}
        }
        if(scaffold_no && scaffold_no.length > 0){
            query.scaffold_no = {"$in": scaffold_no.map(Number)}
        }
        if(snp_change && snp_change.length > 0){
            query.snp_change = {"$in": snp_change}
        }
        if(mutation_type && mutation_type.length > 0){
            query.mutation_type = {"$in": mutation_type}
        }
        if(zygosity && zygosity.length > 0){
            query.zygosity = {"$in": zygosity}
        }
        if(location_within_gene && location_within_gene.length > 0){
            query.location_within_gene = {"$in": location_within_gene}
        }
        console.log(query, "QUERY");
        if (searchName || searchInstituteName || searchEmail) {
            let searchObj= {
                searchName,
                searchInstituteName,
                searchEmail
            };
            const searchQuery = new Users(searchObj);
            try {
                await searchQuery.save();
                res.status(201).json(searchQuery);
            } catch (error) {
                res.status(409).json({ message: error.message });
            }
        }
        const result = await CashewSnp.find(query).skip(skip).limit(limit);
        const totalRecords = await CashewSnp.countDocuments(query);
        const finalResult = {
            data: result,
            page: page,
            totalPages: Math.ceil(totalRecords / limit),
            totalRecords: totalRecords
        };
        res.status(200).json(finalResult);      
    } catch (error) {
        res.status(404).json({ message: error.message});
    } 
}

export const getPositionData = async (req, res) =>{
    try {
        const postMessages = await Position.find({});
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message});
    } 
}

export const download = async (req, res) => {
    let result;
    try {
        const scaffold = req.body.scaffoldIds || [];
        const repeat_motif = req.body.repeatMotif || "";

        const repeat_type = req.body.repeatType || "";

        const repeatSizeLessEqual = req.body.repeatSizeLessEqual;
        const repeatSizeEqual = req.body.repeatSizeEqual;
        const repeatSizeGreaterEqual = req.body.repeatSizeGreaterEqual;

        const copyNoLessEqual = req.body.copyNoLessEqual;
        const copyNoEqual = req.body.copyNoEqual;
        const copyNoGreaterEqual = req.body.copyNoGreaterEqual;

        const productSizeLessEqual = req.body.productSizeLessEqual;
        const productSizeEqual = req.body.productSizeEqual;
        const productSizeGreaterEqual = req.body.productSizeGreaterEqual;

        const tempLessEqual = req.body.tempLessEqual;
        const tempEqual = req.body.tempEqual;
        const tempGreaterEqual = req.body.tempGreaterEqual;

        const query ={}

        if(scaffold && scaffold.length > 0){
            query.transcript = {"$in": scaffold}
        }
        if(repeat_motif) {
            query.repeat_motif = repeat_motif;
        }

        if(repeatSizeEqual){
            query.repeat_size = {"$eq": repeatSizeEqual}
        }
        if(repeatSizeGreaterEqual){
            query.repeat_size = {"$gte": repeatSizeGreaterEqual}
        }
        if(repeatSizeLessEqual){
            query.repeat_size = {"$lte": repeatSizeLessEqual}
        }
        if(repeatSizeGreaterEqual && repeatSizeLessEqual){
            query.repeat_size = {"$lte": repeatSizeLessEqual, "$gte": repeatSizeGreaterEqual}
        }

        if(copyNoEqual){
            query.copy_no = {"$eq": copyNoEqual}
        }
        if(copyNoGreaterEqual){
            query.copy_no = {"$gte": copyNoGreaterEqual}
        }
        if(copyNoLessEqual){
            query.copy_no = {"$lte": copyNoLessEqual}
        }
        if(copyNoGreaterEqual && copyNoLessEqual){
            query.copy_no = {"$lte": copyNoLessEqual, "$gte": copyNoGreaterEqual}
        }

        if(productSizeEqual){
            query.PCR_product_size = {"$eq": productSizeEqual}
        }
        if(productSizeGreaterEqual){
            query.PCR_product_size = {"$gte": productSizeGreaterEqual}
        }
        if(productSizeLessEqual){
            query.PCR_product_size = {"$lte": productSizeLessEqual}
        }
        if(productSizeGreaterEqual && productSizeLessEqual){
            query.PCR_product_size = {"$lte": productSizeLessEqual, "$gte": productSizeGreaterEqual}
        }

        if(tempEqual){
            query.ta_oc = {"$eq": tempEqual}
        }
        if(tempGreaterEqual){
            query.ta_oc = {"$gte": tempGreaterEqual}
        }
        if(tempLessEqual){
            query.ta_oc = {"$lte": tempLessEqual}
        }
        if(tempGreaterEqual && tempLessEqual){
            query.ta_oc = {"$lte": tempLessEqual, "$gte": tempGreaterEqual}
        }

        if(repeat_type) {
            query.repeat_type = repeat_type
        }

        result = await CashewSnp.find(query);
        const csvFields = ['transcript', 'repeat_type', 'repeat_motif', 'copy_no', 'repeat_size', 'forward_primer', 'reverse_primer', 'PCR_product_size', 'ta_oc'];
        const json2csvParser = new Parser({ csvFields });
        const csv = json2csvParser.parse(result);
        fs.writeFile('database.csv', csv, function(err) {
            if (err) throw err;
            console.log('file saved');
        });
        var file = './database.csv';

        var filename = path.basename(file);

        res.setHeader('Content-disposition', 'attachment; filename=' + filename);
        res.setHeader('Content-type', 'text/csv');

        var filestream = fs.createReadStream(file);
        filestream.pipe(res);
        console.log(csv);
        res.download(file);
        res.send(csv);
        res.end();
    } catch (error) {
        res.status(404).json({ message: error.message});
    } 
}