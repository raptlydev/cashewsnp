import GenicInSilico from "../models/genicInSilico.js";
import Transcript from "../models/transcript.js";
import Users from '../models/users.js';
import fs from 'fs';
import { Parser } from 'json2csv'
import path from "path";

export const getGenicInSilico = async (req, res) => {
    let scaffoldResult;
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

        const searchName = req.body.searchName;
        const searchInstituteName = req.body.searchInstituteName;
        const searchEmail = req.body.searchEmail;

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
        scaffoldResult = await GenicInSilico.find(query);
        res.status(200).json(scaffoldResult);
    } catch (error) {
        res.status(404).json({ message: error.message});
    } 
}

export const getTranscripts = async (req, res) =>{
    try {
        const postMessages = await Transcript.find();

        res.status(200).json(postMessages); 
    } catch (error) {
        res.status(404).json({ message: error.message});
    } 
}

export const downloadGenicInSilico = async (req, res) => {
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

        result = await GenicInSilico.find(query);
        const csvFields = ['transcript', 'repeat_type', 'repeat_motif', 'copy_no', 'repeat_size', 'forward_primer', 'reverse_primer', 'PCR_product_size', 'ta_oc'];
        const json2csvParser = new Parser({ csvFields });
        const csv = json2csvParser.parse(result);
        fs.writeFile('Genic-InSilico.csv', csv, function(err) {
            if (err) throw err;
            console.log('file saved');
        });
        var file = './Genic-InSilico.csv';

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