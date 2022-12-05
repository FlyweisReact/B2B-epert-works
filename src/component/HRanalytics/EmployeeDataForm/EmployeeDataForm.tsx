import React from 'react'
import Navbar from "../../Header/Navbar/Navbar"
import HeadingTile from "../../HeadingTile/HeadingTile"
import Footer from "../../Footer/Footer"
export default function EmployeeDataForm() {
    return (
        <div>
            <Navbar />
            <HeadingTile heading="Employee Data Form" />

            <section id="content">
                <form className="form-sample">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">First Name</label>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Last Name</label>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Employee ID</label>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Project Start Date</label>
                                <div className="col-sm-6">
                                    <input type="date" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Immigration Status</label>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Visa Expiry Date</label>
                                <div className="col-sm-6">
                                    <input type="date" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Client Name</label>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Current Project End Date</label>
                                <div className="col-sm-6">
                                    <input type="date" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Technology</label>
                                <div className="col-sm-6">

                                    <select className="form-control">
                                       { ['Java',
                                        'Python,',
                                        'AWS,',
                                        'Devops,',
                                        'QA,',
                                        'Workday,',
                                        'BA,',
                                        'UI Developer'].map(course=><option>{course}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Bill Rate Per Hour</label>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">OtherTechnology type here</label>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" placeholder="Other Technology Type Here"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Project Status</label>
                                <div className="col-sm-3">
                              <div className="form-radio">
                                <label className="form-check-label">
                                  <input type="radio" className="form-check-input" name="membershipRadios" id="membershipRadios1" value="" checked/> Project </label>
                              </div>
                              <span className="style1"></span></div>
                            <div className="col-sm-3">
                              <div className="form-radio">
                                <label className="form-check-label">
                                  <input type="radio" className="form-check-input" name="membershipRadios" id="membershipRadios2" value="option2"/> Bench </label>
                              </div>
                            </div>
                          </div>
                            </div>
                        </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Email ID</label>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Phone Number</label>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Current Job Location</label>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Employee Rejoining Date</label>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6" style={{position: 'relative'}}>
                    <button type="submit" className="btn btn-primary" style={{position:'absolute',left:'50vw',transform: 'translate(-50%, -50%)'}} >Submit</button><br />
        </div></div>
                </form>
            </section>
            <Footer/>
        </div>
    )
}
