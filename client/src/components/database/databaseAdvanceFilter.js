import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Select, Button, Card, Input, InputNumber, Tooltip, Icon } from 'antd';
import PageStyle from './pageStyle';
import { getCashewSnpData, updateDatabaseData } from "../../redux/actions/database";
import { Form } from '@ant-design/compatible';

const Option = Select.Option;

class DatabaseAdvanceFilter extends Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
		this.myRef2 = React.createRef();
	}
	state = {
		dataLoading: false,
		callFilter: false,
		callReset: false
	}

	componentWillUnmount() {
		this.props.form.resetFields();
	}

	resetFilterValues = () => {
		this.props.form.resetFields();
		this.props.updateDatabaseData({
			cashewSnpData: [],
			genicExpData: []
		});
		this.myRef2.current.scrollIntoView();
	}

	applyFilter = () => {
		this.setState({ callFilter: true });
		const { pageNo } = this.props.database;
		let { genotypeName, scaffoldNo, positionIds, snpTypes, mutationType, zygosity, locationGene, searchName, searchInstituteName, searchEmail } = this.props.form.getFieldsValue(['genotypeName', 'scaffoldNo', 'positionIds', 'snpTypes', 'mutationType', 'zygosity', 'locationGene', 'searchName', 'searchInstituteName', 'searchEmail' ]);

		const obj = {
			genotypeName,
			scaffoldNo,
			positionIds, 
			snpTypes, 
			mutationType,
			zygosity, 
			locationGene,
			searchName,
			searchInstituteName,
			searchEmail
		}

		this.props.updateDatabaseData({
			genotypeName,
			scaffoldNo,
			positionIds, 
			snpTypes, 
			mutationType,
			zygosity, 
			locationGene,
			searchName,
			searchInstituteName,
			searchEmail,
			loadingData: true,
			pageNo
		});

		this.props.getCashewSnpData(obj).then(() => {
			this.setState({ callFilter: false });
			this.props.updateDatabaseData({
				loadingData: false
			});
			this.myRef.current.scrollIntoView();
		});
	}


	createDropdown = () =>{
		const { transcriptData } = this.props.database;

		const positionDropdown = transcriptData && transcriptData.sort((a,b)=> a - b).map((item)=>{
			return <Option value={item.transcript}>{item.transcript}</Option>
		});

		return { positionDropdown }
	}

	render() {
		const { callFilter, callReset } = this.state;
		const { getFieldDecorator } = this.props.form;
		const dropdownData = this.createDropdown();
		return (
			<PageStyle>
					<div ref={this.myRef2}>
						<Row gutter={24} type="flex" justify="start" className='dbFilterContainer'>
							<Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
								<Form.Item label={"Genotype Name"}>
									{getFieldDecorator('genotypeName', {})(
										<Select 
											placeholder="Genotype Name" 
											mode='multiple'
											style={{width: '100%'}}
											onChange={() => this.setState({ disabled: false })}
										>
											<Option value="Bhaskara">Bhaskara</Option>
										</Select>
									)}
								</Form.Item>
							</Col>
							<Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
								<Form.Item label={"Scaffold No"}>
									{getFieldDecorator('scaffoldNo', {})(
										<Select 
											placeholder="Scaffold No" 
											mode='multiple'
											style={{width: '100%'}}
											onChange={() => this.setState({ disabled: false })}
										>
											<Option value="1">1</Option>
											<Option value="2">2</Option>
											<Option value="3">3</Option>
											<Option value="4">4</Option>
											<Option value="5">5</Option>
											<Option value="6">6</Option>										
										</Select>
									)}
								</Form.Item>
							</Col>
							<Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
								<Form.Item label={(
									<span>Position&nbsp;
									<Tooltip title="Position number should be between 123 and 28678615">
										<Icon type="question-circle-o" />
									</Tooltip>
									</span>
									)}>
									{getFieldDecorator('positionIds', {})(
										<InputNumber style={{width: '100%'}} placeholder='Position Number' min={123} max={28678615} /> 
									)}
								</Form.Item>
							</Col>
							<Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
								<Form.Item label={"Type of SNPs"}>
									{getFieldDecorator('snpTypes', {})(
										<Select 
											placeholder="Type of SNPs" 
											mode='multiple'
											style={{width: '100%'}}
											onChange={() => this.setState({ disabled: false })}
										>
											<Option value="C/T">C/T</Option>
											<Option value="A/G">A/G</Option>
											<Option value="A/T">A/T</Option>
											<Option value="A/C">A/C</Option>
											<Option value="C/G">C/G</Option>
											<Option value="T/G">T/G</Option>										
										</Select>
									)}
								</Form.Item>
							</Col>
							<Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
								<Form.Item label={"Mutation Type"}>
									{getFieldDecorator('mutationType', {})(
										<Select 
											placeholder="Mutation Type" 
											mode='multiple'
											style={{width: '100%'}}
											onChange={() => this.setState({ disabled: false })}
										>
											<Option value="Transition">Transition</Option>
											<Option value="Transversion">Transversion</Option>										
										</Select>
									)}
								</Form.Item>
							</Col>
							<Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
								<Form.Item label={"Zygosity"}>
									{getFieldDecorator('zygosity', {})(
										<Select 
											placeholder="Zygosity" 
											mode='multiple'
											style={{width: '100%'}}
											onChange={() => this.setState({ disabled: false })}
										>
											<Option value="Hom">Homo</Option>
											<Option value="Het">Hetero</Option>										
										</Select>
									)}
								</Form.Item>
							</Col>
							<Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
								<Form.Item label={"Location within gene"}>
									{getFieldDecorator('locationGene', {})(
										<Select 
											placeholder="Location within gene" 
											mode='multiple'
											style={{width: '100%'}}
											onChange={() => this.setState({ disabled: false })}
										>
											<Option value="INTERGENIC">INTERGENIC</Option>
											<Option value="INTRON">INTRON</Option>
											<Option value="NON_SYNONYMOUS_CODING">NON_SYNONYMOUS_CODING</Option>										
											<Option value="NON_SYNONYMOUS_START">NON_SYNONYMOUS_START</Option>										
											<Option value="SPLICE_SITE_ACCEPTOR">SPLICE_SITE_ACCEPTOR</Option>										
											<Option value="SPLICE_SITE_DONOR">SPLICE_SITE_DONOR</Option>										
											<Option value="START_LOST">START_LOST</Option>										
											<Option value="STOP_GAINED">STOP_GAINED</Option>
											<Option value="STOP_LOST">STOP_LOST</Option>										
											<Option value="SYNONYMOUS_CODING">SYNONYMOUS_CODING</Option>										
											<Option value="SYNONYMOUS_STOP">SYNONYMOUS_STOP</Option>										
											<Option value="UTR_3">UTR_3</Option>										
											<Option value="UTR_5">UTR_5</Option>
										</Select>
									)}
								</Form.Item>
							</Col>
						</Row>
					</div>
					<div>
							<Row gutter={24} type="flex" justify="start" className='dbFilterContainer'> 
								<Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
									<Form.Item label={"Name"}>
										{getFieldDecorator('searchName', {})(
											<Input placeholder='Enter your name'/>
										)}
									</Form.Item>
								</Col>
								<Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
									<Form.Item label={"Institute Name"}>
										{getFieldDecorator('searchInstituteName', {})(
											<Input placeholder='Enter Institute name'/>
										)}
									</Form.Item>
								</Col>
								<Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
									<Form.Item label={"Email"}>
										{getFieldDecorator('searchEmail', {})(
											<Input placeholder='Enter email'/>
										)}
									</Form.Item>
								</Col>
							</Row>
					</div>
						
					<hr className="advance-filter-hr"></hr>

					<div className="center">
						<Row className="right" type="flex" justify="center" gutter={16}>
							<Col className="gutter-row right" xxl={4} xl={4} lg={4} md={8} sm={8} xs={12}>
								<Button className="advancedFilterOk" type="primary" loading={callFilter} onClick={() => this.applyFilter()} block>Search</Button>
							</Col>
							<Col className="gutter-row right pr-5" xxl={4} xl={4} lg={4} md={8} sm={8} xs={12}>
								<Button className="reset" loading={callReset} onClick={() => this.resetFilterValues()} block>Reset</Button>
							</Col>
							
						</Row>
					</div>
					<span ref={this.myRef}></span>
			</PageStyle>
		)
	}
}

const actionCreators = {
	getCashewSnpData,
	updateDatabaseData
};

const mapStateToProps = (state) => {
	return {
		database: state.database
	};
};

const WrappedDynamicRule = Form.create({ name: 'advance_filter' })(DatabaseAdvanceFilter);

export default connect(mapStateToProps, actionCreators)(WrappedDynamicRule);
