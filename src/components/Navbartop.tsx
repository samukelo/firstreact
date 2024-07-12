function NavBarTop() {
  return (
    <div className="section1">
      <div className="row">
        <div className="col" id="logo">
          <span className="thed">D</span>
          <span className="thez">Z</span>
        </div>
        <div className="col-6" id="goaround">
          <a href="">ABOUT</a>
          <a href="">ARTICLES</a>
        </div>
        <div className="col" id="leftside">
          <button type="button" className="btn btn-outline-dark">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div className="middleheading">
        <h1 className="heroheader">DRONOTICZ</h1>
        <h3 className="subheader">THE ERA OF DRONES</h3>
        <div className="floatingline"></div>
      </div>
    </div>
  );
}

export default NavBarTop;
