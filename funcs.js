function GetDates(collections) {
    "use strict";

    return collections.map(function (events) {
        return events.start;
    });
}

function sortByTime(a, b) {
    "use strict";
    return a.start - b.start;
}

function Past(events) {
    "use strict";

    return events
            .filter(function (events) {
            return events.start < new Date();
        })
            .sort(sortByTime);
}

function Coming(events) {
    "use strict";

    return events
            .filter(function (events) {
            return events.start > new Date();
        })
        .sort(sortByTime);
}

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

function SortByTime(events, isAscending) {
    "use strict";

    if (!isAscending) {
        return events
               .sort(sortByTime)
               .reverse();
    }
    return events.sort(sortByTime);
}