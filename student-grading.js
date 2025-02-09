function calculateGrade(marks, attendance) {
    if (attendance > 90) {
      marks += 5;  // Adding 5 extra marks for attendance above 90%
    }
  
    let grade = '';
    if (marks >= 90) {
      grade = "A";
    } else if (marks >= 80) {
      grade = "B";
    } else if (marks >= 70) {
      grade = "C";
    } else if (marks >= 60) {
      grade = "D";
    } else {
      grade = "F";
    }
  
    return grade;
  }
  