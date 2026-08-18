const headerHTML = `
<header>
    <div class="upper">

        <a href="index.html" class="logo-section">
            <i class="fa-solid fa-rotate fa-2xl"
               style="color: rgba(23, 105, 224, 1.00);"></i>
            <h1>ReVendo</h1>
        </a>

        <div class="search-box">
            <form>
                <input type="text"
                       placeholder="Search for mobiles, accessories and more...">
                <button type="submit">
                    <i class="fa fa-search"></i>
                </button>
            </form>
        </div>

        <div class="right-section">

            <div class="location-box">
                <i class="fa fa-location-dot"></i>

                <select>
                    <option>Select Location</option>
                    <option>Delhi</option>
                    <option>Mumbai</option>
                    <option>Chennai</option>
                    <option>Bangalore</option>
                    <option>Kolkata</option>
                    <option>Ahmedabad</option>
                </select>
            </div>

            <button class="login-btn">
                <i class="fa fa-user"></i>
                Login
            </button>

        </div>
    </div>

    <div class="main">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="buy.html">Buy</a></li>
            <li><a href="sell.html">Sell</a></li>
            <li><a href="aboutus.html">About Us</a></li>
            <li><a href="contact.html">Contact Us</a></li>
        </ul>
    </div>
</header>
`;

document.body.insertAdjacentHTML("afterbegin", headerHTML);