let highestAverage = 0;
let topperName = "";

function addStudent() {
let name = document.getElementById("name").value;
let roll = document.getElementById("roll").value;
let sub1 = Number(document.getElementById("sub1").value);
let sub2 = Number(document.getElementById("sub2").value);
let sub3 = Number(document.getElementById("sub3").value);
let average = (sub1 + sub2 + sub3) / 3;
let table = document.getElementById("studentTable");
let row = table.insertRow();
row.insertCell(0).innerHTML = name;
row.insertCell(1).innerHTML = roll;
row.insertCell(2).innerHTML = sub1;
row.insertCell(3).innerHTML = sub2;
row.insertCell(4).innerHTML = sub3;
row.insertCell(5).innerHTML = average.toFixed(2);
if (average > highestAverage) {

        highestAverage = average;
        topperName = name;
    }
document.getElementById("topper").innerHTML =
        "Topper: " + topperName +
        " (Average: " + highestAverage.toFixed(2) + ")";
}