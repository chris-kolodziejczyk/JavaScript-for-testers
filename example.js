

// myName = 8
let myNewName
const myExtraName = 'Krzysztof'



myNewName = 789

// Błędna zmiana wartości zmiennej
// myExtraName = 631
// myExtraName = "Szymon"

let myNewExtraName = myExtraName.replace("Krzysztof", "Szymon")
let myNewExtraName1 = myExtraName.replaceAll("z", "y")

function getNum (num) {
    return num
}

class Main {

    constructor(myName) {
        this.name = myName
    }


    logExampleText() {
        // myName = 'Marek'
        myNewName = 'Krzysiek'

        let myNum = 90

        let myFun = () => {
            let newNum = 987

            return newNum
        }
        console.log('Przykładowy tekst')
    }
}

// new Main().logExampleText()
let main = new Main()

// main.logExampleText()
myNewName = 67
// console.log(myNewName)







// var myName


// console.log('Krzysztof'.charAt(8))
// console.log('Krzysztof'.indexOf('f'))



// console.log('Krzysztof'.slice(1, 4))

// console.log('Krzysztof'.substr(1, 4))

// console.log('Krzysztof'.substring(4))

// console.log('K,r,z,y,s z,t,o,f'.split(' '))

// console.log('krzysztof'.substring(1,4).toUpperCase())

let text = 'Koty i psy to fajne zwierzaki'

let extraText = text.slice(-3)

// console.log(text.length)
// console.log(text.slice(7,10))
// console.log(text.slice(26,29))
// console.log(extraText)


let osoby = [
	'Jan Kowalski',
	['Adam Nowak', [['Maria Z', 'Janusz G']]],
	'Maria Z',
	'Janusz G',
	[[['Maria Z', 'Janusz G']]],
	[1,5,2,3,[['Marcin J',[25,["Krzysiek"]]]]],
];


// let users = [

//     [
//         [555888555, 789456123],
//         ['Krzysztof', 'Kołodziejczyk'],
//         ['ASD456123']
//     ],
//     [],
//     []
// ]


// console.log(osoby[5][4][0][1][1][0])

// osoby.forEach(
//  (value, index, array) => {
//     console.log(osoby[0]);


// 	console.log(value);
// }
// );


// console.log(osoby.slice(1,2))


// let arr = osoby.splice(1, 2)

// // console.log(arr)
// console.log(osoby)

// let txt = 'Koty i psy to fajne zwierzaki!'

// console.log(txt.split(' ').length)

// let url = 'http://mojastrona.pl?text=Uczę się stringów w Javascript';

// console.log(url.split(' ').join('-'));

let obj = {

    'foo 1': '',
    bar: "World",
    user3: {
        myName: 'Krzysztof',
        tel: ['+48564123589', '789456321'],
        id: 'ASD789456'
    }
}


obj.user3.tel[1]

obj['foo 1']

obj.bar
obj.user1 = 'Krzysiek'
obj['user2'] = 'Krzysiek'
 
delete obj.user1
delete obj['user2']

// console.log(Object.keys(obj))

// console.log(Object.values(obj))








// Dodaj obiekt library który posiada 3 klucze książki, których wartością są nowe obiekty

// Nowe obiekty powinny zawierać trzy klucze:
// tytuł, ilość stron, rok wydania

// Dla każdego klucza: tytuł, ilość stron, rok wydania
// dodajcie informację tekstową

// wyloguj w konsoli dane jednej książki nie zawierające nawiasów

let library = {
	book1: {
		rokWydania: [1900],
		tytuł: 'Czarny kot',
		iloscStron: 100,
	},
	book2: {
		rokWydania: [3456],
		tytuł: function () {
            return 'Pan tadeusz'
        },
		iloscStron: this.tytuł(),
	},
	book3: {
		rokWydania: [2000],
		tytuł: 'Wiersze Rafała Wojaczka',
		iloscStron: {
            "wydanie1": 100,
            wydanie2: 105,
            wydanie3: function getNumOfPage(){
                return 120
            }
        },
	},
};

// console.log(library.book1.tytuł + '\n' + library.book1.rokWydania[0] + ' ' + library.book1.iloscStron)

// console.log(`Tytuł: ${library.book1.tytuł}
// Rok wydania: ${library.book1.rokWydania[0]}
// Ilość stron: ${library.book1.iloscStron}`)



class Animal { 

    constructor(name) {
      this.name = name 
  }
  
    speak() {
      console.log(this.name + ' makes a noise.')
    }}
  
  class Dog extends Animal {

    speak(age) {
      console.log(this.name + ' barks. ' + age)
      
    }

    getName() {
        return this.name
    }

    getDogData() {

        console.log(this.getName())
    }
}
  
  let dog1 = new Dog('Rufus')
  dog1.speak(10)
  let dog2 = new Dog('Łapka')
  dog2.speak(17)
  let dog3 = new Dog('Bigos');
  dog3.speak(2)