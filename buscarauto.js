let autos = require("./autos");

let concesionaria = {
    autos: autos,
    buscarAuto: function(patente){
       let autoEncontrado = autos.find(auto => auto.patente == patente);
       if (autoEncontrado){
          return autoEncontrado
       }else{
          return null;
       }
    },
    venderAuto: function (patente) {
        let auto = this.buscarAuto(patente);
        if (auto) {
          auto.vendido = true;
        }
    },
    autosParaLaVenta: function(){
        return autos = this.autos.filter(function (elemento){
              return !elemento.vendido
           })
    },
    autosNuevos : function(){
        return this.autosParaLaVenta().filter( (function(nuevo){
           return nuevo.km < 100
        }))
    },   
    listaDeVentas: function () {
        let ventas = this.autos.filter(function (patente) {
            return patente.vendido == true
        });
        let lista = [];
        ventas.forEach(function (costo) {
            lista.push(costo.precio);
        })
        return lista;
    },
    totalDeVentas: function () {
        let total = this.listaDeVentas().reduce((acu, item) => {
            return acu + item;
        }, 0);
        return total;
    },
    puedeComprar: function (auto, persona) {
        if (auto.total > persona.capacidadDePagoTotal) { 
            return false;
        }
        let precioPorCuota = auto.total / 12 
        if (precioPorCuota > persona.capacidadDePagoEnCuotas) {
            return false;
        }
            return true;
    }
}

let persona1 = {name: "Pedro", capacidadDePagoTotal: 4000, capacidadDePagoEnCuotas: 100};
let persona2 = {name: "Ana", capacidadDePagoTotal: 6000, capacidadDePagoEnCuotas: 100};
let autoCaro = {total: 150000};
let autoBarato = {total: 3000};

function puedeComprar(auto, persona) {
   if (auto.total > persona.capacidadDePagoTotal) { // suponiendo que el objeto auto tiene una propiedad "total" (No lo has aclarado en la pregunta)
     return false;
   }
   let precioPorCuota = auto.total / 12 // suponiendo que sean 12 cuotas (No lo has aclarado en la pregunta)
   if (precioPorCuota > persona.capacidadDePagoEnCuotas) {
     return false;
   }
   return true;
}

console.log(persona1.name + " puedeComprar autoCaro => " + puedeComprar(autoCaro, persona1));
console.log(persona1.name + " puedeComprar autoBarato => " + puedeComprar(autoBarato, persona1));

console.log(persona2.name + " puedeComprar autoCaro => " + puedeComprar(autoCaro, persona2));
console.log(persona2.name + " puedeComprar autoBarato => " + puedeComprar(autoBarato, persona2));
