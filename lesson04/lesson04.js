
let percent = 10;
let screenPrice = 10000;


let titleProject = prompt('Название проекта');

let screensValue = prompt('Типы экранов: шаблонный, с уникальным дизайном, с анимациями');

let responsive = confirm('нужен респонсив сайт?');

let service1 = prompt('какой сервис нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('какой еще сервис нужен?');
let servicePrice2 = +prompt('Сколько будет стоить второй сервис?');

let fullPrice = screenPrice + servicePrice1 + servicePrice2;

let servicePercentPrice = Math.round(fullPrice * percent / 100);

console.log (servicePercentPrice);

if(fullPrice >= 50000) {
    console.log('скидка 10%');
} else if (fullPrice >= 20000) {
    console.log('скидка 5%');
} else if (fullPrice < 20000 && fullPrice >= 0) {
    console.log('скидки нет')
} else if (fullPrice < 0) {
    console.log('что-то пошло не так');
}

