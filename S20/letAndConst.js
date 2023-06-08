// LET:
let color = 'red';
// REDECLAREA (let color) va genera eroare.
// let color = 'blue';
// REASIGNAREA unei valori (modificarea acesteia) este posibila.
color = 'blue';
// console.log(color);

// LET are BLOCK scope (vezi desenul cu scoping).
if (true) {
  // Daca declari o variabila cu let in interiorul unui bloc (if, for) va fi vizibila doar in interiorul blocului.
  let color = 'white';
//   console.log(color);
}
// console.log(color);


// CONST:
const director = 'F.F. Coppola';
// REASIGNAREA VA DA EROARE, valoarea variabilei nu mai poate fi modificata
// director = 'S.Spielberg';

// CONST are, asemenea lui LET, BLOCK scope.
if (true) {
  const director = 'S. Spielberg';
//   console.log(director);
}

// console.log(director);