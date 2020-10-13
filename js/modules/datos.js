export default {
    alumnos:[ {nombre:'Juan', nota1:6.2, nota2:4.5, nota3:5.6},
              {nombre:'Pedro', nota1:3.2, nota2:5.5, nota3:5.6},                     
              {nombre:'Diego', nota1:1.2, nota2:4.5, nota3:3.6},                     
              {nombre:'Matias', nota1:3.2, nota2:3.5, nota3:4.6},                     
              {nombre:'Camilo', nota1:5.2, nota2:4.5, nota3:4.7},                     
              {nombre:'Esteban', nota1:4.2, nota2:4.5, nota3:6.6},                     
              {nombre:'Marcos', nota1:2.2, nota2:2.5, nota3:2.6}     
               ],

data: `
    <h1>autor: FELIPE CARRENO</h1>
    <div>
        <h3>CURSO: DESARROLLO WEB</h3>
        <h3>SECCION 92</h3>
        <h3>CARRERA INFORMATICA</h3>
    </div>

    <table id="table">
        <thead>
        <tr>
           <th>Alumno</th>
           <th>Nota 1</th>
           <th>nota 2</th>
           <th>nota 3</th>
           <th>Promedio</th>
           <th>Estado</th>
        </tr>
        </thead>
        <div id="result"></div>
    `,

    cargar: function(){
        var result = document.getElementById('result');
        var tabla = `
        <table>
        <tr>
           <th>Alumno</th>
           <th>Nota 1</th>
           <th>nota 2</th>
           <th>nota 3</th>
           <th>Promedio</th>
           <th>Estado</th>
        </tr>
        `
    },
    
    this.alumnos.array.forEach(item => {
        tabla+= `
            <tr>
               <td>${item.nombre}</td>
               <td>${item.nota1}</td>
               <td>${item.nota2}</td>
               <td>${item.nota3}</td>
               
            </tr>
        `
    });

    tabla += '</table>';
    result.innerHTML = tabla;
};