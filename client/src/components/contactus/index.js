import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import { Form, Row, Col, Input, Button, Badge, Table, Select, Popover, Tag, Card, Divider } from 'antd';
// import { withRouter } from 'react-router-dom';
import PageStyle from './pageStyle';

const PATH = process.env.REACT_APP_LINK_TO_PATH;

const { Option } = Select;
const Search = Input.Search;
class ContactUs extends Component {
  render() {
    return (
      <PageStyle>
          <div>
		<section  className="contact">
			<div className="container">
				<div className="contact-details">
					<div className="row background">
						<div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
							<div className='text-bg'>
							<h1>Contact Us</h1>
							</div>
						</div>
					</div>
					<div className="contact-content">
						<div className="row">
							<div className="col-sm-3 withBorder">
								<div className="single-contact-box">
									<div className="contact-right">
										<div className="contact-adress">
											<div className="contact-office-address">
												<h3>contact info</h3>
												<h5><b>Dr. Siddanna Savadi</b></h5>
												<p>Scientist (Biotechnology) & Principal investigator (PI)</p>
												<p>Centre of Excellence for Biotechnology</p>
												<p>ICAR-Directorate of Cashew Research, Puttur-574</p>
												<p>202, Karnataka, INDIA</p>
												<div className="contact-online-address">
													<div className="single-online-address">
														<i className="fa fa-phone"></i>
														+91-8251-231530 (Office)
													</div>
													<div className="single-online-address">
													<i className="fa fa-phone" aria-hidden="true"></i>
														+91-8251-234350 (Fax)
													</div>
													<div className="single-online-address">
														<i className="fa fa-envelope-o"></i>
														<span>Siddanna.Savadi@icar.gov.in</span>
													</div>
												</div>
											</div>
											<div className="contact-office-address">
												<h3>social partner</h3>
												<div className="contact-icon">
													<ul>
														<li><a href="https://m.facebook.com/profile.php?id=100064849501987&ref=br_rs&_rdr" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
														<li><a href="https://www.linkedin.com/in/siddanna-savadi-94136611b/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
														<li><a href="https://twitter.com/dircajures1" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
													</ul>
												</div>
											</div>
											
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-9">
							<section  className="contact_service">
				<div className="">
					<div className="service-details">
					<div className="contact-office-address text-center">
												<h3>Our Team</h3>
												</div>
						<div className="service-content-one">
							<div className="row">
							<div className="col-sm-4 col-xs-12">
								<div className="service-single text-center contactUsImgContainer">
									<div className="service-img">
									<img src="assets/images/contactUs/1.jpg" alt="image" />
									</div>
									<div className="service-txt">
										<h2 style={{marginBottom: "0", padding:"0"}}>
											<a href="https://cashew.icar.gov.in/wp-content/uploads/2017/07/siddanna-savadi.pdf">Dr. Siddanna Savadi </a>
										</h2>
										<p className='contactDesignation'>Team lead, Scientist</p>
										<p>(Biotechnology)</p>
										<a href="https://cashew.icar.gov.in/wp-content/uploads/2017/07/siddanna-savadi.pdf" className="service-btn">
											Learn more
										</a>
									</div>
								</div>
							</div>
							<div className="col-sm-4 col-xs-12">
								<div className="service-single text-center contactUsImgContainer">
									<div className="service-img">
										<img src="assets/images/contactUs/2.jpg" alt="image" />
									</div>
									<div className="service-txt">
										<h2 style={{marginBottom: "0", padding:"0"}}>
											<a href="https://www.iihr.res.in/bm-muralidhara">Dr. Muralidhara B.M.</a>
										</h2>
										<p className='contactDesignation'>Scientist</p>
										<p>(Fruit Science)</p>
										<a href="https://www.iihr.res.in/bm-muralidhara" className="service-btn">
											Learn more
										</a>
									</div>
								</div>
							</div>
							<div className="col-sm-4 col-xs-12">
								<div className="service-single text-center contactUsImgContainer">
									<div className="service-img">
									<img src="assets/images/contactUs/3.jpg" alt="image" />
									</div>
									<div className="service-txt">
										<h2 style={{marginBottom: "0", padding:"0"}}>
											<a href="https://cashew.icar.gov.in/wp-content/uploads/2021/03/Shamsudheen-Biodata-1.pdf">Dr. Shamsudheen M. </a>
										</h2>
										<p className='contactDesignation'>Senior Scientist</p>
										<p>(Soil Science)</p>
										<a href="https://cashew.icar.gov.in/wp-content/uploads/2021/03/Shamsudheen-Biodata-1.pdf" className="service-btn">
											Learn more
										</a>
									</div>
								</div>
							</div>
							</div>
						</div>
						<div className="service-content-two">
							<div className="row">
							<div className="col-sm-4 col-xs-12">
									<div className="service-single text-center contactUsImgContainer">
										<div className="service-img">
										<img src="assets/images/contactUs/6.jpg" alt="image" />
										</div>
										<div className="service-txt">
											<h2 style={{marginBottom: "0", padding:"0"}}>
												<a href="https://cashew.icar.gov.in/wp-content/uploads/2020/04/Manjunatha-K.pdf">Dr. Manjunath K.</a>
											</h2>
											<p className='contactDesignation'>Scientist</p>
											<p>(FM&P)</p>
											<a href="https://cashew.icar.gov.in/wp-content/uploads/2020/04/Manjunatha-K.pdf" className="service-btn">
												Learn more
											</a>
										</div>
									</div>
								</div>
								<div className="col-sm-4 col-xs-12">
										<div className="service-single text-center contactUsImgContainer">
											<div className="service-img">
											<img src="assets/images/contactUs/5.png" alt="image" />
											</div>
											<div className="service-txt">
												<h2 style={{marginBottom: "0", padding:"0"}}>
													<a href="https://cashew.icar.gov.in/wp-content/uploads/2016/08/Adiga.pdf">Dr. J. D. Adiga </a>
												</h2>
												<p className='contactDesignation'>Principal Scientist</p>
												<p>(Horticulture)</p>
												<a href="https://cashew.icar.gov.in/wp-content/uploads/2016/08/Adiga.pdf" className="service-btn">
													Learn more
												</a>
											</div>
										</div>
									</div>
								<div className="col-sm-4 col-xs-12">
									<div className="service-single text-center contactUsImgContainer">
										<div className="service-img">
										<img src="assets/images/contactUs/4.jpg" alt="image" />
										</div>
										<div className="service-txt">
											<h2 style={{marginBottom: "0", padding:"0"}}>
												<a href="https://cashew.icar.gov.in/wp-content/uploads/2020/08/V.-Thondaiman.pdf">Dr. Thondaiman V.</a>
											</h2>
											<p className='contactDesignation'>Scientist</p>
											<p>(SPM&AP)</p>
											<a href="https://cashew.icar.gov.in/wp-content/uploads/2020/08/V.-Thondaiman.pdf" className="service-btn">
												Learn more
											</a>
										</div>
									</div>
								</div>
								
								<div className="col-sm-4 col-xs-12">
									<div className="service-single text-center contactUsImgContainer">
										<div className="service-img">
										<img src="assets/images/contactUs/mahesh.jpg" alt="image" />
										</div>
										<div className="service-txt">
											<h2 style={{marginBottom: "0", padding:"0"}}>
												<a href="https://cashew.icar.gov.in/wp-content/uploads/2021/02/Manjesh-G.N..pdf">Dr. Manjesh G. N.</a>
											</h2>
											<p className='contactDesignation'>Scientist</p>
											<p>(SPM & AP)</p>
											<a href="https://cashew.icar.gov.in/wp-content/uploads/2021/02/Manjesh-G.N..pdf" className="service-btn">
												Learn more
											</a>
										</div>
									</div>
								</div>

								<div className="col-sm-4 col-xs-12">
									<div className="service-single text-center contactUsImgContainer">
										<div className="service-img">
										<img src="assets/images/contactUs/7.jpg" alt="image" />
										</div>
										<div className="service-txt">
											<h2 style={{marginBottom: "0", padding:"0"}}>
												<a href="https://cashew.icar.gov.in/wp-content/uploads/2017/07/tnrp.pdf">Dr. T N Raviprasad</a>
											</h2>
											<p className='contactDesignation'>Director</p>
											<p>(Acting)</p>
											<a href="https://cashew.icar.gov.in/wp-content/uploads/2017/07/tnrp.pdf" className="service-btn">
												Learn more
											</a>
										</div>
									</div>
								</div>

								<div className="col-sm-4 col-xs-12">
									<div className="service-single text-center contactUsImgContainer">
										<div className="service-img">
											<img src="assets/images/service/service6.png" alt="image" />
										</div>
										<div className="service-txt">
											<h2 style={{marginBottom: "0", padding:"0"}}>
												<a href="http://www.raptly.in">Mr. Revansiddappa Anabi</a>
											</h2>
											<p>
                      							RAPTLY Pvt. Ltd
											</p>
											<a href="http://www.raptly.in" className="service-btn">
												Learn more
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
		</section>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>
          </div>
      </PageStyle>
    );
  }
}

const actionCreators = {
};

const mapStateToProps = (state) => {
  return {
    global: state.global,
    notifications: state.notifications
  };
};

// const WrappedDynamicRule = Form.create({ name: 'notifications' })(Notification);

export default withRouter(connect(mapStateToProps, actionCreators)(ContactUs));