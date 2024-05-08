Horário e Saudação em JavaScript



Este é um simples script em JavaScript que exibe uma saudação de acordo com a hora do dia e também mostra o horário atual.


[Screen recording 2024-05-06 10.45.15.webm](https://github.com/alinemello29/Java-/assets/109696840/deb6e713-66fc-47a9-95d9-3cf2a98726b5)



Como funciona
O código utiliza o objeto Date do JavaScript para obter a hora e os minutos atuais do sistema. Em seguida, ele determina a saudação apropriada com base na hora do dia (manhã, tarde ou noite).

Se a hora for menor ou igual a 11, será exibida a mensagem "Bom dia!".
Se a hora for menor ou igual a 17, será exibida a mensagem "Boa tarde!".
Caso contrário, será exibida a mensagem "Boa noite!".
O código também exibe o horário atual no console, incluindo a hora e os minutos.

Como usar
Copie o código JavaScript fornecido.
Cole o código em um arquivo JavaScript (por exemplo, saudacao.js).
Execute o arquivo em um ambiente que suporte JavaScript (como um navegador ou Node.js).
O console exibirá a saudação apropriada de acordo com o horário do sistema, juntamente com o horário atual.
Exemplo de uso
javascript
Copy code
// Copie e cole o código JavaScript aqui

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
