$(document).ready(function(){$(".form_buscar_cancion").submit(function(e){e.preventDefault();var n=document.getElementById("form_buscar_cancion").elements[0].value,o=$.trim(n);if(document.getElementById("form_buscar_cancion").elements[0].value=o,""==o)return!1;var t=$(this).attr("action"),r=$(this).serialize(),i=$(this).attr("method");$.ajax({url:t,type:i,data:r}).done(function(e){var n=JSON.parse(e),t=JSON.stringify(e);null!=n.error?n.error.indexOf("Usuario no logeado en el servidor")>=0&&(borrarCookie("login"),borrarCookie("idSesion"),window.location="inicio.html"):(sessionStorage.setItem("lista_canciones",t),window.location="busqueda.html?busqueda_cancion="+o+"&pagina=1")}).fail(function(e){alert("Error interno. Inténtelo más tarde.")})})});
