const Home = () => {
    return ( 
       <div className="container-fluid">
  <div className="row">
    <div className="col-12">
      <div className="d-flex align-items-center gap-4 mb-4">
        <div className="position-relative">
          <div className="border border-2 border-primary rounded-circle">
            <img src="images/profile/user-1.jpg" className="rounded-circle m-1" alt="user1" width={60} />
          </div>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary"> 3 <span className="visually-hidden">unread messages</span>
          </span>
        </div>
        <div>
          <h3 className="fw-semibold">Hi, <span className="text-dark">Johnathan</span>
          </h3>
          <span>Cheers, and happy activities - July 6 2023</span>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="row pb-4">
            <div className="col-lg-4 d-flex align-items-stretch">
              <div className="d-flex flex-column align-items-start w-100">
                <div className="text-start">
                  <h5 className="card-title fw-semibold">Financial Income</h5>
                  <span>Aug 1, 2023 - Nov 1, 2023</span>
                </div>
                <div className="mt-lg-auto mt-4 mb-4">
                  <span className="text-dark">Total Revenue <span className="text-success">+9.78%</span>
                  </span>
                  <h2 className="mt-2 fw-bold">$8,240,00</h2>
                  <span>Increased 15% from last month</span>
                </div>
              </div>
            </div>
            <div className="col-lg-8 d-flex align-items-stretch">
              <div className="w-100">
                <div className="d-md-flex align-items-start gap-3">
                  <div>
                    <h6 className="mb-0">Product Condition</h6>
                    <div className="d-flex align-items-center gap-3">
                      <h2 className="mt-2 fw-bold">75%</h2>
                      <span className="badge bg-primary  px-2 py-1 d-flex align-items-center">
                        <i className="ti ti-chevron-down fs-4" />2.8% </span>
                    </div>
                  </div>
                  <div className="ms-auto">
                    <select className="form-select">
                      <option value={1}>March 2023</option>
                      <option value={2}>April 2023</option>
                      <option value={3}>May 2023</option>
                      <option value={4}>June 2023</option>
                    </select>
                  </div>
                </div>
                <div className="mt-4">
                  <div id="financial" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-top">
          <div className="row gx-0">
            <div className="col-md-4 border-end">
              <div className="p-4 py-3 py-md-4">
                <p className="fs-4 text-danger mb-0">
                  <span className="text-danger">
                    <span className="round-8 bg-danger rounded-circle d-inline-block me-1" />
                  </span>Total Expenses
                </p>
                <h3 className=" mt-2 mb-0">$3,350,00</h3>
              </div>
            </div>
            <div className="col-md-4 border-end">
              <div className="p-4 py-3 py-md-4">
                <p className="fs-4 text-primary mb-0">
                  <span className="text-primary">
                    <span className="round-8 bg-primary rounded-circle d-inline-block me-1" />
                  </span>Resident
                </p>
                <h3 className=" mt-2 mb-0">1,500</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 py-3 py-md-4">
                <p className="fs-4 text-info mb-0">
                  <span className="text-info">
                    <span className="round-8 bg-info rounded-circle d-inline-block me-1" />
                  </span>Reports
                </p>
                <h3 className=" mt-2 mb-0">560</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 
  </div>

</div>

     );
}
 
export default Home;