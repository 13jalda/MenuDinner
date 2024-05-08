// ES6 code goes here

const comments = [
    "Buena elección",
    "Ideal para este día",
    "Es el plato que mas me gusta",
    "Un plato excelente",
    "Espero que lo disfrute"
];


const mainBreakfast = [
    {id: "TJ", name: "Tostadas con jamon", price: 2.5},
    {id: "TA", name: "Tosatadas con aguacate", price:2.6},
    {id: "TP", name: "Tortilla de patata", price: 2.15},
    {id: "TS", name: "Tortitas con sirope", price: 3},
    {id: "GC", name: "Gofre con chocolate", price: 3},
]

const sidesBreakfast = [
    {id: "TC", name: "Tarta de chocolate", price:2.5},
    {id: "TQ", name: "Tarta de queso", price:2.4},
    {id: "YA", name: "Yogurt con arandanos", price: 1.5},
    {id: "ZZ", name: "Zumo de zanahorias", price:2.1},
    {id: "ZN", name: "Zumo de naranja", price: 2.1},
    {id: "CA", name: "Cafe", price: 1.5},
    {id: "CL", name: "Cafe con leche", price: 1.6},
    {id: "CC", name: "Capucchino", price: 1.8},
]

const mainLunch = [
    {id: "AC", name: "Arroz a la cubana", price: 7.5},
    {id: "EC", name: "Ensalada de la casa", price:5.6},
    {id: "TP", name: "Tortilla de patata", price: 4.15},
    {id: "AR", name: "Alubias rojas", price: 7},
    {id: "PC", name: "Pasta carbonara", price: 7.75},
]

const sidesLunch = [
    {id: "HC", name: "Hamburgesa con huevo y bacon", price:9.5},
    {id: "LH", name: "Lubina al horno", price:10.4},
    {id: "MR", name: "Merluza rebozada", price: 9.5},
    {id: "CA", name: "Costillas asadas con patata", price:12.1},
    {id: "FS", name: "Filete en salsa", price: 10.3},
    {id: "CJ", name: "Croquetas de jamon caseras", price: 7.5}
]

function mainMenuB(){
    var mainDishes = [];
    var subtotal= 0;
    mainBreakfast.forEach(function(element){
        mainDishes.push(element.id," - ",element.name,", ");
    })
    opcion = prompt("Seleccione Un plato : " + "".concat(...mainDishes));
    console.log(opcion);
    mainBreakfast.forEach(function(element){
        if (element.id == opcion.toUpperCase()){
            alert(comments[_.random(0, 4)].concat(". Su precio es: ",element.price));
            subtotal += element.price;
        }
    })
    return subtotal;   
}

function sidesMenuB(){
    var mainDishes = [];
    var subtotal= 0;
    sidesBreakfast.forEach(function(element){
        mainDishes.push(element.id," - ",element.name,", ");
    })
    opcion = prompt("Seleccione Un plato : " + "".concat(...mainDishes));
    console.log(opcion);
    sidesBreakfast.forEach(function(element){
        if (element.id == opcion.toUpperCase()){
            alert(comments[_.random(0, 4)].concat(". Su precio es: ",element.price));
            subtotal += element.price;
        }
    })
    return subtotal;   
}

function mainMenuL(tipoComida){
    var mainDishes = [];
    var subtotal= 0;
    mainLunch.forEach(function(element){
        mainDishes.push(element.id," - ",element.name,", ");
    })
    opcion = prompt("Seleccione Un plato : " + "".concat(...mainDishes));
    mainLunch.forEach(function(element){
        if (element.id == opcion.toUpperCase()){
            alert(comments[_.random(0, 4)].concat(". Su precio es: ",element.price));
            if (tipoComida == "cena"){
                subtotal = element.price + 0.5;
            }else {
                subtotal += element.price;
            }
        }
    })
    return subtotal;   
}

function sideMenuL(tipoComida){
    var mainDishes = [];
    var subtotal= 0;
    sidesLunch.forEach(function(element){
        mainDishes.push(element.id," - ",element.name,", ");
    })
    opcion = prompt("Seleccione Un plato : " + "".concat(...mainDishes));
    sidesLunch.forEach(function(element){
        if (element.id == opcion.toUpperCase()){
            alert(comments[_.random(0, 4)].concat(". Su precio es: ",element.price));
            if (tipoComida == "cena"){
                subtotal = element.price + 0.5;
            }else {
                subtotal += element.price;
            }
        }
    })
    return subtotal;   
}

function menu (){
    tipoMenu = prompt("Seleccione el tipo de menú (Desayuno, Comida o cena)");
    var i = 0;
    var total = 0;
    if ((tipoMenu.toLowerCase() == "comida") || (tipoMenu.toLowerCase() == "cena")) {
        do {
            if (i==0)
                total += mainMenuL(tipoMenu.toLowerCase());
            else if (i > 0 && i < 3){
                total += sideMenuL(tipoMenu.toLowerCase()); 
            }
            i++;
        } while (i < 3)
        alert("El total es: ".concat(total))
    }else if(tipoMenu.toLowerCase() == "desayuno") {
        do {
            if (i==0){
                total += mainMenuB();
            }else if (i > 0 && i < 3){
                total += sidesMenuB(); 
            }
            i++;
        } while (i < 3)
        alert("El total es: ".concat(total))
    } else {
        //throw TypeError(`Los valores introducidos no son correctos ${tipoMenu} no es valido`);
        alert(`Los valores introducidos no son correctos ${tipoMenu} no es valido`);
        menu ();
    }
}

    class JaldaError extends Error {
      constructor(msg = 'An error occurred', ...params) {
        super(...params);

        this.msg = msg;
      }
    }


menu ();
