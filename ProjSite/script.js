function autenticarUsuario() {
    var email = document.getElementById('indexEmail').value;
    var senha = document.getElementById('indexSenha').value;

    var loginFixo = {
        email: 'usuario123',
        senha: 'senha123'
    };

    if (email === loginFixo.email && senha === loginFixo.senha) {
        window.location.href = 'mainPage.html';
    } else {
        alert('Login ou senha incorretos. Tente novamente.');
    }
}

function salvarDados() {
    var nome = document.getElementById('registroNome').value;
    var email = document.getElementById('registroEmail').value;
    var idade = document.getElementById('registroIdade').value;
    var rebanhos = document.getElementById('registroRebanhos').value;
    var cpf = document.getElementById('registroCpf').value;

    if (!nome || !email || !idade || !rebanhos || !cpf) {
        alert('Preencha todos os campos corretamente');
        return;
    }


    if (typeof(Storage) !== "undefined") {
        console.log("Possui localStorage");

        var dadosSalvos = JSON.parse(localStorage.getItem('usuarios')) || [];

        var usuarioExistente = dadosSalvos.find(function (usuario) {
            return usuario.cpf === cpf;
        });

        if (usuarioExistente) {
            alert('Já existe um usuário cadastrado com esse CPF');
            return;
        }

        dadosSalvos.push({ nome: nome, email: email, idade: idade, cpf: cpf, rebanhos: rebanhos});

        localStorage.setItem('usuarios', JSON.stringify(dadosSalvos));

        document.getElementById('registroNome').value = '';
        document.getElementById('registroEmail').value = '';
        document.getElementById('registroIdade').value = '';
        document.getElementById('registroCpf').value = '';
        document.getElementById('registroRebanhos').value = '';

        console.log('Dados salvos');

        alert("Cadastrado com sucesso");
    } else {
        alert("Desculpe, seu navegador não suporta LocalStorage");
    }
}

function exibirDadosSalvos() {
    console.log("Tentando exibir dados salvos");
    
    var dadosSalvos = JSON.parse(localStorage.getItem('usuarios')) || [];
    
    var dadosSalvosDiv = document.getElementById('dadosSalvos');
    dadosSalvosDiv.innerHTML = "";

    for (var i = 0; i < dadosSalvos.length; i++) {
        var usuario = dadosSalvos[i];
        var bolsistaHtml = "<p><strong>Nome: </strong>" + usuario.nome + " | <strong>E-mail: </strong>" + usuario.email + "| <strong>CPF: </strong>" + usuario.cpf + "| <strong>Idade: </strong>" + usuario.idade +  "| <strong>Rebanhos: </strong>" + usuario.rebanhos + "  " +
            "<button class='btn btn-danger btn-sm' onclick='excluirBolsista(" + i + ")'>Excluir</button></p>";

        dadosSalvosDiv.innerHTML += bolsistaHtml;
    }
}

function excluirBolsista(index) {
    var dadosSalvos = JSON.parse(localStorage.getItem('usuarios')) || [];
    
    dadosSalvos.splice(index, 1);

    localStorage.setItem('usuarios', JSON.stringify(dadosSalvos));

    exibirDadosSalvos();
}

function salvarDadosR() {
    var nomeR = document.getElementById('registroNomeR').value;
    var codigo = document.getElementById('registroCodigo').value;
    var especies = document.getElementById('registroEspecies').value;

    if (!nomeR || !codigo || !especies) {
        alert('Preencha todos os campos corretamente');
        return;
    }


    if (typeof(Storage) !== "undefined") {
        console.log("Possui localStorage");

        var dadosSalvosR = JSON.parse(localStorage.getItem('usuariosR')) || [];

        var codigoExistente = dadosSalvosR.find(function (usuarioR) {
            return usuarioR.codigo === codigo;
        });

        if (codigoExistente) {
            alert('Já existe um rebanho cadastrado com esse código.');
            return;
        }

        dadosSalvosR.push({ nomeR: nomeR, codigo: codigo, especies: especies});

        localStorage.setItem('usuariosR', JSON.stringify(dadosSalvosR));

        document.getElementById('registroNomeR').value = '';
        document.getElementById('registroCodigo').value = '';
        document.getElementById('registroEspecies').value = '';

        console.log('Dados salvos');

        alert("Cadastrado com sucesso");
    } else {
        alert("Desculpe, seu navegador não suporta LocalStorage");
    }
}

function exibirDadosSalvosR() {
    console.log("Tentando exibir dados salvos");

    var dadosSalvosR = JSON.parse(localStorage.getItem('usuariosR')) || [];

    var dadosSalvosDivR = document.getElementById('dadosSalvosR');
    dadosSalvosDivR.innerHTML = "";

    for (var i = 0; i < dadosSalvosR.length; i++) {
        var usuarioR = dadosSalvosR[i];
        var rebanhoHtml =
            "<p><strong>Nome: </strong>" + usuarioR.nomeR + " | <strong>Código: </strong>" + usuarioR.codigo + "| <strong>Espécie(s): </strong>" + usuarioR.especies + "  " +
            "<button class='btn btn-danger btn-sm' onclick='excluirRebanho(" + i + ")'>Excluir</button></p>";

        dadosSalvosDivR.innerHTML += rebanhoHtml;
    }
}

function excluirRebanho(index) {
    var dadosSalvosR = JSON.parse(localStorage.getItem('usuariosR')) || [];
    
    dadosSalvosR.splice(index, 1);

    localStorage.setItem('usuariosR', JSON.stringify(dadosSalvosR));

    exibirDadosSalvosR();
}
