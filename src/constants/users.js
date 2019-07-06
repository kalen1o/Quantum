import anonymous from '../images/anonymous.jpg';
import tonyAlvarez from '../images/Tony_Alvarez.png';
import kateMiddleton from '../images/Kate_Middleton.png';
import ronaldHenry from '../images/Ronald_Henry.png';

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
		}  
	},
] 
export default users;