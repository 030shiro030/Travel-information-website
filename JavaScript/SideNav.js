//Sidenav
function myFunction() {
    var x = document.getElementById("mySidenav");
    if (x.className === "sidenav") {
        x.className += " close";

        //關li
        var a = document.getElementById("sideNav_language");
        a.className = "sideNav_language-ul";
        var b = document.getElementById("sideNav_asia");
        b.className = "sideNav_asia-ul";
        var c = document.getElementById("sideNav_northAmerica");
        c.className = "sideNav_northAmerica-ul";
        var d = document.getElementById("sideNav_europe");
        d.className = "sideNav_europe-ul";
    } else {
        x.className = "sidenav";
    }
}

//關li
function hideSidelanguageUl() {
    var x = document.getElementById("sideNav_language");

    if (x.className === "sideNav_language-ul show") {
        x.className = "sideNav_language-ul";
    } else {
        x.className = "sideNav_language-ul";
        x.className += " show";
    }
}

function hideSideAsiaUl(){
    var x = document.getElementById("sideNav_asia");

    if (x.className === "sideNav_asia-ul show") {
        x.className = "sideNav_asia-ul";
    } else {
        x.className = "sideNav_asia-ul";
        x.className += " show";
    }
}

function hideSideNorthAmericaUl(){
    var x = document.getElementById("sideNav_northAmerica");

    if (x.className === "sideNav_northAmerica-ul show") {
        x.className = "sideNav_northAmerica-ul";
    } else {
        x.className = "sideNav_northAmerica-ul";
        x.className += " show";
    }
}

function hideSideEuropeUl(){
    var x = document.getElementById("sideNav_europe");

    if (x.className === "sideNav_europe-ul show") {
        x.className = "sideNav_europe-ul";
    } else {
        x.className = "sideNav_europe-ul";
        x.className += " show";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // 當螢幕大於768px時執行
    console.log("DOM 已加載");
    function checkScreenSize() {
    if (window.matchMedia("(min-width: 769px)").matches) {
        // 關 Sidenav
        menuResponsive();
        }
    }
    checkScreenSize();
    // 視窗調整大小時執行
    window.addEventListener('resize', checkScreenSize);
})

//當螢幕大於768px關Sidenav
function menuResponsive() {
    var x = document.getElementById("mySidenav");
    if (x.className === "sidenav") {
        x.className += " close";
    }

    //關li
    var a = document.getElementById("sideNav_language");
        a.className = "sideNav_language-ul";
        var b = document.getElementById("sideNav_asia");
        b.className = "sideNav_asia-ul";
        var c = document.getElementById("sideNav_northAmerica");
        c.className = "sideNav_northAmerica-ul";
        var d = document.getElementById("sideNav_europe");
        d.className = "sideNav_europe-ul";        
}
