let data = new Date(); // Instanciamos o objeto Date

let hora = data.getHours(); // Utilizamos a instância para recuperar a hora e minutos
let min = data.getMinutes();

let saudacao; // Definimos a mensagem de saudação de acordo com a hora do dia
if (hora <= 11) {
    saudacao = 'Bom dia!';
} else if (hora <= 17) {
    saudacao = 'Boa tarde!';
} else {
    saudacao = 'Boa noite!';
}

console.log('Olá ' + saudacao);
console.log('Agora são ' + hora + ' horas e ' + min + ' minutos');