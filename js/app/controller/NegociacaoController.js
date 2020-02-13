class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document)
        this._inputData = $("#data")
        this._inputQuantidade = $("#quantidade")
        this._inputValor = $("#valor")
    }

    adiciona(event) {
        event.preventDefault()

        console.log(typeof (this._inputData.value));
        console.log(this._inputData.value);

        let date = new Date(
            ...this._inputData.value
                .split('-')
                .map((item, index) => item - index % 2)
        )

        let negociacao = new Negociacao(
            date,
            this._inputQuantidade.value,
            this._inputValor.value
        )

        console.log("negociacao", negociacao)
    }
}