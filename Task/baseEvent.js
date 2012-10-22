/**
 * Shell for "sql" operations with Array Events.
 *
 * @constructor
 * @method {pastEventBase} - Создает BaseEvent с пропущенными событиями
 * @method {pastEventBase} - Создает BaseEvent с грядущими событиями
 * @method {nowEventBase}  -  Создает BaseEvent с текущими событиями
 * @method {withFriend}  -  Создает BaseEvent с событиями, в которых принимал участие определенный человек
 * @method {getEventAfterDay}  -  Создает BaseEvent с грядущими событиями, которые наступят не раньше, чем через день
 * @method {getEventAfterWeek}  -  Создает BaseEvent с грядущими событиями, которые наступят не раньше, чем через неделю
 * @method {getEventAfterMonth}  -  Создает BaseEvent с грядущими событиями, которые наступят не раньше, чем через месяц
 * @method {getEventFromPeriod}  -  Создает BaseEvent с событиями, которые лежат между двумы датами [fromDate, toDate]
 * @method {getEventAfterMonth}  -  Создает BaseEvent с теми же событиями, но отсортированными по убыванию звезд
 * @method {getEventAfterMonth}  -  Создает BaseEvent с теми же событиями, но отсортироваными по возрастанию даты
 * @example - Смотри файл с тестами...
 */
function BaseEvent(events) {
    "use strict";
    this.events = events;
    //пропущенные, текущие, будущие события 
    this.pastEventBase = function () {
        var currentDate = new Date(), needs;
        needs = this.events.filter(function (event) {
            return event.end.getTime() < currentDate.getTime();
        });
        return new BaseEvent(needs);
    };
    this.nextEventBase = function () {
        var currentDate = new Date(), needs;
        needs = this.events.filter(function (event) {
            return event.start.getTime() > currentDate.getTime();
        });
        return new BaseEvent(needs);
    };
    this.nowEventBase = function () {
        var currentDate = new Date(), needs;
        needs = this.events.filter(function (event) {
            return (event.start.getTime() <= currentDate.getTime() && event.end.getTime() >= currentDate.getTime());
        });
        return new BaseEvent(needs);
    };
    //событие с участием друга (Друг отношение рефлексивное ^^)
    this.withFriend = function (myFriend) {
        var needs = this.events.filter(function (event) {
            return event.parties.some(function (party) {
                return party.name === myFriend.name;
            });
        });
        return new BaseEvent(needs);
    };
    // События через период времени день, неделя, месяц
    this.getEventAfterWeek = function () {
        var currentDate = new Date(), needs;
        currentDate = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
        needs = this.events.filter(function (event) {
            return event.start.getTime() > currentDate.getTime();
        });
        return new BaseEvent(needs);
    };
    this.getEventAfterDay = function () {
        var currentDate = new Date(), needs;
        currentDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
        needs = this.events.filter(function (event) {
            return event.start.getTime() > currentDate.getTime();
        });
        return new BaseEvent(needs);
    };
    this.getEventAfterMonth = function () {
        var currentDate = new Date(), needs;
        if (currentDate.getMonth() === 11) {
            currentDate = new Date(currentDate.getFullYear() + 1, 0, currentDate.getDay());
        } else {
            currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDay());
        }
        needs = this.events.filter(function (event) {
            return event.start.getTime() > currentDate.getTime();
        });
        return new BaseEvent(needs);
    };
    // События за период
    this.getEventFromPeriod = function (fromDate, toDate) {
        var needs = this.events.filter(function (event) {
            return (event.start.getTime() > fromDate.getTime() && event.end.getTime() < toDate.getTime());
        });
        return new BaseEvent(needs);
    };
    this.sortByStars = function () {
        var events = this.events.slice(0), comparer;
        comparer = function compare(a, b) {
            if (a.stars > b.stars) {
                return -1;
            }
            if (a.stars < b.stars) {
                return 1;
            }
            return 0;
        };
        events.sort(comparer);
        return new BaseEvent(events);
    };
    this.sortByDate = function () {
        var events = this.events.slice(0), comparer;
        comparer = function compare(a, b) {
            if (a.start.getTime() < b.start.getTime()) {
                return -1;
            }
            if (a.start.getTime() > b.start.getTime()) {
                return 1;
            }
            return 0;
        };
        events.sort(comparer);
        return new BaseEvent(events);
    };
}