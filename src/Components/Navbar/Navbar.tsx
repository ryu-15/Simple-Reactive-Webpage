
const NavBar=()=>{
    return (
        <nav>
            <div className="Nav-items">
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Features</a></li>
            </div>
            <span className="revel-logo">REVEL</span>
            <div className="sign-login-btn-container">
                <button id="sign-btn">Button text</button>
                <button id="login-btn">Button text</button>
            </div>
        </nav>
    )
};

export default NavBar;
