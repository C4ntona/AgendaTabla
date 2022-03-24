function crearTablaAmigos(){
	
	var tablilla = document.createElement("table");
	tablilla.className = "tabla";
	var contenedor = document.getElementById("contenedor_amigos");
	contenedor.appendChild(tablilla);
	
	for (i=0;i<amigos.length;i++){
		var obj_tr = document.createElement("tr");
		var contenedor_tablilla = document.getElementsByClassName("tabla")[0];
		contenedor_tablilla.appendChild(obj_tr);
		var obj_td1 = document.createElement("td");
		var obj_td2 = document.createElement("td");
		obj_tr.appendChild(obj_td1);
		obj_tr.appendChild(obj_td2);
		obj_td1.innerHTML = amigos[i].nombre;
		obj_td2.innerHTML = amigos[i].apellido;
		
	}
}