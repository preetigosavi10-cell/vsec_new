function calculateAge() {
    let birthYear = document.getElementById("birthYear").value;
    let birthMonth = document.getElementById("birthMonth").value;let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;let age = currentYear - birthYear;
    let months = currentMonth - birthMonth;
    if (months < 0) {
       age--;
        months = months + 12;}
 document.getElementById("result").innerHTML =
        "Your Age is: " + age + " years and " + months + " months";
}
