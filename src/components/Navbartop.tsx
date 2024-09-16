function NavBarTop() {
  return (
    <div className="section1">
      
      <nav>
        <div className="a">
          <div id="logo">
            <span className="thed">D</span>
            <span className="thez">Z</span>
          </div>
        </div>
        <div className="b">
          <div id="goaround">
          <a href="">ABOUT</a>
          <a href="">ARTICLES</a>
        </div>
        </div>
        <div className="c">
          <div id="buttontop">
            <input type="button" className="topbtnsub" value="SUBSCRIBE" />
          </div>
        </div>
      </nav>


      <div className="middleheading">
        <h1 className="heroheader">DRONOTICZ</h1>
        <h3 className="subheader">THE ERA OF DRONES</h3>
        <div className="floatingline"></div>
      </div>

    </div>
  );
}

export default NavBarTop;
