angular.module("infosoc",['ngRoute','ui.bootstrap']);

angular.module("infosoc").factory('PreguntaService',function(){
  var preguntas = [{id:1,materia:'Estudios Sociales',pregunta:'Cual es la capital de francia?', tipo:'marque-x',opciones:[{nombre:'Berna',correcta:false},{nombre:'París',correcta:true},{nombre:'Londres',correcta:false}]},
  {id:2,materia:'Estudios Sociales',pregunta:'Cuando inicio la primera guerra mundial?', tipo:'marque-x',opciones:[{nombre:'1905',correcta:false},{nombre:'1939',correcta:true},{nombre:'1940',correcta:false}]},
  {id:3,materia:'Ciencias',pregunta:'Por que los pinguinos no vuelan?', tipo:'desarrollo'}];

  return {
  getPreguntas:function(){
    return preguntas;
  },

  newEmptyPregunta:function(){
    return {id:'',materia:'Materia',pregunta:'',tipo:'Desarrollo',opciones : [{nombre:'',correcta:false},{nombre:'',correcta:false},{nombre:'',correcta:false}]};
  },
  getPreguntaId:function(id){
    for (var i = 0; i < preguntas.length; i++) {
      if(preguntas[i].id == id){

        return pregunta[i];
      }
    }
    return null;
  },
  addPregunta:function(pregunta){
    pregunta.id = preguntas[preguntas.length-1].id + 1;
    preguntas.push(pregunta);
  }
}
});

angular.module("infosoc").factory('PracticaService',function(){
  var practicas = [{id:1,nombre:"Practica1",preguntas:[{id:1},{id:3}]},
                  {id:2,nombre:"Practica2",preguntas:[{id:1}]}];
  return{
    getPracticas:function(){
      return practicas;
    },
    getNewPractica:function(){
      return {id:'',nombre:"",preguntas:[]};
    },
    addPreguntaToPractica:function(id,pregunta){
      for (var i = 0; i < practicas.length; i++) {
        if (practicas[i].id == id) {
          practicas[i].preguntas.push({id:pregunta.id});
        }
      }
    },
    addPractica:function(practica){
      practica.id = practicas[practicas.length-1].id + 1;
      practicas.push(practica);
    }
  }
});
