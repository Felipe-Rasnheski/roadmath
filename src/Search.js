export default class Search {
  constructor(search) {
    this.qtdPergun = parseFloat(search.split("").filter(n => (Number(n) || n == 0)).join(""))
    this.nivel = search.replace(this.qtdPergun, "").replace("?", "").replace("+", "")
    this.controle = this.qtdPergun/2
  }

}