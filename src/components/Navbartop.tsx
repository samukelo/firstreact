function NavBarTop() {
  return (
    <div className="section1">
      <div className="rowtop">
        <p className="left">
          <div id="logo">
            <span className="thed">D</span>
            <span className="thez">Z</span>
          </div>
        </p>
        <p className="centered">
          <div id="goaround">
            <a href="">ABOUT</a>
            <a href="">ARTICLES</a>
          </div>
        </p>
        <p className="right">
          <div id="buttontop">
            <input type="button" className="topbtnsub" value="SUBSCRIBE" />
          </div>
        </p>
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
