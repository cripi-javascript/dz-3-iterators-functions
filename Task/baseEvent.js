function BaseEvent()
{
    var bestOfSweetsDateStart = new Date("October 10, 2012 00:00:00"),
    bestOfSweetsDateFinish = new Date("October 14, 2012 23:59:59"), 
    bestOfSweets = new Event(bestOfSweetsDateStart, bestOfSweetsDateFinish, "BestOfSweets")],
    сirioDeNazareDateStart = new Date("October 8, 2012 00:00:00"),
    сirioDeNazareDateFinish = new Date("October 15, 2012 23:59:59"), 
    сirioDeNazare = new Event(сirioDeNazareDateStart, сirioDeNazareDateFinish, "Cirio De Nazare")],
    vinesDayDateStart = new Date("October 4, 2012 00:00:00"),
    vinesDayDateFinish = new Date("October 6, 2012 23:59:59"), 
    vinesDay = new Event(vinesDayDateStart, vinesDayDateFinish, "День вина")],
    theBlackCountryDateStart = new Date("October 31, 2012 00:00:00"),
    theBlackCountryDateFinish = new Date("November 1, 2012 23:59:59"), 
    theBlackCountry = new Event(theBlackCountryDateStart, theBlackCountryDateFinish, 'Вкус "Черной страны"')],
    oktoberFestDateStart = new Date("September 24, 2012 00:00:00"),
    oktoberFestDateFinish = new Date("October 8, 2012 23:59:59"), 
    oktoberFest = new Event(oktoberFestDateStart, oktoberFestDateFinish, 'OktoberFest')],
    francfurtBookDateStart = new Date("October 15, 2012 00:00:00"),
    francfurtBookDateFinish = new Date("October 20, 2012 23:59:59"), 
    francfurtBook = new Event(francfurtBookDateStart, francfurtBookDateFinish, 'Франкфуртская международная книжная ярмарка')],
    aidaDateStart = new Date("October 12, 2012 00:00:00"),
    aidaDateFinish = new Date("October 27, 2012 23:59:59"), 
    aida = new Event(aidaDateStart, aidaDateFinish, '"Аида" у великих пирамид, Гиза')],
    paradeOfLoveDateStart = new Date("October 3, 2012 14:00:00"),
    paradeOfLoveDateFinish = new Date("October 3, 2012 22:00:00"), 
    paradeOfLove = new Event(aidaDateStart, aidaDateFinish, 'Парад любви')],
    sukkotDateStart = new Date("October 3, 2012 14:00:00"),
    sukkotDateFinish = new Date("October 3, 2012 22:00:00"), 
    sukkot = new Event(aidaDateStart, aidaDateFinish, 'Парад любви')],
    
    bestOfSweets.setLocation({gps :{x = 15, y = 189, name : "Австрия, Бургенланд - Айзенштадте, Фестиваль сладких вин"}});
    сirioDeNazare.setLocation({gps :{x = 45, y = 133, name : "Бразилия, Белен, Фестиваль Cirio De Nazare"}});
    vinesDay.setLocation({gps :{x = 45, y = 133, name : "Венгрия, Мор, День вина"}});
    theBlackCountry.setLocation({gps :{x = 45, y = 133, name : "Великобритания, Дадли, Вкус 'Черной страны'"}});
    oktoberFest.setLocation({gps :{x = 45, y = 133, name : "Германия, Мюнхен, OktoberFest"}});
    francfurtBook.setLocation({gps :{x = 45, y = 133, name : "Германия, Frankfurt, Франкфуртская международная книжная ярмарка"}});
    aida.setLocation({gps :{x = 45, y = 133, name : "Египет, ?, Аида у великих пирамид, Гиза"}});
    paradeOfLove.setLocation({gps :{x = 45, y = 133, name : "Израль, Тель-Авиве, Парад любви"}});
    sukkot.setLocation({gps :{x = 45, y = 133, name : "Израль, Иерусалиме, праздник Суккот"}});
}