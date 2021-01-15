
//Funcao adiciona uma nova linha na tabela
function adicionaLinhaCorreios(idTabelaCorreios) {

  var apareceComunicado = document.getElementById("comunicados")
  apareceComunicado.style.display = "none"

  var fechaComunicado = document.getElementById("servicos")
  fechaComunicado.style.display = "none"

  var fechaComunicado = document.getElementById("claviculario")
  fechaComunicado.style.display = "none"

  var fechaComunicado = document.getElementById("correios")
  fechaComunicado.style.display = "block"

  var fechaComunicado = document.getElementById("visita")
  fechaComunicado.style.display = "none"

  var divDesaparece = document.getElementById('novaEncomenda');
  divDesaparece.style.display = "none";

  var tabela = document.getElementById(idTabelaCorreios);
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
  var nomePorteiro = document.getElementById("nomePorteiro").innerHTML;
  var destinatario = window.document.getElementById('destinatario').value;
  var codigoRastreio = window.document.getElementById("codigoRastreio").value;
  var tipoEmbalagem = window.document.getElementById('tipoEmbalagem').value;

  celula1.innerHTML = data + " - " + hora;
  celula2.innerHTML = nomePorteiro;
  celula3.innerHTML = destinatario;
  celula4.innerHTML = codigoRastreio;
  celula5.innerHTML = tipoEmbalagem;
  celula6.innerHTML = '<img onclick="entregaCorreio(this)" src="images/pencil.png" alt="">';
}

//Função aparece tabela claviculario
function apareceTabelaCorreios() {
  var tabelaComunicado = document.getElementById("comunicados")
  tabelaComunicado.style.display = "none"

  var tabelaServicos = document.getElementById("servicos")
  tabelaServicos.style.display = "none"

  var tabelaClaviculario = document.getElementById("claviculario")
  tabelaClaviculario.style.display = "none"

  var tabelaCorreios = document.getElementById("correios")
  tabelaCorreios.style.display = "block"

  var tabelaVisita = document.getElementById("visita")
  tabelaVisita.style.display = "none"


//--------------------------------------------------------------------

  var divNovoServico = document.getElementById('novoComunicado');
  divNovoServico.style.display = "none";

  var divNovoClaviculario = document.getElementById('novoServico');
  divNovoClaviculario.style.display = "none";

  var divNovaEncomenda = document.getElementById('novoClaviculario');
  divNovaEncomenda.style.display = "none";

  var divNovaVisita = document.getElementById('novaVisita');
  divNovaVisita.style.display = "none";

}

// funcao remove uma linha da tabela
function entregaCorreio(linha) {

  var destinatario = window.prompt("Encomenda entregue a:");

  if (destinatario != "" && destinatario != null){
    var i = linha.parentNode.parentNode.rowIndex;
      document.getElementById('tblCorreios').deleteRow(i);
      alert('Encomenda entregue!')
  } else if (destinatario == null) {
    alert('Encomenda não entregue!')
  } else {
    alert('Campo vazio... Favor preencher!')
    return entregaCorreio()
  }

}

//Função cadastrar nova ocorrências
function openNovaEncomenda() {
  var divNovoComunicado = document.getElementById('novoComunicado');
  divNovoComunicado.style.display = "none";

  var divNovoServiços = document.getElementById('novoServico');
  divNovoServiços.style.display = "none";

  var divNovoClaviculario = document.getElementById('novoClaviculario');
  divNovoClaviculario.style.display = "none";

  var divNovaEncomenda = document.getElementById('novaEncomenda');
  divNovaEncomenda.style.display = "block";

  var divNovaVisita = document.getElementById('novaVisita');
  divNovaVisita.style.display = "none";

  var tabelaServicos = document.getElementById("comunicados")
  tabelaServicos.style.display = "none"

  var tabelaClaviculario = document.getElementById("servicos")
  tabelaClaviculario.style.display = "none"

  var tabelaCorreios = document.getElementById("claviculario")
  tabelaCorreios.style.display = "none"

  var tabelaVisita = document.getElementById("visita")
  tabelaVisita.style.display = "none"
}

//Função desaparecer aba ocorrências
function closedNovaEncomenda() {
  var divDesapareceClaviculario = document.getElementById('novaEncomenda');
  divDesapareceClaviculario.style.display = "none";
}

//Função botão fecha claviculario
function fechaCorreios() {
  var fechaCorreios = document.getElementById("correios")
  fechaCorreios.style.display = "none"
}