var minMovesToSeat = function (seats, students) {
  let sortedSeats = seats.sort((a, b) => a - b);
  let sortedStudents = students.sort((a, b) => a - b);
  let diff = [];

  for (let i = 0; i < sortedSeats.length; i++) {
    diff.push(Math.abs(sortedSeats[i] - sortedStudents[i]));
  }

  return diff.reduce((acc, curr) => {
    return (acc = acc + curr);
  }, 0);
};
