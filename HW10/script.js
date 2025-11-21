let input = prompt("Введите строку");
let regData =
  /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(
    input
  );
let regEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(input);
let regPhone =
  /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/.test(input);
if (regData) {
  console.log("Это дата");
} else if (regEmail) {
  console.log("Это email");
} else if (regPhone) {
  console.log("Это телефон");
}
