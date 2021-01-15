
//Funcao adiciona uma nova linha na tabela
function adicionaLinhaServicos(idTabelaServicos) {

  var apareceComunicado = document.getElementById("comunicados")
  apareceComunicado.style.display = "none"

  var fechaComunicado = document.getElementById("servicos")
  fechaComunicado.style.display = "block"

  var fechaComunicado = document.getElementById("claviculario")
  fechaComunicado.style.display = "none"

  var fechaComunicado = document.getElementById("correios")
  fechaComunicado.style.display = "none"

  var fechaComunicado = document.getElementById("visita")
  fechaComunicado.style.display = "none"

  var divDesaparece = document.getElementById('novoServico');
  divDesaparece.style.display = "none";

  var tabela = document.getElementById(idTabelaServicos);
  var numeroLinhas = tabela.rows.length;
  var linha = tabela.insertRow(numeroLinhas);
  var celula1 = linha.insertCell(0);
  var celula2 = linha.insertCell(1);
  var celula3 = linha.insertCell(2);
  var celula4 = linha.insertCell(3);
  var celula5 = linha.insertCell(4);
  var celula6 = linha.insertCell(5);

  var data = window.document.getElementById('data').innerHTML;
  var hora = window.document.getElementById('hora').innerHTML;
  var local = window.document.getElementById('local').value;
  var prestador = window.document.getElementById('prestador').value;
  var funcao = window.document.getElementById('funcao').value;
  var empresa = window.document.getElementById('empresa').value;

  celula1.innerHTML = data + " - " + hora;
  celula2.innerHTML = local;
  celula3.innerHTML = prestador;
  celula4.innerHTML = funcao;
  celula5.innerHTML = empresa;
  celula6.innerHTML = '<img onclick="removeLinhaServico(this)" src="images/delete.png" alt="">';
}

//Função aparece tabela serviços
function apareceTabelaServicos() {
  var tabelaComunicado = document.getElementById("comunicados")
  tabelaComunicado.style.display = "none"

  var tabelaServicos = document.getElementById("servicos")
  tabelaServicos.style.display = "block"

  var tabelaClaviculario = document.getElementById("claviculario")
  tabelaClaviculario.style.display = "none"

  var tabelaCorreios = document.getElementById("correios")
  tabelaCorreios.style.display = "none"

  var tabelaVisita = document.getElementById("visita")
  tabelaVisita.style.display = "none"

//--------------------------------------------------------------------

  var divNovoServico = document.getElementById('novoComunicado');
  divNovoServico.style.display = "none";

  var divNovoClaviculario = document.getElementById('novoClaviculario');
  divNovoClaviculario.style.display = "none";

  var divNovaEncomenda = document.getElementById('novaEncomenda');
  divNovaEncomenda.style.display = "none";

  var divNovaVisita = document.getElementById('novaVisita');
  divNovaVisita.style.display = "none";

}

// funcao remove uma linha da tabela
function removeLinhaServico(linha) {

  var remove = confirm('Excluir Prestador de serviço definitivamente?');

  if (remove == true) {
    var i = linha.parentNode.parentNode.rowIndex;
    document.getElementById('tblServicos').deleteRow(i);

    alert('Prestador de serviço excluído com sucesso!')
    
  } else {
    alert('Prestador de serviço não excluído!');
  }


}

//Função cadastrar novo ocorrências
function openNovoPrestador() {
  var divNovoComunicado = document.getElementById('novoComunicado');
  divNovoComunicado.style.display = "none";

  var divNovoServiços = document.getElementById('novoServico');
  divNovoServiços.style.display = "block";

  var divNovoClaviculario = document.getElementById('novoClaviculario');
  divNovoClaviculario.style.display = "none";

  var divNovaEncomenda = document.getElementById('novaEncomenda');
  divNovaEncomenda.style.display = "none";

  var divNovaVisita = document.getElementById('novaVisita');
  divNovaVisita.style.display = "none";

  var tabelaServicos = document.getElementById("comunicados")
  tabelaServicos.style.display = "none"

  var tabelaClaviculario = document.getElementById("claviculario")
  tabelaClaviculario.style.display = "none"

  var tabelaCorreios = document.getElementById("correios")
  tabelaCorreios.style.display = "none"

  var tabelaVisita = document.getElementById("visita")
  tabelaVisita.style.display = "none"
}

//Função desaparecer aba ocorrências
function closedNovoPrestador() {
  var divDesaparece = document.getElementById('novoServico');
  divDesaparece.style.display = "none";
}

//Função botão fecha serviços
function fechaServicos() {
  var fechaComunicado = document.getElementById("servicos")
  fechaComunicado.style.display = "none"
}