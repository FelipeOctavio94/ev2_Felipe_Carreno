export default{
    data: `
        <h1> autor: FELIPE CARRENO</h1>
        Nombre<br>
        <input id="txt1" type="text"/>
        <br><br>
        Edad<br>
        <input id="txt2" type="number"/>
        <br><br>
        Sexo<br>
        <input id="rd1" type="radio" name="grupo" value="M" checked  /> M
        <input id="rd2" type="radio" name="grupo" value="F" checked  /> F
        <br><br>
        Telefono<br>
        <input id="txt3" type="number"/>
        <br><br>
        <select id="ciu">
            <option value="1">Talca</option>
            <option value="2">Linares</option>
            <option value="3">Curico</option>
            
        </select>

        <button onclick="aceptar()">Aceptar</button>
        <button onclick="limpiar()">Limpiar</button>
        <p id="resp"></p>
    `,
    aceptar: function(){
        var nombre = document.getElementById("txt1").Value;
        var edad = document.getElementById("txt2");
        var opciones = document.getElementById("grupo");
        var telefono= document.getElementById("txt3");
        var ciu = document.getElementById("ciu").value;
        var sexo = "";
    
        opciones.array.forEach(item => {
            if (item.cheked){
                sexo = item.value;
            }
        });
    
            if (nombre != "" && edad <=50 && edad >= 18){
                resp.innerHTML = `Hola ${nombre} tienes ${edad}años, eres ${sexo}, tu numero es ${telefono} ,de la ciudad ${ciudad} `;
            }  else {
                resp.innerHTML = "ingrese bien los parametros";
              }
    },

    limpiar:function (){
        txt1.value = "";
        txt2.value = "";
        txt3.value = "";
    }
    
};