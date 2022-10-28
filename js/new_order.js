console.log("lala")

function newOrder() {
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let entrega = document.getElementById("entrega").value;
    let entrada = document.getElementById("entrada").value;
    let plato = document.getElementById("plato").value;
    let postre = document.getElementById("postre").value;
    let horario = document.getElementById("horario").value;

    axios.post('http://127.0.0.1:5500/api/v1/new_order/',
    {
        "nombre": nombre,
        "telefono": telefono,
        "entrega": entrega,
        "entrada": entrada,
        "plato": plato,
        "postre": postre,
        "horario": horario,
    })

        .catch(function (error) {
            alert("no se pudo guardar correctamente");
            console.log(error);
        })
}
