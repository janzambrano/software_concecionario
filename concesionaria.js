let autos = require("./autos");
let concesionaria = {
 autos: autos,
 buscarAuto:  function (patente){
            for (let i= 0; i<autos.length; i++){
            if (autos[i].patente === patente){
                return autos[i]
            }
            else {
                return null
            }
        }} ,
 venderAuto: function(patente){
            let autoVenta = this.buscarAuto(patente);
            autoVenta.vendido = true;
            return autoVenta;
         },
autosDisponible: function(){
return autos = this.autos.filter(function (elemento){
      return !elemento.vendido
   })
},
autosNuevos: function (){
    let autosNuevos = this.autosDisponible();
     return autosNuevos.filter( auto0 => autoCero.km <= 100)
   }
}