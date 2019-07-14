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
		]
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
		]
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
		]
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
		]
	},
] 
export default users;