let count1 = 0;
let count2 = 0;
let count3 = 0;
let Total = 0;

const primeSeats = document.getElementsByClassName("Prime-notsold");

for (let i = 0; i < primeSeats.length; i++) {
  primeSeats[i].onclick = function () {
    if (primeSeats[i].classList.contains("seat-selected")) {
      count1--;
      Total -= 330;
      primeSeats[i].classList.remove("seat-selected");
    } else {
      count1++;
      Total += 330;
      primeSeats[i].classList.add("seat-selected");
    }

    if (count1 === 0) {
      document.getElementById("Prime-row").classList.add("none");
    } else {
      document.getElementById("Prime-row").classList.remove("none");
    }

    document.getElementById("Prime-quantity").innerHTML = "X " + count1;
    document.getElementById("Total-value").innerHTML = "₹ " + Total;
  };
}

// CLASSIC
const classicSeats = document.getElementsByClassName("Classic-notsold");

for (let i = 0; i < classicSeats.length; i++) {
  classicSeats[i].onclick = function () {
    if (classicSeats[i].classList.contains("seat-selected")) {
      count2--;
      Total -= 300;
      classicSeats[i].classList.remove("seat-selected");
    } else {
      count2++;
      Total += 300;
      classicSeats[i].classList.add("seat-selected");
    }

    if (count2 === 0) {
      document.getElementById("Classic-row").classList.add("none");
    } else {
      document.getElementById("Classic-row").classList.remove("none");
    }

    document.getElementById("Classic-quantity").innerHTML = "X " + count2;
    document.getElementById("Total-value").innerHTML = "₹ " + Total;
  };
}

// RECLINER
const reclinerSeats = document.getElementsByClassName("Recliner-notsold");

for (let i = 0; i < reclinerSeats.length; i++) {
  reclinerSeats[i].onclick = function () {
    if (reclinerSeats[i].classList.contains("seat-selected")) {
      count3--;
      Total -= 520;
      reclinerSeats[i].classList.remove("seat-selected");
    } else {
      count3++;
      Total += 520;
      reclinerSeats[i].classList.add("seat-selected");
    }

    if (count3 === 0) {
      document.getElementById("Recliner-row").classList.add("none");
    } else {
      document.getElementById("Recliner-row").classList.remove("none");
    }

    document.getElementById("Recliner-quantity").innerHTML = "X " + count3;
    document.getElementById("Total-value").innerHTML = "₹ " + Total;
  };
}
