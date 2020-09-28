using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Teste_Smarkets.Models;

namespace Teste_Smarkets.Controllers
{
    public class ConsultaController : Controller
    {
        #region Método para Listar todas as Consultas - READ

        // GET Funcionario/GetFuncionario
        [HttpGet]
        public JsonResult GetConsulta()
        {
            using (var db = new DB_ConsultasEntities())
            {
                List<Consulta> listarConsultas = db.Consultas.ToList();

                return Json(listarConsultas, JsonRequestBehavior.AllowGet);
            }
        }

        #endregion

        #region Método para Adicionar Novas Consultas - CREATE

        //POST Funcionario/AdicionarFuncionario
        [HttpPost]
        public JsonResult AdicionarFuncionario(Consulta consulta)
        {
            if (consulta != null)
            {
                using (var db = new DB_ConsultasEntities())
                {
                    db.Consultas.Add(consulta);
                    db.SaveChanges();

                    return Json(new { success = true });
                }
            }
            return Json(new { success = false });
        }

        #endregion

        #region Método para Atualizar Consultas - UPDATE

        [HttpPost]
        public JsonResult AtualizarConsulta(Consulta consulta)
        {
            using (var db = new DB_ConsultasEntities())
            {
                var consultaAtualizado = db.Consultas.Find(consulta.Id);

                if (consultaAtualizado == null)
                {
                    return Json(new { success = false });
                }

                else
                {
                    consultaAtualizado.Paciente = consulta.Paciente;
                    consultaAtualizado.Data_Nascimento = consulta.Data_Nascimento;
                    consultaAtualizado.Medico = consulta.Medico;
                    consultaAtualizado.Especialidade = consulta.Especialidade;
                    consultaAtualizado.Data_Inicio_Cons = consulta.Data_Inicio_Cons;
                    consultaAtualizado.Hora_Inicio_Cons = consulta.Hora_Inicio_Cons;
                    consultaAtualizado.Data_Fim_Cons = consulta.Data_Fim_Cons;
                    consultaAtualizado.Hora_Fim_Cons = consulta.Hora_Fim_Cons;


                    db.SaveChanges();
                    return Json(new { success = true });

                }
            }
        }
        #endregion

        #region Método para Excluir Consultas - DELETE

        [HttpPost]
        public JsonResult ExcluirConsulta(int id)
        {
            using (var db = new DB_ConsultasEntities())
            {
                var consulta = db.Consultas.Find(id);
                if (consulta == null)
                {
                    return Json(new { success = false });
                }

                db.Consultas.Remove(consulta);
                db.SaveChanges();

                return Json(new { success = true });
            }
        }
        #endregion

    }

}