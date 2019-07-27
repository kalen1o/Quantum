import anonymous from '../images/anonymous.jpg';
import tonyAlvarez from '../images/Tony_Alvarez.png';
import kateMiddleton from '../images/Kate_Middleton.png';
import ronaldHenry from '../images/Ronald_Henry.png';
import garyBryan from '../images/Gary_Bryan.png';
import miltonDay from '../images/Milton_Day.png';
import nicholasStokes from '../images/Nicholas_Stokes.png';
import adaThompson from '../images/Ada_Thompson.png';
import lelaHarris from '../images/Lela_Harris.png';
import bag from '../images/bag.png';
import shoes from '../images/shoes.png';
import glass from '../images/glass.png';
import shoes2 from '../images/shoes2.png';
import clothes from '../images/clothes.png';
import sony from '../images/sony.png';
import apple7plus from '../images/apple7plus.png';
import apple5sgray from '../images/apple5sgray.png';
import apple732 from '../images/apple732.png';
import apple5ssilver from '../images/apple5ssilver.png';
import apple7128 from '../images/apple7128.png';
import senseit from '../images/senseit.png';
import xiomi from '../images/xiomi.png';
import mathildaJensen from '../images/Mathilda_Jensen.png';
import billNeal from '../images/Bill_Neal.png';
import loisJames from '../images/Lois_James.png';
import earlPeterson from '../images/Earl_Peterson.png';
import gussiePayne from '../images/Gussie_Payne.png';
import pearlSantiago from '../images/Pearl_Santiago.png';
import bryanQuinn from '../images/Bryan_Quinn.png';
import ireneManning from '../images/Irene_Manning.png';
import attachment1 from '../images/attachment1.png';
import attachment2 from '../images/attachment2.png';

const users = [
	{
		login: "anonymous@gmail.com",
		name: 'Anonymous',
		avatar: anonymous,
		commerceDashboard: {
			tableCard: [
				{label: "New clients", quantity: "0", percent: "+0", class: "top"},
				{label: "Returning сlients", quantity: "0", percent: "+0", class: "top"},
				{label: "Vip сlients", quantity: "0", percent: "+0", class: "top"},
				{label: "Orders on client", quantity: "0", percent: "+0", class: "top"},
				{label: "Bounce on client", quantity: "0", percent: "+0", class: "top"},
				{label: "Beetwen orders", quantity: "0", percent: "+0", class: "top"},
				{label: "New Orders", quantity: "0", percent: "+0", class: "bottom"},
				{label: "Confirmed Order", quantity: "0", percent: "+0", class: "bottom"},
				{label: "Preparing Delivery", quantity: "0", percent: "+0", class: "bottom"},
				{label: "Delivery", quantity: "0", percent: "+0", class: "bottom"},
				{label: "Delivered", quantity: "0", percent: "+0", class: "bottom"},
				{label: "Returns", quantity: "0", percent: "+0", class: "bottom"},
			],
			barChartGroupsGoods: [
				{label: "Baby clothing", percent: 0},
				{label: "Clothing", percent: 0},
				{label: "Pet carrier", percent: 0},
				{label: "Baby products", percent: 0},
				{label: "Toys", percent: 0},
				{label: "Furniture", percent: 0},
			],
			barChartChannel: [
				{label: "Google Search", percent: 0},
				{label: "Google Adwords", percent: 0},
				{label: "Yahoo", percent: 0},
				{label: "Bing", percent: 0},
				{label: "Youtube", percent: 0},
				{label: "Direct", percent: 0},
			],
			lastProductSales: [
				{
					image: bag,
					product: "Valentino Lady's bag",
					timeOrder: "09:29 PM",
					number: 0,
					price: 0,
					quantity: 0,
					totalPrice: 0,
					customer: "J. Moody",
				},
				{
					image: shoes,
					product: "White Sneakers Nike",
					timeOrder: "09:28 PM",
					number: 0,
					price: 0,
					quantity: 0,
					totalPrice: 0,
					customer: "F. Newman",
				},
				{
					image: glass,
					product: "Black Female Sunglasses",
					timeOrder: "09:26 PM",
					number: 0,
					price: 0,
					quantity: 0,
					totalPrice: 0,
					customer: "F. Rodriguez",
				},
				
				{
					image: shoes2,
					product: "White Orange Nike Sneakers",
					timeOrder: "Yesterday",
					number: 0,
					price: 0,
					quantity: 0,
					totalPrice: 0,
					customer: "M.French",
				},
				{
					image: clothes,
					product: "Raincoat jacket",
					timeOrder: "Yesterday",
					number: 0,
					price: 0,
					quantity: 0,
					totalPrice: 0,
					customer: "K. King",
				},
			],
			stat: [
				{label: "Total Revenue", quantity: 0},
				{label: "Sales", quantity: 0},
				{label: "Deliveries", quantity: 0},
				{label: "Users", quantity: 0},
			],
			revenue: [
				{
					label1: "Total sales made today", 
					percent: 55, 
					label2: "Target", 
					number2: 1000, 
					label3: "Last week", 
					number3: 224, 
					label4: "Last month", 
					number4: 965
				},
				{
					label1: "Total sales made today", 
					percent: 80, 
					label2: "Target", 
					number2: 1000, 
					label3: "Last week", 
					number3: 224, 
					label4: "Last month", 
					number4: 965
				},
				{
					label1: "Total sales made today", 
					percent: 60, 
					label2: "Target", 
					number2: 1000, 
					label3: "Last week", 
					number3: 224, 
					label4: "Last month", 
					number4: 965
				}
			],
			products: [
				{
					image: sony,
					name: "Sony Xperia X Compact (black)",
					views: 1334,
					sales: 20,
					price: 915.66
				},
				{
					image: apple7plus,
					name: "Apple iPhone 7 Plus 128GB (black)",
					views: 1223,
					sales: 21,
					price: 456.75
				},
				{
					image: apple5sgray,
					name: "Apple iPhone 5s 16GB (gray space)",
					views: 1123,
					sales: 22,
					price: 696.50
				},
				{
					image: apple732,
					name: "Apple iPhone 7 32GB (pink gold)",
					views: 956,
					sales: 23,
					price: 456.48
				},
				{
					image: apple5ssilver,
					name: "Apple iPhone 5s 16GB (silver)",
					views: 800,
					sales: 54,
					price: 915.66
				},
				{
					image: apple7128,
					name: "Apple iPhone 7 128GB (pink gold)",
					views: 810,
					sales: 48,
					price: 456.78
				},
				{
					image: senseit,
					name: "SENSEIT E400 (blue)",
					views: 820,
					sales: 47,
					price: 695.50
				},
				{
					image: xiomi,
					name: "Xiaomi Redmi 3 S 2GB/16GB (silver)",
					views: 830,
					sales: 34,
					price: 456.48
				}
			]
		},
		analyticsDashboard: {
			infoBoards: [
				{
					label: "Incoming requests 5",
					children: [
						"Incoming requests",
						"The 3 Golden Rules Professional Graphic...",
						"The Universe Through A Child S Eyes",
						"The Basics Of Western Astrology Explained",
						"Astronomy Or Astrology...",
						"How To Maintain Your Mental Health"
					]
				},
				{
					label: "Intial Contact 2",
					children: [
						"Vinyl Banners With Its Different Types Kinds...",
						"Astronomy Or Astrology...",
						"Vinyl Banners With Its Different Types Kinds...",
						"Where To Look For Ch..."
					]
				},
				{
					label: "Offer Made 2",
					children: [
						"Vinyl Banners With Its Different Types Kinds...",
						"6 Powerful Tips To Creating Testimonial...",
						"Stair Lifts Feel The Freedom Of Your Home"
					]
				},
				{
					label: "Negotiation 6",
					children: [
						"The Universe Through...",
						"Vinyl Banners With Its Different Types Kinds...",
						"Althusser Competing Interpellations And....",
						"Creating Remarkable Poster Prints ..."
					]
				},
				{
					label: "Contract 2",
					children: [
						"What If They Let You Run The Hubble",
						"How To Fly A Private Jet..."
					]
				},
				{
					label: "Won leads 7",
					children: [
						"Vinyl Banners With Its Different Types Kinds...",
						"How To Boost Your Traffic Of Your Blog And...",
						"How To Maintain Your Mental Health"
					]
				}
			],
			tasks: [
				{
					label: "Overdue tasks",
					quantity: 2,
					percent: 10,
					lastWeek: 4
				},
				{
					label: "Task To Do",
					quantity: 10,
					percent: 70,
					lastWeek: 4
				},
				{
					label: "Completed Task",
					quantity: 5,
					percent: 10,
					lastWeek: 4
				},
				{
					label: "Leads without To Do",
					quantity: 2,
					percent: 10,
					lastWeek: 4
				}
			],
			circle: [
				{
					name: "Incoming requests",
					value: 85.6
				},
				{
					name: "Intial Contact",
					value: 20.9
				},
				{
					name: "Offer Made",
					value: 14.9
				},
				{
					name: "Negotiation",
					value: 11.9
				},
				{
					name: "Contract",
					value: 11.9
				},
				{
					name: "Won leads",
					value: 11.9
				},
			],
			totalDeals: [
				{
					image: garyBryan,
					name: "Gary Bryan",
					deals: 33,
					won: 5,
					todo: 24,
					sale: 984
				},
				{
					image: miltonDay,
					name: "Milton Day",
					deals: 23,
					won: 4,
					todo: 21,
					sale: 847
				},
				{
					image: nicholasStokes,
					name: "Nick Stok",
					deals: 15,
					won: 2,
					todo: 15,
					sale: 610
				},
				{
					image: adaThompson,
					name: "Ada Thom",
					deals: 12,
					won: 1,
					todo: 12,
					sale: 567
				},
				{
					image: lelaHarris,
					name: "Lela Harris",
					deals: 8,
					won: 2,
					todo: 6,
					sale: 465
				}
			]
		},
		allDeals: [
			{
				title: "The Universe Through A Child S Eyes",
				contact: "Aiden Day",
				company: "American Express UK",
				status: "INITIAL CONTACT",
				sales: 834.4
			},
			{
				title: "Astronomy Or Astrology",
				contact: "Lee Crawford",
				company: "Admiral Group plc",
				status: "OFFER MADE",
				sales: 342.86
			},
			{
				title: "Pictures In The Sky",
				contact: "Tony Walsh",
				company: "McDonald's Ltd",
				status: "NEGOTIATION",
				sales: 392.26
			},
			{
				title: "Shooting Stars",
				contact: "Ronald Gonzales",
				company: "Marriott Hotels Ltd",
				status: "INCOMING REQUEST",
				sales: 729.63
			},
			{
				title: "Moon Fever",
				contact: "Wesley Campbell",
				company: "Volkswagen",
				status: "NEGOTIATION",
				sales: 25.27
			},
			{
				title: "Space The Final Frontier",
				contact: "Amelia Tate",
				company: "Exxon Mobil",
				status: "CONTACT",
				sales: 145.01
			},
		],
		clients: [
			{
				contact: "Jose Cortez",
				email: "torphy_shanon@gmail.com",
				phone: "765-889-1804",
				title: "Space The Final Frontier",
				company: "American Express UK",
				status: "VIP Clients"
			},
			{
				contact: "Bill Buchanan",
				email: "bill-buch@yahoo.com",
				phone: "967-527-9383",
				title: "Telescopes 101",
				company: "Admiral Group plc",
				status: "Top Sale"
			},
			{
				contact: "Effie Guzman",
				email: "effie-guz@yahoo.com",
				phone: "829-779-4544",
				title: "The Amazing Hubble",
				company: "Exxon Mobil",
				status: "New Clients"
			},
			{
				contact: "Rodney Boone",
				email: "rodne@lind.co.uk",
				phone: "174-612-7499",
				title: "Asteroids",
				company: "Royal Dutch Shell",
				status: "VIP Clients"
			},
			{
				contact: "Barbara Maxwell",
				email: "barbara-maxwell@hotmail.com",
				phone: "783-320-7752",
				title: "Telescopes 101",
				company: "American Express UK",
				status: "Top Sale"
			},
			{
				contact: "Ellen Thornton",
				email: "thornton@crooks.com",
				phone: "926-605-0520",
				title: "The Night Sky",
				company: "Volkswagen",
				status: "New Clients"
			},
		],
		companies: [
			{
				contact: "Jose Cortez",
				email: "torphy_shanon@gmail.com",
				phone: "765-889-1804",
				title: "Space The Final Frontier",
				company: "American Express UK",
				status: "VIP Companies"
			},
			{
				contact: "Bill Buchanan",
				email: "bill-buch@yahoo.com",
				phone: "967-527-9383",
				title: "Telescopes 101",
				company: "Admiral Group plc",
				status: "Top Companies"
			},
			{
				contact: "Effie Guzman",
				email: "effie-guz@yahoo.com",
				phone: "829-779-4544",
				title: "The Amazing Hubble",
				company: "Exxon Mobil",
				status: "New Companies"
			},
			{
				contact: "Rodney Boone",
				email: "rodne@lind.co.uk",
				phone: "174-612-7499",
				title: "Asteroids",
				company: "Royal Dutch Shell",
				status: "VIP Companies"
			},
			{
				contact: "Barbara Maxwell",
				email: "barbara-maxwell@hotmail.com",
				phone: "783-320-7752",
				title: "Telescopes 101",
				company: "American Express UK",
				status: "Top Companies"
			},
			{
				contact: "Ellen Thornton",
				email: "thornton@crooks.com",
				phone: "926-605-0520",
				title: "The Night Sky",
				company: "Volkswagen",
				status: "New Companies"
			},
		],
		mail: [
			{
				name: "Google Inc",
				email: "google@gmail.com",
				theme: "Adwords Keyword Research For Beginners",
				bookmark: true,
				time: "07:24 AM",
				status: false,
				important: true,
				type: "Inbox",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1, attachment2 ]
			},
			{
				name: "Apple",
				email: "apple@gmail.com",
				theme: "Types Of Cookware Pots And Pans",
				bookmark: false,
				time: "05:12 AM",
				status: false,
				important: true,
				type: "Draft",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1 ]
			},
			{
				name: "Mathilda Jensen",
				email: "mathilda_jensen@gmail.com",
				avatar: mathildaJensen,
				theme: "Ннpes Of Cookware Pots And Pans",
				bookmark: false,
				time: "05:12 AM",
				status: false,
				important: true,
				type: "Sent Mail",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: []
			},
			{
				name: "Google Inc",
				email: "google@gmail.com",
				theme: "What Is The Big R For Marketing Your Business",
				bookmark: true,
				time: "05:12 AM",
				status: true,
				important: true,
				type: "Inbox",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1, attachment2 ]
			},
			{
				name: "Yell Inc ",
				email: "yell@gmail.com",
				theme: "Gourmet Cooking For Pleasure",
				bookmark: true,
				time: "03:12 AM",
				status: true,
				important: false,
				type: "Draft",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1, attachment2 ]
			},
			{
				name: "Bill Neal",
				email: "bill_neal@gmail.com",
				avatar: billNeal,
				theme: "The Night Sky",
				bookmark: true,
				time: "05:12 AM",
				status: false,
				important: false,
				type: "Inbox",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1, attachment2 ]
			},
			{
				name: "Lois James",
				email: "lois_james@gmail.com",
				avatar: loisJames,
				theme: "Pes Of Cookware Pots And Pans",
				bookmark: false,
				time: "03:07 AM",
				status: true,
				important: false,
				type: "Draft",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1, attachment2 ]
			},
			{
				name: "Earl Peterson",
				email: "earl_peterson@gmail.com",
				avatar: earlPeterson,
				theme: "Choose The Perfect Accommodations",
				bookmark: false,
				time: "02:12 AM",
				status: false,
				important: false,
				type: "Sent Mail",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1, attachment2 ]
			},
			{
				name: "Gussie Payne",
				email: "gussie_payne@gmail.com",
				avatar: gussiePayne,
				theme: "Comment On The Importance Of Human Life",
				bookmark: false,
				time: "02:11 AM",
				status: true,
				important: true,
				type: "Draft",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment2 ]
			},
			{
				name: "Pearl Santiago",
				email: "pearl_santiago@gmail.com",
				avatar: pearlSantiago,
				theme: "Breast Lifts Improvement Without Implants",
				bookmark: false,
				time: "01:12 AM",
				status: true,
				important: false,
				type: "Sent Mail",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment2 ]
			},
			{
				name: "Nelle Chandler",
				email: "nelle_chandler@gmail.com",
				theme: "Live Poker How To Win Tournament Games",
				bookmark: true,
				time: "01:09 AM",
				status: true,
				important: false,
				type: "Sent Mail",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: []
			},
			{
				name: "Bryan Quinn",
				email: "bryan_quinn@gmail.com",
				avatar: bryanQuinn,
				theme: "Cheap Romantic Vacations",
				bookmark: true,
				time: "01:12 AM",
				status: true,
				important: false,
				type: "Trash",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1, attachment2 ]
			},
			{
				name: "Irene Manning",
				email: "irene_manning@gmail.com",
				avatar: ireneManning,
				theme: "Lifts Improvement Without Implants",
				bookmark: false,
				time: "00:19 AM",
				status: true,
				important: false,
				type: "Trash",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1, attachment2 ]
			},
		],
		statistic: {
			line: [
				[
					{day: "27.09.16", "Time on site": 40},
					{day: "28.09.16", "Time on site": 30},
					{day: "29.09.16", "Time on site": 20},
					{day: "30.09.16", "Time on site": 27},
					{day: "21.09.16", "Time on site": 18},
					{day: "01.10.16", "Time on site": 23},
					{day: "02.10.16", "Time on site": 34},
				],
				[
					{day: "27.09.16", Users: 32},
					{day: "28.09.16", Users: 12},
					{day: "29.09.16", Users: 20},
					{day: "30.09.16", Users: 27},
					{day: "21.09.16", Users: 13},
					{day: "01.10.16", Users: 40},
					{day: "02.10.16", Users: 34},
				],
				[
					{day: "27.09.16", "New Users": 32},
					{day: "28.09.16", "New Users": 12},
					{day: "29.09.16", "New Users": 20},
					{day: "30.09.16", "New Users": 27},
					{day: "21.09.16", "New Users": 13},
					{day: "01.10.16", "New Users": 40},
					{day: "02.10.16", "New Users": 34},
				]
			],
			circle: [
				[
					{name: "Desktop Computers", value: 60},
					{name: "Smartphones", value: 12},
					{name: "Tablets", value: 18},
				],
				[
					{name: "25-34 age", value: 50},
					{name: "45 age and older", value: 10},
					{name: "35-44 age", value: 20},
					{name: "18-24 age", value: 10},
				],
				[
					{name: "Search engines", value: 70},
					{name: "Directs click", value: 10},
					{name: "Other website clicks", value: 10},
					{name: "Bookmarks click", value: 10},
				],
			],
			area: [
				{
					label: "View depth",
					value: "3.05",
					percent: "+21.5%",
					data: [
						{value: 15},
						{value: 23},
						{value: 10},
						{value: 35},
						{value: 5},
					]
				},
				{
					label: "Bounce Rate",
					value: "22.8%",
					percent: "-2.65%",
					data: [
						{value: 15},
						{value: 3},
						{value: 19},
						{value: 35},
						{value: 5},
					]
				},
				{
					label: "Time on",
					value: "1:31",
					percent: "+16.7%",
					data: [
						{value: 5},
						{value: 43},
						{value: 19},
						{value: 25},
						{value: 1},
					]
				}
			],
			bar: [
				{day: "27-09", value: 55},
				{day: "28-09", value: 125},
				{day: "29-09", value: 85},
				{day: "30-09", value: 130},
				{day: "31-09", value: 25},
				{day: "01-10", value: 105},
				{day: "02-10", value: 95},
				{day: "03-10", value: 55},
				{day: "04-10", value: 85},
				{day: "05-10", value: 65},
				{day: "06-10", value: 45},
				{day: "07-10", value: 95},
				{day: "08-10", value: 115},
				{day: "09-10", value: 125},
				{day: "10-10", value: 85},
				{day: "11-10", value: 100},
				{day: "12-10", value: 85},
				{day: "13-10", value: 95},
				{day: "14-10", value: 35},
				{day: "15-10", value: 60},
				{day: "16-10", value: 95},
				{day: "17-10", value: 25},
				{day: "18-10", value: 120},
				{day: "19-10", value: 125},
				{day: "20-10", value: 100},
				{day: "21-10", value: 85},
				{day: "22-10", value: 50},
				{day: "23-10", value: 55},
				{day: "24-10", value: 75},
			]
		}
	},
	{
		login: 'tonyalvarez@gmail.com',
		name: 'Tony Alvarez',
		avatar: tonyAlvarez,
		commerceDashboard: {
			tableCard: [
				{label: "New clients", quantity: "25", percent: "-11", class: "top"},
				{label: "Returning сlients", quantity: "8", percent: "+5", class: "top"},
				{label: "Vip сlients", quantity: "1", percent: "-11", class: "top"},
				{label: "Orders on client", quantity: "1.44", percent: "+5", class: "top"},
				{label: "Bounce on client", quantity: "30.77%", percent: "+5", class: "top"},
				{label: "Beetwen orders", quantity: "3 Days", percent: "+5", class: "top"},
				{label: "New Orders", quantity: "26", percent: "-11", class: "bottom"},
				{label: "Confirmed Order", quantity: "15", percent: "-11", class: "bottom"},
				{label: "Preparing Delivery", quantity: "4", percent: "+5", class: "bottom"},
				{label: "Delivery", quantity: "2", percent: "-11", class: "bottom"},
				{label: "Delivered", quantity: "10", percent: "+5", class: "bottom"},
				{label: "Returns", quantity: "2", percent: "+5", class: "bottom"},
			],
			barChartGroupsGoods: [
				{label: "Baby clothing", percent: 15},
				{label: "Clothing", percent: 36},
				{label: "Pet carrier", percent: 8},
				{label: "Baby products", percent: 28},
				{label: "Toys", percent: 14},
				{label: "Furniture", percent: 18},
			],
			barChartChannel: [
				{label: "Yahoo", percent: 17},
				{label: "Google Search", percent: 28},
				{label: "Google Adwords", percent: 18},
				{label: "Direct", percent: 13},
				{label: "Bing", percent: 15},
				{label: "Youtube", percent: 14},
			],
			lastProductSales: [
				{
					image: bag,
					product: "Valentino Lady's bag",
					timeOrder: "09:29 PM",
					number: 190456,
					price: 686.64,
					quantity: 1,
					totalPrice: 686.64,
					customer: "J. Moody",
				},
				{
					image: shoes,
					product: "White Sneakers Nike",
					timeOrder: "09:28 PM",
					number: 190455,
					price: 682.62,
					quantity: 2,
					totalPrice: 686.64,
					customer: "F. Newman",
				},
				{
					image: glass,
					product: "Black Female Sunglasses",
					timeOrder: "09:26 PM",
					number: 190454,
					price: 19.91,
					quantity: 3,
					totalPrice: 686.64,
					customer: "F. Rodriguez",
				},
				
				{
					image: shoes2,
					product: "White Orange Nike Sneakers",
					timeOrder: "Yesterday",
					number: 190453,
					price: 216.76,
					quantity: 1,
					totalPrice: 686.64,
					customer: "M.French",
				},
				{
					image: clothes,
					product: "Raincoat jacket",
					timeOrder: "Yesterday",
					number: 190452,
					price: 273.63,
					quantity: 1,
					totalPrice: 686.64,
					customer: "K. King",
				},
			],
			stat: [
				{label: "Total Revenue", quantity: 40.256},
				{label: "Sales", quantity: 1.565},
				{label: "Deliveries", quantity: 1245},
				{label: "Users", quantity: 1576},
			],
			revenue: [
				{
					label1: "Total sales made today", 
					percent: 55, 
					label2: "Target", 
					number2: 1000, 
					label3: "Last week", 
					number3: 224, 
					label4: "Last month", 
					number4: 965
				},
				{
					label1: "Total sales made today", 
					percent: 80, 
					label2: "Target", 
					number2: 1000, 
					label3: "Last week", 
					number3: 224, 
					label4: "Last month", 
					number4: 965
				},
				{
					label1: "Total sales made today", 
					percent: 60, 
					label2: "Target", 
					number2: 1000, 
					label3: "Last week", 
					number3: 224, 
					label4: "Last month", 
					number4: 965
				}
			],
			products: [
				{
					image: sony,
					name: "Sony Xperia X Compact (black)",
					views: 1334,
					sales: 20,
					price: 915.66
				},
				{
					image: apple7plus,
					name: "Apple iPhone 7 Plus 128GB (black)",
					views: 1223,
					sales: 21,
					price: 456.75
				},
				{
					image: apple5sgray,
					name: "Apple iPhone 5s 16GB (gray space)",
					views: 1123,
					sales: 22,
					price: 696.50
				},
				{
					image: apple732,
					name: "Apple iPhone 7 32GB (pink gold)",
					views: 956,
					sales: 23,
					price: 456.48
				},
				{
					image: apple5ssilver,
					name: "Apple iPhone 5s 16GB (silver)",
					views: 800,
					sales: 54,
					price: 915.66
				},
				{
					image: apple7128,
					name: "Apple iPhone 7 128GB (pink gold)",
					views: 810,
					sales: 48,
					price: 456.78
				},
				{
					image: senseit,
					name: "SENSEIT E400 (blue)",
					views: 820,
					sales: 47,
					price: 695.50
				},
				{
					image: xiomi,
					name: "Xiaomi Redmi 3 S 2GB/16GB (silver)",
					views: 830,
					sales: 34,
					price: 456.48
				}
			]
		},
		analyticsDashboard: {
			infoBoards: [
				{
					label: "Incoming requests 5",
					children: [
						"Incoming requests",
						"The 3 Golden Rules Professional Graphic...",
						"The Universe Through A Child S Eyes",
						"The Basics Of Western Astrology Explained",
						"Astronomy Or Astrology...",
						"How To Maintain Your Mental Health"
					]
				},
				{
					label: "Intial Contact 2",
					children: [
						"Vinyl Banners With Its Different Types Kinds...",
						"Astronomy Or Astrology...",
						"Vinyl Banners With Its Different Types Kinds...",
						"Where To Look For Ch..."
					]
				},
				{
					label: "Offer Made 2",
					children: [
						"Vinyl Banners With Its Different Types Kinds...",
						"6 Powerful Tips To Creating Testimonial...",
						"Stair Lifts Feel The Freedom Of Your Home"
					]
				},
				{
					label: "Negotiation 6",
					children: [
						"The Universe Through...",
						"Vinyl Banners With Its Different Types Kinds...",
						"Althusser Competing Interpellations And....",
						"Creating Remarkable Poster Prints ..."
					]
				},
				{
					label: "Contract 2",
					children: [
						"What If They Let You Run The Hubble",
						"How To Fly A Private Jet..."
					]
				},
				{
					label: "Won leads 7",
					children: [
						"Vinyl Banners With Its Different Types Kinds...",
						"How To Boost Your Traffic Of Your Blog And...",
						"How To Maintain Your Mental Health"
					]
				}
			],
			tasks: [
				{
					label: "Overdue tasks",
					quantity: 2,
					percent: 10,
					lastWeek: 4
				},
				{
					label: "Task To Do",
					quantity: 10,
					percent: 70,
					lastWeek: 4
				},
				{
					label: "Completed Task",
					quantity: 5,
					percent: 10,
					lastWeek: 4
				},
				{
					label: "Leads without To Do",
					quantity: 2,
					percent: 10,
					lastWeek: 4
				}
			],
			circle: [
				{
					name: "Incoming requests",
					value: 85.6
				},
				{
					name: "Intial Contact",
					value: 20.9
				},
				{
					name: "Offer Made",
					value: 14.9
				},
				{
					name: "Negotiation",
					value: 11.9
				},
				{
					name: "Contract",
					value: 11.9
				},
				{
					name: "Won leads",
					value: 11.9
				},
			],
			totalDeals: [
				{
					image: garyBryan,
					name: "Gary Bryan",
					deals: 33,
					won: 5,
					todo: 24,
					sale: 984
				},
				{
					image: miltonDay,
					name: "Milton Day",
					deals: 23,
					won: 4,
					todo: 21,
					sale: 847
				},
				{
					image: nicholasStokes,
					name: "Nick Stok",
					deals: 15,
					won: 2,
					todo: 15,
					sale: 610
				},
				{
					image: adaThompson,
					name: "Ada Thom",
					deals: 12,
					won: 1,
					todo: 12,
					sale: 567
				},
				{
					image: lelaHarris,
					name: "Lela Harris",
					deals: 8,
					won: 2,
					todo: 6,
					sale: 465
				}
			]
		},
		allDeals: [
			{
				title: "The Universe Through A Child S Eyes",
				contact: "Aiden Day",
				company: "American Express UK",
				status: "INITIAL CONTACT",
				sales: 834.4
			},
			{
				title: "Astronomy Or Astrology",
				contact: "Lee Crawford",
				company: "Admiral Group plc",
				status: "OFFER MADE",
				sales: 342.86
			},
			{
				title: "Pictures In The Sky",
				contact: "Tony Walsh",
				company: "McDonald's Ltd",
				status: "NEGOTIATION",
				sales: 392.26
			},
			{
				title: "Shooting Stars",
				contact: "Ronald Gonzales",
				company: "Marriott Hotels Ltd",
				status: "INCOMING REQUEST",
				sales: 729.63
			},
			{
				title: "Moon Fever",
				contact: "Wesley Campbell",
				company: "Volkswagen",
				status: "NEGOTIATION",
				sales: 25.27
			},
			{
				title: "Space The Final Frontier",
				contact: "Amelia Tate",
				company: "Exxon Mobil",
				status: "CONTACT",
				sales: 145.01
			},
			{
				title: "Incoming requests",
				contact: "Aiden Day",
				company: "American Express UK",
				status: "INITIAL CONTACT",
				sales: 834.4
			},
			{
				title: "Creating Remarkable Poster Prints ...",
				contact: "Lee Crawford",
				company: "Admiral Group plc",
				status: "OFFER MADE",
				sales: 342.86
			},
		],
		clients: [
			{
				contact: "Jose Cortez",
				email: "torphy_shanon@gmail.com",
				phone: "765-889-1804",
				title: "Space The Final Frontier",
				company: "American Express UK",
				status: "VIP Clients"
			},
			{
				contact: "Bill Buchanan",
				email: "bill-buch@yahoo.com",
				phone: "967-527-9383",
				title: "Telescopes 101",
				company: "Admiral Group plc",
				status: "Top Sale"
			},
			{
				contact: "Effie Guzman",
				email: "effie-guz@yahoo.com",
				phone: "829-779-4544",
				title: "The Amazing Hubble",
				company: "Exxon Mobil",
				status: "New Clients"
			},
			{
				contact: "Rodney Boone",
				email: "rodne@lind.co.uk",
				phone: "174-612-7499",
				title: "Asteroids",
				company: "Royal Dutch Shell",
				status: "VIP Clients"
			},
			{
				contact: "Barbara Maxwell",
				email: "barbara-maxwell@hotmail.com",
				phone: "783-320-7752",
				title: "Telescopes 101",
				company: "American Express UK",
				status: "Top Sale"
			},
			{
				contact: "Ellen Thornton",
				email: "thornton@crooks.com",
				phone: "926-605-0520",
				title: "The Night Sky",
				company: "Volkswagen",
				status: "New Clients"
			},
		],
		companies: [
			{
				contact: "Jose Cortez",
				email: "torphy_shanon@gmail.com",
				phone: "765-889-1804",
				title: "Space The Final Frontier",
				company: "American Express UK",
				status: "VIP Companies"
			},
			{
				contact: "Bill Buchanan",
				email: "bill-buch@yahoo.com",
				phone: "967-527-9383",
				title: "Telescopes 101",
				company: "Admiral Group plc",
				status: "Top Companies"
			},
			{
				contact: "Effie Guzman",
				email: "effie-guz@yahoo.com",
				phone: "829-779-4544",
				title: "The Amazing Hubble",
				company: "Exxon Mobil",
				status: "New Companies"
			},
			{
				contact: "Rodney Boone",
				email: "rodne@lind.co.uk",
				phone: "174-612-7499",
				title: "Asteroids",
				company: "Royal Dutch Shell",
				status: "VIP Companies"
			},
			{
				contact: "Barbara Maxwell",
				email: "barbara-maxwell@hotmail.com",
				phone: "783-320-7752",
				title: "Telescopes 101",
				company: "American Express UK",
				status: "Top Companies"
			},
			{
				contact: "Ellen Thornton",
				email: "thornton@crooks.com",
				phone: "926-605-0520",
				title: "The Night Sky",
				company: "Volkswagen",
				status: "New Companies"
			},
		],
		mail: [
			{
				name: "Google Inc",
				email: "google@gmail.com",
				theme: "Adwords Keyword Research For Beginners",
				bookmark: true,
				time: "07:24 AM",
				status: false,
				important: true,
				type: "Inbox",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1, attachment2 ]
			},
			{
				name: "Apple",
				email: "apple@gmail.com",
				theme: "Types Of Cookware Pots And Pans",
				bookmark: false,
				time: "05:12 AM",
				status: false,
				important: true,
				type: "Draft",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1 ]
			},
			{
				name: "Mathilda Jensen",
				email: "mathilda_jensen@gmail.com",
				avatar: mathildaJensen,
				theme: "Ннpes Of Cookware Pots And Pans",
				bookmark: false,
				time: "05:12 AM",
				status: false,
				important: true,
				type: "Sent Mail",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: []
			},
			{
				name: "Google Inc",
				email: "google@gmail.com",
				theme: "What Is The Big R For Marketing Your Business",
				bookmark: true,
				time: "05:12 AM",
				status: true,
				important: true,
				type: "Inbox",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1, attachment2 ]
			},
			{
				name: "Yell Inc ",
				email: "yell@gmail.com",
				theme: "Gourmet Cooking For Pleasure",
				bookmark: true,
				time: "03:12 AM",
				status: true,
				important: false,
				type: "Draft",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1, attachment2 ]
			},
			{
				name: "Bill Neal",
				email: "bill_neal@gmail.com",
				avatar: billNeal,
				theme: "The Night Sky",
				bookmark: true,
				time: "05:12 AM",
				status: false,
				important: false,
				type: "Inbox",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1, attachment2 ]
			},
			{
				name: "Lois James",
				email: "lois_james@gmail.com",
				avatar: loisJames,
				theme: "Pes Of Cookware Pots And Pans",
				bookmark: false,
				time: "03:07 AM",
				status: true,
				important: false,
				type: "Draft",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1, attachment2 ]
			},
			{
				name: "Earl Peterson",
				email: "earl_peterson@gmail.com",
				avatar: earlPeterson,
				theme: "Choose The Perfect Accommodations",
				bookmark: false,
				time: "02:12 AM",
				status: false,
				important: false,
				type: "Sent Mail",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1, attachment2 ]
			},
			{
				name: "Gussie Payne",
				email: "gussie_payne@gmail.com",
				avatar: gussiePayne,
				theme: "Comment On The Importance Of Human Life",
				bookmark: false,
				time: "02:11 AM",
				status: true,
				important: true,
				type: "Draft",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment2 ]
			},
			{
				name: "Pearl Santiago",
				email: "pearl_santiago@gmail.com",
				avatar: pearlSantiago,
				theme: "Breast Lifts Improvement Without Implants",
				bookmark: false,
				time: "01:12 AM",
				status: true,
				important: false,
				type: "Sent Mail",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment2 ]
			},
			{
				name: "Nelle Chandler",
				email: "nelle_chandler@gmail.com",
				theme: "Live Poker How To Win Tournament Games",
				bookmark: true,
				time: "01:09 AM",
				status: true,
				important: false,
				type: "Sent Mail",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: []
			},
			{
				name: "Bryan Quinn",
				email: "bryan_quinn@gmail.com",
				avatar: bryanQuinn,
				theme: "Cheap Romantic Vacations",
				bookmark: true,
				time: "01:12 AM",
				status: true,
				important: false,
				type: "Trash",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1, attachment2 ]
			},
			{
				name: "Irene Manning",
				email: "irene_manning@gmail.com",
				avatar: ireneManning,
				theme: "Lifts Improvement Without Implants",
				bookmark: false,
				time: "00:19 AM",
				status: true,
				important: false,
				type: "Trash",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1, attachment2 ]
			},
		],
		statistic: {
			line: [
				[
					{day: "27.09.16", "Time on site": 40},
					{day: "28.09.16", "Time on site": 30},
					{day: "29.09.16", "Time on site": 20},
					{day: "30.09.16", "Time on site": 27},
					{day: "21.09.16", "Time on site": 18},
					{day: "01.10.16", "Time on site": 23},
					{day: "02.10.16", "Time on site": 34},
				],
				[
					{day: "27.09.16", Users: 32},
					{day: "28.09.16", Users: 12},
					{day: "29.09.16", Users: 20},
					{day: "30.09.16", Users: 27},
					{day: "21.09.16", Users: 13},
					{day: "01.10.16", Users: 40},
					{day: "02.10.16", Users: 34},
				],
				[
					{day: "27.09.16", "New Users": 32},
					{day: "28.09.16", "New Users": 12},
					{day: "29.09.16", "New Users": 20},
					{day: "30.09.16", "New Users": 27},
					{day: "21.09.16", "New Users": 13},
					{day: "01.10.16", "New Users": 40},
					{day: "02.10.16", "New Users": 34},
				]
			],
			circle: [
				[
					{name: "Desktop Computers", value: 60},
					{name: "Smartphones", value: 12},
					{name: "Tablets", value: 18},
				],
				[
					{name: "25-34 age", value: 50},
					{name: "45 age and older", value: 10},
					{name: "35-44 age", value: 20},
					{name: "18-24 age", value: 10},
				],
				[
					{name: "Search engines", value: 70},
					{name: "Directs click", value: 10},
					{name: "Other website clicks", value: 10},
					{name: "Bookmarks click", value: 10},
				],
			],
			area: [
				{
					label: "View depth",
					value: "3.05",
					percent: "+21.5%",
					data: [
						{value: 15},
						{value: 23},
						{value: 10},
						{value: 35},
						{value: 5},
					]
				},
				{
					label: "Bounce Rate",
					value: "22.8%",
					percent: "-2.65%",
					data: [
						{value: 15},
						{value: 3},
						{value: 19},
						{value: 35},
						{value: 5},
					]
				},
				{
					label: "Time on",
					value: "1:31",
					percent: "+16.7%",
					data: [
						{value: 5},
						{value: 43},
						{value: 19},
						{value: 25},
						{value: 1},
					]
				}
			],
			bar: [
				{day: "27-09", value: 55},
				{day: "28-09", value: 125},
				{day: "29-09", value: 85},
				{day: "30-09", value: 130},
				{day: "31-09", value: 25},
				{day: "01-10", value: 105},
				{day: "02-10", value: 95},
				{day: "03-10", value: 55},
				{day: "04-10", value: 85},
				{day: "05-10", value: 65},
				{day: "06-10", value: 45},
				{day: "07-10", value: 95},
				{day: "08-10", value: 115},
				{day: "09-10", value: 125},
				{day: "10-10", value: 85},
				{day: "11-10", value: 100},
				{day: "12-10", value: 85},
				{day: "13-10", value: 95},
				{day: "14-10", value: 35},
				{day: "15-10", value: 60},
				{day: "16-10", value: 95},
				{day: "17-10", value: 25},
				{day: "18-10", value: 120},
				{day: "19-10", value: 125},
				{day: "20-10", value: 100},
				{day: "21-10", value: 85},
				{day: "22-10", value: 50},
				{day: "23-10", value: 55},
				{day: "24-10", value: 75},
			],
			table: [
				{
					name: "24-10-2016",
					visits: 125,
					visitors: 115,
					views: 234,
					percent: 78,
					failure: 16.5,
					depth: 2.43,
					time: "2:46"
				},
				{
					name: "23-10-2016",
					visits: 102,
					visitors: 89,
					views: 432,
					percent: 85.6,
					failure: 12,
					depth: 1.65,
					time: "5:98"
				},
				{
					name: "22-10-2016",
					visits: 145,
					visitors: 135,
					views: 543,
					percent: 87,
					failure: 16,
					depth: 2.34,
					time: "5:98"
				},
				{
					name: "21-10-2016",
					visits: 145,
					visitors: 135,
					views: 435,
					percent: 87,
					failure: 12,
					depth: 1.65,
					time: "5:98"
				}
			]
		}
	},
	{
		login: 'katemiddleton@gmail.com',
		name: 'Kate Middleton',
		avatar: kateMiddleton,
		commerceDashboard: {
			tableCard: [
				{label: "New clients", quantity: "25", percent: "-11", class: "top"},
				{label: "Returning сlients", quantity: "8", percent: "+5", class: "top"},
				{label: "Vip сlients", quantity: "1", percent: "-11", class: "top"},
				{label: "Orders on client", quantity: "1.44", percent: "+5", class: "top"},
				{label: "Bounce on client", quantity: "30.77%", percent: "+5", class: "top"},
				{label: "Beetwen orders", quantity: "3 Days", percent: "+5", class: "top"},
				{label: "New Orders", quantity: "26", percent: "-11", class: "bottom"},
				{label: "Confirmed Order", quantity: "15", percent: "-11", class: "bottom"},
				{label: "Preparing Delivery", quantity: "4", percent: "+5", class: "bottom"},
				{label: "Delivery", quantity: "2", percent: "-11", class: "bottom"},
				{label: "Delivered", quantity: "10", percent: "+5", class: "bottom"},
				{label: "Returns", quantity: "2", percent: "+5", class: "bottom"},
			],
			barChartGroupsGoods: [
				{label: "Baby clothing", percent: 13},
				{label: "Clothing", percent: 45},
				{label: "Pet carrier", percent: 20},
				{label: "Baby products", percent: 35},
				{label: "Toys", percent: 5},
				{label: "Furniture", percent: 34},
			],
			barChartChannel: [
				{label: "Yahoo", percent: 24},
				{label: "Google Search", percent: 35},
				{label: "Google Adwords", percent: 22},
				{label: "Direct", percent: 12},
				{label: "Bing", percent: 6},
				{label: "Youtube", percent: 9},
			],
			lastProductSales: [
				{
					image: bag,
					product: "Valentino Lady's bag",
					timeOrder: "09:29 PM",
					number: 190456,
					price: 686.64,
					quantity: 1,
					totalPrice: 686.64,
					customer: "J. Moody",
				},
				{
					image: shoes,
					product: "White Sneakers Nike",
					timeOrder: "09:28 PM",
					number: 190455,
					price: 682.62,
					quantity: 2,
					totalPrice: 686.64,
					customer: "F. Newman",
				},
				{
					image: glass,
					product: "Black Female Sunglasses",
					timeOrder: "09:26 PM",
					number: 190454,
					price: 19.91,
					quantity: 3,
					totalPrice: 686.64,
					customer: "F. Rodriguez",
				},
				
				{
					image: shoes2,
					product: "White Orange Nike Sneakers",
					timeOrder: "Yesterday",
					number: 190453,
					price: 216.76,
					quantity: 1,
					totalPrice: 686.64,
					customer: "M.French",
				},
				{
					image: clothes,
					product: "Raincoat jacket",
					timeOrder: "Yesterday",
					number: 190452,
					price: 273.63,
					quantity: 1,
					totalPrice: 686.64,
					customer: "K. King",
				},
			],
			stat: [
				{label: "Total Revenue", quantity: 40.256},
				{label: "Sales", quantity: 1.565},
				{label: "Deliveries", quantity: 1245},
				{label: "Users", quantity: 1576},
			],
			revenue: [
				{
					label1: "Total sales made today", 
					percent: 55, 
					label2: "Target", 
					number2: 1000, 
					label3: "Last week", 
					number3: 224, 
					label4: "Last month", 
					number4: 965
				},
				{
					label1: "Total sales made today", 
					percent: 80, 
					label2: "Target", 
					number2: 1000, 
					label3: "Last week", 
					number3: 224, 
					label4: "Last month", 
					number4: 965
				},
				{
					label1: "Total sales made today", 
					percent: 60, 
					label2: "Target", 
					number2: 1000, 
					label3: "Last week", 
					number3: 224, 
					label4: "Last month", 
					number4: 965
				}
			],
			products: [
				{
					image: sony,
					name: "Sony Xperia X Compact (black)",
					views: 1334,
					sales: 20,
					price: 915.66
				},
				{
					image: apple7plus,
					name: "Apple iPhone 7 Plus 128GB (black)",
					views: 1223,
					sales: 21,
					price: 456.75
				},
				{
					image: apple5sgray,
					name: "Apple iPhone 5s 16GB (gray space)",
					views: 1123,
					sales: 22,
					price: 696.50
				},
				{
					image: apple732,
					name: "Apple iPhone 7 32GB (pink gold)",
					views: 956,
					sales: 23,
					price: 456.48
				},
				{
					image: apple5ssilver,
					name: "Apple iPhone 5s 16GB (silver)",
					views: 800,
					sales: 54,
					price: 915.66
				},
				{
					image: apple7128,
					name: "Apple iPhone 7 128GB (pink gold)",
					views: 810,
					sales: 48,
					price: 456.78
				},
				{
					image: senseit,
					name: "SENSEIT E400 (blue)",
					views: 820,
					sales: 47,
					price: 695.50
				},
				{
					image: xiomi,
					name: "Xiaomi Redmi 3 S 2GB/16GB (silver)",
					views: 830,
					sales: 34,
					price: 456.48
				}
			]
		},
		analyticsDashboard: {
			infoBoards: [
				{
					label: "Incoming requests 5",
					children: [
						"Incoming requests",
						"The 3 Golden Rules Professional Graphic...",
						"The Universe Through A Child S Eyes",
						"The Basics Of Western Astrology Explained",
						"Astronomy Or Astrology...",
						"How To Maintain Your Mental Health"
					]
				},
				{
					label: "Intial Contact 2",
					children: [
						"Vinyl Banners With Its Different Types Kinds...",
						"Astronomy Or Astrology...",
						"Vinyl Banners With Its Different Types Kinds...",
						"Where To Look For Ch..."
					]
				},
				{
					label: "Offer Made 2",
					children: [
						"Vinyl Banners With Its Different Types Kinds...",
						"6 Powerful Tips To Creating Testimonial...",
						"Stair Lifts Feel The Freedom Of Your Home"
					]
				},
				{
					label: "Negotiation 6",
					children: [
						"The Universe Through...",
						"Vinyl Banners With Its Different Types Kinds...",
						"Althusser Competing Interpellations And....",
						"Creating Remarkable Poster Prints ..."
					]
				},
				{
					label: "Contract 2",
					children: [
						"What If They Let You Run The Hubble",
						"How To Fly A Private Jet..."
					]
				},
				{
					label: "Won leads 7",
					children: [
						"Vinyl Banners With Its Different Types Kinds...",
						"How To Boost Your Traffic Of Your Blog And...",
						"How To Maintain Your Mental Health"
					]
				}
			],
			tasks: [
				{
					label: "Overdue tasks",
					quantity: 2,
					percent: 10,
					lastWeek: 4
				},
				{
					label: "Task To Do",
					quantity: 10,
					percent: 70,
					lastWeek: 4
				},
				{
					label: "Completed Task",
					quantity: 5,
					percent: 10,
					lastWeek: 4
				},
				{
					label: "Leads without To Do",
					quantity: 2,
					percent: 10,
					lastWeek: 4
				}
			],
			circle: [
				{
					name: "Incoming requests",
					value: 85.6
				},
				{
					name: "Intial Contact",
					value: 20.9
				},
				{
					name: "Offer Made",
					value: 14.9
				},
				{
					name: "Negotiation",
					value: 11.9
				},
				{
					name: "Contract",
					value: 11.9
				},
				{
					name: "Won leads",
					value: 11.9
				},
			],
			totalDeals: [
				{
					image: garyBryan,
					name: "Gary Bryan",
					deals: 33,
					won: 5,
					todo: 24,
					sale: 984
				},
				{
					image: miltonDay,
					name: "Milton Day",
					deals: 23,
					won: 4,
					todo: 21,
					sale: 847
				},
				{
					image: nicholasStokes,
					name: "Nick Stok",
					deals: 15,
					won: 2,
					todo: 15,
					sale: 610
				},
				{
					image: adaThompson,
					name: "Ada Thom",
					deals: 12,
					won: 1,
					todo: 12,
					sale: 567
				},
				{
					image: lelaHarris,
					name: "Lela Harris",
					deals: 8,
					won: 2,
					todo: 6,
					sale: 465
				}
			]
		},
		allDeals: [
			{
				title: "The Universe Through A Child S Eyes",
				contact: "Aiden Day",
				company: "American Express UK",
				status: "INITIAL CONTACT",
				sales: 834.4
			},
			{
				title: "Astronomy Or Astrology",
				contact: "Lee Crawford",
				company: "Admiral Group plc",
				status: "OFFER MADE",
				sales: 342.86
			},
			{
				title: "Pictures In The Sky",
				contact: "Tony Walsh",
				company: "McDonald's Ltd",
				status: "NEGOTIATION",
				sales: 392.26
			},
			{
				title: "Shooting Stars",
				contact: "Ronald Gonzales",
				company: "Marriott Hotels Ltd",
				status: "INCOMING REQUEST",
				sales: 729.63
			},
			{
				title: "Moon Fever",
				contact: "Wesley Campbell",
				company: "Volkswagen",
				status: "NEGOTIATION",
				sales: 25.27
			},
			{
				title: "Space The Final Frontier",
				contact: "Amelia Tate",
				company: "Exxon Mobil",
				status: "CONTACT",
				sales: 145.01
			},
		],
		clients: [
			{
				contact: "Jose Cortez",
				email: "torphy_shanon@gmail.com",
				phone: "765-889-1804",
				title: "Space The Final Frontier",
				company: "American Express UK",
				status: "VIP Clients"
			},
			{
				contact: "Bill Buchanan",
				email: "bill-buch@yahoo.com",
				phone: "967-527-9383",
				title: "Telescopes 101",
				company: "Admiral Group plc",
				status: "Top Sale"
			},
			{
				contact: "Effie Guzman",
				email: "effie-guz@yahoo.com",
				phone: "829-779-4544",
				title: "The Amazing Hubble",
				company: "Exxon Mobil",
				status: "New Clients"
			},
			{
				contact: "Rodney Boone",
				email: "rodne@lind.co.uk",
				phone: "174-612-7499",
				title: "Asteroids",
				company: "Royal Dutch Shell",
				status: "VIP Clients"
			},
			{
				contact: "Barbara Maxwell",
				email: "barbara-maxwell@hotmail.com",
				phone: "783-320-7752",
				title: "Telescopes 101",
				company: "American Express UK",
				status: "Top Sale"
			},
			{
				contact: "Ellen Thornton",
				email: "thornton@crooks.com",
				phone: "926-605-0520",
				title: "The Night Sky",
				company: "Volkswagen",
				status: "New Clients"
			},
		],
		companies: [
			{
				contact: "Jose Cortez",
				email: "torphy_shanon@gmail.com",
				phone: "765-889-1804",
				title: "Space The Final Frontier",
				company: "American Express UK",
				status: "VIP Companies"
			},
			{
				contact: "Bill Buchanan",
				email: "bill-buch@yahoo.com",
				phone: "967-527-9383",
				title: "Telescopes 101",
				company: "Admiral Group plc",
				status: "Top Companies"
			},
			{
				contact: "Effie Guzman",
				email: "effie-guz@yahoo.com",
				phone: "829-779-4544",
				title: "The Amazing Hubble",
				company: "Exxon Mobil",
				status: "New Companies"
			},
			{
				contact: "Rodney Boone",
				email: "rodne@lind.co.uk",
				phone: "174-612-7499",
				title: "Asteroids",
				company: "Royal Dutch Shell",
				status: "VIP Companies"
			},
			{
				contact: "Barbara Maxwell",
				email: "barbara-maxwell@hotmail.com",
				phone: "783-320-7752",
				title: "Telescopes 101",
				company: "American Express UK",
				status: "Top Companies"
			},
			{
				contact: "Ellen Thornton",
				email: "thornton@crooks.com",
				phone: "926-605-0520",
				title: "The Night Sky",
				company: "Volkswagen",
				status: "New Companies"
			},
		],
		mail: [
			{
				name: "Google Inc",
				email: "google@gmail.com",
				theme: "Adwords Keyword Research For Beginners",
				bookmark: true,
				time: "07:24 AM",
				status: false,
				important: true,
				type: "Inbox",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1, attachment2 ]
			},
			{
				name: "Apple",
				email: "apple@gmail.com",
				theme: "Types Of Cookware Pots And Pans",
				bookmark: false,
				time: "05:12 AM",
				status: false,
				important: true,
				type: "Draft",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1 ]
			},
			{
				name: "Mathilda Jensen",
				email: "mathilda_jensen@gmail.com",
				avatar: mathildaJensen,
				theme: "Ннpes Of Cookware Pots And Pans",
				bookmark: false,
				time: "05:12 AM",
				status: false,
				important: true,
				type: "Sent Mail",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: []
			},
			{
				name: "Google Inc",
				email: "google@gmail.com",
				theme: "What Is The Big R For Marketing Your Business",
				bookmark: true,
				time: "05:12 AM",
				status: true,
				important: true,
				type: "Inbox",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1, attachment2 ]
			},
			{
				name: "Yell Inc ",
				email: "yell@gmail.com",
				theme: "Gourmet Cooking For Pleasure",
				bookmark: true,
				time: "03:12 AM",
				status: true,
				important: false,
				type: "Draft",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1, attachment2 ]
			},
			{
				name: "Bill Neal",
				email: "bill_neal@gmail.com",
				avatar: billNeal,
				theme: "The Night Sky",
				bookmark: true,
				time: "05:12 AM",
				status: false,
				important: false,
				type: "Inbox",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1, attachment2 ]
			},
			{
				name: "Lois James",
				email: "lois_james@gmail.com",
				avatar: loisJames,
				theme: "Pes Of Cookware Pots And Pans",
				bookmark: false,
				time: "03:07 AM",
				status: true,
				important: false,
				type: "Draft",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1, attachment2 ]
			},
			{
				name: "Earl Peterson",
				email: "earl_peterson@gmail.com",
				avatar: earlPeterson,
				theme: "Choose The Perfect Accommodations",
				bookmark: false,
				time: "02:12 AM",
				status: false,
				important: false,
				type: "Sent Mail",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1, attachment2 ]
			},
			{
				name: "Gussie Payne",
				email: "gussie_payne@gmail.com",
				avatar: gussiePayne,
				theme: "Comment On The Importance Of Human Life",
				bookmark: false,
				time: "02:11 AM",
				status: true,
				important: true,
				type: "Draft",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment2 ]
			},
			{
				name: "Pearl Santiago",
				email: "pearl_santiago@gmail.com",
				avatar: pearlSantiago,
				theme: "Breast Lifts Improvement Without Implants",
				bookmark: false,
				time: "01:12 AM",
				status: true,
				important: false,
				type: "Sent Mail",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment2 ]
			},
			{
				name: "Nelle Chandler",
				email: "nelle_chandler@gmail.com",
				theme: "Live Poker How To Win Tournament Games",
				bookmark: true,
				time: "01:09 AM",
				status: true,
				important: false,
				type: "Sent Mail",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: []
			},
			{
				name: "Bryan Quinn",
				email: "bryan_quinn@gmail.com",
				avatar: bryanQuinn,
				theme: "Cheap Romantic Vacations",
				bookmark: true,
				time: "01:12 AM",
				status: true,
				important: false,
				type: "Trash",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1, attachment2 ]
			},
			{
				name: "Irene Manning",
				email: "irene_manning@gmail.com",
				avatar: ireneManning,
				theme: "Lifts Improvement Without Implants",
				bookmark: false,
				time: "00:19 AM",
				status: true,
				important: false,
				type: "Trash",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1, attachment2 ]
			},
		],
		statistic: {
			line: [
				[
					{day: "27.09.16", "Time on site": 40},
					{day: "28.09.16", "Time on site": 30},
					{day: "29.09.16", "Time on site": 20},
					{day: "30.09.16", "Time on site": 27},
					{day: "21.09.16", "Time on site": 18},
					{day: "01.10.16", "Time on site": 23},
					{day: "02.10.16", "Time on site": 34},
				],
				[
					{day: "27.09.16", Users: 32},
					{day: "28.09.16", Users: 12},
					{day: "29.09.16", Users: 20},
					{day: "30.09.16", Users: 27},
					{day: "21.09.16", Users: 13},
					{day: "01.10.16", Users: 40},
					{day: "02.10.16", Users: 34},
				],
				[
					{day: "27.09.16", "New Users": 32},
					{day: "28.09.16", "New Users": 12},
					{day: "29.09.16", "New Users": 20},
					{day: "30.09.16", "New Users": 27},
					{day: "21.09.16", "New Users": 13},
					{day: "01.10.16", "New Users": 40},
					{day: "02.10.16", "New Users": 34},
				]
			],
			circle: [
				[
					{name: "Desktop Computers", value: 60},
					{name: "Smartphones", value: 12},
					{name: "Tablets", value: 18},
				],
				[
					{name: "25-34 age", value: 50},
					{name: "45 age and older", value: 10},
					{name: "35-44 age", value: 20},
					{name: "18-24 age", value: 10},
				],
				[
					{name: "Search engines", value: 70},
					{name: "Directs click", value: 10},
					{name: "Other website clicks", value: 10},
					{name: "Bookmarks click", value: 10},
				],
			],
			area: [
				{
					label: "View depth",
					value: "3.05",
					percent: "+21.5%",
					data: [
						{value: 15},
						{value: 23},
						{value: 10},
						{value: 35},
						{value: 5},
					]
				},
				{
					label: "Bounce Rate",
					value: "22.8%",
					percent: "-2.65%",
					data: [
						{value: 15},
						{value: 3},
						{value: 19},
						{value: 35},
						{value: 5},
					]
				},
				{
					label: "Time on",
					value: "1:31",
					percent: "+16.7%",
					data: [
						{value: 5},
						{value: 43},
						{value: 19},
						{value: 25},
						{value: 1},
					]
				}
			],
			bar: [
				{day: "27-09", value: 55},
				{day: "28-09", value: 125},
				{day: "29-09", value: 85},
				{day: "30-09", value: 130},
				{day: "31-09", value: 25},
				{day: "01-10", value: 105},
				{day: "02-10", value: 95},
				{day: "03-10", value: 55},
				{day: "04-10", value: 85},
				{day: "05-10", value: 65},
				{day: "06-10", value: 45},
				{day: "07-10", value: 95},
				{day: "08-10", value: 115},
				{day: "09-10", value: 125},
				{day: "10-10", value: 85},
				{day: "11-10", value: 100},
				{day: "12-10", value: 85},
				{day: "13-10", value: 95},
				{day: "14-10", value: 35},
				{day: "15-10", value: 60},
				{day: "16-10", value: 95},
				{day: "17-10", value: 25},
				{day: "18-10", value: 120},
				{day: "19-10", value: 125},
				{day: "20-10", value: 100},
				{day: "21-10", value: 85},
				{day: "22-10", value: 50},
				{day: "23-10", value: 55},
				{day: "24-10", value: 75},
			]
		}
	},
	{
		login: 'ronaldhenry@gmail.com',
		name: 'Ronald Henry',
		avatar: ronaldHenry,
		commerceDashboard: {
			tableCard: [
				{label: "New clients", quantity: "25", percent: "-11"},
				{label: "Returning сlients", quantity: "8", percent: "+5"},
				{label: "Vip сlients", quantity: "1", percent: "-11"},
				{label: "Orders on client", quantity: "1.44", percent: "+5"},
				{label: "Bounce on client", quantity: "30.77%", percent: "+5"},
				{label: "Beetwen orders", quantity: "3 Days", percent: "+5"},
				{label: "New Orders", quantity: "26", percent: "-11"},
				{label: "Confirmed Order", quantity: "15", percent: "-11"},
				{label: "Preparing Delivery", quantity: "4", percent: "+5"},
				{label: "Delivery", quantity: "2", percent: "-11"},
				{label: "Delivered", quantity: "10", percent: "+5"},
				{label: "Returns", quantity: "2", percent: "+5"},
			],
			barChartGroupsGoods: [
				{label: "Baby clothing", percent: 24},
				{label: "Clothing", percent: 45},
				{label: "Pet carrier", percent: 32},
				{label: "Baby products", percent: 49},
				{label: "Toys", percent: 15},
				{label: "Furniture", percent: 33},
			],
			barChartChannel: [
				{label: "Yahoo", percent: 25},
				{label: "Google Search", percent: 33},
				{label: "Google Adwords", percent: 38},
				{label: "Direct", percent: 12},
				{label: "Bing", percent: 1},
				{label: "Youtube", percent: 16},
			],
			lastProductSales: [
				{
					image: bag,
					product: "Valentino Lady's bag",
					timeOrder: "09:29 PM",
					number: 190456,
					price: 686.64,
					quantity: 1,
					totalPrice: 686.64,
					customer: "J. Moody",
				},
				{
					image: shoes,
					product: "White Sneakers Nike",
					timeOrder: "09:28 PM",
					number: 190455,
					price: 682.62,
					quantity: 2,
					totalPrice: 686.64,
					customer: "F. Newman",
				},
				{
					image: glass,
					product: "Black Female Sunglasses",
					timeOrder: "09:26 PM",
					number: 190454,
					price: 19.91,
					quantity: 3,
					totalPrice: 686.64,
					customer: "F. Rodriguez",
				},
				
				{
					image: shoes2,
					product: "White Orange Nike Sneakers",
					timeOrder: "Yesterday",
					number: 190453,
					price: 216.76,
					quantity: 1,
					totalPrice: 686.64,
					customer: "M.French",
				},
				{
					image: clothes,
					product: "Raincoat jacket",
					timeOrder: "Yesterday",
					number: 190452,
					price: 273.63,
					quantity: 1,
					totalPrice: 686.64,
					customer: "K. King",
				},
			],
			stat: [
				{label: "Total Revenue", quantity: 40.256},
				{label: "Sales", quantity: 1.565},
				{label: "Deliveries", quantity: 1245},
				{label: "Users", quantity: 1576},
			],
			revenue: [
				{
					label1: "Total sales made today", 
					percent: 55, 
					label2: "Target", 
					number2: 1000, 
					label3: "Last week", 
					number3: 224, 
					label4: "Last month", 
					number4: 965
				},
				{
					label1: "Total sales made today", 
					percent: 80, 
					label2: "Target", 
					number2: 1000, 
					label3: "Last week", 
					number3: 224, 
					label4: "Last month", 
					number4: 965
				},
				{
					label1: "Total sales made today", 
					percent: 60, 
					label2: "Target", 
					number2: 1000, 
					label3: "Last week", 
					number3: 224, 
					label4: "Last month", 
					number4: 965
				}
			],
			products: [
				{
					image: sony,
					name: "Sony Xperia X Compact (black)",
					views: 1334,
					sales: 20,
					price: 915.66
				},
				{
					image: apple7plus,
					name: "Apple iPhone 7 Plus 128GB (black)",
					views: 1223,
					sales: 21,
					price: 456.75
				},
				{
					image: apple5sgray,
					name: "Apple iPhone 5s 16GB (gray space)",
					views: 1123,
					sales: 22,
					price: 696.50
				},
				{
					image: apple732,
					name: "Apple iPhone 7 32GB (pink gold)",
					views: 956,
					sales: 23,
					price: 456.48
				},
				{
					image: apple5ssilver,
					name: "Apple iPhone 5s 16GB (silver)",
					views: 800,
					sales: 54,
					price: 915.66
				},
				{
					image: apple7128,
					name: "Apple iPhone 7 128GB (pink gold)",
					views: 810,
					sales: 48,
					price: 456.78
				},
				{
					image: senseit,
					name: "SENSEIT E400 (blue)",
					views: 820,
					sales: 47,
					price: 695.50
				},
				{
					image: xiomi,
					name: "Xiaomi Redmi 3 S 2GB/16GB (silver)",
					views: 830,
					sales: 34,
					price: 456.48
				}
			]
		},
		analyticsDashboard: {
			infoBoards: [
				{
					label: "Incoming requests 5",
					children: [
						"Incoming requests",
						"The 3 Golden Rules Professional Graphic...",
						"The Universe Through A Child S Eyes",
						"The Basics Of Western Astrology Explained",
						"Astronomy Or Astrology...",
						"How To Maintain Your Mental Health"
					]
				},
				{
					label: "Intial Contact 2",
					children: [
						"Vinyl Banners With Its Different Types Kinds...",
						"Astronomy Or Astrology...",
						"Vinyl Banners With Its Different Types Kinds...",
						"Where To Look For Ch..."
					]
				},
				{
					label: "Offer Made 2",
					children: [
						"Vinyl Banners With Its Different Types Kinds...",
						"6 Powerful Tips To Creating Testimonial...",
						"Stair Lifts Feel The Freedom Of Your Home"
					]
				},
				{
					label: "Negotiation 6",
					children: [
						"The Universe Through...",
						"Vinyl Banners With Its Different Types Kinds...",
						"Althusser Competing Interpellations And....",
						"Creating Remarkable Poster Prints ..."
					]
				},
				{
					label: "Contract 2",
					children: [
						"What If They Let You Run The Hubble",
						"How To Fly A Private Jet..."
					]
				},
				{
					label: "Won leads 7",
					children: [
						"Vinyl Banners With Its Different Types Kinds...",
						"How To Boost Your Traffic Of Your Blog And...",
						"How To Maintain Your Mental Health"
					]
				}
			],
			tasks: [
				{
					label: "Overdue tasks",
					quantity: 2,
					percent: 10,
					lastWeek: 4
				},
				{
					label: "Task To Do",
					quantity: 10,
					percent: 70,
					lastWeek: 4
				},
				{
					label: "Completed Task",
					quantity: 5,
					percent: 10,
					lastWeek: 4
				},
				{
					label: "Leads without To Do",
					quantity: 2,
					percent: 10,
					lastWeek: 4
				}
			],
			circle: [
				{
					name: "Incoming requests",
					value: 85.6
				},
				{
					name: "Intial Contact",
					value: 20.9
				},
				{
					name: "Offer Made",
					value: 14.9
				},
				{
					name: "Negotiation",
					value: 11.9
				},
				{
					name: "Contract",
					value: 11.9
				},
				{
					name: "Won leads",
					value: 11.9
				},
			],
			totalDeals: [
				{
					image: garyBryan,
					name: "Gary Bryan",
					deals: 33,
					won: 5,
					todo: 24,
					sale: 984
				},
				{
					image: miltonDay,
					name: "Milton Day",
					deals: 23,
					won: 4,
					todo: 21,
					sale: 847
				},
				{
					image: nicholasStokes,
					name: "Nick Stok",
					deals: 15,
					won: 2,
					todo: 15,
					sale: 610
				},
				{
					image: adaThompson,
					name: "Ada Thom",
					deals: 12,
					won: 1,
					todo: 12,
					sale: 567
				},
				{
					image: lelaHarris,
					name: "Lela Harris",
					deals: 8,
					won: 2,
					todo: 6,
					sale: 465
				}
			]
		},
		allDeals: [
			{
				title: "The Universe Through A Child S Eyes",
				contact: "Aiden Day",
				company: "American Express UK",
				status: "INITIAL CONTACT",
				sales: 834.4
			},
			{
				title: "Astronomy Or Astrology",
				contact: "Lee Crawford",
				company: "Admiral Group plc",
				status: "OFFER MADE",
				sales: 342.86
			},
			{
				title: "Pictures In The Sky",
				contact: "Tony Walsh",
				company: "McDonald's Ltd",
				status: "NEGOTIATION",
				sales: 392.26
			},
			{
				title: "Shooting Stars",
				contact: "Ronald Gonzales",
				company: "Marriott Hotels Ltd",
				status: "INCOMING REQUEST",
				sales: 729.63
			},
			{
				title: "Moon Fever",
				contact: "Wesley Campbell",
				company: "Volkswagen",
				status: "NEGOTIATION",
				sales: 25.27
			},
			{
				title: "Space The Final Frontier",
				contact: "Amelia Tate",
				company: "Exxon Mobil",
				status: "CONTACT",
				sales: 145.01
			},
		],
		clients: [
			{
				contact: "Jose Cortez",
				email: "torphy_shanon@gmail.com",
				phone: "765-889-1804",
				title: "Space The Final Frontier",
				company: "American Express UK",
				status: "VIP Clients"
			},
			{
				contact: "Bill Buchanan",
				email: "bill-buch@yahoo.com",
				phone: "967-527-9383",
				title: "Telescopes 101",
				company: "Admiral Group plc",
				status: "Top Sale"
			},
			{
				contact: "Effie Guzman",
				email: "effie-guz@yahoo.com",
				phone: "829-779-4544",
				title: "The Amazing Hubble",
				company: "Exxon Mobil",
				status: "New Clients"
			},
			{
				contact: "Rodney Boone",
				email: "rodne@lind.co.uk",
				phone: "174-612-7499",
				title: "Asteroids",
				company: "Royal Dutch Shell",
				status: "VIP Clients"
			},
			{
				contact: "Barbara Maxwell",
				email: "barbara-maxwell@hotmail.com",
				phone: "783-320-7752",
				title: "Telescopes 101",
				company: "American Express UK",
				status: "Top Sale"
			},
			{
				contact: "Ellen Thornton",
				email: "thornton@crooks.com",
				phone: "926-605-0520",
				title: "The Night Sky",
				company: "Volkswagen",
				status: "New Clients"
			},
		],
		companies: [
			{
				contact: "Jose Cortez",
				email: "torphy_shanon@gmail.com",
				phone: "765-889-1804",
				title: "Space The Final Frontier",
				company: "American Express UK",
				status: "VIP Companies"
			},
			{
				contact: "Bill Buchanan",
				email: "bill-buch@yahoo.com",
				phone: "967-527-9383",
				title: "Telescopes 101",
				company: "Admiral Group plc",
				status: "Top Companies"
			},
			{
				contact: "Effie Guzman",
				email: "effie-guz@yahoo.com",
				phone: "829-779-4544",
				title: "The Amazing Hubble",
				company: "Exxon Mobil",
				status: "New Companies"
			},
			{
				contact: "Rodney Boone",
				email: "rodne@lind.co.uk",
				phone: "174-612-7499",
				title: "Asteroids",
				company: "Royal Dutch Shell",
				status: "VIP Companies"
			},
			{
				contact: "Barbara Maxwell",
				email: "barbara-maxwell@hotmail.com",
				phone: "783-320-7752",
				title: "Telescopes 101",
				company: "American Express UK",
				status: "Top Companies"
			},
			{
				contact: "Ellen Thornton",
				email: "thornton@crooks.com",
				phone: "926-605-0520",
				title: "The Night Sky",
				company: "Volkswagen",
				status: "New Companies"
			},
		],
		mail: [
			{
				name: "Google Inc",
				email: "google@gmail.com",
				theme: "Adwords Keyword Research For Beginners",
				bookmark: true,
				time: "07:24 AM",
				status: false,
				important: true,
				type: "Inbox",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1, attachment2 ]
			},
			{
				name: "Apple",
				email: "apple@gmail.com",
				theme: "Types Of Cookware Pots And Pans",
				bookmark: false,
				time: "05:12 AM",
				status: false,
				important: true,
				type: "Draft",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1 ]
			},
			{
				name: "Mathilda Jensen",
				email: "mathilda_jensen@gmail.com",
				avatar: mathildaJensen,
				theme: "Ннpes Of Cookware Pots And Pans",
				bookmark: false,
				time: "05:12 AM",
				status: false,
				important: true,
				type: "Sent Mail",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: []
			},
			{
				name: "Google Inc",
				email: "google@gmail.com",
				theme: "What Is The Big R For Marketing Your Business",
				bookmark: true,
				time: "05:12 AM",
				status: true,
				important: true,
				type: "Inbox",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1, attachment2 ]
			},
			{
				name: "Yell Inc ",
				email: "yell@gmail.com",
				theme: "Gourmet Cooking For Pleasure",
				bookmark: true,
				time: "03:12 AM",
				status: true,
				important: false,
				type: "Draft",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1, attachment2 ]
			},
			{
				name: "Bill Neal",
				email: "bill_neal@gmail.com",
				avatar: billNeal,
				theme: "The Night Sky",
				bookmark: true,
				time: "05:12 AM",
				status: false,
				important: false,
				type: "Inbox",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1, attachment2 ]
			},
			{
				name: "Lois James",
				email: "lois_james@gmail.com",
				avatar: loisJames,
				theme: "Pes Of Cookware Pots And Pans",
				bookmark: false,
				time: "03:07 AM",
				status: true,
				important: false,
				type: "Draft",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1, attachment2 ]
			},
			{
				name: "Earl Peterson",
				email: "earl_peterson@gmail.com",
				avatar: earlPeterson,
				theme: "Choose The Perfect Accommodations",
				bookmark: false,
				time: "02:12 AM",
				status: false,
				important: false,
				type: "Sent Mail",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1, attachment2 ]
			},
			{
				name: "Gussie Payne",
				email: "gussie_payne@gmail.com",
				avatar: gussiePayne,
				theme: "Comment On The Importance Of Human Life",
				bookmark: false,
				time: "02:11 AM",
				status: true,
				important: true,
				type: "Draft",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment2 ]
			},
			{
				name: "Pearl Santiago",
				email: "pearl_santiago@gmail.com",
				avatar: pearlSantiago,
				theme: "Breast Lifts Improvement Without Implants",
				bookmark: false,
				time: "01:12 AM",
				status: true,
				important: false,
				type: "Sent Mail",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment2 ]
			},
			{
				name: "Nelle Chandler",
				email: "nelle_chandler@gmail.com",
				theme: "Live Poker How To Win Tournament Games",
				bookmark: true,
				time: "01:09 AM",
				status: true,
				important: false,
				type: "Sent Mail",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: []
			},
			{
				name: "Bryan Quinn",
				email: "bryan_quinn@gmail.com",
				avatar: bryanQuinn,
				theme: "Cheap Romantic Vacations",
				bookmark: true,
				time: "01:12 AM",
				status: true,
				important: false,
				type: "Trash",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1, attachment2 ]
			},
			{
				name: "Irene Manning",
				email: "irene_manning@gmail.com",
				avatar: ireneManning,
				theme: "Lifts Improvement Without Implants",
				bookmark: false,
				time: "00:19 AM",
				status: true,
				important: false,
				type: "Trash",
				message: "Texas Holdem is by far the most common for of poker played today due to is popularity there are even several TV shows of the game. Besides being popular texas Holdem is also the best game for a beginner to learn, the game can be learned after a few minutes and afte just a few hours of practice you can be playing fairly well against other beginners, but to really get good you must play often.",
				attachments: [ attachment1, attachment2 ]
			},
		],
		statistic: {
			line: [
				[
					{day: "27.09.16", "Time on site": 40},
					{day: "28.09.16", "Time on site": 30},
					{day: "29.09.16", "Time on site": 20},
					{day: "30.09.16", "Time on site": 27},
					{day: "21.09.16", "Time on site": 18},
					{day: "01.10.16", "Time on site": 23},
					{day: "02.10.16", "Time on site": 34},
				],
				[
					{day: "27.09.16", Users: 32},
					{day: "28.09.16", Users: 12},
					{day: "29.09.16", Users: 20},
					{day: "30.09.16", Users: 27},
					{day: "21.09.16", Users: 13},
					{day: "01.10.16", Users: 40},
					{day: "02.10.16", Users: 34},
				],
				[
					{day: "27.09.16", "New Users": 32},
					{day: "28.09.16", "New Users": 12},
					{day: "29.09.16", "New Users": 20},
					{day: "30.09.16", "New Users": 27},
					{day: "21.09.16", "New Users": 13},
					{day: "01.10.16", "New Users": 40},
					{day: "02.10.16", "New Users": 34},
				]
			],
			circle: [
				[
					{name: "Desktop Computers", value: 60},
					{name: "Smartphones", value: 12},
					{name: "Tablets", value: 18},
				],
				[
					{name: "25-34 age", value: 50},
					{name: "45 age and older", value: 10},
					{name: "35-44 age", value: 20},
					{name: "18-24 age", value: 10},
				],
				[
					{name: "Search engines", value: 70},
					{name: "Directs click", value: 10},
					{name: "Other website clicks", value: 10},
					{name: "Bookmarks click", value: 10},
				],
			],
			area: [
				{
					label: "View depth",
					value: "3.05",
					percent: "+21.5%",
					data: [
						{value: 15},
						{value: 23},
						{value: 10},
						{value: 35},
						{value: 5},
					]
				},
				{
					label: "Bounce Rate",
					value: "22.8%",
					percent: "-2.65%",
					data: [
						{value: 15},
						{value: 3},
						{value: 19},
						{value: 35},
						{value: 5},
					]
				},
				{
					label: "Time on",
					value: "1:31",
					percent: "+16.7%",
					data: [
						{value: 5},
						{value: 43},
						{value: 19},
						{value: 25},
						{value: 1},
					]
				}
			],
			bar: [
				{day: "27-09", value: 55},
				{day: "28-09", value: 125},
				{day: "29-09", value: 85},
				{day: "30-09", value: 130},
				{day: "31-09", value: 25},
				{day: "01-10", value: 105},
				{day: "02-10", value: 95},
				{day: "03-10", value: 55},
				{day: "04-10", value: 85},
				{day: "05-10", value: 65},
				{day: "06-10", value: 45},
				{day: "07-10", value: 95},
				{day: "08-10", value: 115},
				{day: "09-10", value: 125},
				{day: "10-10", value: 85},
				{day: "11-10", value: 100},
				{day: "12-10", value: 85},
				{day: "13-10", value: 95},
				{day: "14-10", value: 35},
				{day: "15-10", value: 60},
				{day: "16-10", value: 95},
				{day: "17-10", value: 25},
				{day: "18-10", value: 120},
				{day: "19-10", value: 125},
				{day: "20-10", value: 100},
				{day: "21-10", value: 85},
				{day: "22-10", value: 50},
				{day: "23-10", value: 55},
				{day: "24-10", value: 75},
			]
		}
	},
] 
export default users;