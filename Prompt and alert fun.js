let score = prompt("Enter your score:");

if (score >= 90 && score <= 100) {
    console.log("Grade: A");
} else if (score >= 70 && score < 90) {
    console.log("Grade: B");
} else if (score >= 50 && score < 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}
