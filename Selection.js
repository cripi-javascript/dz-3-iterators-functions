/**
* Возвращает объект Event
*
* @param {String}    [name = "Событие"]  Имя события
* @param {String}    [address = ""]      Адресс события
* @param {Object}    time                Дата события
* @param {Array}     member              Участники
* @param {Number}    [raiting=3]         Важность события (по шкале от 0 до 5)
*
* @example
*   Event(
*       "Совещание", "Екатеринбург, ул. Тургенева, д. 4, ауд. 150",
*       EventTime(new Date(2011, 10, 10, 14, 48, 00), 60),
*       ["Жигалов Сергей Алексеевич"], 5)
*
* @return {Object}
* @see EventTime
*/

function Event(name, address, time, member, raiting) {
    "use strict";
    return {
        "name": name || "Событие",
        "address": address.toString(),
        "time": time,
        "member": member || [],
        "raiting": +raiting || 3
    };
}


/**
* Возвращает объект EventTime
*
* @private
* @param {Number|Date} start          Начало события
* @param {Number}      [length=0]     Длительность события в минутрах
*
* @example
*    EventTime(new Date(2011, 10, 10, 14, 48, 00), 60)
*
* @return {Object}
*/
function EventTime(start, length) {
    "use strict";
    return {
        "start": +start,
        "length": +length || 0
    };
}

var events = [
    Event("jsy6on0kz4", "7429kpz7nh", EventTime(new Date(2012, 10, 8), 45), ["Иванов", "я", "Петров"]), // 1
    Event("l8zklfh2r5", "1ygb121nee", EventTime(new Date(2012, 11, 22), 45), ["Иванов", "я"]),          // 2
    Event("weoua5w3pf", "icu620fqpo", EventTime(new Date(2012, 11, 3), 45), ["Иванов"]),                // 3
    Event("5zs4x4aij9", "4x9pkek4dp", EventTime(new Date(2012, 9, 10), 45), ["Иванов", "я", "Петров"]), // 4
    Event("s1m5vkm5mv", "5v6hifv041", EventTime(new Date(2012, 11, 25)), ["Иванов", "я"]),              // 5
    Event("3bdg49u3ez", "zwvyu91w3b", EventTime(new Date(2012, 10, 10), 45), ["Иванов", "Петров"]),     // 6
    Event("efc7dr20dx", "u641l89gw7", EventTime(new Date(2012, 9, 9)), ["Иванов", "я"]),                // 7
    Event("pqlv9jglxq", "nkb24jd7u6", EventTime(new Date(2012, 10, 29)), ["Петров"]),                   // 8
    Event("iei2z6c63b", "kgzdrcs4mk", EventTime(new Date(2012, 11, 7)), ["я", "Петров"]),               // 9
    Event("kygauxe4ub", "br0vzaikwr", EventTime(new Date(2012, 11, 27), 45), ["Иванов", "я"], 5),       // 10
    Event("ke4vd03xp8", "9k3bbogzz5", EventTime(new Date(2012, 11, 3), 45), ["Иванов"]),                // 11
    Event("jt4kew1ayg", "4q51wfulmd", EventTime(new Date(2012, 11, 29), 45), ["Иванов", "Петров"]),     // 12
    Event("dg9q72wmw9", "c5r5t5z024", EventTime(new Date(2012, 11, 8), 45), ["Иванов"]),                // 13
    Event("v4873m9tgp", "l0rdqy22d3", EventTime(new Date(2012, 10, 25), 45), ["Иванов", "я"]),          // 14
    Event("rrb6bjyubc", "0oxvmk59p4", EventTime(new Date(2012, 10, 23)), ["Иванов", "я"]),              // 15
    Event("0oqqd4j655", "rb1gc65t8d", EventTime(new Date(2012, 10, 11), 45), ["Иванов", "Петров"]),     // 16
    Event("f7b16x9cmy", "ncxmyqnhp1", EventTime(new Date(2012, 11, 4)), ["Иванов", "я"]),               // 17
    Event("ik3xyzqoky", "3cguxe6l6n", EventTime(new Date(2012, 11, 16)), ["Петров"]),                   // 18
    Event("u4mfqatngu", "a7vnsmnpb0", EventTime(new Date(2012, 9, 24)), ["я"]),                         // 19
    Event("s53m0j6u9j", "bk9y4szr2s", EventTime(new Date(2012, 9, 7), 45), ["Иванов", "я"], 5),         // 20
    Event("lkajbmx7y2", "vwzpu1xl0o", EventTime(new Date(2012, 9, 20), 45), ["Иванов", "я", "Петров"], 1)//21
];


/**
* Прошедшее событие
*
* @param {Object} event Событие
*
* @return {Boolean}
*/
function OldEvent(event) {
    return event.time.start < Date.now();
}

/**
* Событие с моим участием
*
* @param {Object} event Событие
*
* @return {Boolean}
*/
function MyParticipationEvent(event, name) {
    return event.member.some(function (member) {
        return member == name;
    });
}

/**
* Предстоящее событие
*
* @param {Object} event Событие
*
* @return {Boolean}
*/
function NewEvent(event) {
    return event.time.start > Date.now();
}

/**
* Предстоящее событие
*
* @param {Object} event Событие
*
* @return {Boolean}
*/
function NewEvent(event) {
    return event.time.start > Date.now();
}

function Selection() {
    console.log(events.filter(MyParticipationEvent).length);
}