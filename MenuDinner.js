// ES6 code goes here
import _ from "https://esm.sh/lodash"

const comments = [
    "Buena elección",
    "Ideal para este día",
    "Es el plato que mas me gusta",
    "Un plato excelente",
    "Espero que lo disfrute"
];

const extras = [
    {id: "GC", name: "Gofre con chocolate", price: 3},
    {id: "FR", name: "Frapucchino", price: 3.4},
    {id: "CC", name: "Capucchino", price: 1.8},
    {id: "HE", name: "Helados", price: 2.1},
]

const mainBreakfast = [
    {id: "TJ", name: "Tostadas con jamon", price: 2.5},
    {id: "TA", name: "Tosatadas con aguacate", price:2.6},
    {id: "TP", name: "Tortilla de patata", price: 2.15},
    {id: "TS", name: "Tortitas con sirope", price: 3},
]

const sidesBreakfast1 = [
    {id: "TC", name: "Tarta de chocolate", price:2.5},
    {id: "TQ", name: "Tarta de queso", price:2.4},
    {id: "TF", name: "Tarta de franbuesas", price:2.4},
    {id: "YA", name: "Yogurt con arandanos", price: 1.5},
]

const sidesBreakfast2 = [
    {id: "ZZ", name: "Zumo de zanahorias", price:2.1},
    {id: "ZN", name: "Zumo de naranja", price: 2.1},
    {id: "CA", name: "Cafe", price: 1.5},
    {id: "CL", name: "Cafe con leche", price: 1.6},
]

const mainLunch = [
    {id: "AC", name: "Arroz a la cubana", price: 7.5},
    {id: "EC", name: "Ensalada de la casa", price:5.6},
    {id: "AR", name: "Alubias rojas", price: 7},
    {id: "PC", name: "Pasta carbonara", price: 7.75},
]

const sidesLunch = [
    {id: "HC", name: "Hamburgesa con huevo y bacon", price:9.5},
    {id: "LH", name: "Lubina al horno", price:10.4},
    {id: "CA", name: "Costillas asadas con patata", price:12.1},
    {id: "CJ", name: "Croquetas de jamon caseras", price: 7.5}
]

function anadirPlato(tipoMenu, menu, op,noche = false){
    var platoNoche={};
    tipoMenu.forEach(function(element){
        if (element.id == op.toUpperCase()){
            if (noche === true){
                platoNoche = element;
                platoNoche.price = element.price + 0.5;
                menu.push(platoNoche);
            }else{
                menu.push(element);
            }
            alert(comments[_.random(0, 4)]);
        }
    })
    return menu;
 }

 function generarTicket(seleccionMenu){
    var dishes = [];
    var total = 0.0;
    var siExtra = Boolean;
    var opcion ='';
    siExtra = confirm("Desea añadir un extra mas");
    console.log(siExtra);
    if (siExtra == true){
        const aextra = _.keyBy(extras, 'id');
        
        extras.forEach(function(element){
            dishes.push(element.id + " - " + element.name + " - Precio: " + element.price +" €\n ");
        })
        do{
            opcion = prompt("Seleccione un plato extra: \n" + "Indiquenos el codigo del plato: \n"+"".concat(...dishes));    
        }while(aextra[opcion.toUpperCase()] == null)
        seleccionMenu = anadirPlato (extras,seleccionMenu,opcion);
    }
    dishes = [];
    seleccionMenu.forEach(function(element){
        dishes.push(element.name + " - Precio: " + element.price +" €\n ");
        total += element.price;
    })
    alert("El ticket es: \n" + "".concat(...dishes) + "\n \n Total = "+ total.toFixed(2) + " €");
 }

function menu (){
    var horaMenu = prompt("Indique la hora que es (formato hh:mm):");
    var i = 0;
    var menu =[];
    var opcion =''; 
    
    if((horaMenu >= "07:00") && (horaMenu < "12:00")) {
        do {
            var mainDishes = [];
            switch (i) {
                case 0:
                    const byMainBreakfast = _.keyBy(mainBreakfast, 'id');
                    mainBreakfast.forEach(function(element){
                        mainDishes.push(element.id + " - " + element.name + " - Precio:" + element.price +" €\n ");
                    })
                    do{
                        opcion = prompt("Seleccione un plato principal para su desayuno: \n" + "Indiquenos el codigo del plato: \n"+"".concat(...mainDishes));
                    }while(byMainBreakfast[opcion.toUpperCase()] == null)
                    menu = anadirPlato(mainBreakfast,menu,opcion);
                break;
                case 1:
                    const bysidesBreakfast1 = _.keyBy(sidesBreakfast1, 'id');    
                    sidesBreakfast1.forEach(function(element){
                        mainDishes.push(element.id + " - " + element.name + " - Precio:" + element.price +" €\n ");
                    })
                    do{
                        opcion = prompt("Seleccione un plato secundario para su desayuno: \n" + "Indiquenos el codigo del plato: \n"+"".concat(...mainDishes)); 
                    }while(bysidesBreakfast1[opcion.toUpperCase()] == null)
                    menu = anadirPlato(sidesBreakfast1,menu,opcion);
                break;
                case 2:
                    const bysidesBreakfast2 = _.keyBy(sidesBreakfast2, 'id');
                    sidesBreakfast2.forEach(function(element){
                        mainDishes.push(element.id + " - " + element.name + " - Precio:" + element.price +" €\n ");
                    })
                    do{
                        opcion = prompt("Seleccione una bebida para su desayuno: \n" + "Indiquenos el codigo del plato: \n"+"".concat(...mainDishes));
                    }while(bysidesBreakfast2[opcion.toUpperCase()] == null)
                    menu = anadirPlato(sidesBreakfast2,menu,opcion);
                }
            i++;
        } while (i < 3)
        generarTicket(menu);
    } else if((horaMenu >= "12:00") && (horaMenu < "16:30")) {
        do {
            var mainDishes = [];
            switch (i) {
                case 0:
                    const bymainLunch = _.keyBy(mainLunch, 'id');
                    mainLunch.forEach(function(element){
                        mainDishes.push(element.id + " - " + element.name + " - Precio:" + element.price +" €\n ");
                    })
                    do{
                        opcion = prompt("Seleccione un plato principal para su comida: \n" + "Indiquenos el codigo del plato: \n" + "".concat(...mainDishes));
                    }while(bymainLunch[opcion.toUpperCase()] == null)
                    menu = anadirPlato(mainLunch,menu,opcion);
                break;
                case 1:
                    const bySidesLunch = _.keyBy(sidesLunch, 'id');
                    sidesLunch.forEach(function(element){
                        mainDishes.push(element.id + " - " + element.name + " - Precio:" + element.price +" €\n ");
                    })
                    do{
                        opcion = prompt("Seleccione un plato secundario para su comida: \n" + "Indiquenos el codigo del plato: \n"+"".concat(...mainDishes));
                    }while(bySidesLunch[opcion.toUpperCase()] == null)
                    menu = anadirPlato(sidesLunch,menu,opcion);
                break;
                case 2:
                    const bysidesBreakfast2 = _.keyBy(sidesBreakfast2, 'id');
                    sidesBreakfast2.forEach(function(element){
                        mainDishes.push(element.id + " - " + element.name + " - Precio:" + element.price +" €\n ");
                    })
                    do{
                        opcion = prompt("Seleccione una bebida para su comida: \n" + "Indiquenos el codigo del plato: \n" + "".concat(...mainDishes));
                    }while(bysidesBreakfast2[opcion.toUpperCase()] == null)
                    menu = anadirPlato(sidesBreakfast2,menu,opcion);
                }
            i++;
        } while (i < 3)
        generarTicket(menu);
    } else if((horaMenu >= "19:00") && (horaMenu < "23:30")) {
        const noche = true;
        do {
            var mainDishes = [];
            var plusNoche = 0;
            switch (i) {
                case 0:
                    const bymainLunch = _.keyBy(mainLunch, 'id');
                    mainLunch.forEach(function(element){
                        plusNoche = element.price + 0.5;
                        mainDishes.push(element.id + " - " + element.name + " - Precio:" + plusNoche +" €\n ");
                    })
                    do{
                        opcion = prompt("Seleccione un plato principal para su cena: \n" + "Indiquenos el codigo del plato: \n" + "".concat(...mainDishes));
                    }while(bymainLunch[opcion.toUpperCase()] == null)
                    menu = anadirPlato(mainLunch,menu,opcion,noche);
                break;
                case 1:
                    const bySidesLunch = _.keyBy(sidesLunch, 'id');
                    sidesLunch.forEach(function(element){
                        plusNoche = element.price + 0.5;
                        mainDishes.push(element.id + " - " + element.name + " - Precio:" + plusNoche +" €\n ");
                    })
                    do{
                        opcion = prompt("Seleccione un plato secundario para su cena: \n" + "Indiquenos el codigo del plato: \n"+"".concat(...mainDishes));
                    }while(bySidesLunch[opcion.toUpperCase()] == null)
                        menu = anadirPlato(sidesLunch,menu,opcion,noche); 
                break;
                case 2:
                    const bySidesBreakfast2 = _.keyBy(sidesBreakfast2, 'id');
                    sidesBreakfast2.forEach(function(element){
                        plusNoche = element.price + 0.5;
                        mainDishes.push(element.id + " - " + element.name + " - Precio:" + plusNoche +" €\n ");
                    })
                    do{
                        opcion = prompt("Seleccione una bebida para su cena: \n" + "Indiquenos el codigo del plato: \n" + "".concat(...mainDishes));
                    }while(bySidesBreakfast2[opcion.toUpperCase()] == null)
                        menu = anadirPlato(sidesBreakfast2,menu,opcion,noche);
                }
            i++;
        } while (i < 3)
        generarTicket(menu);
    } else if(((horaMenu >= "16:30") && (horaMenu < "19:00")) || ((horaMenu >= "23:30") && (horaMenu < "24:00"))
                || ((horaMenu >= "00:00") && (horaMenu < "07:00"))){
        alert("En estos momentos el restaurante se encuentra cerrado.");
    } else {
        //throw TypeError(`Los valores introducidos no son correctos ${tipoMenu} no es valido`);
        alert(`Los valores introducidos no son correctos. ${horaMenu} no es un formato de hora valido`);
        menu ();
    }
}

menu();
