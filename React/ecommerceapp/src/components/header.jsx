function Header() {
    return ( 
        <header className="block row center">
        <div>
            <a href="">
                <h1>Shopping Cart</h1>
            </a>
        </div>
        <div className="floatRight">
            <a href="">
                Cart
            </a>
            {'  '}
            <a href="">
                Sign In
            </a>
        </div>
    </header>
    );
}

export default Header;