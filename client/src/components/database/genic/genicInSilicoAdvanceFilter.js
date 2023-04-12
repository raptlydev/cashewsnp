import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Row, Col, DatePicker, Select, Button, Card, Tag, Tooltip, Input, Switch, Radio, Slider, InputNumber } from 'antd';
import PageStyle from '../pageStyle';
import { getGenicInSilicoData, updateDatabaseData } from "../../../redux/actions/database";
import { Form } from '@ant-design/compatible';

const { RangePicker } = DatePicker;
const Option = Select.Option;

// import { updateProjectClaimsData, getProjectClaimsMasterData, viewAllClaimGroups, getPMAllocationMasterData, getSubCategory, getRequestType } from "../../redux/actions/claimProject";

class GenicInSilicoAdvanceFilter extends Component {
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

	componentDidMount() {
		// this.props.getProjectClaimsMasterData();
		// this.props.getSubCategory();
		// this.props.getRequestType();
	}

	componentWillUnmount() {
		if(this.props.database.tabChanged){
			this.props.form.resetFields();
			this.props.updateDatabaseData({
				tabChanged: false
			});
		}
	}

	// UNSAFE_componentWillReceiveProps(prevProps, nextProps){
	// 	if(nextProps.database.tabChanged && nextProps.database.tabChanged !== prevProps.database.tabChanged) {
	// 		this.props.updateDatabaseData({
	// 			tabChanged: false
	// 		  });
	// 		this.props.form.resetFields();
	// 	}
	// }

	onFilterClose = (e) => {
		this.props.form.resetFields();
		this.props.updateUserData({ openAdvanceFilter: false })
	}

	resetFilterValues = () => {
		this.props.form.resetFields();
		this.props.updateDatabaseData({
			genicInSilicoData: [],
			genicExpData: []
		});
		this.myRef2.current.scrollIntoView();
	}

	applyFilter = () => {
		this.setState({ callFilter: true });
		// this.props.updateUserData({ openAdvanceFilter: true, onTextFilter: false, searchText: '' });
		let { scaffoldIds, repeatMotif, repeatSizeLessEqual, repeatSizeEqual, repeatSizeGreaterEqual, copyNoLessEqual, copyNoEqual, copyNoGreaterEqual, productSizeLessEqual, productSizeEqual, productSizeGreaterEqual, tempLessEqual, tempEqual, tempGreaterEqual, repeatType, searchName, searchInstituteName, searchEmail } = this.props.form.getFieldsValue(['scaffoldIds', 'repeatMotif', 'repeatSizeLessEqual', 'repeatSizeEqual', 'repeatSizeGreaterEqual', 'copyNoLessEqual', 'copyNoEqual', 'copyNoGreaterEqual', 'productSizeLessEqual', 'productSizeEqual', 'productSizeGreaterEqual', 'tempLessEqual', 'tempEqual', 'tempGreaterEqual', 'repeatType', 'searchName', 'searchInstituteName', 'searchEmail' ]);
		let { searchKey } = this.props.user;
		// const obj = {
		// 	totalRecordsPerPage: 10,
		// 	viewGroupFilterOptionVO: {
		// 		countries: (countryIds && countryIds.length) ? countryIds.map((country) => country.key) : [],
		// 		categories: (channelIds && channelIds.length) ? channelIds.map((item) => item.key) : [],
		// 		subCategories: (subChannelIds && subChannelIds.length) ? subChannelIds.map((item) => item.key) : [],
		// 		regions: (regionIds && regionIds.length) ? regionIds.map((item) => item.key) : [],
		// 		requestTypes: (requestTypeIds && requestTypeIds.length) ? requestTypeIds.map((item) => item.key) : [],
		// 		complexities: (complexityIds && complexityIds.length) ? complexityIds.map((item) => item.key) : [],
		// 		projectManagers: (projectManagerIds && projectManagerIds.length) ? projectManagerIds.map((item) => item.key) : []
		// 	},
		// 	loadedRecords: 0,
		// 	locale: this.props.global.locale,
		// 	searchCategoryName: searchKey
		// };

		const obj = {
			scaffoldIds,
			repeatMotif,
			repeatSizeLessEqual, 
			repeatSizeEqual, 
			repeatSizeGreaterEqual,
			copyNoLessEqual, 
			copyNoEqual, 
			copyNoGreaterEqual,
			productSizeLessEqual,
			productSizeEqual, 
			productSizeGreaterEqual,
			tempLessEqual, 
			tempEqual, 
			tempGreaterEqual,
			repeatType,
			searchName,
			searchInstituteName,
			searchEmail
		}

		this.props.updateDatabaseData({
			scaffoldIds,
			repeatMotif,
			repeatSizeLessEqual, 
			repeatSizeEqual, 
			repeatSizeGreaterEqual,
			copyNoLessEqual, 
			copyNoEqual, 
			copyNoGreaterEqual,
			productSizeLessEqual,
			productSizeEqual, 
			productSizeGreaterEqual,
			tempLessEqual, 
			tempEqual, 
			tempGreaterEqual,
			repeatType,
			searchName,
			searchInstituteName,
			searchEmail,
			loadingData: true
		});

		this.props.getGenicInSilicoData(obj).then(() => {
			this.setState({ callFilter: false });
			this.props.updateDatabaseData({
				loadingData: false
			});
			this.myRef.current.scrollIntoView();
		});
	}

	// handleClose = (id, ids, idKey, propKey) => {
	// 	const selVals = ids.filter(idsId => idsId.key !== id.key)
	// 	this.props.updateProjectClaimsData({ [idKey]: selVals })
	// 	this.props.form.setFieldsValue({
	// 		[propKey]: selVals
	// 	})
	// }

	onChange = e => {
		console.log('radio checked', e.target.value);
		this.setState({
		  value: e.target.value,
		});
	  };

	  onRepeatChange = e => {
		this.setState({
		  repeatValue: e.target.value,
		});
	  };


	createDropdown = () =>{
		const { transcriptData } = this.props.database;

		const scaffoldDropdown = transcriptData && transcriptData.sort((a,b)=> a - b).map((item)=>{
			return <Option value={item.transcript}>{item.transcript}</Option>
		});

		return { scaffoldDropdown }
	}

	render() {
		const { callFilter, callReset } = this.state;
		const { getFieldDecorator } = this.props.form;
		const dateFormat = process.env.DATE_FORMAT;
		const dropdownData = this.createDropdown();
		return (
			<PageStyle>
					<div ref={this.myRef2}>
						<Row gutter={24} type="flex" justify="start" className='dbFilterContainer'> 
							<Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
								<Form.Item label={"Transcripts"}>
									{getFieldDecorator('scaffoldIds', {})(
										<Select 
											placeholder="Transcripts" 
											mode='multiple'
											style={{width: '100%'}}
											onChange={() => this.setState({ disabled: false })}
										>
											{dropdownData.scaffoldDropdown}
										</Select>
									)}
								</Form.Item>
							</Col>
						</Row>
					</div>
					<div>
						<Row gutter={24} type="flex" justify="start" className='dbFilterContainer'> 
							<Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
								<Form.Item >
									{getFieldDecorator('aadharNo', {})(
										<Radio.Group onChange={this.onChange} value={this.state.value}>
											<Radio value={"repeatType"}>Repeat Type</Radio>
											<Radio value={"repeatMotif"}>Repeat Motif</Radio>
										</Radio.Group>								
									)}
								</Form.Item>
							</Col>
							{this.state.value ? this.state.value === "repeatType" ? 
							<Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
							<Form.Item label={"Select Repeat Type"}>
								{getFieldDecorator('repeatType', {})(
									<Select 
										placeholder="Select Repeat Type" 
										style={{width: '100%'}}
										onChange={() => this.setState({ disabled: false })}
									>
										<Option value="2">Di-nucleotide</Option>
										<Option value="3">Tri-nucleotide</Option>
										<Option value="4">Tetra-nucleotide</Option>
										<Option value="5">Penta-nucleotide</Option>
										<Option value="6">Hexa-nucleotide</Option>
										<Option value="C">Complex type (compound /interrupted)</Option>
									</Select>								
								)}
							</Form.Item>
						</Col> : 
						<Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
						<Form.Item label={"Enter Repeat Motif"}>
							{getFieldDecorator('repeatMotif', {})(
								<Input type="text" placeholder="Repeat Motif" onChange={() => this.setState({ disabled: false })} />
							)}
						</Form.Item>
					</Col> : null}
						</Row>
					</div>
					<div>
						<Row gutter={24} type="flex" justify="start" className='dbFilterContainer'> 
							<Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
									<Form.Item>
										{getFieldDecorator('repeat', {})(
											<Radio.Group onChange={this.onRepeatChange} value={this.state.repeatValue}>
												<Radio value={"repeatSize"}>Repeat Size(bp)</Radio>
												<Radio value={"repeatCopy"}>Repeat Copy No</Radio>
											</Radio.Group>								
										)}
									</Form.Item>
								</Col>
								{this.state.repeatValue ? this.state.repeatValue === "repeatSize" ? 
						<Col xxl={16} xl={16} lg={16} md={16} sm={24} xs={24}>
							<Form.Item label={"Enter Repeat Size"}>
								{getFieldDecorator('repeatSizeGreaterEqual', {})(
    								<InputNumber size="small" min={1} max={100000} />
								)}
								<span>{"  >=  "}</span>
								{getFieldDecorator('repeatSizeEqual', {})(
    								<InputNumber size="small" min={1} max={100000} />
								)}
								<span>{"  <=  "}</span>
								{getFieldDecorator('repeatSizeLessEqual', {})(
    								<InputNumber size="small" min={1} max={100000} />
								)}
							</Form.Item>
						</Col> : 
						<Col xxl={16} xl={16} lg={16} md={16} sm={24} xs={24}>
							<Form.Item label={"Enter Repeat Copy No"}>
							{getFieldDecorator('copyNoGreaterEqual', {})(
    								<InputNumber size="small" min={1} max={100000} />
								)}
								<span>{"  >=  "}</span>
								{getFieldDecorator('copyNoEqual', {})(
    								<InputNumber size="small" min={1} max={100000} />
								)}
								<span>{"  <=  "}</span>
								{getFieldDecorator('copyNoLessEqual', {})(
    								<InputNumber size="small" min={1} max={100000} />
								)}
							</Form.Item>
						</Col> : null}
						</Row>
					</div>
					<div>
						<Row gutter={24} type="flex" justify="start" className='dbFilterContainer'> 
							<Col xxl={16} xl={16} lg={16} md={16} sm={24} xs={24}>
									<Form.Item label={"PCR Product Size (bp)"}>
										{getFieldDecorator('productSizeGreaterEqual', {})(
											<InputNumber size="small" min={1} max={100000} />
										)}
										<span>{"  >=  "}</span>
										{getFieldDecorator('productSizeEqual', {})(
											<InputNumber size="small" min={1} max={100000} />
										)}
										<span>{"  <=  "}</span>
										{getFieldDecorator('productSizeLessEqual', {})(
											<InputNumber size="small" min={1} max={100000} />
										)}
									</Form.Item>
								</Col>
						</Row>
					</div>
					<div>
						<Row gutter={24} type="flex" justify="start" className='dbFilterContainer'> 
							<Col xxl={16} xl={16} lg={16} md={16} sm={24} xs={24}>
									<Form.Item label={"Annealing temperature (Ta) oC"}>
										{getFieldDecorator('tempGreaterEqual', {})(
											<InputNumber size="small" min={1} max={100000} />
										)}
										<span>{"  >=  "}</span>
										{getFieldDecorator('tempEqual', {})(
											<InputNumber size="small" min={1} max={100000} />
										)}
										<span>{"  <=  "}</span>
										{getFieldDecorator('tempLessEqual', {})(
											<InputNumber size="small" min={1} max={100000} />
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
											<Input size="small" placeholder='Enter your name'/>
										)}
									</Form.Item>
								</Col>
								<Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
									<Form.Item label={"Institute Name"}>
										{getFieldDecorator('searchInstituteName', {})(
											<Input size="small" placeholder='Enter Institute name'/>
										)}
									</Form.Item>
								</Col>
								<Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
									<Form.Item label={"Email"}>
										{getFieldDecorator('searchEmail', {})(
											<Input size="small" placeholder='Enter email'/>
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
	getGenicInSilicoData,
	updateDatabaseData
	// viewAllClaimGroups,
	// getPMAllocationMasterData,
	// getRequestType,
	// getSubCategory,
	// updateUserData,
	// getUserList
};

const mapStateToProps = (state) => {
	return {
		global: state.global,
		user: state.user,
		database: state.database
	};
};

const WrappedDynamicRule = Form.create({ name: 'advance_filter' })(GenicInSilicoAdvanceFilter);

export default connect(mapStateToProps, actionCreators)(WrappedDynamicRule);
