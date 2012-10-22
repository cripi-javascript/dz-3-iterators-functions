/*global module: true*/
/*global test: true*/
/*global ok: true*/
/*global equal: true*/
/*global initTestBase: true*/
module("test simple SQL");
test('pastEventBase()', function () {
    "use strict";
    var testBase = initTestBase(), RealDate = Date, pastEventbase;
    Date = function () {
        return new RealDate("September 13, 2012 12:00:00");
    };
    pastEventbase = testBase.pastEventBase();
    equal(pastEventbase.events.length, 2);
    ok(pastEventbase.events.some(function (event) {
        return event.id === 15;
    }));
    ok(pastEventbase.events.some(function (event) {
        return event.id === 17;
    }));
    Date = RealDate;
});
test('nextEventBase()', function () {
    "use strict";
    var testBase = initTestBase(), RealDate = Date, nextEventBase;
    Date =  function () {
        return new RealDate("November 1, 2012 12:00:00");
    };
    nextEventBase = testBase.nextEventBase();
    equal(nextEventBase.events.length, 2);
    ok(nextEventBase.events.some(function (event) {
        return event.id === 19;
    }));
    ok(nextEventBase.events.some(function (event) {
        return event.id === 20;
    }));
    Date = RealDate;
});
test('nowEventBase()', function () {
    "use strict";
    var testBase = initTestBase(), RealDate = Date, nowEventbase;
    Date =  function () {
        return new RealDate("September 13, 2012 12:00:00");
    };
    nowEventbase = testBase.nowEventBase();
    equal(nowEventbase.events.length, 1);
    ok(nowEventbase.events.some(function (event) {
        return event.id === 16;
    }));
    Date = RealDate;
});
test('withFriend("Alexander.Mangin")', function () {
    "use strict";
    var testBase = initTestBase(), eventWithFriendBase = testBase.withFriend({name: "Alexander.Mangin"});
    equal(eventWithFriendBase.events.length, 1);
    ok(eventWithFriendBase.events.some(function (event) {
        return event.id === 16;
    }));
});
test('getEventAfterMonth()', function () {
    "use strict";
    var testBase = initTestBase(), RealDate = Date, eventAfterMonthbase;
    Date =  function (param1, param2, param3) {
        if (param1 && param2 && param3) {
            return new RealDate(param1, param2, param3);
        }
        return new RealDate("October 1, 2012 12:00:00");
    };
    eventAfterMonthbase = testBase.getEventAfterMonth();
    equal(eventAfterMonthbase.events.length, 2);
    ok(eventAfterMonthbase.events.some(function (event) {
        return event.id === 19;
    }));
    ok(eventAfterMonthbase.events.some(function (event) {
        return event.id === 20;
    }));
    Date = RealDate;
});
test('getEventAfterDay()', function () {
    "use strict";
    var testBase = initTestBase(), RealDate = Date, eventAfterDaybase;
    Date =  function (param1, param2, param3) {
        if (param1 && param2 && param3) {
            return new RealDate(param1, param2, param3);
        }
        return new RealDate("November 1, 2012 12:00:00");
    };
    eventAfterDaybase = testBase.getEventAfterDay();
    equal(eventAfterDaybase.events.length, 2);
    ok(eventAfterDaybase.events.some(function (event) {
        return event.id === 19;
    }));
    ok(eventAfterDaybase.events.some(function (event) {
        return event.id === 20;
    }));
    Date = RealDate;
});
test('getEventAfterWeek()', function () {
    "use strict";
    var testBase = initTestBase(), RealDate = Date, eventAfterWeekbase;
    Date =  function (param1) {
        if (param1) {
            return new RealDate(param1);
        }
        return new RealDate("October 28, 2012 12:00:00");
    };
    eventAfterWeekbase = testBase.getEventAfterWeek();
    equal(eventAfterWeekbase.events.length, 1);
    ok(eventAfterWeekbase.events.some(function (event) {
        return event.id === 19;
    }));
    Date = RealDate;
});
test('getEventFromPeriod(from,to)', function () {
    "use strict";
    var testBase = initTestBase(), result;
    result = testBase.getEventFromPeriod(new Date("September 12 2012 00:00:00"), new Date("September 14 2012 00:00:00"));
    equal(result.events.length, 1);
    ok(result.events.some(function (event) {
        return event.id === 16;
    }));
});

test('sortByStar()', function () {
    "use strict";
    var testBase = initTestBase(), sortByStarsEventbase = testBase.sortByStars();
    equal(testBase.events.length, sortByStarsEventbase.events.length);
    ok(sortByStarsEventbase.events[0].stars === 5);
    ok(sortByStarsEventbase.events[1].stars === 5);
});
test('sortByDate()', function () {
    "use strict";
    var testBase = initTestBase(), sortByDateEventbase = testBase.sortByDate();
    equal(testBase.events.length, sortByDateEventbase.events.length);
    ok(sortByDateEventbase.events[0].id === 15);
    ok(sortByDateEventbase.events[1].id === 17);
});
function initTestBase() {
    "use strict";
    var bestOfSweetsDateStart = new Date("October 10, 2012 00:00:00"), 
    bestOfSweetsDateFinish = new Date("October 14, 2012 23:59:59"), 
    bestOfSweets = new Event(bestOfSweetsDateStart, bestOfSweetsDateFinish, "BestOfSweets", 1),
    сirioDeNazareDateStart = new Date("October 8, 2012 00:00:00"),
    сirioDeNazareDateFinish = new Date("October 15, 2012 23:59:59"), 
    сirioDeNazare = new Event(сirioDeNazareDateStart, сirioDeNazareDateFinish, "Cirio De Nazare", 2),
    vinesDayDateStart = new Date("October 4, 2012 00:00:00"),
    vinesDayDateFinish = new Date("October 6, 2012 23:59:59"), 
    vinesDay = new Event(vinesDayDateStart, vinesDayDateFinish, "День вина", 3),
    theBlackCountryDateStart = new Date("October 31, 2012 00:00:00"),
    theBlackCountryDateFinish = new Date("November 1, 2012 23:59:59"), 
    theBlackCountry = new Event(theBlackCountryDateStart, theBlackCountryDateFinish, 'Вкус "Черной страны"', 4),
    oktoberFestDateStart = new Date("September 24, 2012 00:00:00"),
    oktoberFestDateFinish = new Date("October 8, 2012 23:59:59"), 
    oktoberFest = new Event(oktoberFestDateStart, oktoberFestDateFinish, 'OktoberFest', 5),
    francfurtBookDateStart = new Date("October 15, 2012 00:00:00"),
    francfurtBookDateFinish = new Date("October 20, 2012 23:59:59"), 
    francfurtBook = new Event(francfurtBookDateStart, francfurtBookDateFinish, 'Франкфуртская международная книжная ярмарка', 6),
    aidaDateStart = new Date("October 12, 2012 00:00:00"),
    aidaDateFinish = new Date("October 27, 2012 23:59:59"),
    aida = new Event(aidaDateStart, aidaDateFinish, '"Аида" у великих пирамид, Гиза', 7),
    paradeOfLoveDateStart = new Date("October 3, 2012 14:00:00"),
    paradeOfLoveDateFinish = new Date("October 3, 2012 22:00:00"), 
    paradeOfLove = new Event(aidaDateStart, aidaDateFinish, 'Парад любви', 8),
    sukkotDateStart = new Date("October 3, 2012 00:00:00"),
    sukkotDateFinish = new Date("October 3, 2012 23:59:59"), 
    sukkot = new Event(aidaDateStart, aidaDateFinish, 'Парад любви', 9),
    fishFestivalDateStart = new Date("October 15, 2012 00:00:00"),
    fishFestivalDateFinish = new Date("October 15, 2012 23:59:59"), 
    fishFestival = new Event(fishFestivalDateStart, fishFestivalDateStart, 'Фестиваль рыбы', 10),
    chocolateFestivalDateStart = new Date("October 19, 2012 00:00:00"),
    chocolateFestivalDateFinish = new Date("October 28, 2012 23:59:59"), 
    chocolateFestival = new Event(fishFestivalDateStart, fishFestivalDateStart, 'Фестиваль "Еврошоколад"', 11),
    digitalArtFestivalDateStart = new Date("September 19, 2012 00:00:00"),
    digitalArtFestivalDateFinish = new Date("September 28, 2012 23:59:59"), 
    digitalArtFestival = new Event(digitalArtFestivalDateStart, digitalArtFestivalDateFinish, 'Фестиваль цифрового исскуства', 12),
    fatherDaysDateStart = new Date("September 18, 2012 00:00:00"),
    fatherDaysDateFinish = new Date("September 19, 2012 23:59:59"), 
    fatherDays = new Event(fatherDaysDateStart, fatherDaysDateFinish, 'Дни наследия', 13),
    bearWeekendDateStart = new Date("September 18, 2012 00:00:00"),
    bearWeekendDateFinish = new Date("September 19, 2012 23:59:59"), 
    bearWeekend = new Event(bearWeekendDateStart, bearWeekendDateFinish, 'Bear Weekends', 14),
    teaFestivalDateStart = new Date("September 1, 2012 00:00:00"),
    teaFestivalDateFinish = new Date("September 1, 2012 23:59:59"), 
    teaFestival = new Event(teaFestivalDateStart, teaFestivalDateFinish, 'Фестиваль Чая', 15),
    programmerDayDateStart = new Date("September 13, 2012 00:00:00"),
    programmerDayDateFinish = new Date("September 13, 2012 23:59:59"),     
    programmerDay = new Event(programmerDayDateStart, programmerDayDateFinish, 'День программмиста', 16),    
    knowDayDateStart = new Date("September 1, 2012 00:00:01"),
    knowDayDateDateFinish = new Date("September 1, 2012 23:59:59"), 
    knowDayDate = new Event(knowDayDateStart, knowDayDateDateFinish, 'День знаний', 17),
    teacherDayDateStart = new Date("October 5, 2012 00:00:00"),
    teacherDayDateFinish = new Date("October 5, 2012 23:59:59"), 
    teacherDay = new Event(teacherDayDateStart, teacherDayDateFinish, 'День учителя', 18),
    securiteDayDateStart = new Date("November 5, 2012 00:00:00"),
    securiteDayDateFinish = new Date("November 5, 2012 23:59:59"), 
    securiteDay = new Event(securiteDayDateStart, securiteDayDateFinish, 'День защиты информации', 19),
    nationUnitionDateStart = new Date("November 4, 2012 00:00:00"),
    nationUnitionDateDateFinish = new Date("November 4, 2012 23:59:59"), 
    nationUnition = new Event(nationUnitionDateStart, nationUnitionDateDateFinish, 'День нароного единства', 20);
    bestOfSweets.setLocation({gps :{x : 15, y : 189, name : "Австрия, Бургенланд - Айзенштадте, Фестиваль сладких вин"}});
    bestOfSweets.leaveMark(2);
    сirioDeNazare.setLocation({gps :{x : 45, y : 133, name : "Бразилия, Белен, Фестиваль Cirio De Nazare"}});
    сirioDeNazare.leaveMark(1);
    vinesDay.setLocation({gps :{x : 45, y : 133, name : "Венгрия, Мор, День вина"}});
    vinesDay.leaveMark(5);
    theBlackCountry.setLocation({gps :{x : 45, y : 133, name : "Великобритания, Дадли, Вкус 'Черной страны'"}});
    theBlackCountry.leaveMark(3);
    oktoberFest.setLocation({gps :{x : 45, y : 133, name : "Германия, Мюнхен, OktoberFest"}});
    oktoberFest.leaveMark(1);
    programmerDay.parties = [{name: "Pupkin"}, {name: "Alex.IDontKnow"}];
    francfurtBook.setLocation({gps :{x : 45, y : 133, name : "Германия, Frankfurt, Франкфуртская международная книжная ярмарка"}});
    francfurtBook.leaveMark(1);
    aida.setLocation({gps :{x : 45, y : 133, name : "Египет, ?, Аида у великих пирамид, Гиза"}});
    aida.leaveMark(3);
    paradeOfLove.setLocation({gps :{x : 45, y : 133, name : "Израль, Тель-Авиве, Парад любви"}});
    paradeOfLove.leaveMark(1);
    sukkot.setLocation({gps :{x : 45, y : 133, name : "Израль, Иерусалиме, праздник Суккот"}});
    sukkot.leaveMark(4);
    fishFestival.setLocation({gps :{x : 45, y : 133, name : "Испания, О Грове, Фестиваль рыбы"}});
    fishFestival.leaveMark(5);
    chocolateFestival.setLocation({gps :{x : 45, y : 133, name : 'Италия, Перуджа, Фестиваль "Еврошоколад"'}});
    chocolateFestival.leaveMark(1);
    digitalArtFestival.setLocation({gps :{x : 45, y : 133, name : "Австрия, Линц, Фестиваль Цифрового Исскуства"}});
    digitalArtFestival.leaveMark(3);
    fatherDays.setLocation({gps :{x : 45, y : 133, name : "Бельгия, Антверпене, Дни наследия"}});
    fatherDays.leaveMark(4);
    bearWeekend.setLocation({gps :{x : 45, y : 133, name : "Бельгия, Брюссель, Bear Weekends"}});
    bearWeekend.leaveMark(2);
    teaFestival.setLocation({gps :{x : 45, y : 133, name : "Россия, Москва, Фестиваль чая"}});
    programmerDay.setLocation({gps :{x : 45, y : 133, name : "Вселенная, Земля, День программиста"}});
    programmerDay.parties = [{name: "Alexander.Mangin"}, {name: "Alex.IDontKnow"}];
    knowDayDate.setLocation({gps :{x : 45, y : 133, name : "Вселенная, Земля, День знаний"}});
    teacherDay.setLocation({gps :{x : 45, y : 133, name : "Вселенная, Земля, День учителя"}});
    securiteDay.setLocation({gps :{x : 45, y : 133, name : "Вселенная, Земля, День защиты информации"}});
    nationUnition.setLocation({gps :{x : 45, y : 133, name : "Вселенная, Земля, День народного единства"}});
    return new BaseEvent([bestOfSweets, сirioDeNazare, vinesDay, theBlackCountry, oktoberFest, francfurtBook
    , aida, paradeOfLove, sukkot, fishFestival, chocolateFestival, digitalArtFestival, fatherDays,
    bearWeekend, teaFestival, programmerDay, knowDayDate, teacherDay, securiteDay, nationUnition]);
}