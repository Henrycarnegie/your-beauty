const TopHeader = () => {
    // Check if the user is logged in
    const isLoggedIn = false; // Replace with actual login check logic
    const userName = isLoggedIn ? "User's Name" : "Masuk";

    return (
        <>
            {/* <!-- Navigation Bar --> */}
            <header className="header fixed-top">
                <div className="row col-lg-12">
                    <nav className="col-lg-12 navbar">
                        <div className="col-12 col-lg-4 left-container d-flex justify-content-center align-items-center">
                            <img className="me-3 icon-web" src="assets/images/icon/icon-web.png" alt="logo-web" />
                            <h6>Beautyy</h6>
                        </div>
                        <div className="col-12 col-lg-4 searchbar">
                            <form action="#" className="col-8">
                                <div className="d-flex align-items-center px-2">
                                    <i className="fa fa-search"></i>
                                    <input id="openSearchbar" className="form-control" type="email" placeholder="Cari produk anda disini ..." />
                                </div>
                            </form>
                            <div id="modalOpen" className="overlay hide col-4">
                                {[...Array(3)].map((_, index) => (
                                    <div className="recommendation" key={index}>
                                        <a href="search_result.php" className="product-img">
                                            <img src="assets/images/content/recom_item1.png" alt="" className="img-fluid me-2" />
                                        </a>
                                        <a href="search_result.php" className="product-name">
                                            <h6>Toner "The Originote"</h6>
                                            <span>mengandung Ceraluronic Essence</span>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-4 right-container d-flex justify-content-center align-items-center">
                            <ul className="list-group pe-2">
                                <li className="list-group-item"><a href="/">Beranda</a></li>
                                <li className="list-group-item"><a href="/about">Tentang</a></li>
                                <li className="list-group-item"><a href="/skinTypeLanding">Test Kulit</a></li>
                            </ul>
                            <div className="dropdown">
                                <button
                                    className="btn btn-register dropdown-toggle"
                                    name="btn-account"
                                    type="button"
                                    id="dropdownMenuAccount"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="me-2 fa-regular fa-user"></i>
                                    {userName}
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li>
                                        <a className="dropdown-item" href="profil.php">
                                            <strong>Profil</strong>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="dropdown-item">
                                            {isLoggedIn ? (
                                                <form action='register/logoutProcess.php' method='post'>
                                                    <button type='submit' name='logout' className='btn btn-danger'>
                                                        Logout
                                                    </button>
                                                </form>
                                            ) : (
                                                <a href='/signup'>Signup</a>
                                            )}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default TopHeader;
