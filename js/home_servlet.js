$(document).ready(function() {
  $("#form_mostrar_estilos").submit(function(event){
      event.preventDefault(); //prevent default action
      var post_url = $(this).attr("action"); //get form action url
      var form_data = $(this).serialize(); //Encode form elements for submission
      var request_method = $(this).attr("method"); //get form GET/POST method

      $.ajax({
          url : post_url,
          type: request_method,
          data : form_data,

    }).done(function(response){
       var obj=JSON.parse(response);
       if(obj.error != undefined){
         if(obj.error.indexOf("Usuario no logeado en el servidor") >= 0){
           //El usuario no esta logeado, quitar cookies e ir a inicio
           borrarCookie("login");
           borrarCookie("idSesion");
           window.location = "inicio.html";
         }
       }
       else{
         var estilos = obj.generos;

         for(i=0;i<estilos.length;i++){
           var estilo=estilos[i];
           var large='<li id="barraopciones"><div class="cancioninf"><a href="estilo.html'+"?estilo="+estilo+'" id="enlacecancion"><div class="marco_estilo">'+estilo+'</div></a></div></li>';
           $("#lista_estilos").append(large);
         }
       }

    }).fail(function(response){
        alert("Error interno. Inténtelo más tarde.");
    });
  });

  $("#form_mostrar_top_semanal").submit(function(event){
      event.preventDefault(); //prevent default action
      var post_url = $(this).attr("action"); //get form action url
      var form_data = $(this).serialize(); //Encode form elements for submission
      var request_method = $(this).attr("method"); //get form GET/POST method

      $.ajax({
          url : post_url,
          type: request_method,
          data : form_data,

    }).done(function(response){
      alert(response);
       var obj=JSON.parse(response);
       if(obj.error != undefined){
         if(obj.error.indexOf("Usuario no logeado en el servidor") >= 0){
           //El usuario no esta logeado, quitar cookies e ir a inicio
           borrarCookie("login");
           borrarCookie("idSesion");
           window.location = "inicio.html";
         }
       }
       else{
         var canciones = obj.canciones;

         for(i=0;i<canciones.length;i++){
           var cancion=canciones[i].tituloCancion;
           //PONER RUTA DE LA IMAGEN
           var image="img/edsheeranperfect.png";
           var large='<li id="barraopciones"><div class="cancioninf"><a href="cancion.html'+"?cancion="+cancion+'" id="enlacecancion"><div class="imagen"><img src="'+image+'" alt="Imagen cancion"></div><div class="nombrecancion">'+cancion+'</div></a></div></li>';
           $("#lista_top_semanal").append(large);
         }
       }

    }).fail(function(response){
        alert("Error interno. Inténtelo más tarde.");
    });
  });

  $("#form_mostrar_estilos").submit();
  $("#form_mostrar_top_semanal").submit();
});
