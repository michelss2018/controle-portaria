
//Funcao adiciona uma nova linha na tabela
function adicionaLinhaClaviculario(idTabelaClaviculario) {

  var apareceComunicado = document.getElementById("comunicados")
  apareceComunicado.style.display = "none"

  var fechaComunicado = document.getElementById("servicos")
  fechaComunicado.style.display = "none"

  var fechaComunicado = document.getElementById("claviculario")
  fechaComunicado.style.display = "block"

  var fechaComunicado = document.getElementById("correios")
  fechaComunicado.style.display = "none"

  var fechaComunicado = document.getElementById("visita")
  fechaComunicado.style.display = "none"

  var divDesaparece = document.getElementById('novoClaviculario');
  divDesaparece.style.display = "none";

  var tabela = document.getElementById(idTabelaClaviculario);
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
  var chave = window.document.getElementById('chave').value;
  var nomePorteiro = document.getElementById("nomePorteiro").innerHTML
  var responsavel = window.document.getElementById('responsavel').value;
  var funcao = window.document.getElementById('funcaoChave').value;

  celula1.innerHTML = data + " - " + hora;
  celula2.innerHTML = chave;
  celula3.innerHTML = nomePorteiro;
  celula4.innerHTML = responsavel;
  celula5.innerHTML = funcao;
  celula6.innerHTML = '<img onclick="devolveChave(this)" src="images/pencil.png" alt="">';
}

//Função aparece tabela claviculario
function apareceTabelaClaviculario() {
  var tabelaComunicado = document.getElementById("comunicados")
  tabelaComunicado.style.display = "none"

  var tabelaServicos = document.getElementById("servicos")
  tabelaServicos.style.display = "none"

  var tabelaClaviculario = document.getElementById("claviculario")
  tabelaClaviculario.style.display = "block"

  var tabelaCorreios = document.getElementById("correios")
  tabelaCorreios.style.display = "none"

  var tabelaVisita = document.getElementById("visita")
  tabelaVisita.style.display = "none"

//--------------------------------------------------------------------

  var divNovoServico = document.getElementById('novoComunicado');
  divNovoServico.style.display = "none";

  var divNovoClaviculario = document.getElementById('novoServico');
  divNovoClaviculario.style.display = "none";

  var divNovaEncomenda = document.getElementById('novaEncomenda');
  divNovaEncomenda.style.display = "none";

  var divNovaVisita = document.getElementById('novaVisita');
  divNovaVisita.style.display = "none";

}

// funcao remove uma linha da tabela
function devolveChave(linha) {

  var remove = confirm('Realizar devolução da chave?');

  if (remove == true) {
    var i = linha.parentNode.parentNode.rowIndex;
    document.getElementById('tblClaviculario').deleteRow(i);

    alert('Chave devolvida com sucesso!')
    
  } else {
    alert('Chave não devolvida!');
  }


}

//Função cadastrar nova ocorrências
function openNovoClaviculario() {
  var divNovoComunicado = document.getElementById('novoComunicado');
  divNovoComunicado.style.display = "none";

  var divNovoServiços = document.getElementById('novoServico');
  divNovoServiços.style.display = "none";

  var divNovoClaviculario = document.getElementById('novoClaviculario');
  divNovoClaviculario.style.display = "block";

  var divNovaEncomenda = document.getElementById('novaEncomenda');
  divNovaEncomenda.style.display = "none";

  var divNovaVisita = document.getElementById('novaVisita');
  divNovaVisita.style.display = "none";

  var tabelaServicos = document.getElementById("comunicados")
  tabelaServicos.style.display = "none"

  var tabelaClaviculario = document.getElementById("servicos")
  tabelaClaviculario.style.display = "none"

  var tabelaCorreios = document.getElementById("correios")
  tabelaCorreios.style.display = "none"

  var tabelaVisita = document.getElementById("visita")
  tabelaVisita.style.display = "none"
}

//Função desaparecer aba ocorrências
function closedNovoClaviculario() {
  var divDesapareceClaviculario = document.getElementById('novoClaviculario');
  divDesapareceClaviculario.style.display = "none";
}

//Função botão fecha claviculario
function fechaClaviculario() {
  var fechaComunicado = document.getElementById("claviculario")
  fechaComunicado.style.display = "none"
}