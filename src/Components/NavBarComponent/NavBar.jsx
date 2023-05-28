const NavBar = () => {
    return (
        <>
   <header className="app-header"> 
  <nav className="navbar navbar-expand-lg navbar-light">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link sidebartoggler nav-icon-hover ms-n3" id="headerCollapse" href="javascript:void(0)">
          <i className="ti ti-menu-2" />
        </a>
      </li>
    
    </ul>
   
    <div className="d-block d-lg-none">
      <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/logos/dark-logo.svg" className="dark-logo" width={180} alt />
      <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/logos/light-logo.svg" className="light-logo" width={180} alt />
    </div>
    <button className="navbar-toggler p-0 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="p-2">
        <i className="ti ti-dots fs-7" />
      </span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <div className="d-flex align-items-center justify-content-between">
        <a href="javascript:void(0)" className="nav-link d-flex d-lg-none align-items-center justify-content-center" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobilenavbar" aria-controls="offcanvasWithBothOptions">
          <i className="ti ti-align-justified fs-7" />
        </a>
        <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-center">
  
          <li className="nav-item">
            <a className="nav-link notify-badge nav-icon-hover" href="javascript:void(0)" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
              <i className="ti ti-basket" />
              <span className="badge rounded-pill bg-danger fs-2">2</span>                   
            </a>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link pe-0" href="javascript:void(0)" id="drop1" data-bs-toggle="dropdown" aria-expanded="false">
              <div className="d-flex align-items-center">
                <div className="user-profile-img">
                  <img src="images/profile/user-1.jpg" className="rounded-circle" width={35} height={35} alt />
                </div>
              </div>
            </a>
         
          </li>
        </ul>
      </div>
    </div>
  </nav>

{/*// ?this is cart template */}

<div className="offcanvas offcanvas-end shopping-cart" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header py-4">
    <h5 className="offcanvas-title fs-5 fw-semibold" id="offcanvasRightLabel">Shopping Cart</h5>
    <span className="badge bg-primary rounded-4 px-3 py-1 lh-sm">5 new</span>
  </div>
  <div className="offcanvas-body h-100 px-4 pt-0" data-simplebar>
    <ul className="mb-0">
      <li className="pb-7">
        <div className="d-flex align-items-center">
          <img src="../../dist/images/products/product-1.jpg" width={95} height={75} className="rounded-1 me-9 flex-shrink-0" alt />
          <div>
            <h6 className="mb-1">Supreme toys cooker</h6>
            <p className="mb-0 text-muted fs-2">Kitchenware Item</p>
            <div className="d-flex align-items-center justify-content-between mt-2">
              <h6 className="fs-2 fw-semibold mb-0 text-muted">$250</h6>
              <div className="input-group input-group-sm w-50">
                <button className="btn border-0 round-20 minus p-0 bg-light-success text-success " type="button" id="add1"> - </button>
                <input type="text" className="form-control round-20 bg-transparent text-muted fs-2 border-0  text-center qty" placeholder aria-label="Example text with button addon" aria-describedby="add1" defaultValue={1} />
                <button className="btn text-success bg-light-success  p-0 round-20 border-0 add" type="button" id="addo2"> + </button>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="pb-7">
        <div className="d-flex align-items-center">
          <img src="../../dist/images/products/product-2.jpg" width={95} height={75} className="rounded-1 me-9 flex-shrink-0" alt />
          <div>
            <h6 className="mb-1">Supreme toys cooker</h6>
            <p className="mb-0 text-muted fs-2">Kitchenware Item</p>
            <div className="d-flex align-items-center justify-content-between mt-2">
              <h6 className="fs-2 fw-semibold mb-0 text-muted">$250</h6>
              <div className="input-group input-group-sm w-50">
                <button className="btn border-0 round-20 minus p-0 bg-light-success text-success " type="button" id="add2"> - </button>
                <input type="text" className="form-control round-20 bg-transparent text-muted fs-2 border-0  text-center qty" placeholder aria-label="Example text with button addon" aria-describedby="add2" defaultValue={1} />
                <button className="btn text-success bg-light-success  p-0 round-20 border-0 add" type="button" id="addon34"> + </button>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="pb-7">
        <div className="d-flex align-items-center">
          <img src="../../dist/images/products/product-3.jpg" width={95} height={75} className="rounded-1 me-9 flex-shrink-0" alt />
          <div>
            <h6 className="mb-1">Supreme toys cooker</h6>
            <p className="mb-0 text-muted fs-2">Kitchenware Item</p>
            <div className="d-flex align-items-center justify-content-between mt-2">
              <h6 className="fs-2 fw-semibold mb-0 text-muted">$250</h6>
              <div className="input-group input-group-sm w-50">
                <button className="btn border-0 round-20 minus p-0 bg-light-success text-success " type="button" id="add3"> - </button>
                <input type="text" className="form-control round-20 bg-transparent text-muted fs-2 border-0  text-center qty" placeholder aria-label="Example text with button addon" aria-describedby="add3" defaultValue={1} />
                <button className="btn text-success bg-light-success  p-0 round-20 border-0 add" type="button" id="addon3"> + </button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div className="align-bottom">
      <div className="d-flex align-items-center pb-7">
        <span className="text-dark fs-3">Sub Total</span>
        <div className="ms-auto">
          <span className="text-dark fw-semibold fs-3">$2530</span>
        </div>
      </div>
      <div className="d-flex align-items-center pb-7">
        <span className="text-dark fs-3">Total</span>
        <div className="ms-auto">
          <span className="text-dark fw-semibold fs-3">$6830</span>
        </div>
      </div>
      <a href="eco-checkout.html" className="btn btn-outline-primary w-100">Go to shopping cart</a>
    </div>
  </div>
</div>
{/* //?end of cart template */}


  
</header>


    </>
      );
}
 
export default NavBar;