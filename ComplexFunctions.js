/**
* Все предстоящие события с моим участием отсортированные по рейтигу
*/
function NewEventWithMeSortByRaiting() {
    "use strict";
    events
        .filter(NewEvent)
        .filter(EventWithPerson, {name: "я"})
        .sort(SortByRaiting)
        .forEach(PrintEvent);
}

/**
* Все события, которые произойдут на этой неделе, отсортированые по рейтингу
*/
function ThisWeekSortedByRaiting() {
    "use strict";
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    var timeToEndOfWeek = (7 - now.getDay()) * 24 * 60 * 60 * 1000;
    var endOfWeek = new Date(today + timeToEndOfWeek);
    events
        .filter(NewEvent)
        .filter(BeforeTimeEvent, { time: endOfWeek })
        .sort(SortByRaiting)
        .forEach(PrintEvent);
};

/**
* Выбрать ближайшее (по времени) событие без моего участия
*/
function FirstEventWithoutMe() {
    "use strict";
    var filteredEvents = events
        .filter(NewEvent)
        .filter(EventWithoutPerson, { name: "я" })
        .sort(SortByDate);
    if (filteredEvents.length != 0)
        PrintEvent(filteredEvents[0]);
};