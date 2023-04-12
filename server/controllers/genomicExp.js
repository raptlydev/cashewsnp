import mongoose from "mongoose";
import GenomicExp from "../models/genomicExp.js";
import Users from '../models/users.js';
import fs from 'fs';
import { Parser } from 'json2csv'
import path from "path";

export const getGenomicExp = async (req, res) => {
    let scaffoldResult;
    try {
        const repeat_motif = req.body.repeatMotif || "";

        const repeat_type = req.body.repeatType || "";

        const repeatSizeLessEqual = req.body.repeatSizeLessEqual;
        const repeatSizeEqual = req.body.repeatSizeEqual;
        const repeatSizeGreaterEqual = req.body.repeatSizeGreaterEqual;

        const copyNoLessEqual = req.body.copyNoLessEqual;
        const copyNoEqual = req.body.copyNoEqual;
        const copyNoGreaterEqual = req.body.copyNoGreaterEqual;

        const PICLessEqual = req.body.PICLessEqual;
        const PICEqual = req.body.PICEqual;
        const PICGreaterEqual = req.body.PICGreaterEqual;

        const tempLessEqual = req.body.tempLessEqual;
        const tempEqual = req.body.tempEqual;
        const tempGreaterEqual = req.body.tempGreaterEqual;

        const searchName = req.body.searchName;
        const searchInstituteName = req.body.searchInstituteName;
        const searchEmail = req.body.searchEmail;

        const query ={}

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

        if(PICEqual){
            query.PIC = {"$eq": PICEqual}
        }
        if(PICGreaterEqual){
            query.PIC = {"$gte": PICGreaterEqual}
        }
        if(PICLessEqual){
            query.PIC = {"$lte": PICLessEqual}
        }
        if(PICGreaterEqual && PICLessEqual){
            query.PIC = {"$lte": PICLessEqual, "$gte": PICGreaterEqual}
        }

        if(tempEqual){
            query.annealing_temperature_ta_oc = {"$eq": tempEqual}
        }
        if(tempGreaterEqual){
            query.annealing_temperature_ta_oc = {"$gte": tempGreaterEqual}
        }
        if(tempLessEqual){
            query.annealing_temperature_ta_oc = {"$lte": tempLessEqual}
        }
        if(tempGreaterEqual && tempLessEqual){
            query.annealing_temperature_ta_oc = {"$lte": tempLessEqual, "$gte": tempGreaterEqual}
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

        scaffoldResult = await GenomicExp.find(query);
        res.status(200).json(scaffoldResult);
    } catch (error) {
        res.status(404).json({ message: error.message});
    } 
}

export const downloadGenomicExp = async (req, res) => {
    let result;
    try {
        const repeat_motif = req.body.repeatMotif || "";

        const repeat_type = req.body.repeatType || "";

        const repeatSizeLessEqual = req.body.repeatSizeLessEqual;
        const repeatSizeEqual = req.body.repeatSizeEqual;
        const repeatSizeGreaterEqual = req.body.repeatSizeGreaterEqual;

        const copyNoLessEqual = req.body.copyNoLessEqual;
        const copyNoEqual = req.body.copyNoEqual;
        const copyNoGreaterEqual = req.body.copyNoGreaterEqual;

        const PICLessEqual = req.body.PICLessEqual;
        const PICEqual = req.body.PICEqual;
        const PICGreaterEqual = req.body.PICGreaterEqual;

        const tempLessEqual = req.body.tempLessEqual;
        const tempEqual = req.body.tempEqual;
        const tempGreaterEqual = req.body.tempGreaterEqual;

        const query ={}

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

        if(PICEqual){
            query.PIC = {"$eq": PICEqual}
        }
        if(PICGreaterEqual){
            query.PIC = {"$gte": PICGreaterEqual}
        }
        if(PICLessEqual){
            query.PIC = {"$lte": PICLessEqual}
        }
        if(PICGreaterEqual && PICLessEqual){
            query.PIC = {"$lte": PICLessEqual, "$gte": PICGreaterEqual}
        }

        if(tempEqual){
            query.annealing_temperature_ta_oc = {"$eq": tempEqual}
        }
        if(tempGreaterEqual){
            query.annealing_temperature_ta_oc = {"$gte": tempGreaterEqual}
        }
        if(tempLessEqual){
            query.annealing_temperature_ta_oc = {"$lte": tempLessEqual}
        }
        if(tempGreaterEqual && tempLessEqual){
            query.annealing_temperature_ta_oc = {"$lte": tempLessEqual, "$gte": tempGreaterEqual}
        }

        if(repeat_type) {
            query.repeat_type = repeat_type
        }

        result = await GenomicExp.find(query);
        const csvFields = ['marker', 'repeat_type', 'repeat_motif', 'copy_no', 'repeat_size', 'forward_primer', 'reverse_primer', 'annealing_temperature_ta_oc', 'allele_size_range_bp', 'PIC', 'reference'];
        const json2csvParser = new Parser({ csvFields });
        const csv = json2csvParser.parse(result);
        fs.writeFile('Genomic-Experimentally-Validated.csv', csv, function(err) {
            if (err) throw err;
            console.log('file saved');
        });
        var file = './Genomic-Experimentally-Validated.csv';

        var filename = path.basename(file);

        res.setHeader('Content-disposition', 'attachment; filename=' + filename);
        res.setHeader('Content-type', 'text/csv');

        var filestream = fs.createReadStream(file);
        filestream.pipe(res);
        console.log(csv);
        res.download(file);
        res.send(csv);
    } catch (error) {
        res.status(404).json({ message: error.message});
    } 
}