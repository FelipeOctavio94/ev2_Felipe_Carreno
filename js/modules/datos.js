export default {
    curso:{ nombre:'Desarrollo Web',
            seccion:'92',
            carrera:'Informatica', 
            alumnos:[ {nombre:'Juan', nota1:6.2, nota2:4.5, nota3:5.6},
                    {nombre:'Pedro', nota1:3.2, nota2:5.5, nota3:5.6},                     
                    {nombre:'Diego', nota1:1.2, nota2:4.5, nota3:3.6},                     
                    {nombre:'Matias', nota1:3.2, nota2:3.5, nota3:4.6},                     
                    {nombre:'Camilo', nota1:5.2, nota2:4.5, nota3:4.7},                     
                    {nombre:'Esteban', nota1:4.2, nota2:4.5, nota3:6.6},                     
                    {nombre:'Marcos', nota1:2.2, nota2:2.5, nota3:2.6}     
               ]},


          

data: `
    <h1>autor: FELIPE CARRENO</h1>
    <div id="info" class="info"></div>

    <div id="tabla"> </div>

   
    `,

    cargar: function(){
        var result = document.getElementById("tabla");
        var info = document.getElementById("info");
        var curs= `
            <p>Nombre: ${this.curso.nombre}</p>
            <p>Seccion: ${this.curso.seccion}</p>
            <p>Carrera: ${this.curso.carrera}</p>
           
        `;

        info.innerHTML=curs;

        var sumaindividual = 0;
        var estado;
        var promedioIndividual=0;

        var tabla= `<table>

            <tr>

                <th>Alumno</th>
                <th>Nota 1</th>
                <th>Nota 2</th>
                <th>Nota 3</th>
                <th>Promedio</th>
                <th>Estado</th>
            </tr>`;

            this.curso.alumnos.forEach(item => {
                sumaindividual= item.nota1+item.nota2+item.nota3;
                promedioIndividual=sumaindividual/3;
                if (item.promedioIndividual >=4) {
                    item.estado=A;
                } else {
                    item.estado=R;
                };
                tabla+= `
                    <tr>
                       <td>${item.nombre}</td>
                       <td>${item.nota1}</td>
                       <td>${item.nota2}</td>
                       <td>${item.nota3}</td>
                       <td>${(item.promedioIndividual >=4)?'nota_azul':'nota_roja'}</td>
                       <td>${(item.estado )}</td>
                    </tr>
                `
            });
            
            promedio=promedioIndividual/7;

            tabla +=`
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Promedio General:</td>
                    <td>${promedio}</td>
                </tr>

                </table>`;

                result.innerHTML=tabla;

    }
    
    
}