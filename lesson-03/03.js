// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num3 && num2 >= num1) {
        return num2;
    } else if (num3 >= num1 && num3 >= num2){
        return num3;
    }
}
// console.log(findLargest(303, 2, 332));
