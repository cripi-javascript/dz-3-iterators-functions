function GetDates(collections) {
    return collections.map(function (events) {
        return events.start;
    })
}

function sortfunction(a, b) {
    "use strict";
    return a - b;
}

function Past(events) {
    "use strict";

    var results = events
    .filter(function (events) {
        return events.start < new Date();
    });
    
    return GetDates(results);
}

function Coming(events) {
    "use strict";

    var results = events
    .filter(function (events) {
        return events.start > new Date();
    });

    return GetDates(results);
}

function ComeThrough(events, days) {
    "use strict";

    var now = new Date();
    now.setDate(now.getDate() + days);

    return Coming(events)
    .filter(function (dates) {
        return dates < now;
    });
}

function SortByTime(events, isAscending) {
    "use strict";

    var results = GetDates(events);

    if (!isAscending) {
        return results.reverse();
    }
    return results;
}