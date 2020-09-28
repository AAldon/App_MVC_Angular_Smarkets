funcionarioApp.service('consultaService', function ($http) {

    //Método READ
    this.getTodasConsultass = function () {

        return $http.get("/Consulta/GetConsulta");
    }

    //Método  CREATE
    this.adicionarConsulta = function (consulta) {

        var request = $http({
            method: 'post',
            url: '/Consulta/AdicionarConsulta',
            data: consulta
        });

        return request;
    }

    //Método Update
    this.atualizarConsulta = function (consulta) {

        var requestAtualizado = $http({
            method: 'post',
            url: '/Consulta/AtualizarConsulta',
            data: consulta
        });
        return requestAtualizado;
    }

    //Método Delete
    this.excluirConsulta = function (AtualizadoFuncionarioId) {

        return $http.post('/Consulta/ExcluirConsulta/' + AtualizadoConsultaId);
    }
});