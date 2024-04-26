//login
function A1() {
    a = document.getElementById("page");
    a.style.display = "none";
    console.log(a)
    b = document.getElementById("p1");
    b.style.display = "block";
    // alert("welcome")
    green()
}


//timer
var i = 5 * 60;
var j = i;
var m = document.getElementById("timer");

function red() {
    var minutes = Math.floor(j / 60);
    var seconds = j % 60;
    m.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
}

function green() {
    if (j > 0) {
        j--;
        red();
        setTimeout(green, 1000);
    }
    else {
        window.close()
    }
}


//total
function total() {
    c = document.getElementById("p1");
    c.style.display = "";
    document.getElementById("result").style.display = "block"

    var t1 = document.getElementById("h3")
    t1.innerText = "total = " + count;
    alert("thank you")

    if (count >= 3) {
        t1.innerHTML = "total = " + count + "<br>" + "<br>" + "pass"
        t1.style.background="#3cd070"
        t1.style.color="#e5e4e2"
       
    }
    else {
        t1.innerHTML = "total = " + count + "<br>" + "<br>" + "fail"
        t1.style.background="#e30022"
        t1.style.color="#fff5ee"
    }
}


//QUIZ
var count = 0;
function correct1() {
    document.getElementById("q1").style.borderBottom = "5px solid green"
    document.getElementById("q1").style.backgroundColor = "#A9DFBF"
    count++
}

function wrong1() {
    document.getElementById("q1").style.borderBottom = "5px solid red"
    document.getElementById("q1").style.backgroundColor = "#E6B0AA"
}

function correct2() {
    document.getElementById("q2").style.borderBottom = "5px solid green"
    document.getElementById("q2").style.backgroundColor = "#A9DFBF"
    count++
}

function wrong2() {
    document.getElementById("q2").style.borderBottom = "5px solid red"
    document.getElementById("q2").style.backgroundColor = "#E6B0AA"
}

function correct3() {
    document.getElementById("q3").style.borderBottom = "5px solid green"
    document.getElementById("q3").style.backgroundColor = "#A9DFBF"
    count++
}

function wrong3() {
    document.getElementById("q3").style.borderBottom = "5px solid red"
    document.getElementById("q3").style.backgroundColor = "#E6B0AA"
}

function correct4() {
    document.getElementById("q4").style.borderBottom = "5px solid green"
    document.getElementById("q4").style.backgroundColor = "#A9DFBF"
    count++
}

function wrong4() {
    document.getElementById("q4").style.borderBottom = "5px solid red"
    document.getElementById("q4").style.backgroundColor = "#E6B0AA"
}
