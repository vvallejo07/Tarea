// JavaScript Document
$(document).ready(function(){
	leerTareas();
	
	document.addEventListener("deviceready",function(){
        /*if(!usuarioExiste())
            window.location.href="#registro";
		$('#regEnv').tap(function(){
			var nom = $('#regNom').val();
			var mail = $('#regEmail').val();
			var tel = $('#regTel').val();
			var foto = $('#regFoto').attr('foto');
			
			if(nom != '' && mail != '' && tel != '' && foto != '' && foto != undefined){
				enviarRegistro(nom,mail,tel,foto);
			}else{
				navigator.notification.alert("Todos los Campos son requeridos", null, 'Registro','Aceptar');
			}
		});
		$('#regFoto').tap(function(){
			tomarFoto();
		});*/
        
        //Crear Reservas
     
        $('.incompleteDB').tap(function(){
         	var id=$(this).attr('itemId');
			updateStatus(id,"t");
			leerTareas();
        });
		
        $('.completeDB').tap(function(){
         	var id=$(this).attr('itemId');
			updateStatus(id,"f");
			leerTareas();
        });

		
		
       		
	}, false);
});