// javascript to make side menu appear
function openNav() {
    document.getElementById("sidenav").style.width = "50%";
}
function closeNav() {
    document.getElementById("sidenav").style.width = "0%";
}
// function to embed navbar into page
function embed_navbar() {
    document.write(`
    <link rel="stylesheet" type="text/css" href="../styles/navbar.css">
    <nav>
        <div class="logo">Vision Plus</div>
        <span class="menubtn" onclick="openNav()">&#9776;</span>

        <div class="navLinks">
            <ul>
                <li><a href="../index.html">Home</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Dashboard</a></li>
            </ul>
        </div>
    </nav>

    <div class="sideNav" id="sidenav">
        <a href="#" class="closeBtn" onclick="closeNav()"> &#10006;</a>
        <a href="../index.html">Home</a>
        <a href="#">Events</a>
        <a href="#">Login</a>
        <a href="#">Dashboard</a> 
    </div>

    <hr />
    <br />`);
}
embed_navbar();
closeNav();
