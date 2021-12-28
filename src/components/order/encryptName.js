export const encryptName = (text) => { //text - nome da pessoa
    let encrypted = ''; //string vazia
    const splitedName = text?.split(' ');// pega todo o nome da pessoa e divide pelos espaços
    splitedName?.forEach((value, index) => { // para cada um dos nomes
        if (index === 0) return encrypted += `${value} `; // o primeiro nome fica como está mais um espaço
        if (index !== splitedName.length - 1) return encrypted += `${value.replaceAll(/\w/g, '*')} `; //se não for o último recebe replace all pra substituir por asteriscos
if (index === splitedName.length - 1) {
            value.split('').forEach((lastNameValue, lastNameIndex) => { //se for o último vira um array com cada letra
                if (lastNameIndex < value.length - 2) {//quando não for menor que dois substitui por asterisco
    encrypted += '*'
} else {
                    encrypted += lastNameValue //se for, retorna nome normal
}
});
        }
    });
    return encrypted;
}