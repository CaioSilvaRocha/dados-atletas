// CLASSES

class Atleta{

    // Definição do construtor
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas
    }

    // Definição dos métodos
    calculaCategoria(){
        let categoria = "";

        if(this.idade >= 9 && this.idade <= 11){
            categoria = "Infantil";
        }else if(this.idade >= 12 && this.idade <= 13){
            categoria = "Juvenil";
        }else if(this.idade >= 14 && this.idade <= 15){
            categoria = "Intermediário";
        }else if(this.idade >= 16 && this.idade <= 30){
            categoria = "Adulto";
        }else{
            categoria = "Sem categoria";
        }

        return categoria
    }

    calculaIMC(){
        let imc = this.peso / (this.altura * this.altura);

        return imc
    }

    calculaMediaValida(){
        
        // Ordena as notas da matriz
        let notasOrdenadas = this.notas.sort(function(nota1, nota2){
            return nota1 - nota2
        });

        // Obtém as notas especificadas pelo problema
        let notasEspecificas = notasOrdenadas.slice(1, 4)

        // Calcula o somatório das notas específicas
        let somatorioNotasEspecificas = notasEspecificas.reduce(function(somatorio, nota){
            return somatorio + nota
        }, 0);

        // Calcula a média das notas específicas
        let mediaNotasEspecificas = somatorioNotasEspecificas / notasEspecificas.length;

        return mediaNotasEspecificas
    }

    obtemNomeAtleta(){
        console.log("Nome:", this.nome)
    }

    obtemIdadeAtleta(){
        console.log("Idade:", this.idade)
    }

    obtemPesoAtleta(){
        console.log("Peso:", this.peso)
    }

    obtemAlturaAtleta(){
        console.log("Altura:", this.altura)
    }

    obtemNotasAtleta(){
        let csvNotas = this.notas.join(",")

        console.log("Notas:", csvNotas)
    }

    obtemCategoria(){
        let categoria = this.calculaCategoria();

        console.log("Categoria:", categoria)
    }

    obtemIMC(){
        let imc = this.calculaIMC();

        console.log("IMC:", imc)
    }

    obtemMediaValida(){
        let media = this.calculaMediaValida();

        console.log("Média válida:", media)
    }
}

// DADOS DE ENTRADA

const atleta0 = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);
const atleta1 = new Atleta("Atleta 1", 9, 20, 1.00, [1, 2, 3, 4, 5]);
const atleta2 = new Atleta("Atleta 2", 12, 30, 1.10, [2, 3, 4, 5, 6]);
const atleta3 = new Atleta("Atleta 3", 14, 40, 1.20, [3, 4, 5, 6, 7]);
const atleta4 = new Atleta("Atleta 4", 40, 90, 1.80, [4, 5, 6, 7, 8]);

// FUNCIONAMENTO DO CÓDIGO

atleta0.obtemNomeAtleta()
atleta0.obtemIdadeAtleta()
atleta0.obtemPesoAtleta()
atleta0.obtemAlturaAtleta()
atleta0.obtemNotasAtleta()
atleta0.obtemCategoria()
atleta0.obtemIMC()
atleta0.obtemMediaValida()

console.log("------------------------")

atleta1.obtemNomeAtleta()
atleta1.obtemIdadeAtleta()
atleta1.obtemPesoAtleta()
atleta1.obtemAlturaAtleta()
atleta1.obtemNotasAtleta()
atleta1.obtemCategoria()
atleta1.obtemIMC()
atleta1.obtemMediaValida()

console.log("------------------------")

atleta2.obtemNomeAtleta()
atleta2.obtemIdadeAtleta()
atleta2.obtemPesoAtleta()
atleta2.obtemAlturaAtleta()
atleta2.obtemNotasAtleta()
atleta2.obtemCategoria()
atleta2.obtemIMC()
atleta2.obtemMediaValida()

console.log("------------------------")

atleta3.obtemNomeAtleta()
atleta3.obtemIdadeAtleta()
atleta3.obtemPesoAtleta()
atleta3.obtemAlturaAtleta()
atleta3.obtemNotasAtleta()
atleta3.obtemCategoria()
atleta3.obtemIMC()
atleta3.obtemMediaValida()

console.log("------------------------")

atleta4.obtemNomeAtleta()
atleta4.obtemIdadeAtleta()
atleta4.obtemPesoAtleta()
atleta4.obtemAlturaAtleta()
atleta4.obtemNotasAtleta()
atleta4.obtemCategoria()
atleta4.obtemIMC()
atleta4.obtemMediaValida()