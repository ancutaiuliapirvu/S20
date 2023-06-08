// console.log(this)
// console.log(window)
// console.log(this === window)
// Cand this este utilizat de sine statator (nu intr-o functie), el este chiar window (obiectul global, parintele tuturor).

// Facem un nou obiect:
const cat = {
	name: 'Garfield',
	meow: function () {
		// Valoarea lui this va fi determinata in momentul EXECUTIEI functiei.
		// console.log(this);
	}
}

// In acest caz this este chiar obiectul cat! De ce? this este de fapt obiectul din care este apelata functia!
cat.meow();

// Atentie la situatia urmatoare:
const meowFunction = cat.meow;
// In acest caz this este din nou window! De ce? Daca functia nu este apelata explicit dintr-un alt obiect, se va considera ca este apelata din window.
meowFunction();