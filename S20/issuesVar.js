// Problema: Redeclararea unei variabile intr-un bloc de cod (intre acoladele lui if, acelasi lucru se intampla si pentru while sau for).
var phone = 'Iphone 12 Pro Max';
if (true) {
  // Putem redeclara o variabila cu var (nu vrem asta in mod normal).
  // Telefonul va fi modificat si in afara if-ului.
  var phone = 'Nokia 3310';
//   console.log(phone);
}
// console.log(phone);

// Diferenta: Intre acoladele unei functii, avem comportament diferit.
var phone = 'Iphone 12 Pro Max';
// Variabilele declarate in interiorul unei functii sunt vizibile doar in interiorul functiei.
function dream() {
  var phone = 'Nokia 3310';
//   console.log(phone);
}
dream()
// console.log(phone);