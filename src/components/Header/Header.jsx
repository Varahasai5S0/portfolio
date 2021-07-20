import React,{useState} from 'react';
import './header.css';
import Mobile from './Mobile/Mobile'; 
import Web from './Web/Web';

const Header = () => { 
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="header"> 
            <div className="logo">
            <img className="header-image" src={require('../../assests/box.gif').default} style={{height:'50px'}}/>
              Varaha Sai
                   </div>
            <div className="menu">
                <div className="header-web">
                    <Web/>
                </div>
                <div className="header-mobile"> 
                <div onClick={()=> setIsOpen(!isOpen)}>
                   <i className="fi-rr-apps menu-icon"></i>
                   </div>  
                        {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
                   
                </div>
            </div>
           
        </div>
    )
}

export default Header
