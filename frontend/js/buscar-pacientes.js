var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function() {
    var env = new XMLHttpRequest();

    env.open("GET", "http://localhost:3000/user");

    env.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        if (env.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = env.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    env.send();
});
