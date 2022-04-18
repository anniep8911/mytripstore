/*햄버거사이드바*/
function bars() {
    document.getElementById('sideSlide').style.width = "50vw";
    document.getElementById('bars').style.color = "transparent";
}

function barsC() {
    document.getElementById('sideSlide').style.width = "0%";
    document.getElementById('bars').style.color= "#fff";
}

document.getElementsByClassName('hdrWrap')[0].innerHTML = `<header>
<h1><a href="index.html"></a></h1>
<ul>
    <li><a href="index.html" onclick="index()" id="index">what we do</a></li>
    <li><a href="sub01.html" id="sub01" onclick="sub01()">experiences</a></li>
    <li><a href="sub02.html" id="sub02">plan</a></li>
    <li id=""><a href="sub03.html" id="sub03">editor</a></li>
    <li id=""><a href="sub04.html" id="sub04">my journey</a></li>
    <li class="bars" id="bars" onclick="bars()"><i class="fas fa-bars"></i></li>
    <li class="sideSlide" id="sideSlide">
        <div class="ham"><i class="fas fa-hamburger" onclick="barsC()"></i></div>
        <ol>
            <li><a href="index.html">what we do</a></li>
            <li><a href="sub01.html">Experience</a></li>
            <li><a href="sub02.html">plan</a></li>
            <li><a href="sub03.html">editor</a></li>
            <li><a href="sub04.html">my journey</a></li>
        </ol>
    </li>
</ul>
</header>`;

document.getElementsByClassName('ftrWrap')[0].innerHTML=`  <footer>
<div class="fl">
    <h1></h1>
    <p>Tripstore Company. All rights reserved .</p>
</div>
<div class="fm">
    <dl>
        <dt>company</dt>
        <dd>careers</dd>
        <dd>press</dd>
        <dd>foundation</dd>
        <dd>private</dd>
    </dl>
</div>
<div class="fr">
    <dl>
        <dt>get in touch</dt>
        <dd>010-2613-0742</dd>
        <dd>pjatopaz1@naver.com</dd>
    </dl>
</div>
</footer>`;