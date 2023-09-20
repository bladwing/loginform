import { Link } from "react-router-dom";

const Registration = () => {
  return (

            <div className="col-xl-6">
              <div className="card-body p-md-5">
                <h3 className="mb-5 text-uppercase">Registration form</h3>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1m" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example1m">First name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1n" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example1n">Last name</label>
                    </div>
                  </div>
                </div>
                <div className="form-outline mb-4">
                  <input type="text" id="form3Example8" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example8">Address</label>
                </div>

                <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                  <h6 className="mb-0 me-4">Gender: </h6>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="option1" />
                    <label className="form-check-label" htmlFor="femaleGender">Female</label>
                  </div>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="option2" />
                    <label className="form-check-label" htmlFor="maleGender">Male</label>
                  </div>


                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">

                    <select className="form-select">
                      <option value="1">State</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select>

                  </div>
                  <div className="col-md-6 mb-4">

                    <select className="form-select">
                      <option value="1">City</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select>

                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example97" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example97">Email ID</label>
                </div>

                <div className="d-flex justify-content-center pt-3">
                  <button type="button" className="btn btn-light btn-lg">Reset all</button>
                  <button type="button" className="btn btn-dark btn-lg btn-block ms-4">Submit</button>

                  <Link to="/" className="btn btn-dark btn-lg btn-block ms-4">Back</Link>
                </div>

              </div>
            </div>


  );
};

export default Registration;
