var participants = [["Саша", 891288734], ["Аня", 987462974], ["Паша", 987462974], ["Катя", 987462974], ["Даша", 987462974]];
var place = ["Кафе", "Актовый зал", "Луначарского 92, кб.31", "дом пионеров"];
var reminder = ["За день", "За неделю", "За час", "За 4 часа"];
var n = ["Совещание", "Встреча", "Конференция", "Праздник", "Дела"];
var type = ["Работа", "Отдых", "Дела"];
var party = ["Участвую", "Не участвую"];
var Work = {"name": "Совещание",
           "start": new Date('2012-10-10 14:48:00'),
           "end": new Date('2012-10-10 15:48:00'),
           "participants": [["Саша", 891288734], ["Аня", 987462974], ["Паша", 987462974]],
           "organizer": ["Паша", 8588264934],
           "place": "Луначарского 92, кб.31",
           "info": "Будут обсуждаться вопросы...",
           "reminder": "За день до встречи",
           "type": "Работа",
           "party": "участвую" };
var NewYear = {"name": "Праздник",
          "start": new Date('2012-12-10 14:48:00'),
           "end": new Date('2012-12-10 15:48:00'),
           "participants": [["Саша", 891288734], ["Катя", 987462974], ["Даша", 987462974]],
           "organizer": ["Оля", 8588264934],
           "place": "Луначарского 92, кб.31",
           "info": "Всем быть в костюмах...",
           "reminder": "За неделю",
           "type": "Отдых",
           "party": "участвую" };
var study = {"name": "Конференция",
          "start": new Date('2011-11-10 14:48:00'),
           "end": new Date('2011-11-10 15:48:00'),
           "participants": [["Денис", 891288734], ["Аня", 987462974], ["Паша", 987462974]],
           "organizer": ["Денис", 8588264934],
           "place": "Луначарского 92, кб.31",
           "info": "Анализ биологических последовательностей",
           "reminder": "За день",
           "type": "Дела",
           "party": "участвую" };
var conf = {"name": "Конференция",
           "start": new Date('2011-11-08 14:48:00'),
           "end": new Date('2011-11-08 15:48:00'),
           "participants": [["Саша", 891288734], ["Аня", 987462974], ["Паша", 987462974]],
           "organizer": ["Денис", 8588264934],
           "place": "Луначарского 92, кб.31",
           "info": "Матроиды и графы",
           "reminder": "За день",
           "type": "Дела",
           "party": "не участвую" };
var Sport = {"name": "Дополнительные тренировки",
           "start": new Date('2011-09-10 14:48:00'),
           "end": new Date('2011-11-10 15:48:00'),
           "participants": [["Саша", 891288734], ["Аня", 987462974]],
           "organizer": ["Паша", 8588264934],
           "place": "Луначарского 92, кб.31",
           "info": "Ура! У вас есть возможность посетить дополнительные тренировки",
           "reminder": "За час",
           "type": "Отдых",
           "party": "участвую" };
var collection = [Work];
collection.push(Sport, conf, study, NewYear);
var i;
for (i = 0; i < 20; i = i + 1) {
    var test = {"name": n[Math.floor(Math.random() * n.length)],
               "organizer": participants[Math.floor(Math.random() * participants.length)],
               "place": place[Math.floor(Math.random() * place.length)],
               "reminder": reminder[Math.floor(Math.random() * reminder.length)],
               "type": type[Math.floor(Math.random() * type.length)],
               "party": party[Math.floor(Math.random() * party.length)]};
    collection.push(test);
}

