 
	// const data = [
	// 	{
	// 		"id": "1",
	// 		"title": "ЧГТРК Грозный",
	// 		"icon": "http://frostdev.ru/app/images/channel21.png",
	// 		"url": "Grozny"
	// 	},
	// 	{
	// 		"id": "2",
	// 		"title": "ТРК Путь",
	// 		"icon": "http://frostdev.ru/app/images/channel22.png",
	// 		"url": "Put"
	// 	},
	// 	{
	// 		"id": "3",
	// 		"title": "ТРК Вайнах",
	// 		"icon": "http://frostdev.ru/app/images/channel20.png",
	// 		"url": "Vainah"
	// 	},
	// 	{
	// 		"id": "4",
	// 		"title": "Первый канал",
	// 		"icon": "http://frostdev.ru/app/images/channel1.png",
	// 		"url": "tv1"
	// 	},
	// 	{
	// 		"id": "5",
	// 		"title": "Россия 1",
	// 		"icon": "http://frostdev.ru/app/images/channel3.png",
	// 		"url": "russia1"
	// 	},
	// 	{
	// 		"id": "6",
	// 		"title": "НТВ",
	// 		"icon": "http://frostdev.ru/app/images/channel7.png",
	// 		"url": "ntv"
	// 	},
	// 	{
	// 		"id": "7",
	// 		"title": "Матч ТВ",
	// 		"icon": "http://frostdev.ru/app/images/channel5.png",
	// 		"url": "match"
	// 	},
	// 	{
	// 		"id": "8",
	// 		"title": "РЕН-ТВ",
	// 		"icon": "http://frostdev.ru/app/images/channel2.png",
	// 		"url": "rentv"
	// 	},
	// 	{
	// 		"id": "9",
	// 		"title": "Россия 24",
	// 		"icon": "http://frostdev.ru/app/images/channel13.png",
	// 		"url": "russia24"
	// 	},
	// 	{
	// 		"id": "10",
	// 		"title": "Карусель",
	// 		"icon": "http://frostdev.ru/app/images/channel15.png",
	// 		"url": "karusel"
	// 	},
	// 	{
	// 		"id": "11",
	// 		"title": "Россия Культура",
	// 		"icon": "http://frostdev.ru/app/images/channel11.png",
	// 		"url": "kultura"
	// 	},
	// 	{
	// 		"id": "12",
	// 		"title": "Звезда",
	// 		"icon": "http://frostdev.ru/app/images/channel12.png",
	// 		"url": "zvezda"
	// 	},
	// 	{
	// 		"id": "13",
	// 		"title": "ТВ 3",
	// 		"icon": "http://frostdev.ru/app/images/channel8.png",
	// 		"url": "tv3"
	// 	},
	// 	{
	// 		"id": "14",
	// 		"title": "Домашний",
	// 		"icon": "http://frostdev.ru/app/images/channel6.png",
	// 		"url": "dom"
	// 	},
	// 	{
	// 		"id": "15",
	// 		"title": "СТС",
	// 		"icon": "http://frostdev.ru/app/images/channel4.png",
	// 		"url": "sts"
	// 	},
	// 	{
	// 		"id": "16",
	// 		"title": "UFC-ТВ",
	// 		"icon": "http://frostdev.ru/app/images/channel17.png",
	// 		"url": "ufc"
	// 	},
	// 	{
	// 		"id": "17",
	// 		"title": "ТНТ",
	// 		"icon": "http://frostdev.ru/app/images/channel16.png",
	// 		"url": "tnt"
	// 	},
	// 	{
	// 		"id": "18",
	// 		"title": "Пятница",
	// 		"icon": "http://frostdev.ru/app/images/channel10.png",
	// 		"url": "friday"
	// 	},
	// 	{
	// 		"id": "19",
	// 		"title": "5 Канал",
	// 		"icon": "http://frostdev.ru/app/images/channel9.png",
	// 		"url": "kanal5"
	// 	},
	// 	{
	// 		"id": "20",
	// 		"title": "МИР",
	// 		"icon": "http://frostdev.ru/app/images/channel14.png",
	// 		"url": "mir"
	// 	},
	// 	{
	// 		"id": "21",
	// 		"title": "ТВЦ",
	// 		"icon": "http://frostdev.ru/app/images/channel19.png",
	// 		"url": "tvc"
	// 	},
	// 	{
	// 		"id": "22",
	// 		"title": "МузТВ",
	// 		"icon": "http://frostdev.ru/app/images/channel18.png",
	// 		"url": "muztv"
	// 	}

	// ]


    // // https://reactnative.dev/movies.json
    // // http://frostdev.ru/app/data2.json


    // fetch('https://reactnative.dev/movies.json')
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data);
    // });


	const person = {
		name: "Adam",
		age: 22,
		surname: 'Adamov',
		job: 'driver',
		license: true 
	}


	// console.log(person);


const logger = {
	keys() {
		console.log('Object Keys: ', Object.keys(this));
	},
	keysValues() {
		console.log(Object.keys(this).forEach(key => {
			console.log(`"${key}": ${this[key]}`);
		})
		
		
		 );
	}
}	

logger.keysValues.call(person)

 