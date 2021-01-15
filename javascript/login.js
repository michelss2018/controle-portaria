function login() {
    const id = [2021, 2022, 2023, 2024]
    var login = prompt('Informe seu ID:')
    var loginLogout = document.getElementById('loginLogout')
    var nomePorteiro = document.getElementById('nomePorteiro')

    if (login == id[0]) {
        nomePorteiro.innerHTML = "Michel Souza Santana"
        loginLogout.innerHTML = '<p onclick="logout()">Sair</p>'

        var boxMain = document.getElementById('boxMain')
        boxMain.style.display = "flex"
    } else if (login == id[1]) {
        nomePorteiro.innerHTML = "Valter Alves"
        loginLogout.innerHTML = '<p onclick="logout()">Sair</p>'

        var boxMain = document.getElementById('boxMain')
        boxMain.style.display = "flex"
    } else if (login == id[2]) {
        nomePorteiro.innerHTML = "Luiz Neto"
        loginLogout.innerHTML = '<p onclick="logout()">Sair</p>'

        var boxMain = document.getElementById('boxMain')
        boxMain.style.display = "flex"
    } else if (login == id[3]) {
        nomePorteiro.innerHTML = "Luiz Soares"
        loginLogout.innerHTML = '<p onclick="logout()">Sair</p>'

        var boxMain = document.getElementById('boxMain')
        boxMain.style.display = "flex"
    }
}

function logout() {
    var confirma = confirm('Tem certeza que deseja encerrar a sessão?')

    if (confirma == true) {
        var loginLogout = document.getElementById('loginLogout')
        nomePorteiro.innerHTML = "Necessário fazer login!"
        loginLogout.innerHTML = '<p onclick="login()">Entrar</p>'

        var boxMain = document.getElementById('boxMain')
        boxMain.style.display = "none"

        var tabelaComunicado = document.getElementById("comunicados")
        tabelaComunicado.style.display = "none"

        var tabelaServicos = document.getElementById("servicos")
        tabelaServicos.style.display = "none"

        var tabelaClaviculario = document.getElementById("claviculario")
        tabelaClaviculario.style.display = "none"

        var tabelaCorreios = document.getElementById("correios")
        tabelaCorreios.style.display = "none"

        var tabelaVisita = document.getElementById("visita")
        tabelaVisita.style.display = "none"


        //--------------------------------------------------------------------

        var divNovoServico = document.getElementById('novoComunicado');
        divNovoServico.style.display = "none";

        var divNovoClaviculario = document.getElementById('novoServico');
        divNovoClaviculario.style.display = "none";

        var divNovaEncomenda = document.getElementById('novoClaviculario');
        divNovaEncomenda.style.display = "none";

        var novaEncomenda = document.getElementById('novaEncomenda');
        novaEncomenda.style.display = "none";

        var divNovaVisita = document.getElementById('novaVisita');
        divNovaVisita.style.display = "none";
    } else {

    }

}