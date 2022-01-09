import React from "react";
import "./Dashboard.css";

const clickHandler = () => {
  console.log("clicked");
  alert("HI");
};

const DashboardPage = () => {
  return (
    <div>
      <div id="main-header" className="clearfix">
        <header id="header" className="clearfix">
          <div className="stripe_color"></div>
          <div className="stripe_image"></div>
          <div className="school-logo col-sm-12">
            <div className="container">
              <img
                src="http://hrms.trainingncr.info/img/uploads/Logo.png"
                alt=""
                className="img-circle"
              />
            </div>
          </div>
          <div className="container">
            <div className="row main">
              <nav
                className="navbar navbar-custom"
                id="header_menu"
                role="navigation"
              >
                <div className="menu-bg">
                  <nav
                    className="main-menu navbar navbar-collapse menu-bg"
                    role="navigation"
                  >
                    <div className="navbar-header menu-bg">
                      <button
                        type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1"
                      >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                    </div>
                    <div
                      className="main-menu navbar-collapse menu-bg menubg-bg collapse"
                      id="bs-example-navbar-collapse-1"
                    >
                      <ul className="nav navbar-nav">
                        <li className="active">
                          <a href="">Home</a>
                        </li>
                        <li className="dropdown ">
                          <a
                            href="#"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            Mailbox<b className="caret"></b>
                          </a>
                          <ul className="dropdown-menu">
                            <li className="">
                              <a href="">Inbox</a>
                            </li>
                            <li className="">
                              <a href="">Sent</a>
                            </li>
                          </ul>
                        </li>
                        <li className="">
                          <a href="">Leave Application</a>
                        </li>
                        <li className="">
                          <a href="">Notice</a>
                        </li>
                        <li className="">
                          <a href="">Events</a>
                        </li>
                        <li className="">
                          <a href="">Awards</a>
                        </li>
                        <li className="">
                          <a href="">Leave policy</a>
                        </li>
                      </ul>
                      <ul className="main-menu nav navbar-nav navbar-right">
                        <li className="dropdown ">
                          <a
                            href="#"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            <i className="fa fa-user"></i> Profile
                            <b className="caret"></b>
                          </a>
                          <ul className="dropdown-menu">
                            <li className="">
                              <a href="">Change Password</a>
                            </li>
                            <li>
                              <a href="">Logout</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </nav>
            </div>
          </div>
        </header>
      </div>

      <div className="container">
        <div className="row">
          <div className="margin">
            <div className="col-md-12">
              <div className="main_content">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main_content">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="col-md-3">
                            <div
                              className="panel panel-info"
                              style={{
                                border: "0px solid #004884",
                                boxShadow: "0px 1px 2px 2px rgba(0, 0, 0, .05)",
                                paddingBottom: "10px",
                              }}
                            >
                              <div
                                className="panel-body"
                                style={{ borderBottom: "1px solid#ebecfe" }}
                              >
                                <img
                                  src="http://hrms.trainingncr.info/img/uploads/favicon10.png"
                                  style={{ height: "200px; width: 210px;" }}
                                  className="img-responsive center-block"
                                />
                              </div>
                              <div style={{ borderTop: "0px solid #004884 " }}>
                                <h3 className="text-center">Sudhir Singh</h3>
                                <h6 className="text-center">
                                  Employee ID: TP/101
                                </h6>
                                <h6 className="text-center">
                                  Tech Pro - Employee
                                </h6>
                                <p></p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-5">
                            <div className="panel panel-info">
                              <div className="panel-heading">
                                <h2 className="panel-title ">
                                  <i className="fa fa-user"></i>{" "}
                                  <strong>Personal Details </strong>
                                  <span className="pull-right">
                                    <a href="" className="view-all-front">
                                      View Profile
                                    </a>
                                  </span>
                                </h2>
                              </div>
                              <div className="panel-body">
                                <table className="table table-hover">
                                  <tbody>
                                    <tr>
                                      <td>
                                        <span className="primary-link">
                                          Name
                                        </span>
                                      </td>
                                      <td>Sudhir Singh </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <span className="primary-link">
                                          Father's Name
                                        </span>
                                      </td>
                                      <td>Mr. Raghbir Singh </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <span className="primary-link">
                                          DOB
                                        </span>
                                      </td>
                                      <td>29 Jan 1990 </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <span className="primary-link">
                                          Gender
                                        </span>
                                      </td>
                                      <td>Male </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <span className="primary-link">
                                          Email
                                        </span>
                                      </td>
                                      <td>sudhirsingh90@gmail.com </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <span className="primary-link">
                                          Phone
                                        </span>
                                      </td>
                                      <td>8427103856</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <span className="primary-link">
                                          Mobile
                                        </span>
                                      </td>
                                      <td>8427103856 </td>
                                    </tr>
                                    <tr> </tr>
                                    <tr>
                                      <td>
                                        <span className="primary-link">
                                          Address
                                        </span>
                                      </td>
                                      <td>E-41 Noida sector 55 </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="well-custom">
                              <div className="row">
                                <div
                                  className="col-md-4 col-sm-4 col-xs-4"
                                  style={{ borderRight: "1px solid #46b8da" }}
                                >
                                  <div className="uppercase text-center">
                                    <strong>10 / 31 </strong>
                                  </div>
                                  <div className="uppercase text-center">
                                    Attendance
                                  </div>
                                </div>
                                <div
                                  className="col-md-4 col-sm-4 col-xs-4"
                                  style={{ borderRight: "1px solid #46b8da" }}
                                >
                                  <a href="" style={{ color: "white" }}>
                                    <div className="uppercase text-center">
                                      <strong>01 </strong>
                                    </div>
                                    <div className="uppercase text-center">
                                      Leave
                                    </div>
                                  </a>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-4">
                                  <a href="" style={{ color: "white" }}>
                                    <div className="uppercase text-center">
                                      <strong>5 </strong>
                                    </div>
                                    <div className="uppercase text-center">
                                      Awards
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div className="panel panel-info">
                              <div className="panel-heading">
                                <h2 className="panel-title">
                                  <i className="fa fa-bell-o"></i>{" "}
                                  <strong>Notice Board</strong>
                                  <span className="pull-right">
                                    <a href="" className=" view-all-front">
                                      View All
                                    </a>
                                  </span>
                                </h2>
                              </div>
                              <div className="panel-body tab-pane-notice">
                                <div className="notice-calendar-list clearfix">
                                  <div className="notice-calendar">
                                    <span className="month">Feb</span>
                                    <span className="date">06</span>
                                  </div>

                                  <div className="notice-calendar-heading">
                                    <h5 className="notice-calendar-heading-title">
                                      <a href="">
                                        Regarding Tax Deduction Detail Require
                                      </a>
                                    </h5>
                                    <div className="notice-calendar-date">
                                      Require till 13th February 2018&nbsp;{" "}
                                    </div>
                                  </div>
                                  <div
                                    style={{
                                      marginTop: "5px",
                                      paddingTop: "5px",
                                      paddingBottom: "10px",
                                    }}
                                  >
                                    <span
                                      style={{ fontSize: "10px" }}
                                      className="pull-right"
                                    >
                                      <strong>
                                        <a href="" style={{ color: "#004884" }}>
                                          View Details
                                        </a>
                                      </strong>
                                    </span>
                                  </div>
                                </div>
                                <div className="notice-calendar-list clearfix">
                                  <div className="notice-calendar">
                                    <span className="month">Jan</span>
                                    <span className="date">24</span>
                                  </div>

                                  <div className="notice-calendar-heading">
                                    <h5 className="notice-calendar-heading-title">
                                      <a href="">
                                        Regarding Leave on Saturady 27th Jan
                                        2018
                                      </a>
                                    </h5>
                                    <div className="notice-calendar-date">
                                      Dear All , We have to inform that Forth
                                      Saturday 27th Jan 2018 will be leave of
                                      office . <strong> ......</strong>{" "}
                                    </div>
                                  </div>
                                  <div
                                    style={{
                                      marginTop: "5px",
                                      paddingTop: "5px",
                                      paddingBottom: "10px",
                                    }}
                                  >
                                    <span
                                      style={{ fontSize: "10px" }}
                                      className="pull-right"
                                    >
                                      <strong>
                                        <a href="" style={{ color: "#004884" }}>
                                          View Details
                                        </a>
                                      </strong>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="col-md-12">
                          <div className="col-md-8">
                            <div className="panel panel-info">
                              <div className="panel-heading ">
                                <h2 className="panel-title ">
                                  <i className="fa fa-mail-reply-all"></i>{" "}
                                  <strong>Recent Mails</strong>
                                  <span className="pull-right">
                                    <a href="" className="view-all-front">
                                      Go To Mailbox
                                    </a>
                                  </span>
                                </h2>
                              </div>
                              <div className="panel-body tab-pane">
                                <div className="table-responsive mailbox-messages">
                                  <table className="table table-hover table-striped">
                                    <tbody>
                                      <tr>
                                        <td>
                                          <a href="">
                                            <span style={{ color: "#000" }}>
                                              sudhirsingh90@gmail.com
                                            </span>
                                          </a>
                                        </td>
                                        <td>
                                          <b className="pull-left">
                                            Regarding - &nbsp;
                                          </b>{" "}
                                          <span className="pull-left ">
                                            {" "}
                                            <p>Meeting</p>
                                            &nbsp;
                                          </span>
                                        </td>
                                        <td>05 days ago </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="panel panel-info">
                              <div className="panel-heading">
                                <h2 className="panel-title">
                                  <i className="fa fa-binoculars"></i>
                                  <strong> Upcoming Events</strong>
                                  <span className="pull-right">
                                    <a href="" className=" view-all-front">
                                      View All
                                    </a>
                                  </span>
                                </h2>
                              </div>
                              <div className="panel-body event">
                                <div className="notice-calendar-list clearfix">
                                  <div className="notice-calendar">
                                    <span className="month">Dec</span>
                                    <span className="date">31</span>
                                  </div>

                                  <div className="notice-calendar-heading">
                                    <h5 className="notice-calendar-heading-title">
                                      <a href="">New Year</a>
                                    </h5>
                                    <div className="notice-calendar-date">
                                      <span className="text-danger">
                                        End Date:{" "}
                                      </span>
                                      01 Jan 2022
                                    </div>
                                  </div>
                                  <div
                                    style={{
                                      marginTop: "5px",
                                      paddingTop: "5px",
                                      paddingBottom: "5px",
                                    }}
                                  >
                                    <span
                                      style={{ fontSize: "10px" }}
                                      className="pull-right"
                                    >
                                      <strong>
                                        <a href="" style={{ color: "#004884" }}>
                                          View Details
                                        </a>
                                      </strong>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="panel panel-info">
                              <div className="panel-heading">
                                <h2 className="panel-title">
                                  <strong>Upcomming Birhday </strong>- January
                                </h2>
                              </div>
                              <div className="panel-body event">
                                <ul className="leave_apps">
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/favicon1.png"
                                          />
                                        </div>
                                        <span>Sarvesh Awasthy</span>
                                        <p className="leave_para">
                                          22 Nov 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/Tech_logo.png"
                                          />
                                        </div>
                                        <span>Ajay Singh</span>
                                        <p className="leave_para">
                                          15 Oct 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/favicon2.png"
                                          />
                                        </div>
                                        <span>Rishab Singh</span>
                                        <p className="leave_para">
                                          15 Aug 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/Logo_TP6.png"
                                          />
                                        </div>
                                        <span>Piyoosh Singh</span>
                                        <p className="leave_para">
                                          03 Jan 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/favicon8.png"
                                          />
                                        </div>
                                        <span>Chanchal Rani</span>
                                        <p className="leave_para">
                                          22 Jul 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/favicon10.png"
                                          />
                                        </div>
                                        <span>Sudhir Singh</span>
                                        <p className="leave_para">
                                          03 Aug 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/favicon15.png"
                                          />
                                        </div>
                                        <span>Pradeep kumar</span>
                                        <p className="leave_para">
                                          20 Aug 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/favicon25.png"
                                          />
                                        </div>
                                        <span>Amit Goswami</span>
                                        <p className="leave_para">
                                          12 Feb 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/sr2.jpg"
                                          />
                                        </div>
                                        <span>Randhir Kumar</span>
                                        <p className="leave_para">
                                          04 Feb 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/download.jpg"
                                          />
                                        </div>
                                        <span>Sanjeev Kumar</span>
                                        <p className="leave_para">
                                          20 Aug 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/globalrose-flower-bouquets-50-assorted-roses-short-birthday-64_1000.jpg"
                                          />
                                        </div>
                                        <span>Ankit Maurya</span>
                                        <p className="leave_para">
                                          21 Feb 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/Screenshot_(2).png"
                                          />
                                        </div>
                                        <span>Alok Kumar Thakur</span>
                                        <p className="leave_para">
                                          08 Jan 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/Screenshot_(1)2.png"
                                          />
                                        </div>
                                        <span>Ms. Shipra</span>
                                        <p className="leave_para">
                                          14 Mar 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/nature.jpg"
                                          />
                                        </div>
                                        <span>Ranjana Sharma</span>
                                        <p className="leave_para">
                                          10 Aug 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/campus2.png"
                                          />
                                        </div>
                                        <span>Amit Kumar Gupta</span>
                                        <p className="leave_para">
                                          30 Oct 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/campus9.png"
                                          />
                                        </div>
                                        <span>Ashutosh Yadav</span>
                                        <p className="leave_para">
                                          30 Aug 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/campus10.png"
                                          />
                                        </div>
                                        <span>Ravikant Tyagi</span>
                                        <p className="leave_para">
                                          16 Apr 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/campus11.png"
                                          />
                                        </div>
                                        <span>Shivam Kumar Bharti</span>
                                        <p className="leave_para">
                                          17 Nov 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/campus12.png"
                                          />
                                        </div>
                                        <span>Shivam Jha</span>
                                        <p className="leave_para">
                                          27 Feb 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/campus15.png"
                                          />
                                        </div>
                                        <span>Ankit Sharma</span>
                                        <p className="leave_para">
                                          02 Oct 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/campus19.png"
                                          />
                                        </div>
                                        <span>Divya Mishra</span>
                                        <p className="leave_para">
                                          12 Sep 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/campus20.png"
                                          />
                                        </div>
                                        <span>Gaurav Kumar</span>
                                        <p className="leave_para">
                                          09 May 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/Logo_TP1.png"
                                          />
                                        </div>
                                        <span>Nikhil Rajput</span>
                                        <p className="leave_para">
                                          06 Aug 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/campus22.png"
                                          />
                                        </div>
                                        <span>Raju Maurya</span>
                                        <p className="leave_para">
                                          15 Jul 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/Screenshot_(2)4.png"
                                          />
                                        </div>
                                        <span>Kriti Kashyap</span>
                                        <p className="leave_para">
                                          30 Sep 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/Logo_TP.png"
                                          />
                                        </div>
                                        <span>Ankit Maurya</span>
                                        <p className="leave_para">
                                          21 Feb 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/Logo_TP2.png"
                                          />
                                        </div>
                                        <span>Vikash Kumar Jha</span>
                                        <p className="leave_para">
                                          04 Jul 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/Logo_TP3.png"
                                          />
                                        </div>
                                        <span>Vikash Kumar Jha</span>
                                        <p className="leave_para">
                                          21 Jul 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/Logo_TP4.png"
                                          />
                                        </div>
                                        <span>Kartika Rawat</span>
                                        <p className="leave_para">
                                          10 Apr 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/Logo_TP5.png"
                                          />
                                        </div>
                                        <span>Vikash Kumar Jha</span>
                                        <p className="leave_para">
                                          04 Jul 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/Logo_TP7.png"
                                          />
                                        </div>
                                        <span>Raju Maurya</span>
                                        <p className="leave_para">
                                          15 Jul 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/Logo_TP8.png"
                                          />
                                        </div>
                                        <span>Gaurav Kumar</span>
                                        <p className="leave_para">
                                          09 May 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5>
                                        <div className="pull-left">
                                          <img
                                            className="img-circle"
                                            src="http://hrms.trainingncr.info/img/uploads/Logo_TP9.png"
                                          />
                                        </div>
                                        <span>Shipra Gupta</span>
                                        <p className="leave_para">
                                          03 Jul 2022
                                        </p>
                                      </h5>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer class="col-sm-12 footer">
        <div class="container">
          <div class="row">
            <p className="text-center margin">
              Designed &amp; Developed by{" "}
              <a
                href="http://www.techprocompsoft.com/"
                target="_blank"
                style={{color:"#e0e1f9"}}
              >
                TECHPRO COMPSOFT PVT LTD
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DashboardPage;
