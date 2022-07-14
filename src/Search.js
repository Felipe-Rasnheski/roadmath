export default class Search {
  constructor(search) {
    this.qtdPergun = parseFloat(search.split("").filter(n => (Number(n) || n == 0)).join(""))
    this.nivel = search.replace(this.qtdPergun, "").replace("?", "").replace("+", "")
    this.max = setMax(this.nivel)
    this.min = setMin(this.nivel)

  }

}

function setMax(nivel) {
  if(nivel == "facil"){
    return 100
  } else if(nivel == "normal") {
    return 1000
  } else return 10000
}

function setMin(nivel) {
  if(nivel == "facil"){
    return 10
  } else if(nivel == "normal") {
    return 100
  } else return 1000
}