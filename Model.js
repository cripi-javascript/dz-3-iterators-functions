
/**
 * Модель для класса Event.
 * 
 * @constructor
 * @param {Object} info Обект, описывающий общую информацию о мероприятии (место проведения, название, описание, временные рамки).
 */
var Event = function (info) {
    var def = {
        title: "event"
    };
    
    this.info = _.extend(def, info);
    
    if (!this.info.start_time || !this.info.end_time) {
        throw "miss required fields";
    }
    
    if (this.info.start_time > this.info.end_time) {
        throw "starat_time more then end_time";
    }
    
};

/**
 * Создает объект Event
 *
 * @param {Number|Date} start             Начало события
 * @param {Number|Date} end               Конец события
 * @param {String}      [name="Событие"]  Имя события
 *
 * @example
 *    Event(new Date('2011-10-10T14:48:00'),
 *          new Date('2011-10-10T15:48:00'),
 *          "Совещание")
 *
 * @return {Object}
 */
function createNewEvent(start_at, end_at, name) {
    var info = {
        start_time: start_at,
        end_time: end_at,
        name: name
    };
    
    return new Event(info);
}


function Model_tests() {
    var a = createNewEvent(222, 333, 'lol');
}
        