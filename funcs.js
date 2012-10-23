/**
 * Функция для стандартной сортировки js
 * Сортирует коллекцию объектов типа Event на основании поля start
 * @param {a, b} два события для сравнения 
 * @return возвращает разницу
*/
function sortByTime(a, b) {
    "use strict";
    return a.start - b.start;
}

/**
 * Возвращает прошедшие события, отсортированные по дате начала
 * @param {events} - коллекция объектов типа event
 * @return коллекция объектов типа event
*/
function Past(events) {
    "use strict";

    return events
            .filter(function (events) {
            return events.start < new Date();
        })
            .sort(sortByTime);
}

/**
 * Возвращает предстоящие события, отсортированные по дате начала
 * @param {events} - коллекция объектов типа event
 * @return коллекция объектов типа event
*/
function Coming(events) {
    "use strict";

    return events
            .filter(function (events) {
            return events.start > new Date();
        })
        .sort(sortByTime);
}

/**
 * Возвращает события, которые произойдут через опр переиод времени,отсортированные по дате начала
 * @param {events} - коллекция объектов типа event
 * @param {days} - период (в днях) времени
 * @return коллекция объектов типа event
*/
function ComeThrough(events, days) {
    "use strict";

    var now = new Date();
    now.setDate(now.getDate() + days);

    return new Coming(events)
         .filter(function (events) {
            return events.start < now;
        })
        .sort(sortByTime);
}

/**
 * Возвращает события, отсортированные по дате начала по  возр/убыв 
 * от старых к новым / наоборот. По умолчанию сортирует в порядке возрастания
 * @param {events} - коллекция объектов типа event
 * @param {isAscending} - необязательный параметр - указывает порядок сортировки. 
 * при отсутсвии сортируется по возрастанию.
 * @return коллекция объектов типа event
*/
function SortByTime(events, isAscending) {
    "use strict";

    if (!isAscending) {
        return events
               .sort(sortByTime)
               .reverse();
    }
    return events.sort(sortByTime);
}