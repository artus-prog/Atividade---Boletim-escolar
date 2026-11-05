// ===== ETAPA 1 ===== //
console.log("Script externo carregado")
//window.alert(67) Aparece como notificação o texto indicado e deixa a pagina em branco
//alert(67) Faz exatamente a mesma coisa
document.write("<p>Gerado por document.write</p>")
function testarWrite(){
    document.write('Página substituida!')
};
var titulo = document.getElementById("titulo");
titulo.innerText = "Boletim Escolar - 2026";
var mensagem = document.getElementById("mensagem");
mensagem.innerText = "<strong>Texto em negrito</strong>"
mensagem.innerHTML = "<strong>Texto em negrito</strong>"


// ===== ETAPA 2 ===== //
const nomeAluno = 'Miguelito';
let idade = 16
var curso = 'Info'

//idade = idade+1    idade é igual a 17
//var curso = 'informatica'   curso agora é informatica
//let idade = 30 idade agora é igual a 30
//nomeAluno = 'Artus' nome agora é artus
let semValor;
console.log(typeof(nomeAluno))
console.log(typeof(idade))
console.log(typeof(true))
console.log(typeof(semValor))
console.log(typeof(null))
console.log(typeof([7,8]))
console.log(typeof({ nota : 9 }))
console.log('5'+3)
console.log('5'-3)
console.log('5'*'2')
console.log(Number('7.5')+2)
let valor = 10;
valor = 'dez';
console.log(typeof(valor))

console.log('Aluno: ' + 'Miguel | ' + 'Idade: '+'17 | '+ 'Curso: '+'TSI | '+'Matrícula: '+ '2026001 | '+ 'Turma: '+'TSI-2' )
const Aluno = 'Fulano'
const Idade = 17
const Curso = 'TSI'
const Matricula = '2026001'
const Turma = 'TSI-2'
console.log(`Aluno: ${Aluno} | Idade: ${Idade} | Curso: ${Curso} | Matrícula: ${Matricula} | Turma: ${Turma}  `)



// ===== ETAPA 3 ===== //
const notas = [7.5, 8.0, 6.5, 9.0];
console.log(notas[0])
console.log(notas[notas.length-1])
console.log(notas.length)
notas.push(8)
notas[0] = 8.5
const aluno = {nome: nomeAluno, matricula: Matricula, turma: Turma, notas: notas, ativo: true};
console.log(aluno.nome, aluno['Turma'])
console.log(aluno.notas[1])
aluno.email = 'miguelito@sla.com'
aluno.ativo = false
console.log(aluno)
const turma = [{nome: 'Ana', media: 8.5}, {nome: 'Bruno', media: 5.4}, {nome: 'Carla', media: 6.9}]
