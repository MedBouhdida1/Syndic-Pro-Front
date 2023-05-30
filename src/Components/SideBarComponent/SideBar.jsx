import { Link } from "react-router-dom";
import { useState } from "react";

const SideBar = () => {
  const [pathUrl, setPathUrl] = useState(window.location.pathname);
  return (
    <>
      {/* --------------------------------------------------- */}
      {/* Sidebar */}
      {/* --------------------------------------------------- */}
      <aside className="left-sidebar">
        {/* Sidebar scroll*/}
        <div>
          <div className="brand-logo d-flex align-items-center justify-content-between">
            <Link to="/" className="text-nowrap logo-img">
              <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/logos/dark-logo.svg" className="dark-logo" width={180} alt />

            </Link>
            <div className="close-btn d-lg-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
              <i className="ti ti-x fs-8" />
            </div>
          </div>
          {/* Sidebar navigation*/}
          <nav className="sidebar-nav scroll-sidebar" data-simplebar>
            <ul id="sidebarnav">
              {/* ============================= */}
              {/* Home */}
              {/* ============================= */}
              {/* <li className="nav-small-cap">
            <i className="ti ti-dots nav-small-cap-icon fs-4" />
            <span className="hide-menu">Home</span>
          </li> */}
              {/* =================== */}
              {/* Dashboard */}
              {/* =================== */}
              <li className={`sidebar-item${pathUrl === "/" ? " active" : ""}`} onClick={() => setPathUrl("/")}>
                <Link className="sidebar-link" to="/" aria-expanded="false" >
                  <span>
                    <i className="ti ti-home" />
                  </span>
                  <span className="hide-menu">Accueil</span>
                </Link>
              </li>
              <li className={`sidebar-item${pathUrl === "/resident" ? " active" : ""}`} onClick={() => setPathUrl("/resident")}>
                <Link className="sidebar-link" to="/resident" aria-expanded="false">
                  <span>
                    <i className="ti ti-users" />
                  </span>
                  <span className="hide-menu">Residents</span>
                </Link>
              </li>

              <li className={`sidebar-item${pathUrl === "/syndic" ? " active" : ""}`} onClick={() => setPathUrl("/syndic")}>
                <Link className="sidebar-link" to="/syndic" aria-expanded="false">
                  <span>
                    <i className="ti ti-id-badge" />
                  </span>
                  <span className="hide-menu">Syndics</span>
                </Link>
              </li> 
              <li className={`sidebar-item${pathUrl === "/AG" ? " active" : ""}`} onClick={() => setPathUrl("/AG")}>
                <Link className="sidebar-link" to="/AG" aria-expanded="false">
                  <span>
                    <i className="ti ti-id-badge" />
                  </span>
                  <span className="hide-menu">AG</span>
                </Link>
              </li>

              <li className="sidebar-item">
                <a className="sidebar-link" href="#" aria-expanded="false">
                  <span>
                    <i className="ti ti-calendar" />
                  </span>
                  <span className="hide-menu">AG</span>
                </a>
              </li>

              {/* <li className="sidebar-item">
            <a className="sidebar-link" href="index5.html" aria-expanded="false">
              <span>
                <i className="ti ti-activity-heartbeat" />
              </span>
              <span className="hide-menu">General</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="index6.html" aria-expanded="false">
              <span>
                <i className="ti ti-playlist" />
              </span>
              <span className="hide-menu">Music</span>
            </a>
          </li> */}

            </ul>
            <div className="unlimited-access hide-menu bg-light-primary position-relative my-7 rounded">
              <div className="d-flex">
                <div className="unlimited-access-title">
                  <h6 className="fw-semibold fs-4 mb-6 text-dark w-85">Unlimited Access</h6>
                  <button className="btn btn-primary fs-2 fw-semibold lh-sm">Signup</button>
                </div>
                <div className="unlimited-access-img">
                  <img src="images/backgrounds/rocket.png" alt className="img-fluid" />
                </div>
              </div>
            </div>
          </nav>
          <div className="fixed-profile p-3 bg-light-secondary rounded sidebar-ad mt-3">
            <div className="hstack gap-3">
              <div className="john-img">
                <img src="../../dist/images/profile/user-1.jpg" className="rounded-circle" width={40} height={40} alt />
              </div>
              <div className="john-title">
                <h6 className="mb-0 fs-4 fw-semibold">Mathew</h6>
                <span className="fs-2 text-dark">Designer</span>
              </div>
              <button className="border-0 bg-transparent text-primary ms-auto" tabIndex={0} type="button" aria-label="logout" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="logout">
                <i className="ti ti-power fs-6" />
              </button>
            </div>
          </div>
          {/* End Sidebar navigation */}
        </div>
        {/* End Sidebar scroll*/}
      </aside>
    </>

  );
}

export default SideBar;