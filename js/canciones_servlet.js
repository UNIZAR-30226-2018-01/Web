function form_mostrar_anadir_alistas(){$(".boton_mostrar_listas").click(function(event){event.preventDefault();var form=$(this).parent().parent().parent().parent();var post_url=form.attr("action");var form_data=form.serialize();var request_method=form.attr("method");var contenedor=$(this).parent().children();var ruta=contenedor.get(1).value;$.ajax({url:post_url,type:request_method,data:form_data,}).done(function(response){var obj=JSON.parse(response);if(obj.error!=undefined){if(obj.error.indexOf("Usuario no logeado")>=0){cerrarSesion()}
else{$(".close11").after("<h2 id=\"sin_resul\">No hay listas.</h2>")}}
else{var listas=obj.nombre;var sin_resul=1;for(i=0;i<listas.length;i++){var lista=listas[i];if(lista!="Favoritos"){var large='<form class="form_anadir_cancion_lista" action="/ps/AnyadirCancionALista" method="post"><div class="nombrelista"><input type="submit" class="anadir_cancion_lista_f" value="'+lista+'"><input type="hidden" name="nombreLista" value="'+lista+'"><input type="hidden" name="ruta" value="'+ruta+'"/></div></form>';$(".ventana_listas").append(large);sin_resul=0}}
if(sin_resul==1&&!$("#sin_resul")[0]){$(".close11").after("<h2 id=\"sin_resul\">No hay listas.</h2>")}
form_anadir_cancion_a_lista()}
$('.button11').click()}).fail(function(response){alert("Error interno. Inténtelo más tarde.")})})}
function form_anadir_cancion_a_lista(){$(".form_anadir_cancion_lista").submit(function(event){event.preventDefault();var post_url=$(this).attr("action");var form_data=$(this).serialize();var request_method=$(this).attr("method");$.ajax({url:post_url,type:request_method,data:form_data,}).done(function(response){var obj=JSON.parse(response);if(obj.error!=undefined){if(obj.error.indexOf("Usuario no logeado")>=0){cerrarSesion()}
else{alert("Error. Inténtelo más tarde.");s}}
else if(obj.CancionYaExisteEnLista){$("#resultado_seguir").text("La canción ya existe en la lista.");$("#result_seguir").attr("src","img/error.png")}
else{$("#resultado_seguir").text("Canción añadida a la lista.");$("#result_seguir").attr("src","img/exito.png")}
$('.button10').click()}).fail(function(response){alert("Error interno. Inténtelo más tarde.")})})}
function form_anadirquitar_cancion_a_favorito(){$(".form_poner_favorito").submit(function(event){event.preventDefault();var post_url=$(this).attr("action");var form_data=$(this).serialize();var request_method=$(this).attr("method");$.ajax({url:post_url,type:request_method,data:form_data,}).done(function(response){var obj=JSON.parse(response);if(obj.error!=undefined){if(obj.error.indexOf("Usuario no logeado")>=0){cerrarSesion()}
else{alert("Error. Inténtelo más tarde.");s}}
else if(obj.CancionYaExisteEnLista){location.reload()}
else{location.reload()}}).fail(function(response){alert("Error interno. Inténtelo más tarde.")})});$(".form_quitar_favorito").submit(function(event){event.preventDefault();var post_url=$(this).attr("action");var form_data=$(this).serialize();var request_method=$(this).attr("method");$.ajax({url:post_url,type:request_method,data:form_data,}).done(function(response){var obj=JSON.parse(response);if(obj.error!=undefined){if(obj.error.indexOf("Usuario no logeado")>=0){cerrarSesion()}
else{alert("Error. Inténtelo más tarde.");s}}
else if(obj.CancionYaExisteEnLista){location.reload()}
else{location.reload()}}).fail(function(response){alert("Error interno. Inténtelo más tarde.")})})}
function mostrarPaginaconFav(obj,favoritos,nombrePagina,nombreParamUrl){var url_string=window.location.href;var url=new URL(url_string);var pag_actual=url.searchParams.get("pagina");var paramUrl=url.searchParams.get(nombreParamUrl);var canciones=obj.canciones;var canciones_string=JSON.stringify(canciones);if(nombreParamUrl==".menurecientes"){sessionStorage.setItem("listaRecientes",canciones_string)}
else if(nombreParamUrl==".menuestilo"){sessionStorage.setItem("listaRecomendadas",canciones_string)}
else{sessionStorage.setItem("listaAux",canciones_string)}
var lista_favoritos=favoritos;if(pag_actual==null){pag_actual=1}
else{pag_actual=parseInt(pag_actual)}
var elem_por_pagina=10;if(nombreParamUrl==".menurecientes"){elem_por_pagina=10}
inicio=(pag_actual-1)*elem_por_pagina;for(i=inicio;i<(elem_por_pagina+inicio)&&i<canciones.length;i++){var n_cancion=canciones[i].tituloCancion;var n_artista=canciones[i].nombreArtista;var n_genero=canciones[i].genero;var n_album=canciones[i].nombreAlbum;var ruta_aux=canciones[i].ruta;var index=ruta_aux.indexOf("/ps");var ruta=".."+ruta_aux.substr(index);var n_uploader=canciones[i].uploader;var image_aux=canciones[i].ruta_imagen;var indexi=image_aux.indexOf("/ps");var image=".."+image_aux.substr(indexi);if(n_genero==null){n_genero=""}
if(n_album==null){n_album=""}
var en_favoritos,servlet,imagen_favoritos,msg,form;if(lista_favoritos!=undefined){en_favoritos=lista_favoritos.includes(JSON.stringify(canciones[i]))}
else{en_favoritos=!1}
if(en_favoritos==!0){servlet="QuitarCancionDeLista";imagen_favoritos="favanadido.png";msg="Quitar de favoritos";form="form_quitar_favorito"}
else{servlet="AnyadirCancionALista";imagen_favoritos="favoritos.png";msg="Añadir a favoritos";form="form_poner_favorito"}
var funcion_play;if(nombreParamUrl==".menurecientes"){funcion_play='setIndiceAndPlayRecientes('+i+',0,1);'}
else if(nombreParamUrl==".menuestilo"){funcion_play='setIndiceAndPlayRecientes('+i+',0,0);'}
else{funcion_play='setIndiceAndPlay('+i+',0);'}
var l1='<div class="cancioninf"><ul><li id="barraopciones"><a href="cancion.html?nombre='+n_cancion+'&artista='+n_artista+'&album='+n_album+'&genero='+n_genero+'&uploader='+n_uploader+'&ruta='+ruta+'&ruta_imagen='+image+'" id="enlacecancion"><div class="imagen"><img src="'+image+'" alt="Imagen cancion" onClick="setIndiceAndPlay('+i+',1)" onerror="this.src=\'img/Unknown_Music.png\'"></div></a></li>';var l2='<li id="barraopciones"><a href="cancion.html?nombre='+n_cancion+'&artista='+n_artista+'&album='+n_album+'&genero='+n_genero+'&uploader='+n_uploader+'&ruta='+ruta+'&ruta_imagen='+image+'" id="enlacecancion"><div class="nombrecancion" onClick="setIndiceAndPlay('+i+',1)">'+n_cancion+'</div></a><a href="artista.html?artista='+n_artista+'" id="enlacecancion"><div class="nombreautor">Artista: '+n_artista+'</div></a></li>';var play='<li id="barraopciones"><div class="simb_repr_play"><input type="image" src="img/play.png" alt="Reproducir cancion" title="Reproducir canción" onClick="'+funcion_play+'return false;"></div></li>';var fav='<form class="'+form+'" method="post" action="/ps/'+servlet+'"><li id="barraopciones"><div class="simb_repr_fav"><input type="image" src="img/'+imagen_favoritos+'" alt="'+msg+'" title="'+msg+'"></div><input type="hidden" name="ruta" value="'+ruta_aux+'"/><input type="hidden" name="nombreLista" value="Favoritos"/></li></form>';var anadir_lista='<form class="form_mostrar_listas_c" method="post" action="/ps/MostrarListasReproduccion"><li id="barraopciones"><div class="simb_repr_lista"><div class="simb_repr_lista"><input type="hidden" id="user" name="user" value="'+leerCookie("login")+'"><input type="hidden" name="ruta" value="'+ruta_aux+'"/><input type="image" src="img/listas_add.png" alt="Añadir a lista" class="boton_mostrar_listas" title="Añadir a lista"></div></div></li></form>';var final='</ul></div>';var classPoner=".informacion";if(nombrePagina=="recientes"){classPoner=nombreParamUrl}
$(classPoner).append(l1+l2+play+fav+anadir_lista+final)}
if((elem_por_pagina+inicio)<canciones.length){var pagina_sig=pag_actual+1;var nombreAtribUrl="";if(nombrePagina=="estilo"){nombreAtribUrl='<input type="hidden" name="estilo" value="'+paramUrl+'"/>'}
var boton_mas='<br><br><form action="'+nombrePagina+'.html"><button type="submit" id="boton_mostrar_mas" class="aumentar">Mostrar más</button>'+nombreAtribUrl+'<input type="hidden" name="pagina" value="'+pagina_sig+'"/></form>';var classPonerBoton=".informacion";if(nombrePagina=="recientes"){classPonerBoton=nombreParamUrl}
$(classPonerBoton).append(boton_mas)}
if(nombreParamUrl==".menurecientes"){sessionStorage.setItem("cargados_Form_Recientes",1);form_mostrar_anadir_alistas();form_anadirquitar_cancion_a_favorito()}
else if(nombreParamUrl==".menuestilo"){if(sessionStorage.getItem("cargados_Form_Recientes")==1){sessionStorage.removeItem("cargados_Form_Recientes")}
else{form_mostrar_anadir_alistas();form_anadirquitar_cancion_a_favorito()}}
else{form_mostrar_anadir_alistas();form_anadirquitar_cancion_a_favorito()}}
