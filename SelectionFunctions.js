
/**
* Прошедшее событие
*
* @param {Object} event Событие
*
* @return {Boolean}
*/
function OldEvent(event) {
    "use strict";
    return event.time.start < new Date().getTime();
}

/**
* Предстоящее событие
*
* @param {Object} event Событие
*
* @return {Boolean}
*/
function NewEvent(event) {
    "use strict";
    return event.time.start >= new Date().getTime();
}

/**
* Событие, в котором участвует человек с именем "name"
*
* @param {Object} event Событие
*
* @return {Boolean}
*/
function EventWithPerson(event) {
    "use strict";
    var name = this.name;
    return event.member.some(function (member) {
        return member === name;
    });
}

/**
* Событие, в котором не участвует человек с именем "name"
*
* @param {Object} event Событие
*
* @return {Boolean}
*/
function EventWithoutPerson(event) {
    "use strict";
    var name = this.name;
    return event.member.every(function (member) {
        return member !== name;
    });
}

/**
* События, которые произойдут через время, указанное в time
*
* @param {Object} event Событие
*
* @return {Boolean}
*/
function LaterTimeEvent(event) {
    "use strict";
    return event.time.start >= this.time;
}

/**
* События, которые произойдут до времени, указанного в time
*
* @param {Object} event Событие
*
* @return {Boolean}
*/
function BeforeTimeEvent(event) {
    "use strict";
    return event.time.start <   this.time;
}

/**
* Сортировка по времени события
*
* @param {Object} first     Событие
* @param {Object} second    Событие
*
* @return {Int}
*/
function SortByDate(first, second) {
    "use strict";
    if (first.time.start < second.time.start) {
        return -1;
    }
    if (first.time.start > second.time.start) {
        return 1;
    }
    return 0;
}

/**
* Сортировка по рейтингу события
*
* @param {Object} first     Событие
* @param {Object} second    Событие
*
* @return {Int}
*/
function SortByRaiting(first, second) {
    "use strict";
    if (first.raiting < second.raiting) {
        return 1;
    }
    if (first.raiting > second.raiting) {
        return -1;
    }
    return 0;
}

/**
* Напечатать событие
*
* @param {Object} event     Событие
*
*/
function PrintEvent(event) {
    "use strict";
    console.log(event.name + " " + event.address + "; Begin in \"" + new Date(event.time.start) + "\". " + event.member.length + " member(s). Raiting: " + event.raiting);
}