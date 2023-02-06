function formatGrade(n){
    let gradeText = '';
    if(n < 3.50){
        gradeText = "Poor";
    } else if (n < 4.50){
        gradeText = "Good";
    } else if (n < 5.50){
        gradeText = "Very good"
    } else if (n <= 6){
        gradeText = "Excellent"
    }
    console.log(n < 3 ? `Fail (2)` : `${gradeText} (${n.toFixed(2)})`)
}
formatGrade(3.33)
formatGrade(4.50)
formatGrade(2)