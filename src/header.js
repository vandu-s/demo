import React from 'react';
const Header = () => {
    return (     
         <nav>
        <div className="left-menu">
            <div id="logo_wrapper"><span className="logo">EDYODA</span> <br/>
                <span className="story">Stories </span>
            </div>
             <span className="explore">Explore Categories</span>
             <i className="fas fa-angle-down arrow"></i>
        </div>
        <div className="right-menu">
            <span>EdYoda is free learning and knowledge <br/> 
             sharing platform for techies</span>
             <div >   <button className="btnmain">Go to Main Website</button>
                </div>
        </div>
    </nav>
  );
}
 
export default Header;