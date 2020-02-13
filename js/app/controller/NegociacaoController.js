class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document)
        this._inputData = $("#data")
        this._inputQuantidade = $("#quantidade")
        this._inputValor = $("#valor")
        this._listaNegociacoes = new ListaNegociacoes()
    }

    adiciona(event) {
        event.preventDefault()

        this._listaNegociacoes.adiciona(this._criaNegociacao())
        // this._listaNegociacoes.negociacoes.length = 0;
        // this._listaNegociacoes.negociacoes.push(this._criaNegociacao())
        this._limpaFormulario()

        console.log("negociacao", this._listaNegociacoes.negociacoes)
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
}