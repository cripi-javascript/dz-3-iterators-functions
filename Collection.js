/**
 * Коллекции для модели Event.
 * 
 * @constructor
 * @this {EventsCollection}
 * @param {Array} collect_list Список Event классов.
 */
var EventsCollection = function (collect_list) {
    if (Object.prototype.toString.call(collect_list) !== '[object Array]') {
        throw new TypeError("argument must be Array");
    }
    
    this.list = collect_list;
};

/**
 * Фильтрует объекты из коллекции.
 *
 * @param {function} filter_function Функция для фильтрации, this - ссылка на Event, должен вернуть boolean значение (True - значение будет добавлено в отфильтрованную коллекцию).
 * @return {EventsCollection} Новый объект EventsCollection.
 */
EventsCollection.prototype.filter = function (filter_function) {
    if (typeof filter_function !== "function") {
        throw new TypeError("argument must be function");
    }
    
    var buff = [];
    for (var i = 0; i < this.list.length; i++) {
        var event = this.list[i];
        if (filter_function.call(event)) {
            buff.push(event);
        }
    }
    
    return new EventsCollection(buff);
}
    
/**
 * Отфильтровывает события, которые произошли до указанной даты.
 *
 * @return {EventsCollection} Новый объект EventsCollection.
 */
EventsCollection.prototype.start_before = function(date) {
    return this.filter(function () {
        return this.info.start_time < date;
    });
};
    
/**
 * Возвращает количество событий (Event) в коллекции.
 *
 * @return {number} Кол-во событий.
 */
EventsCollection.prototype.count_events = function() {
    return this.list.length;
};
    
/**
 * Отфильтровывает события, которые произошли после указанной даты.
 *
 * @return {EventsCollection} Новый объект EventsCollection.
 */
EventsCollection.prototype.start_after = function(date) {
    return this.filter(function () {
        return this.info.start_time > date;
    });
};


function Collection_tests() {
    var a1 = createNewEvent(222, 333, 'lol');
    var a2 = createNewEvent(223, 333, 'lol2');
    var a3 = createNewEvent(100, 500, 'lol2');
    var events_data = [a1, a2, a3];
    var events_callect = new EventsCollection(events_data);
    
    // t1
    var events_before_date = events_callect.start_before(223);
    console.log(events_before_date.list.length == 2);
    
    // t2
    console.log(events_before_date.count_events() == 2);
    
    // t3
    var events_after_date = events_callect.start_after(222);
    console.log(events_after_date.count_events() == 1);
    
    // t4 combine methods
    var some_filtered_event = events_callect.start_before(223).start_after(100);
    console.log(some_filtered_event.count_events() == 1);
}