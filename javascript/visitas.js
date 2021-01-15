
//Funcao adiciona uma nova linha na tabela
function adicionaLinhaVisita(idTabelaComunicados) {

    var apareceComunicado = document.getElementById("comunicados")
    apareceComunicado.style.display = "none"
  
    var fechaComunicado = document.getElementById("servicos")
    fechaComunicado.style.display = "none"
  
    var fechaComunicado = document.getElementById("claviculario")
    fechaComunicado.style.display = "none"
  
    var fechaComunicado = document.getElementById("correios")
    fechaComunicado.style.display = "none"
  
    var fechaComunicado = document.getElementById("visitas")
    fechaComunicado.style.display = "block"
  
    var divDesaparece = document.getElementById('novaVisita-');
    divDesaparece.style.display = "none";
  
    var tabela = document.getElementById(idTabelaComunicados);
    var numeroLinhas = tabela.rows.length;
    var linha = tabela.insertRow(numeroLinhas);
    var celula1 = linha.insertCell(0);
    var celula2 = linha.insertCell(1);
    var celula3 = linha.insertCell(2);
    var celula4 = linha.insertCell(3);
  
    var data = window.document.getElementById('data').innerHTML;
    var hora = window.document.getElementById('hora').innerHTML;
    var categoria = window.document.getElementById('categoria').value;
    var comunicado = window.document.getElementById('comunicado').value;
  
    celula1.innerHTML = data + " - " + hora;
    celula2.innerHTML = categoria;
    celula3.innerHTML = comunicado;
    celula4.innerHTML = '<img onclick="removeLinhaComunicado(this)" src="images/delete.png" alt="">';
  }
  
  //Função aparece tabela comunicado
  function apareceTabelaVisita() {
    var tabelaComunicado = document.getElementById("comunicados")
    tabelaComunicado.style.display = "none"
  
    var tabelaServicos = document.getElementById("servicos")
    tabelaServicos.style.display = "none"
  
    var tabelaClaviculario = document.getElementById("claviculario")
    tabelaClaviculario.style.display = "none"
  
    var tabelaCorreios = document.getElementById("correios")
    tabelaCorreios.style.display = "none"
  
    var tabelaVisitas = document.getElementById("visita")
    tabelaVisitas.style.display = "block"
  
  //--------------------------------------------------------------------
  
    var novoComunicado = document.getElementById('novoComunicado');
    novoComunicado.style.display = "none";
  
    var novoServico = document.getElementById('novoServico');
    novoServico.style.display = "none";
  
    var novoClaviculario = document.getElementById('novoClaviculario');
    novoClaviculario.style.display = "none";

    var novaEncomenda = document.getElementById('novaEncomenda');
    novaEncomenda.style.display = "none";

  }
  
  // funcao remove uma linha da tabela
  function removeLinhaVisita(linha) {
  
    var remove = confirm('Excluir definitivamente esse comunicado?');
  
    if (remove == true) {
      var i = linha.parentNode.parentNode.rowIndex;
      document.getElementById('tblVisitas').deleteRow(i);
  
      alert('Visita excluída com sucesso!')
  
    } else {
      alert('Visita não excluído!');
    }
  
  }
  
  //Função cadastrar novo Comunicado
  function openNovaVisita() {
    var divNovoComunicado = document.getElementById('novoComunicado');
    divNovoComunicado.style.display = "none";
  
    var divNovoServiços = document.getElementById('novoServico');
    divNovoServiços.style.display = "none";
  
    var divNovoClaviculario = document.getElementById('novoClaviculario');
    divNovoClaviculario.style.display = "none";
  
    var divNovaEncomenda = document.getElementById('novaEncomenda');
    divNovaEncomenda.style.display = "none";

    var divNovaVisita = document.getElementById('novaVisita');
    divNovaVisita.style.display = "block";
  
    var tabelaServicos = document.getElementById("comunicados")
    tabelaServicos.style.display = "none"
  
    var tabelaClaviculario = document.getElementById("servicos")
    tabelaClaviculario.style.display = "none"
  
    var tabelaCorreios = document.getElementById("claviculario")
    tabelaCorreios.style.display = "none"
  
    var tabelaVisitas = document.getElementById("correios")
    tabelaVisitas.style.display = "none"
  
  }
  
  //Função desaparecer aba Comunicado
  function closedNovaVisita() {
    var divDesaparece = document.getElementById('novaVisita');
    divDesaparece.style.display = "none";
  }
  
  //Função botão fecha comunicado
  function fechaVisita() {
    var fechaVisitas = document.getElementById("visita")
    fechaVisitas.style.display = "none"
  }