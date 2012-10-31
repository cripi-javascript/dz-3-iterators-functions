/*jslint plusplus: true, browser: true, devel: true */
/**
 * Возвращает объект Event
 *
 * @param {Object} NewEvent                        Объект - событие
 * @param {Number|Date} NewEvent.start             Начало события
 * @param {Number|Date} NewEvent.end               Конец события
 * @param {String}      [NewEvent.name="Событие"]  Имя события
 * @param {String} NewEvent.place                  Место события
 * @param {Number} NewEvent.rating                 Рейтинг события от 0 до 5
 * @param {String} NewEvent.comment                комментарий, описание события
 * @param {String} NewEvent.link                   ссылка
 *
 * @example
 *    Event({
 *    start: new Date('2011-10-10 14:48:00'),
 *    end: new Date('2011-10-10 15:48:00'),
 *    name: "Совещание",
 *    place: "офис 111",
 *    rating: 5,
 *    comment: "взять отчет!!!",
 *    }
 *    )
 *
 * @return {Object} 
 */
function datatype(data) {
    "use strict";
    if (typeof data === 'undefined') {
        return false;
    }
    if (!data.getTime) {
        return false;
    }
    if ('Invalid Date' === data) {
        return false;
    }
    return true;
}
/**
* возвращает true, если data имеет тип дата и она корректна
*/
function ratingtype(rating) {
    "use strict";
    if (typeof rating !== 'number') {
        return false;
    }
    if (rating > 5 || rating < 0) {
        return false;
    }
    return true;
}
/**
* возвращает true, если rating - число от 0 до 5
*/
function Event(NewEvent) {
    "use strict";
    if (!datatype(NewEvent.start)) {
        alert(NewEvent.start + " не является датой!");
        return;
/**
throw {
    name: Error;
    message: NewEvent.start + " не является датой!"
}
**/
    }
    if (!datatype(NewEvent.end)) {
        alert(NewEvent.end + " не является датой!");
        return;
    }
    if (!ratingtype(NewEvent.rating)) {
        alert("введите рейтинг от 0 до 5");
        return;
    }
    return {
        "start": NewEvent.start,
        "end": NewEvent.end,
        "name": NewEvent.name || "Событие",
        "place": NewEvent.place,
        "rating": NewEvent.rating,
        "comment": NewEvent.comment,
        "link": NewEvent.link
    };
}
/**
*Случайное целое число  между min и max
**/
function getRandomInt(min, max) {
    "use strict";
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var today = new Date();
function addDay(n) {// прибавляет к текущей дате n дней
    "use strict";
    return new Date(today.getTime() + (86400000 * n));
}
function nDay(n) {// возвращает n-ый день от текущей даты в 00часов 00минут
    "use strict";
    var Day, a, b;
    Day = addDay(n);
    a = Day.getTime();
    b = Day.getMilliseconds() + (Day.getHours() * 3600000) + (Day.getMinutes() * 60000) + (Day.getSeconds() * 1000);
    return new Date(a - b);
}
function hours(milis) {// переводит миллисекунда в часы. Возвращает строку
    "use strict";
    var hour, minute, s;
    hour = Math.floor(milis / 3600000);
    minute = Math.floor((milis - (hour * 3600000)) / 60000);
    s = hour + "ч " + minute + "мин";
    return s;
}
var week = addDay(7);
var maxdate = addDay(31);
var mindate = addDay(-31);

/**
*создаем коллекцию из 25 случайных событий:
**/
var collection = [];
var i;
for (i = 0; i < 25; i++) {
    var startrandom = new Date(getRandomInt(mindate.getTime(), maxdate.getTime()));// начало события - случайная дата в интервале +-месяц от текущей
    var endrandom = new Date(startrandom.getTime() + (getRandomInt(0, 86400000)));//конец события - случайная дата в течении суток начиная от начала события
    collection.push(new Event({
        start: startrandom,
        end: endrandom,
        name: "Событие " + (i + 1),
        place: "",
        rating: getRandomInt(0, 5),//рейтинг - случайное целое число от 0 до 5
        comment: "",
        link: ""
    }));
}

/**показываем все события**/
collection.forEach(function (NewEvent) {
    "use strict";
    console.log(NewEvent.name + ":  начало: " + NewEvent.start + "  конец: " + NewEvent.end + "  рейтинг: " + NewEvent.rating);
});

/**
*функция, которая сортирует выбранные элементы коллекции (все, прошедшие, будущие, в течение следующих n дней, через n дней...) по заданному параметру(начало, длительность, рейтинг)
*@param {Number|Date} dateStart  начиная с этого дня
*@param {Number|Date} dateEnd    заканчивая этим днем
*@param {Sring} param            параметр, по которому происходит сотрировка
**/
function sortEvent(dateStart, dateEnd, param) {
    "use strict";
    var choose = collection.filter(function (NewEvent) {return (NewEvent.start > dateStart && NewEvent.start < dateEnd); });// выбрали все события в заданном промежутке
    if (param === "start") { // сортировка по началу события
        return choose.sort(function (Event1, Event2) {return Event1.start - Event2.start; });
    }
    if (param === "length") {//сортировка по длине события
        return choose.sort(function (Event1, Event2) {return (Event1.end - Event1.start) - (Event2.end - Event2.start); });
    }
    if (param === "rating") {//сортировка по рейтингу события
        return choose.sort(function (Event1, Event2) {return Event1.rating - Event2.rating; });
    }
}

/**
*далее - примеры различных запросов
**/
var sortCollection;
console.log("показать все события следующей недели, отсортированные по убыванию рейтинга:");
sortCollection = sortEvent(today, week, "rating").reverse();
if (sortCollection.length > 0) {
    sortCollection.forEach(function (NewEvent) {"use strict"; console.log(NewEvent.name + ": " + NewEvent.start + " рейтинг: " + NewEvent.rating); });
} else {
    console.log("таких событий нет");
}

console.log("показать все последующие события, отсортированные по убыванию рейтинга:");
sortCollection = sortEvent(today, maxdate, "rating").reverse();
if (sortCollection.length > 0) {
    sortCollection.forEach(function (NewEvent) {"use strict"; console.log(NewEvent.name + ": " + NewEvent.start + " рейтинг: " + NewEvent.rating); });
} else {
    console.log("таких событий нет");
}

console.log("показать ближайшее событие:");
sortCollection = sortEvent(today, maxdate, "start");
if (sortCollection.length > 0) {
    console.log(sortCollection[0].name + ": " + sortCollection[0].start);
} else {
    console.log("таких событий нет");
}

console.log("показать все прошедшие события, отсортированные по дате:");
sortCollection = sortEvent(mindate, today, "start");
if (sortCollection.length > 0) {
    sortCollection.forEach(function (NewEvent) {"use strict"; console.log(NewEvent.name + ": " + NewEvent.start + " рейтинг: " + NewEvent.rating); });
} else {
    console.log("таких событий нет");
}

console.log("показать все события через 5 дней, отсортированные по рейтингу:");
sortCollection = sortEvent(nDay(5), nDay(6), "rating").reverse();
if (sortCollection.length > 0) {
    sortCollection.forEach(function (NewEvent) {"use strict"; console.log(NewEvent.name + ": " + NewEvent.start + " рейтинг: " + NewEvent.rating); });
} else {
    console.log("таких событий нет");
}
console.log("отсортировать все события по продолжительности:");
sortCollection = sortEvent(mindate, maxdate, "length");
if (sortCollection.length > 0) {
    sortCollection.forEach(function (NewEvent) {"use strict"; console.log(NewEvent.name + ": продолжительность " + hours(NewEvent.end - NewEvent.start)); });
} else {
    console.log("таких событий нет");
}