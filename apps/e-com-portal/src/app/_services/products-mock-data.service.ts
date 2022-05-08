import { Injectable } from '@angular/core';

export type Product = {
  sku: string,
  name: string,
  price: number,
  rrp: number,
  image: string
}

const mockData: Product[] = [
  { sku: "671695659-X", name: "Veal Inside - Provimi", price: 166, rrp: 223, image: "http://dummyimage.com/300x300.png/ff4444/ffffff" },
  { sku: "740799661-X", name: "Milk - Condensed", price: 165, rrp: 220, image: "http://dummyimage.com/300x300.png/cc0000/ffffff" },
  { sku: "296764728-4", name: "Juice - Ocean Spray Kiwi", price: 131, rrp: 222, image: "http://dummyimage.com/300x300.png/dddddd/000000" },
  { sku: "910412149-X", name: "Island Oasis - Banana Daiquiri", price: 160, rrp: 232, image: "http://dummyimage.com/300x300.png/dddddd/000000" },
  { sku: "039035536-4", name: "Tortillas - Flour, 8", price: 83, rrp: 220, image: "http://dummyimage.com/300x300.png/5fa2dd/ffffff" },
  { sku: "841935264-0", name: "Champagne - Brights, Dry", price: 121, rrp: 238, image: "http://dummyimage.com/300x300.png/cc0000/ffffff" },
  { sku: "848338752-2", name: "Sobe - Green Tea", price: 119, rrp: 230, image: "http://dummyimage.com/300x300.png/dddddd/000000" },
  { sku: "214359502-6", name: "Energy Drink - Franks Pineapple", price: 119, rrp: 236, image: "http://dummyimage.com/300x300.png/ff4444/ffffff" },
  { sku: "522567481-X", name: "Red Currant Jelly", price: 160, rrp: 226, image: "http://dummyimage.com/300x300.png/5fa2dd/ffffff" },
  { sku: "143876903-2", name: "Chinese Foods - Chicken", price: 205, rrp: 221, image: "http://dummyimage.com/300x300.png/cc0000/ffffff" },
  { sku: "989006281-X", name: "Petit Baguette", price: 169, rrp: 226, image: "http://dummyimage.com/300x300.png/dddddd/000000" },
  { sku: "756483390-4", name: "Vinegar - White", price: 111, rrp: 238, image: "http://dummyimage.com/300x300.png/ff4444/ffffff" },
  { sku: "104898492-3", name: "Cake - Dulce De Leche", price: 129, rrp: 225, image: "http://dummyimage.com/300x300.png/cc0000/ffffff" },
  { sku: "809687564-7", name: "Appetizer - Mini Egg Roll, Shrimp", price: 113, rrp: 222, image: "http://dummyimage.com/300x300.png/ff4444/ffffff" },
  { sku: "142724549-5", name: "Eggwhite Frozen", price: 190, rrp: 233, image: "http://dummyimage.com/300x300.png/5fa2dd/ffffff" },
  { sku: "673389650-8", name: "Rum - Light, Captain Morgan", price: 91, rrp: 221, image: "http://dummyimage.com/300x300.png/dddddd/000000" },
  { sku: "374826736-3", name: "Rum - Dark, Bacardi, Black", price: 132, rrp: 234, image: "http://dummyimage.com/300x300.png/dddddd/000000" },
  { sku: "682019424-2", name: "Syrup - Kahlua Chocolate", price: 190, rrp: 231, image: "http://dummyimage.com/300x300.png/5fa2dd/ffffff" },
  { sku: "189344866-5", name: "Quiche Assorted", price: 93, rrp: 235, image: "http://dummyimage.com/300x300.png/cc0000/ffffff" },
  { sku: "474331282-5", name: "Isomalt", price: 129, rrp: 223, image: "http://dummyimage.com/300x300.png/5fa2dd/ffffff" },
  { sku: "687414807-9", name: "Jam - Raspberry", price: 123, rrp: 234, image: "http://dummyimage.com/300x300.png/cc0000/ffffff" },
  { sku: "189063719-X", name: "Shrimp - Black Tiger 26/30", price: 190, rrp: 224, image: "http://dummyimage.com/300x300.png/cc0000/ffffff" },
  { sku: "769455308-1", name: "Chicken - Whole Roasting", price: 114, rrp: 226, image: "http://dummyimage.com/300x300.png/dddddd/000000" },
  { sku: "983564263-X", name: "Squid - U 5", price: 192, rrp: 221, image: "http://dummyimage.com/300x300.png/dddddd/000000" },
  { sku: "327396877-X", name: "Onions - White", price: 188, rrp: 220, image: "http://dummyimage.com/300x300.png/5fa2dd/ffffff" },
  { sku: "759744137-1", name: "Duck - Whole", price: 171, rrp: 224, image: "http://dummyimage.com/300x300.png/cc0000/ffffff" },
  { sku: "528593671-3", name: "Blouse / Shirt / Sweater", price: 142, rrp: 224, image: "http://dummyimage.com/300x300.png/ff4444/ffffff" },
  { sku: "825761244-8", name: "Cattail Hearts", price: 216, rrp: 225, image: "http://dummyimage.com/300x300.png/dddddd/000000" },
  { sku: "971901482-2", name: "Appetizer - Asian Shrimp Roll", price: 217, rrp: 230, image: "http://dummyimage.com/300x300.png/dddddd/000000" },
  { sku: "459651269-8", name: "Longos - Cheese Tortellini", price: 140, rrp: 232, image: "http://dummyimage.com/300x300.png/dddddd/000000" },
  { sku: "293448367-3", name: "Schnappes - Peach, Walkers", price: 144, rrp: 230, image: "http://dummyimage.com/300x300.png/5fa2dd/ffffff" },
  { sku: "964529394-4", name: "Lamb Rack - Ontario", price: 162, rrp: 238, image: "http://dummyimage.com/300x300.png/ff4444/ffffff" },
  { sku: "848560311-7", name: "Tomatoes - Vine Ripe, Yellow", price: 126, rrp: 234, image: "http://dummyimage.com/300x300.png/dddddd/000000" },
  { sku: "317612856-8", name: "C - Plus, Orange", price: 84, rrp: 237, image: "http://dummyimage.com/300x300.png/cc0000/ffffff" },
  { sku: "974763783-9", name: "Cheese - Mozzarella, Shredded", price: 81, rrp: 234, image: "http://dummyimage.com/300x300.png/cc0000/ffffff" },
  { sku: "667883441-0", name: "Calaloo", price: 98, rrp: 239, image: "http://dummyimage.com/300x300.png/5fa2dd/ffffff" },
  { sku: "485994821-1", name: "Lamb - Racks, Frenched", price: 196, rrp: 238, image: "http://dummyimage.com/300x300.png/5fa2dd/ffffff" },
  { sku: "552079628-9", name: "Veal - Insides Provini", price: 126, rrp: 229, image: "http://dummyimage.com/300x300.png/5fa2dd/ffffff" },
  { sku: "480711739-4", name: "Cheese - Mix", price: 120, rrp: 227, image: "http://dummyimage.com/300x300.png/dddddd/000000" },
  { sku: "448574687-9", name: "Oil - Truffle, White", price: 176, rrp: 229, image: "http://dummyimage.com/300x300.png/cc0000/ffffff" },
  { sku: "588984471-7", name: "Pants Custom Dry Clean", price: 161, rrp: 231, image: "http://dummyimage.com/300x300.png/5fa2dd/ffffff" },
  { sku: "759501906-0", name: "Syrup - Golden, Lyles", price: 195, rrp: 231, image: "http://dummyimage.com/300x300.png/cc0000/ffffff" },
  { sku: "541083808-4", name: "Sage Ground Wiberg", price: 114, rrp: 224, image: "http://dummyimage.com/300x300.png/cc0000/ffffff" },
  { sku: "373284628-8", name: "Wine - Red, Wolf Blass, Yellow", price: 205, rrp: 226, image: "http://dummyimage.com/300x300.png/cc0000/ffffff" },
  { sku: "862496380-X", name: "Cake - Night And Day Choclate", price: 215, rrp: 238, image: "http://dummyimage.com/300x300.png/dddddd/000000" },
  { sku: "386504904-4", name: "Appetizer - Mushroom Tart", price: 191, rrp: 221, image: "http://dummyimage.com/300x300.png/5fa2dd/ffffff" },
  { sku: "132628986-1", name: "Pasta - Orzo, Dry", price: 93, rrp: 236, image: "http://dummyimage.com/300x300.png/cc0000/ffffff" },
  { sku: "151952257-6", name: "Doilies - 12, Paper", price: 108, rrp: 224, image: "http://dummyimage.com/300x300.png/cc0000/ffffff" },
  { sku: "737607169-5", name: "Sandwich Wrap", price: 104, rrp: 240, image: "http://dummyimage.com/300x300.png/dddddd/000000" },
  { sku: "075234253-3", name: "Lamb - Leg, Diced", price: 85, rrp: 226, image: "http://dummyimage.com/300x300.png/dddddd/000000" }
];

@Injectable({
  providedIn: 'root'
})
export class ProductsMockDataService {
  getMockData(): Product[] {
    return mockData;
  }
}
