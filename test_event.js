/**
 * Возвращает объект Event
 * @param {String}      [name="Встреча"]                            Имя события 
 * @param {Number|Date} start                                       Начало события
 * @param {Number|Date} end                                         Конец события
 * @param {Object}      participants                                Список участников и их контакты
 * @param {Object}      organizer                                   Организатор и его контактная информация             
 * @param {String}      place                                       Место встречи
 * @param {String}      info                                        Дополнительная информация о встрече
 * @param {String}      reminder ["За день до встречи", "за час"]   Дата, когда напомнить о встрече
 * @param {String}      type["Работа", "Отдых", "Дела"]             Тип встречи, пользователю будет предложено выбрать из списка
 * @param {String}      party ["участвую", "не участвую"]           Подтверждение участия в событии	
 * @example
 *     Event("Совещание",
 *          new Date('2011-10-10T14:48:00'),
 *          new Date('2011-10-10T15:48:00'),
 *          [["Саша", 891288734], ["Аня", 987462974], ["Паша", 987462974]],
 *          ["Паша", 8588264934],
 *          "Луначарского 92, кб.31",
 *          "Будут обсуждаться вопросы...",
 *          "За день до встречи",
 *          "Работа",
 *          "участвую"
 *          )
 *
 * @return {Object}
 *
 * function FilterToDate(collection, flag)  возвращает предстоящие или прощедшие события в зависимости от значения flag
 * function FilterToParty(collection, flag) возвращает события, в которых я принимаю/ не принимаю участие в зависимости от значения flag
 * function SortToNumberParticipants(collection) сортирует встречи по количеству участников
 * function SortToDate(collection) сортирует встречи по дате 
 */
/*jslint browser: true, devel: true */
function Event(name, start, end, participants, organizer, place, info, reminder, type, party) {
    "use strict";
    if (typeof start === "undefined") {
        throw new TypeError("should be date");
    }
    if (typeof start === "Date") {
	       start = start.toString();
				}
    if (typeof end === "Date") {
	       end = end.toString();
    }
    return {
        "name": name || "Встреча",
        "start": start,
        "end": end,
        "participants": participants || {},
        "organizer": organizer || {},
        "place": place || {},
        "info": info || {},
        "reminder": reminder || "За день до встречи",
        "type": type || "Работа",
        "party": party || "участвую"
    };
}
var participants = [["Саша", 891288734], ["Аня", 987462974], ["Паша", 987462974], ["Катя", 987462974], ["Даша", 987462974]];
var place = ["Кафе", "Актовый зал", "Луначарского 92, кб.31", "дом пионеров"];
var reminder = ["За день", "За неделю", "За час", "За 4 часа"];
var n = ["Совещание", "Встреча", "Конференция", "Праздник", "Дела"];
var type = ["Работа", "Отдых", "Дела"];
var party = ["участвую", "не участвую"];
var Work = new Event("Совещание",
           new Date('2012-10-10 14:48:00'),
           new Date('2012-10-10 15:48:00'),
           [["Саша", 891288734], ["Аня", 987462974], ["Паша", 987462974]],
           ["Паша", 8588264934],
           "Луначарского 92, кб.31",
           "Будут обсуждаться вопросы...",
           "За день до встречи",
           "участвую");
var NewYear = new Event("Праздник",
           new Date('2012-12-10 14:48:00'),
           new Date('2012-12-10 15:48:00'),
           [["Саша", 891288734], ["Катя", 987462974], ["Даша", 987462974], ["Оля", 8588264934], ["Настя", 8588264934]],
           ["Оля", 8588264934],
           "Луначарского 92, кб.31",
           "Всем быть в костюмах...",
           "За неделю",
           "Отдых",
           "участвую");
var study = new Event("Конференция",
          new Date('2012-11-24 14:48:00'),
          new Date('2012-11-24 15:48:00'),
          [["Денис", 891288734], ["Аня", 987462974], ["Паша", 987462974]],
          ["Денис", 8588264934],
          "Луначарского 92, кб.31",
          "Анализ биологических последовательностей",
          "Дела",
          "участвую");
var conf = new Event("Конференция",
           new Date('2012-12-08 14:48:00'),
           new Date('2012-12-08 15:48:00'),
           [["Саша", 891288734], ["Аня", 987462974], ["Паша", 987462974]],
           ["Денис", 8588264934],
           "Луначарского 92, кб.31",
           "Матроиды и графы",
           "За день",
           "Дела",
           "не участвую");
var Sport = new Event("Дополнительные тренировки",
           new Date('2011-09-10 14:48:00'),
           new Date('2011-11-10 15:48:00'),
           [["Аня", 987462974]],
           ["Катя", 8588264934],
           "Луначарского 92, кб.31",
           "Ура! У вас есть возможность посетить дополнительные тренировки",
           "За час",
           "Отдых",
           "участвую");
var collection = [Work];
collection.push(Sport, conf, study, NewYear);
/*var i;
for (i = 0; i < 5; i = i + 1) {
    var test = new Event (n[Math.floor(Math.random() * n.length)],
               participants[Math.floor(Math.random() * participants.length)],
               place[Math.floor(Math.random() * place.length)],
               reminder[Math.floor(Math.random() * reminder.length)],
               type[Math.floor(Math.random() * type.length)],
               party[Math.floor(Math.random() * party.length)]);
    collection.push(test);
}
*/
function FilterToDate(collection, flag) {
    "use strict";
    var result;
    if (flag === -1) {
        result = collection.filter(function (collection) {
            return collection.start < new Date();
		});
	} else {
        result = collection.filter(function (collection) {
	        return collection.start >= new Date();
        });
    }
    return result;
}
console.log('Прошедшие события:', new FilterToDate(collection, -1));
console.log('Предстоящие события:', new FilterToDate(collection, 1));
function FilterToParty(collection, flag) {
    "use strict";
    var result;
    if (flag === -1) {
        result = collection.filter(function (collection) {
            return collection.party === "не участвую";
	    });
    } else {
        result = collection.filter(function (collection) {
	        return collection.party === "участвую";
        });
    }
    return result;
}
console.log('Я не участвую во встречах:', new FilterToParty(collection, -1));
console.log('Я участвую во встречах', new FilterToParty(collection, 1));
function SortToNumberParticipants(collection) {
    "use strict";
    collection.sort(function (a, b) {
        return a.participants.length > b.participants.length ? 1 : -1;
    });
    return collection;
}
console.log('Встречи, отсортированные по количеству участников:', new SortToNumberParticipants(collection));
function SortToDate(collection) {
    "use strict";
    collection.sort(function (a, b) {
        return a.start > b.start ? 1 : -1;
    });
    return collection;
}
console.log('Встречи, отсортированные по дате:', new SortToDate(collection));
console.log('Выбрать все предстоящие события с моим участием отсортированные по числу участников:', new SortToNumberParticipants(new FilterToParty(new FilterToDate(collection, 1), 1)));
