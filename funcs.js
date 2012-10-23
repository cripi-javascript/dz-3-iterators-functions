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
           });
}

/**
 * Возвращает предстоящие события, отсортированные по дате начала
 * @param {events} - коллекция объектов типа event
 * @return коллекция объектов типа event
*/
function Coming(events) {
    "use strict";

    return events.filter(function (events) {
                  return events.start > new Date();
                 });
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
                    });
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

    if (isAscending || typeof isAscending === "undefined") {
        return event
               .sortByStartTime(events)
    }
    return events
            .sortByStartTime(events)
            .reverse();
}

/**
 * Возвращает события, отсортированные по рейтингу по  убыв/возрастанию 
 * от с более высоким рейтингом к самому низко приоритетному / наоборот. По умолчанию сортирует в порядке убывания
 * @param {events} - коллекция объектов типа event
 * @param {isAscending} - необязательный параметр - указывает порядок сортировки. 
 * при отсутсвии сортируется по убыванию.
 * @return коллекция объектов типа event
*/
function SortByRaiting(events, isAscending) {
    "use strict";

    if (isAscending || typeof isAscending === "undefined") {
        return event
               .sortByRaiting(events);
    }
    return events
            .sortByRaiting(events)
            .reverse();
}