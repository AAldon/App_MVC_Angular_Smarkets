
funcionarioApp.controller('consultaCtrl', function ($scope, consultaService) {


    carregarConsultas();

    
    function carregarConsultas() {
        var listarConsultas = consultaService.getTodasConsultas();

        listarConsultas.then(function (d) {
            //se tudo der certo:
            $scope.Consultas = d.data;
        },
            function () {
                alert("Ocorreu um erro!");
            });
    }

   
    $scope.adicionarConsulta = function () {

        var consulta = {
            consultaId: $scope.consultaId,
            paciente: $scope.paciente,
            data_nascimento: $scope.data_nascimento,
            medico: $scope.medico,
            especialidade: $scope.especialidade,
            data_incio: $scope.data_incio,
            hora_incio: $scope.hora_incio,
            data_fim: $scope.data_fim,
            hora_fim: $scope.hora_fim,
            observacoes: $scope.observacoes
        };

        var adicionarInfos = consultaService.adicionarConsulta(consulta);

        adicionarInfos.then(function (d) {
            if (d.data.success === true) {
                carregarConsultas();
                alert("Agendado com Sucesso!");

                $scope.limparDados();
            } else { alert("não agendado!"); }
        },
            function () {
                alert("Ocorreu um erro ao agendar!");
            });
    }

    //Limpar os campos após inserir os dados no db://Limpar os campos após inserir os dados no db:
    $scope.limparDados = function () {
        $scope.consultaId = '';
        $scope.paciente = '';
        $scope.data_nascimento = '';
        $scope.medico = '';
        $scope.especialidade = '';
        $scope.data_incio = '';
        $scope.hora_incio = '';
        $scope.data_fim = '';
        $scope.hora_fim = '';
        $scope.observacoes = '';
    }

    
    $scope.atualizarConsultaPorId = function (consulta) {

        $scope.AtualizadoconsultaId = consulta.AtualizadoconsultaId;
        $scope.AtualizadoPaciente = consulta.paciente;
        $scope.AtualizadoData_nascimento = consulta.data_nascimento;
        $scope.AtualizadoMedico = consulta.medico;
        $scope.AtualizadoEspecialidade = consulta.especialidade;
        $scope.AtualizaData_inicio = consulta.data_inicio;
        $scope.AtualizaHora_inicio = consulta.hora_inicio;
        $scope.AtualizaData_fim = consulta.data_fim;
        $scope.AtualizaHora_fim = consulta.hora_fim;
        $scope.AtualizaObservacoes = consulta.observacoes;
    }

    //Metodo excluir
    $scope.excluirConsultaPorId = function (funcionario) {
        $scope.AtualizadoFuncionarioId = funcionario.FuncionarioId;
        $scope.AtualizadoNome = funcionario.Nome;
    }

    //Metodo Update
    $scope.atualizarConsulta = function () {
        var consulta = {
            consultaId: $scope.AtualizadoconsultaId,
            paciente: $scope.AtualizadoPaciente,
            data_nascimento: $scope.AtualizadoData_nascimento,
            medico: $scope.AtualizadoMedico,
            especialidade: $scope.AtualizadoEspecialidade,
            data_incio: $scope.AtualizaData_incio,
            hora_incio: $scope.AtualizaHora_inicio,
            data_fim: $scope.AtualizaData_fim,
            hora_fim: $scope.AtualizaHora_fim,
            observacoes: $scope.AtualizaObservacoes
        };
        var atualizarInfos = consultaService.atualizarConsulta(consulta);
        atualizarInfos.then(function (d) {
            if (d.data.success === true) {
                carregarConsultas();
                alert("Consulta Atualizada com Sucesso!");
                $scope.limparDadosAtualizados();
            }
            else {
                alert("Consulta não Atualizada");
            }
        },
            function () {
                alert("Ocorreu um erro ao atualizar");
            });
    }

    //Método responsável por Limpar os Dados depois de Atualizar:
    $scope.limparDadosAtualizados = function () {
        $scope.consultaId = '';
        $scope.paciente = '';
        $scope.data_nascimento = '';
        $scope.medico = '';
        $scope.especialidade = '';
        $scope.data_incio = '';
        $scope.hora_incio = '';
        $scope.data_fim = '';
        $scope.hora_fim = '';
        $scope.observacoes = '';
    }

  
    $scope.excluirConsulta = function (AtualizadoConsultaId) {

        var excluirInfos = consultaService.excluirConsulta($scope.AtualizadoConsultaId);
        excluirInfos.then(function (d) {

            if (d.data.success === true) {
                carregarConsultas();

                alert("excluído com Sucesso!");
            }
            else {
                alert("não excluído!");
            }
        });
    }
});
