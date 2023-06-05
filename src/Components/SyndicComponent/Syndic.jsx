const Syndic = () => {
  return (
    <div className="container-fluid">
      <div className="card bg-light-info shadow-none position-relative overflow-hidden">
        <div className="card-body px-4 py-3">
          <div className="row align-items-center">
            <div className="col-9">
              <h4 className="fw-semibold mb-8">Syndics</h4>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a className="text-muted" href="index.html">Dashboard</a></li>
                  <li className="breadcrumb-item" aria-current="page">Syndics</li>
                </ol>
              </nav>
            </div>
            <div className="col-3">
              <div className="text-center mb-n5">
                <img src="images/breadcrumb/ChatBc.png" alt className="img-fluid mb-n4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card card-body">
        <div className="row">
          <div className="col-md-4 col-xl-3">
            <form className="position-relative">
              <input type="text" className="form-control product-search ps-5" id="input-search" placeholder="Search Syndics..." />
              <i className="ti ti-search position-absolute top-50 start-0 translate-middle-y fs-6 text-dark ms-3" />
            </form>
          </div>
          <div className="col-md-8 col-xl-9 text-end d-flex justify-content-md-end justify-content-center mt-3 mt-md-0">
            {/* <div className="action-btn show-btn" style={{display: 'none'}}>
            <a href="javascript:void(0)" className="delete-multiple btn-light-danger btn me-2 text-danger d-flex align-items-center font-medium">
              <i className="ti ti-trash text-danger me-1 fs-5" /> Delete All Row 
            </a>
          </div> */}
            <a href="javascript:void(0)" id="btn-add-contact" className="btn btn-info d-flex align-items-center">
              <i className="ti ti-users text-white me-1 fs-5" /> Ajouter Syndic
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-3">
          <div className="card">
            <div className="card-body p-4">
              <img src="images/profile/user-1.jpg" alt className="img-fluid rounded-circle mb-4" width={80} height={80} />
              <h5 className="mb-2 fw-semibold fs-4">Andrew Grant</h5>
              <div className="d-flex align-items-center gap-4 mb-4">
                <div className="d-flex align-items-center">
                  <a href="#">
                    <img src="images/profile/user-1.jpg" className="rounded-circle me-n2 card-hover border border-white" width={32} height={32} />
                  </a>
                  <a href="#">
                    <img src="images/profile/user-2.jpg" className="rounded-circle me-n2 card-hover border border-white" width={32} height={32} />
                  </a>
                  <a href="#">
                    <img src="images/profile/user-3.jpg" className="rounded-circle me-n2 card-hover border border-white" width={32} height={32} />
                  </a>
                </div>
                <p className="mb-0">3 mutual friends</p>
              </div>
              <button className="btn bg-light-primary text-primary mb-3 w-100">Add Friend</button>
              <button className="btn bg-light-secondary text-secondary w-100">Remove</button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="card">
            <div className="card-body p-4">
              <img src="images/profile/user-2.jpg" alt className="img-fluid rounded-circle mb-4" width={80} height={80} />
              <h5 className="mb-2 fw-semibold fs-4">Leo Pratt</h5>
              <div className="d-flex align-items-center gap-4 mb-4">
                <div className="d-flex align-items-center">
                  <a href="#">
                    <img src="images/profile/user-1.jpg" className="rounded-circle me-n2 card-hover border border-white" width={32} height={32} />
                  </a>
                  <a href="#">
                    <img src="images/profile/user-2.jpg" className="rounded-circle me-n2 card-hover border border-white" width={32} height={32} />
                  </a>
                  <a href="#">
                    <img src="images/profile/user-3.jpg" className="rounded-circle me-n2 card-hover border border-white" width={32} height={32} />
                  </a>
                </div>
                <p className="mb-0">3 mutual friends</p>
              </div>
              <button className="btn bg-light-primary text-primary mb-3 w-100">Add Friend</button>
              <button className="btn bg-light-secondary text-secondary w-100">Remove</button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="card">
            <div className="card-body p-4">
              <img src="images/profile/user-3.jpg" alt className="img-fluid rounded-circle mb-4" width={80} height={80} />
              <h5 className="mb-2 fw-semibold fs-4">Charles Nunez</h5>
              <div className="d-flex align-items-center gap-4 mb-4">
                <div className="d-flex align-items-center">
                  <a href="#">
                    <img src="images/profile/user-1.jpg" className="rounded-circle me-n2 card-hover border border-white" width={32} height={32} />
                  </a>
                  <a href="#">
                    <img src="images/profile/user-2.jpg" className="rounded-circle me-n2 card-hover border border-white" width={32} height={32} />
                  </a>
                  <a href="#">
                    <img src="images/profile/user-3.jpg" className="rounded-circle me-n2 card-hover border border-white" width={32} height={32} />
                  </a>
                </div>
                <p className="mb-0">3 mutual friends</p>
              </div>
              <button className="btn bg-light-primary text-primary mb-3 w-100">Add Friend</button>
              <button className="btn bg-light-secondary text-secondary w-100">Remove</button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="card">
            <div className="card-body p-4">
              <img src="images/profile/user-4.jpg" alt className="img-fluid rounded-circle mb-4" width={80} height={80} />
              <h5 className="mb-2 fw-semibold fs-4">Lora Powers</h5>
              <div className="d-flex align-items-center gap-4 mb-4">
                <div className="d-flex align-items-center">
                  <a href="#">
                    <img src="images/profile/user-1.jpg" className="rounded-circle me-n2 card-hover border border-white" width={32} height={32} />
                  </a>
                  <a href="#">
                    <img src="images/profile/user-2.jpg" className="rounded-circle me-n2 card-hover border border-white" width={32} height={32} />
                  </a>
                  <a href="#">
                    <img src="images/profile/user-3.jpg" className="rounded-circle me-n2 card-hover border border-white" width={32} height={32} />
                  </a>
                </div>
                <p className="mb-0">3 mutual friends</p>
              </div>
              <button className="btn bg-light-primary text-primary mb-3 w-100">Add Friend</button>
              <button className="btn bg-light-secondary text-secondary w-100">Remove</button>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}

export default Syndic;