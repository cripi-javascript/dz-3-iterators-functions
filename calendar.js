/**
 * Created with PyCharm.
 * User: meded
 * Date: 10/13/12
 * Time: 12:53 PM
 * To change this template use File | Settings | File Templates.
 */


/**
 * Описания собития
 * @param {Object}          eventOptions                      Обекс с параметарми
 * @param {Number | Date}   eventOptions.startEvent           Начало собития
 * @param {Number | Date}   eventOptions.endEvent             Конец события
 * @param {string}          eventOptions.name                 Заголовок
 * @param {string}          eventOptions.description          Описание
 * @param {string}          eventOptions.tegs                 Теги
 * @param {string}          eventOptions.place                Адрес собития
 * @param {string}          eventOptions.coordinates          Кардинаты собития
 * @param {string}          eventOptions.colorFon             Цвети стикира
 * @param {boolean}         eventOptions.reminders            Индекатор уведомлений
 * @param {Number | Date}   eventOptions.reminderTimeBefore   Время уведомления
 * @param {string}          eventOptions.friends              сылки на друзей из соц сетей
 *
 * @return {Object}
 */
function Event(eventOptions) {
    'use strict';
    /**
     * проверка и приведения к дате
     * @param time {Number | Date} Дата или стока
     * @return {Date}              Вернет в формате даты
     */
    function isData(time){
        if ('string' === typeof(time)){
            var timeToData = new Date(time)
            if ('Invalid Date' === timeToData){
                new TypeError("не верный формат даты");
            } else{
                return timeToData
            }
        } else{
            return time
        }
}
    eventOptions.startEvent = isData(eventOptions.startEvent);
    eventOptions.endEvent = isData(eventOptions.endEvent);
    if (eventOptions.startEvent > eventOptions.endEvent) {
        var startEvent = eventOptions.startEvent;
        eventOptions.startEvent = eventOptions.endEvent;
        eventOptions.endEvent = startEvent;
    }

    eventOptions.startEvent = eventOptions.startEvent || new Date;
    eventOptions.endEvent = eventOptions.endEvent || new Date;
    eventOptions.name = eventOptions.name || "Событие";
    eventOptions.description = eventOptions.description || "";
    eventOptions.tegs = tegs.split(",") || [];

    /**
     * преоброзумем адрес в точные кардинаты
     * @param place {string}    Адрес собыитя
     * @return {*}              Кардинаты провдения собития
     */
    function findCoordinates(place) {
        //...
        return coordinates;
    }
    if (eventOptions.coordinates === "" && eventOptions.place) {
        eventOptions.coordinates = findCoordinates(eventOptions.place);
    }
    eventOptions.place = +place || "";
    eventOptions.coordinates = +coordinates || "";


    var regColorcode = /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/;
    if (regColorcode.test(eventOptions.color) !== false) {
        eventOptions.color = "";
        new TypeError("все плохо это не цвет");
    }
    eventOptions.color = color || "#fff";
    eventOptions.reminders = reminders || false;
    eventOptions.reminderTimeBeforeEvent = isData(eventOptions.reminderTimeBeforeEvent) || eventOptions.startEvent;
    eventOptions.friends = friends.split(",") || undefined;
    return eventOptions;
};

