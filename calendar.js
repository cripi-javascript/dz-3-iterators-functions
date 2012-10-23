/*global alert: true*/

function isDate(date) {
    "use strict";

    if (typeof date === 'undefined') {
        return false;
    }
    if (typeof date.getMonth !== 'function') {
        return false;
    }
    return true;
}

/**
 * Возвращает объект event, либо undefined, если в объекте  отсутвуют обязательные поля
 * eventObject{
 *            name - название события
 *            start  - начало
 *            end - окончание
 *            location - место
 *            remindTime - за сколько минут до события напомнить
 *            description - описание
 * }
 
 * @param {object} obj             Объект
 * @example
 *    Event({
 *          name: "Пара по веб-технологиям",
 *          start: new Date("2012-10-20 10:00:00"),
 *          end: new Date("2012-10-20 12:50:00"),
 *          location: "5 этаж",
 *          remindTime: 10,
 *          description: "Взять бумагу и ручку, не брать бук!"
 *    })
 *
 * @return {Object}
 */
function event(obj) {
    "use strict";


    var remindTime = obj.remindTime || 0;

    if (!isDate(obj.start)) {
        alert("Error! Not event object!");
        return;
    }

    if (!isDate(obj.end)) {
        alert("Error! Not event object!");
        return;
    }

    return {
        "name": obj.name || "(Нет темы)",
        "start": obj.start,
        "end": obj.end,
        "location": obj.location || "",
        "remindTime": remindTime,
        "description": obj.description || "(отсутствует)"
    };
}

function show(events) {
    "use strict";

    return events.name + " начало: " + events.start
        + " конец: " + events.end
        + " место события: "  + events.location + " напомнить за " + events.remindTime + " минут"
        + " описание: " + events.description;
}

function test(obj) {
    "use strict";

    var result = event(obj);
    if (typeof result !== 'undefined') {
        alert(show(result));
    }
}

function runTestsCalendar() {
    "use strict";

    test({});

    test({
        name: "hello",
        start: new Date("2012-10-20 10:00:00")
    });

    test({
        name: "hello",
        start: new Date("2012-10-20 10:00:00"),
        end: new Date("2012-10-20 12:50:00")
    });

    test({
        name: "Пара по веб-технологиям",
        start: new Date("2012-10-20 10:00:00"),
        end: new Date("2012-10-20 12:50:00"),
        location: "5 этаж",
        remindTime: 10,
        description: "Взять бумагу и ручку, не брать бук!"
    });
}