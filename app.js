const input = document.getElementById('input');
const output = document.getElementById('output');

let solve = function (info) {
  let data = [];
  let answer = {};
  const infoSplitted = info.split(/\r?\n/);
  // First organize in a Javascript Object
  for (let i = 0; i < infoSplitted.length; i++) {
    let dataTMP = infoSplitted[i].split('=');
    let employeeInfo = {};
    employeeInfo.name = dataTMP[0].toUpperCase();
    employeeInfo.shifts = dataTMP[1].split(',').map((el) => {
      return {
        day: el.slice(0, 2),
        start: el.slice(2, el.length).split('-')[0],
        end: el.slice(2, el.length).split('-')[1],
      };
    });
    data.push(employeeInfo);
  }

  // Main solve algorithm
  for (let i = 0; i < data.length; i++) {
    let employee = data[i];

    for (let o = 0; o < employee.shifts.length; o++) {
      let schedule = employee.shifts[o];

      for (let j = i + 1; j < data.length; j++) {
        let employeeComp = data[j];

        for (let u = 0; u < employeeComp.shifts.length; u++) {
          let schedulecomp = employeeComp.shifts[u];
          // Compare from both employees if they match day, start and end shift hours
          if (
            schedule.day == schedulecomp.day &&
            schedule.start < schedulecomp.end &&
            schedule.end > schedulecomp.start
          ) {
            let couple = employee.name + '-' + employeeComp.name;
            answer[couple] = couple in answer ? answer[couple] + 1 : 1;
          }
        }
      }
    }
  }
  // Print the answer
  for (key in answer) {
    console.log(key, '-', answer[key]);
    output.innerHTML += key + '-' + answer[key] + '<br></br>';
  }
};
// Event listener triggered by the file input
input.addEventListener('change', () => {
  var fr = new FileReader();
  fr.onload = () => {
    const info = fr.result;
    solve(info);
  };

  fr.readAsText(input.files[0]);
});
