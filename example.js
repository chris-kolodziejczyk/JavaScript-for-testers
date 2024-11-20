// Jakiś tekst

/*
Wiele
linii

*/

// var myName = ['bkdfdsblv']
let myName;
myName = 1;
myName = [1, 2, 3, 4, 5, 6, 7, 8];
myName = () => {};
myName = {};
myName = function () {};



let myName1 = 'Krzysiek';

class Main {
	/**
	 *Metoda do logowania tekstu
	 */
	logExampleText() {
		myName = 'Krzysztof Kołodziejczyk';

		console.log('Przykładowy tekst');

		let myFun = () => {
			const myNum = 'Krzysiek jest trenerem';

			// replaceAll
			let newText = myNum.replace('trenerem', 'Inżynierem oprogramowania');

			console.log('Logujemy dodatkową informację ' + myNum + myName1);
		};

		return myFun();
	}
}

let main = new Main();

// main.logExampleText()

// console.log('K,r,z,y,s z,t,o,f'.split(' '))

// console.log('Uczę się stringów w C++'.length);
// console.log(myName1.replace('Krzysiek', 'Kasia'));
// console.log('Uczę się stringów w "C++"'.substring(9, 17));

// let city = "Chicago"

// let editedCityName = city.replace("Chicago", "c:*,h:*,i:*,a:*,g:*,o:*")

// let splitedtCityName = editedCityName.split('*')

// console.log(editedCityName + '\n' + splitedtCityName.length)

// let osoby = [
// 	['Jan Kowalski', ['+48555222666']],
// 	['Adam Nowak', [['Maria Z', 'Janusz G']]],
// 	'Maria Z',
// 	['Janusz G', 2,3,4,5,7,[1,2,3,[['Krzysiek jest trenerem']]]],
// 	[[['Maria Z', 'Janusz G']],['Nr ID Jana Kowalskiego - ASD456778']],
// 	'Marcin J',
// ];

let osoby = [
	'Jan Kowalski',
	['Adam Nowak', [['Maria Z', 'Janusz G']]],
	'Maria Z',
	'Janusz G',
	[[['Maria Z', 'Janusz G']]],
	'Marcin J',
];

// osoby.forEach(
//      (value, index, array) => {
//         // console.log(osoby[0]);

//     	console.log(value);
//     }
//     );

// console.log(osoby.slice(1,2))

// let arr = osoby.splice(1, 2)

// console.log(arr)
// console.log(osoby)

// let url = 'http://mojastrona.pl?text=Uczę się stringów w Javascript';
// let prawidlowyURL = url.split(" ").join("");
// console.log(prawidlowyURL)

let obj = {
	'foo 1': 'Przykładowy tekst',
	bar: 23,
	users: {
		'user 1': {
			userName: 'Jan Kowalski',
			ID: 'ASD6758569',
			tel: '+48666555222',
		},
		'user 2': {
			userName: 'Marek Zięba',
			ID: 'DRT4564648',
			tel: '+48785254254',
		},
	},
};

obj.bar;
obj['foo'];

obj.bar = 548;

delete obj.bar;
delete obj['foo 1'];

let library = {
	book1: {
		title: 'X',
		pages: 123,
		year: 1999,
	},
	book2: {
		title: '"Y y ()"',
		pages: 345,
		year: 1949,
	},
	book3: {
		title: 'Z',
		pages: 567,
		year: 2023,
	},
};

// Nadmiarowa zmienna
// let book2Title = library.book2.title;

// Niepoprawne wywołanie elementów obiektu
// console.log(library.keys(book2))

// Przykład odp. 1
// console.log(
// 	library.book2.title + ' ' + '\n' + library.book2.year + '\n' + library.book2.pages
// );

// Przykład odp. 2
// console.log(`Tytuł: ${library.book2.title}
// Rok wydania: ${library.book2.year}
// Ilość stron: ${library.book2.pages}`);

// console.log(Object.keys(library.book2))
// console.log(Object.values(library.book2))


Object.values(library.book2).forEach((value, index, array)=>{
console.log(value)

// console.log(array[0] + '\n' + array[1] + '\n' + array[2])
})