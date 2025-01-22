function clickme() {
    document.getElementById(".nav1").classList.toggle("show");
}

var navbar = document.getElementById("navbar");

navbar.innerHTML = `
<h1 class="myh1">
            <a href="index.html"><img src="assets/img/whitelogo.png" alt=""></a>
        </h1>
        <ul>
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="aboutus.html">About</a>
              </li>
            <li class="dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Menu
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="funzone.html">Experience</a></li>
                  <li><a class="dropdown-item" href="food.html">Leisure and Dining</a></li>
                  <li><a class="dropdown-item" href="character.html">Park Characters</a></li>
                  <li><a class="dropdown-item" href="whatsapp.html">WhatsApp</a></li>
                  <li><a class="dropdown-item" href="info.html">Park Information</a></li>
                  <li><a class="dropdown-item" href="bussiness.html">Business Opportunities</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact Us</a>
              </li>
        </ul>`;

        