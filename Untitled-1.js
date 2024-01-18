
class Carro {
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      
    }
  
  }
  
  class Simulador {
    constructor() {
      this.carros = {};
    }
  
    adicionarCarro(nome, carro) {
      this.carros[nome] = carro;
    }
        }

  const carro1 = new Carro('Toyota', 'Corolla', 2022);
  const carro2 = new Carro('Honda', 'Civic', 2021);
  
  const simulador = new Simulador();
  
  simulador.adicionarCarro('Carro1', carro1);
  simulador.adicionarCarro('Carro2', carro2);
  
  simulador.executarSimulacao();