import anonymous from '../images/anonymous.jpg';
import tonyAlvarez from '../images/Tony_Alvarez.png';
import kateMiddleton from '../images/Kate_Middleton.png';
import ronaldHenry from '../images/Ronald_Henry.png';
import bag from '../images/bag.png';
import shoes from '../images/shoes.png';
import glass from '../images/glass.png';
import shoes2 from '../images/shoes2.png';
import clothes from '../images/clothes.png';

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
			]
		}  
	},
] 
export default users;