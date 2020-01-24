import React from 'react';
import NavBar from './NavBar';

const Header = () => {
    return (
        <header className="short-header">   
  <div className="gradient-block" />	
  <div className="row header-content">
    <div className="logo">
      <a href="index.html">Author</a>
    </div>
     <NavBar />
    <div className="search-wrap">
      <form role="search" method="get" className="search-form" action="#">
        <label>
          <span className="hide-content">Search for:</span>
          <input type="search" className="search-field" placeholder="Type Your Keywords" defaultValue name="s" title="Search for:" autoComplete="off" />
        </label>
        <input type="submit" className="search-submit" defaultValue="Search" />
      </form>
      <a href="#" id="close-search" className="close-btn">Close</a>
    </div> {/* end search wrap */}	
    <div className="triggers">
      <a className="search-trigger" href="#"><i className="fa fa-search" /></a>
      <a className="menu-toggle" href="#"><span>Menu</span></a>
    </div> {/* end triggers */}	
  </div>     		
</header>

    )
}

export default Header;