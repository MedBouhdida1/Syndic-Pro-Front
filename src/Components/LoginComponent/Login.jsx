const Login = () => {
    return ( 
   <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
  <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
    <div className="d-flex align-items-center justify-content-center w-100">
      <div className="row justify-content-center w-100">
        <div className="col-md-8 col-lg-6 col-xxl-3">
          <div className="card mb-0">
            <div className="card-body">
              <a href="index.html" className="text-nowrap logo-img text-center d-block mb-5 w-100">
                <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/logos/dark-logo.svg" width={180} alt />
              </a>
              <div className="row">
                <div className="col-6 mb-2 mb-sm-0">
                  <a className="btn btn-white text-dark border fw-normal d-flex align-items-center justify-content-center rounded-2 py-8" href="javascript:void(0)" role="button">
                    <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/google-icon.svg" alt className="img-fluid me-2" width={18} height={18} />
                    <span className="d-none d-sm-block me-1 flex-shrink-0">Sign in with</span>Google
                  </a>
                </div>
                <div className="col-6">
                  <a className="btn btn-white text-dark border fw-normal d-flex align-items-center justify-content-center rounded-2 py-8" href="javascript:void(0)" role="button">
                    <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/facebook-icon.svg" alt className="img-fluid me-2" width={18} height={18} />
                    <span className="d-none d-sm-block me-1 flex-shrink-0">Sign in with</span>FB
                  </a>
                </div>
              </div>
              <div className="position-relative text-center my-4">
                <p className="mb-0 fs-4 px-3 d-inline-block bg-white text-dark z-index-5 position-relative">or sign in with</p>
                <span className="border-top w-100 position-absolute top-50 start-50 translate-middle" />
              </div>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-4">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="form-check">
                    <input className="form-check-input primary" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                    <label className="form-check-label text-dark" htmlFor="flexCheckChecked">
                      Remeber this Device
                    </label>
                  </div>
                  <a className="text-primary fw-medium" href="authentication-forgot-password.html">Forgot Password ?</a>
                </div>
                <a href="index.html" className="btn btn-primary w-100 py-8 mb-4 rounded-2">Sign In</a>
                <div className="d-flex align-items-center justify-content-center">
                  <p className="fs-4 mb-0 fw-medium">New to Modernize?</p>
                  <a className="text-primary fw-medium ms-2" href="authentication-register.html">Create an account</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

     );
}
 
export default Login;