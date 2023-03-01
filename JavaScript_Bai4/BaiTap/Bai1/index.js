let grades = {
    math: 8.0,
    physics: 9.0,
    english: 10.0
};

function rankGrade(grade) {
    if (grade > 0 && grade <= 7) return 'D Grade';
    if (grade >= 7.1 && grade <= 8.0) return 'C Grade';
    if (grade >= 8.1 && grade <= 9.0) return 'B Grade';
    if (grade >= 9.1 && grade <= 10) return 'A Grade';
}

function calAvgGrade(a) {
    let totalGrade = 0;
    let amountSub = Object.keys(a).length;
    for (const subject in grades) {
        totalGrade += grades[subject];
    }

    return totalGrade / amountSub;
}

let result = calAvgGrade(grades);

console.log(grades);
console.log(rankGrade(result));

