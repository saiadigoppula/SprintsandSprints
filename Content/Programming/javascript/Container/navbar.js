document.getElementById("navbar").innerHTML +=
`

<div class="menu-button" onclick="myFunction()">
      <i class="fas fa-bars  fa-2x icon"></i>
    </div>
    <a href="../../../index.html">
      <div class="brand-name">
        Buildcodenow
      </div>
    </a>

    <ul class ="ul-item-menu">
      <span class="hide-menu-items">
        <li><a href="#news">Javascript</a></li>
        <li><a href="#contact">Python</a></li>
        <li><a href="#about">Java</a></li>
      </span>
      <li onclick="more_cancel()"><a href="#about">MORE <i class="fas fa-caret-down fa-1x icon"></i></a></li>
    </ul>
    <div>
      <div class ="icons"><i class="fab fa-youtube"></i></div>
      <div class ="icons"><i class="fab fa-instagram"></i></div>
      <div class ="icons"><i class="fab fa-facebook"></i></div>
      <div class ="icons"><i class="fab fa-linkedin"></i></div>
      <div class ="icons"><i class="fab fa-twitter"></i></div>
    </div>


`;