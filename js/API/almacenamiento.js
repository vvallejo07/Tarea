// Base de datos

function accesoBD(){
    var db = window.openDatabase("tareas", "1.0", "Tareas", 2000000);
    return db;
}



function leerTareas(){
	accesoBD().transaction(function(tx){
		tx.executeSql('CREATE TABLE IF NOT EXISTS tareas (id unique,nombre,estatus)');
		
	},function(err){
		alert("Error: "+err.code);	
	},function(){
	});
	
	accesoBD().transaction(function(tx){
		tx.executeSql('SELECT * FROM tareas where estatus = "f"',[],function(tx2,res){
			var largo = res.rows.length;
			var table = '';
			var ban = false;
			
			for(i=0;i<largo;i++){
				if(!ban){
						table += '<ul class="incomplete">';
				}
				table += '<li itemId='+res.rows.item(i).id+'><input type="checkbox" class="incompleteDB" /> <span>'+res.rows.item(i).nombre+'</span> <small><a href="#">Blah</a></small></li>';
                ban=true;	
			}
			if(ban)
			    table += '</ul>';
			
			
			
		},function(err){
			alert('Error: '+err.code);	
		});
		
		tx.executeSql('SELECT * FROM tareas where estatus = "t"',[],function(tx2,res){
			var largo = res.rows.length;
			var ban = false;
			
			for(i=0;i<largo;i++){
				if(!ban){
						table += '<h4>Completed</h4><ul class="completeDB">';
				}
				table += '<li itemId='+res.rows.item(i).id+'><input type="checkbox" checked /> <span>'+res.rows.item(i).nombre+'</span></li>';
                ban=true;	
			}
			if(ban)
			    table += '</ul>';
			table += '</div>';
			
			
		},function(err){
			alert('Error: '+err.code);	
		});
		
		
	},function(err){
		alert('Error: '+err.code);	
	},function(){
		$('#home').html(table);
	});
}

function updateStatus(id,estatus){
	accesoBD().transaction(function(tx){
		tx.executeSql('UPDATE tareas  set (estatus='+estatus+') where id='+id+'');
		
	},function(err){
		alert("Error: "+err.code);	
	},function(){
	});
}

function addItem(nombre){
	accesoBD().transaction(function(tx){
		tx.executeSql('INSERT INTO tareas (nombre,estatus) VALUES ("'+nombre+'","f")');
		
	},function(err){
		alert("Error: "+err.code);	
	},function(){
	});
}


