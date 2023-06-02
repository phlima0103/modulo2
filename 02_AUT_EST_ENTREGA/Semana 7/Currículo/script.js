async function experiencia(){
    console.log('foi')
    //Definindo elemento pai
    const experiencias = document.getElementById("experienciaNome")
    const datas = document.getElementById("experienciaData")
    

    const xhttp = new XMLHttpRequest();
    const url = "http://127.0.0.1:3001/experiencias"

    xhttp.open("GET", url, true);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const json = JSON.parse(this.responseText);
            console.log(json)

            //criandon elementos na pagina

            for(i = 0;i<json.length;i++){
                const experiencia = document.createElement('div')
                    experiencia.className = "Experiencia"
                    experiencia.innerHTML = json[i].experiência

                experiencias.append(experiencia);

                const data = document.createElement('div')
                    data.className = "Data"
                    data.innerHTML = json[i].Data

                datas.append(data);
            }

        }
    }
    xhttp.send();
}