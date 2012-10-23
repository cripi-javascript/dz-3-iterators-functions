/**
 * Created with PyCharm.
 * User: meded
 * Date: 10/13/12
 * Time: 12:53 PM
 * To change this template use File | Settings | File Templates.
 */


/**
 * Описания собития
 * @param {Object}          eventOptions                      Обекс с параметарми
 * @param {Number | Date}   eventOptions.startEvent           Начало собития
 * @param {Number | Date}   eventOptions.endEvent             Конец события
 * @param {string}          eventOptions.name                 Заголовок
 * @param {string}          eventOptions.description          Описание
 * @param {string}          eventOptions.tegs                 Теги
 * @param {string}          eventOptions.place                Адрес собития
 * @param {string}          eventOptions.coordinates          Кардинаты собития
 * @param {string}          eventOptions.colorFon             Цвети стикира
 * @param {boolean}         eventOptions.reminders            Индекатор уведомлений
 * @param {Number | Date}   eventOptions.reminderTimeBefore   Время уведомления
 * @param {string}          eventOptions.friends              сылки на друзей из соц сетей
 *
 * @return {Object}
 */
function Event(eventOptions) {
    'use strict';
    /**
     * проверка и приведения к дате
     * @param time {Number | Date} Дата или стока
     * @return {Date}              Вернет в формате даты
     */
    function isData(time){
        if ('string' === typeof(time)){
            var timeToData = new Date(time)
            if ('Invalid Date' === timeToData){
                new TypeError("не верный формат даты");
            } else{
                return timeToData
            }
        } else{
            return time
        }
}
    eventOptions.startEvent = isData(eventOptions.startEvent);
    eventOptions.endEvent = isData(eventOptions.endEvent);
    if (eventOptions.startEvent > eventOptions.endEvent) {
        var startEvent = eventOptions.startEvent;
        eventOptions.startEvent = eventOptions.endEvent;
        eventOptions.endEvent = startEvent;
    }

    eventOptions.startEvent = eventOptions.startEvent || new Date;
    eventOptions.endEvent = eventOptions.endEvent || new Date;
    eventOptions.name = eventOptions.name || "Событие";
    eventOptions.description = eventOptions.description || "";
    eventOptions.tegs = eventOptions.tegs || undefined;

    /**
     * преоброзумем адрес в точные кардинаты
     * @param place {string}    Адрес собыитя
     * @return {*}              Кардинаты провдения собития
     */
    function findCoordinates(place) {
        //...
        return coordinates;
    }
    if (eventOptions.coordinates === "" && eventOptions.place) {
        eventOptions.coordinates = findCoordinates(eventOptions.place);
    }
    eventOptions.place = +eventOptions.place || "";
    eventOptions.coordinates = +eventOptions.coordinates || "";


    var regColorcode = /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/;
    if (regColorcode.test(eventOptions.color) !== false) {
        eventOptions.color = "";
        new TypeError("все плохо это не цвет");
    }
    eventOptions.color = eventOptions.color || "#fff";
    eventOptions.reminders = eventOptions.reminders || false;
    eventOptions.reminderTimeBeforeEvent = isData(eventOptions.reminderTimeBeforeEvent) || eventOptions.startEvent;
    eventOptions.friends = eventOptions.friends || undefined;
    return eventOptions;
};

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var eventList = [];
function generTestCollection() {
    for (var i = 0; i < 30; i++) {
        var eventOptions = {};

        function rendomTime () {
            var newTime = new Date;
            newTime.setMonth(newTime.getMonth() - getRandomInt(0,1));
            newTime.setDate(getRandomInt(1,31));
            newTime.setHours(getRandomInt(0,24));
            newTime.setMinutes(getRandomInt(0,59));
            return newTime
        }
        eventOptions.startEvent = rendomTime();
        eventOptions.endEvent = rendomTime();

        eventOptions.name =  "Событие N" + i;

        function giberArow() {
            var tegs = [];
            if (getRandomInt(0,1)){
                tegs.push("Программирование")
            }
            if (getRandomInt(0,1)){
                tegs.push("Веб-разработка")
            }
            if (getRandomInt(0,1)){
                tegs.push("Информационная безопасность")
            }
            if (getRandomInt(0,1)){
                tegs.push("JavaScript")
            }
            if (getRandomInt(0,1)){
                tegs.push("Фриланс")
            }
            if (getRandomInt(0,1)){
                tegs.push("DIY или Сделай Сам")
            }
            if (getRandomInt(0,1)){
                tegs.push("Android")
            }
            if (getRandomInt(0,1)){
                tegs.push("Linux")
            }
            return tegs.toString();
        }
        eventOptions.tegs = giberArow();
        eventOptions.place = "г Екатеринбург";
        eventOptions.coordinates = "56.828561,60.602373";

        function giberColor() {
            var numberColor = getRandomInt(0,4);
            if (numberColor === 0){
                return "#fff"
            }
            if (numberColor === 1){
                return "#F75050"
            }
            if (numberColor === 2){
                return "#5566E7"
            }
            if (numberColor === 3){
                return "#4DC743"
            }
            if (numberColor === 4){
                return
            }
        }
        eventOptions.color = giberColor();
        eventOptions.reminders = !!getRandomInt(0,4);
        eventOptions.reminderTimeBeforeEvent = rendomTime();

        function giberFriends() {
            var trgs = [];
            if (getRandomInt(0,1)){
                trgs.push("http://vk.com/alex_eho")
            }
            if (getRandomInt(0,1)){
                trgs.push("http://vk.com/id29476786")
            }
            if (getRandomInt(0,1)){
                trgs.push("http://vk.com/ostornfirst")
            }
            if (getRandomInt(0,1)){
                trgs.push("http://vk.com/chbgp")
            }
            if (getRandomInt(0,1)){
                trgs.push("http://vk.com/id20061985")
            }
            if (getRandomInt(0,1)){
                trgs.push("http://vk.com/id126316413")
            }
            if (getRandomInt(0,1)){
                trgs.push("http://vk.com/id31116305")
            }
            return trgs
        }
        eventOptions.friends = giberFriends();
        eventList.push(new Event(eventOptions))
    }
}
generTestCollection();
console.log("вся колеция");
console.log(eventList);



function prop(name){
    return function (object){
        return  object[name];
    }
}
function func(name){
    return function (object){
        return  object[name]();
    }
}
var slice = Array.prototype.slice;
function partial(fn) {
    var args = slice.call(arguments, 1);
    return function () {
        return fn.apply(this, args.concat(slice.call(arguments)));
    };
}
function isMore(a,b) {
    return a > b;
}
function isLess(a,b) {
    return a > b;
}
function isEqual(a,b) {
    return a === b;
}

var nowDate = new Date
var MoreNow = partial(isMore,nowDate);
var LessNow = partial(isLess,nowDate);

function searchAnArray(array,str) {
    var Equal = partial(isEqual,str);
    return array.reduce(
        function (sum, x) {
            return sum+Equal(x)

        },0
    )
}


// Выбрать прошедшие события
var endEvintListNow = eventList.filter(function (item) {
       return LessNow(item.endEvent)
    }
);
console.log("Выбрать прошедшие события");
console.log(endEvintListNow);


// Выбрать идушие сейчас
var EvinteNow = eventList.filter(function (item) {
       return LessNow(item.startEvent)
    }
).filter(function (item) {
        return MoreNow(item.endEvent)
    }
);
console.log("Выбрать идушие сейчас");
console.log(EvinteNow);


//Выбрать события с моим участием  http://vk.com/alex_eho
var withAlex_eho = eventList.filter(function (item) {
    return searchAnArray(item.friends,"http://vk.com/alex_eho")
})
console.log("Выбрать события с моим участием  http://vk.com/alex_eho");
console.log(withAlex_eho);

