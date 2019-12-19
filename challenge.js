const isLuckyNumber = (num = 0) => {
    let numSortudos = [1, 3, 7, 9, 13, 15, 21, 25, 31, 33, 37, 43, 49, 51, 63, 67, 69, 73, 75, 79, 87, 93, 99];

    return numSortudos.indexOf(num) != -1;
}


const isHappyNumber = (value, maxInterection, previousValue = []) => {
    maxInterection --;
    if (!previousValue[value] && maxInterection > 0) {
        if(value !== 1) {
            let arrayDigitais = Array.from(String(value), Number);
            previousValue[value] = true;
            const sum = arrayDigitais.reduce((previous, current) => {
                return previous + current * current;
            }, 0);

            return isHappyNumber(sum, maxInterection, previousValue);
        } 

        return 1;
    }

    return 0;
}


const startSoftware = () => {
    var value = prompt("Insira um número para saber se ele é feliz e sortudo", "7");

    if (value != null) {
        typeNumber(value);
    }
}

const typeNumber = (number) => {
    const feedback = {
        0: "Não Feliz e Não Sortudo",
        1: "Não Feliz e Sortudo",
        2: "Feliz e Não Sortudo",
        3: "Feliz e Sortudo"
    };

    const maxInterection = 100;
    const emptyPrevious = [];
    const happy = isHappyNumber(number, maxInterection, emptyPrevious);
    const lucky = isLuckyNumber(number);

    const convertKey = [(happy << 1) | lucky];
    let result = confirm(`O resultado para o seu número é: ${feedback[convertKey]} \n Gostaria de tentar um novo número?`);
    result ? startSoftware() : null;
}

startSoftware();