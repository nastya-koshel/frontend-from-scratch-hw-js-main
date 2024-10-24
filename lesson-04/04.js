/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(str) {
    strArray = str.split("");
    const doubledArray = []
    for (let i = 0; i < strArray.length; i++) {
        doubledArray.push(strArray[i]+strArray[i])
    }
    newStr = doubledArray.join("")
    return newStr
}