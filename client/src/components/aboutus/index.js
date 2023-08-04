import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import { Form, Row, Col, Input, Button, Badge, Table, Select, Popover, Tag, Card } from 'antd';
// import { withRouter } from 'react-router-dom';
import PageStyle from './pageStyle';

const PATH = process.env.REACT_APP_LINK_TO_PATH;

const { Option } = Select;
const Search = Input.Search;
class AboutUs extends Component {
  render() {
    return (
      <PageStyle>
		  <div className="container">
			<div className="about-history background">
				<div className="about-history-content">
					<div className="row">
						<div className="col-md-12 col-sm-12">
							<div className="about-history-txt">
								<h2>Cashew Single Nucleotide Polymorphism (SNPs) Database [CSNPDb]</h2>
								<p>
									Cashew (Anacardium occidentale L.) is a perennial edible nut crop having great export potential and cashew industry provides employment opportunities to rural people. Molecular markers have become great tools of modern plant breeding. Molecular markers are useful for rapid examination of germplasm, mapping of traits and marker-assisted selection (MAS).Cashew is a diploid species (2n=42) with an estimated genome size of 419Mb. However, its chromosome scale whole genome sequence is yet to be generated. 
									Among the molecular markers, Single nucleotide polymorphisms (SNPs) are the most abundant genetic markers (One SNP per100–300 bp) and are becoming the widely used molecular markers in genetic studies and molecular breeding. The premier density of SNPs makes them the ideal markers for understanding the inheritance of genomic regions. SNPs characterize a single nucleotide changes among two individuals at a defined location in the genome. Basically three kinds of sequence variations observed for SNPs: 1) transitions (G/A or C/T); 2) transversions (C/A, A/T, C/G or T/G); 3) small insertions/deletions (indels). Advances in next-generation sequencing (NGS) technologies provides the opportunity of large-scale SNP mining by analysis of whole-genome shotgun sequences of datasets from crop plants with high-quality reference genome sequences. SNPs are biallelic in nature. This shortcoming of SNPs is remunerated by the relative abundance of SNPs in contrast with multiallelic markers like SSRs, These SNPs have one more advantage that they are evolutionarily steady, not varying considerably during the course of inheritance among generation. The small mutation speed of SNPs formulates them outstanding markers for learning complex genetic trait variation and as a tool for indulgent genome evolution.
								</p>
								<p>
									The high density of SNPs in the genome makes them appropriate genetic markers for genome mapping projects, constructing ultrahigh-density genetic maps, establishment of excellent haplotyping systems for genes/locus of interest and map based positional cloning. SNPs are utilized regularly in crop breeding programs, for cultivar identification, association with agronomic traits, categorization of genetic resources, genetic diversity analysis and phylogenetic study. The advances in the NGS technologies have provided a large set of genomic resources such as genome sequences, ESTs etc even in orphan crops, which could be used to in silico mine large set of genome wide SNPs using bioinformatics pipelines. In several crop plants, efforts are made available the large set of mined SNPs to the researchers and breeders world-wide as an online SNP database for crop plants. 
									There is no database for SNPs in cashew due to lack of genomic resources for long time.
								</p>
								<p>
									We developed CSNPDb (Cashew SNP database) by resequencing and comparing it with draft genome of cashew (Savadi et al. 2022) i.e. used as the reference genome. CSNPDb catalogues over 1,000,000 SNPs. CSNPDb database provides SNPs data for cashew researchers. Search option in CSNPDb facilitates to customize the need of users based on Genetic variant (GV) type, Genotype, Chromosome/Scaffold, Position in the Chromosome/Scaffold,  Type of SNPs, Reference SNP,  Variant SNP, Zygosity, Coverage,  Location within genic/non genic region and Gene ID.
								</p>
								<p>
									This database can be used for development of SNP screening assay like FRET, beacon, scorpion or multiplexing. CSNPDb can be used as genome wide marker resource for genetic mapping, QTL analysis, Marker assisted selection (MAS), phylogeny studies. Besides, these dense markers can be used for DNA fingerprinting of varieties.
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 col-sm-12">
							<div className="single-about-history">
								<div className="about-history-txt">
									<h2>Methodology and Statistics</h2>
									<p>
										Steps for creation of cashew web genomic resources: CSNPDb
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-sm-12">
								<div className="single-about-history">
									<div className="about-history-txt">
										<div className="about-history-img">
											<img src="assets/images/staticPages/Picture1.png" alt="about" />
										</div>
									</div>
								</div>
							</div>
					</div>
					<div  className="row">
						<div className="col-md-12 col-sm-12">
							<div className="single-about-history">
								<div className="about-history-txt">
									<h2>Classification of SNPs</h2>
								</div>
								<div className="we-do-carousel">
									<div className="row">
										<ul>
											<b>I. SNPs locations in the genome </b>
											<li><b>A. Coding region SNPs:</b>: SNPs in sequences of genes.</li>
											<li><b>B. Non-coding regions SNPs</b>: SNPs in the noncoding regions of genes.</li>
											<li><b>C. Intergenic regions SNPs</b>: SNPs in the region between genes</li>
										</ul>
										<p>SNPs within a coding sequence do not necessarily change the amino acid sequence of the protein that is produced, due to degeneracy of the genetic code</p>
										<ul>
											<b>II. SNPS in Coding region are of two types </b>
											<li><b>1. Synonymous SNPs</b>: SNPs do not affect the protein sequence</li>
											<li><b>2. Nonsynonymous SNPs</b>: SNPs change the amino acid sequence of protein or  alter the level of expression of a gene</li>
										</ul>
										<ul>
											<b>III. Nonsynonymous SNPs</b>
											<li><b>a. Missense</b>- single change in the base results in change in amino acid of protein and its malfunction</li>
											<li><b>b. Nonsense</b>- point mutation in a sequence of DNA that results in a premature stop codon, or a nonsense codon in the transcribed mRNA, and in a truncated, incomplete, and usually nonfunctional protein product</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div  className="row">
						<div className="col-md-12 col-sm-12">
							<div className="single-about-history">
								<div className="about-history-txt">
									<h2>Acknowledgements</h2>
								</div>
								<div className="we-do-carousel">
									<div className="row">
										<p>
											<b>Dr. Siddanna Savadi, Scientist (Biotechnology)</b> acknowledges the financial support received from the ICAR, New Delhi and <b>RKVY-RAFTAAR</b>, Government of Karnataka.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
          </div>
      </PageStyle>
    );
  }
}


export default AboutUs;