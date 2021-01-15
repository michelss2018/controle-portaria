
//Funcao adiciona uma nova linha na tabela
function adicionaLinhaComunicados(idTabelaComunicados) {

  var apareceComunicado = document.getElementById("comunicados")
  apareceComunicado.style.display = "block"

  var fechaComunicado = document.getElementById("servicos")
  fechaComunicado.style.display = "none"

  var fechaComunicado = document.getElementById("claviculario")
  fechaComunicado.style.display = "none"

  var fechaComunicado = document.getElementById("correios")
  fechaComunicado.style.display = "none"

  var fechaComunicado = document.getElementById("visita")
  fechaComunicado.style.display = "none"

  var divDesaparece = document.getElementById('novoComunicado');
  divDesaparece.style.display = "none";

  var tabela = document.getElementById(idTabelaComunicados);
  var numeroLinhas = tabela.rows.length;
  var linha = tabela.insertRow(numeroLinhas);
  var celula1 = linha.insertCell(0);
  var celula2 = linha.insertCell(1);
  var celula3 = linha.insertCell(2);
  var celula4 = linha.insertCell(3);
  var celula5 = linha.insertCell(4);


  var data = window.document.getElementById('data').innerHTML;
  var hora = window.document.getElementById('hora').innerHTML;
  var categoria = window.document.getElementById('categoria').value;
  var comunicado = window.document.getElementById('comunicado').value;
  var nomePorteiro = document.getElementById('nomePorteiro').innerHTML

  celula1.innerHTML = data + " - " + hora;
  celula2.innerHTML = categoria;
  celula3.innerHTML = comunicado;
  celula4.innerHTML = nomePorteiro;
  celula5.innerHTML = '<img onclick="removeLinhaComunicado(this)" src="images/delete.png" alt="">';
}

//Função aparece tabela comunicado
function apareceTabelaComunicado() {
  var tabelaComunicado = document.getElementById("comunicados")
  tabelaComunicado.style.display = "block"

  var tabelaServicos = document.getElementById("servicos")
  tabelaServicos.style.display = "none"

  var tabelaClaviculario = document.getElementById("claviculario")
  tabelaClaviculario.style.display = "none"

  var tabelaCorreios = document.getElementById("correios")
  tabelaCorreios.style.display = "none"

  var tabelaVisita = document.getElementById("visita")
  tabelaVisita.style.display = "none"

//--------------------------------------------------------------------

  var divNovoServico = document.getElementById('novoServico');
  divNovoServico.style.display = "none";

  var divNovoClaviculario = document.getElementById('novoClaviculario');
  divNovoClaviculario.style.display = "none";

  var divNovaEncomenda = document.getElementById('novaEncomenda');
  divNovaEncomenda.style.display = "none";

  var divNovaVisita = document.getElementById('novaVisita');
  divNovaVisita.style.display = "none";

}

// funcao remove uma linha da tabela
function removeLinhaComunicado(linha) {

  var remove = confirm('Excluir definitivamente esse comunicado?');

  if (remove == true) {
    var i = linha.parentNode.parentNode.rowIndex;
    document.getElementById('tblComunicados').deleteRow(i);

    alert('Comunicado excluído com sucesso!')

  } else {
    alert('Comunicado não excluído!');
  }

}

//Função cadastrar novo Comunicado
function openNovoComunicado() {
  var divNovoComunicado = document.getElementById('novoComunicado');
  divNovoComunicado.style.display = "block";

  var divNovoServiços = document.getElementById('novoServico');
  divNovoServiços.style.display = "none";

  var divNovoClaviculario = document.getElementById('novoClaviculario');
  divNovoClaviculario.style.display = "none";

  var divNovaEncomenda = document.getElementById('novaEncomenda');
  divNovaEncomenda.style.display = "none";

  var divNovaVisita = document.getElementById('novaVisita');
  divNovaVisita.style.display = "none";

  var tabelaServicos = document.getElementById("servicos")
  tabelaServicos.style.display = "none"

  var tabelaClaviculario = document.getElementById("claviculario")
  tabelaClaviculario.style.display = "none"

  var tabelaCorreios = document.getElementById("correios")
  tabelaCorreios.style.display = "none"

  var tabelaVisita = document.getElementById("visita")
  tabelaVisita.style.display = "none"

}

//Função desaparecer aba Comunicado
function closedNovoComunicado() {
  var divDesaparece = document.getElementById('novoComunicado');
  divDesaparece.style.display = "none";
}

//Função botão fecha comunicado
function fechaComunicado() {
  var fechaComunicado = document.getElementById("comunicados")
  fechaComunicado.style.display = "none"
}