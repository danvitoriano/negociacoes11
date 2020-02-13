class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document)
        this._inputData = $("#data")
        this._inputQuantidade = $("#quantidade")
        this._inputValor = $("#valor")
        this._listaNegociacoes = new ListaNegociacoes()
        this._negociacoesView = new NegociacoesView($("#negociacoesView"))
        this._negociacoesView.update(this._listaNegociacoes)
        this._mensagem = new Mensagem()
        this._mensagemView = new MensagemView($("#mensagemView"))
        this._mensagemView.update(this._mensagem)
    }

    adiciona(event) {
        event.preventDefault()

        this._listaNegociacoes.adiciona(this._criaNegociacao())
        this._negociacoesView.update(this._listaNegociacoes)
        this._mensagem.texto = "Negociação adicionada com sucesso"
        this._mensagemView.update(this._mensagem)
        this._limpaFormulario()
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )
    }

    _limpaFormulario() {
        this._inputData.value = ''
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.01;
        this._inputData.focus();
    }

    apaga() {

        this._listaNegociacoes.esvazia();
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = 'Negociações apagadas com sucesso';
        this._mensagemView.update(this._mensagem);
    }

    importaNegociacoes() {

        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:3000/negociacoes/semana');
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4) {
                if(xhr.status == 200) {
                    console.log('Obtendo as negociações do servidor.');
                    console.log(xhr.responseText);
                } else {
                    console.log('Não foi possível obter as negociações do servidor.');
                    console.log(xhr.responseText);
                }
            }
        }
        xhr.send();
    }
}