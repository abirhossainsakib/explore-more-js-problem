const phones = [
    {name: 'Samsung', Camera: 12, Storage: '32gb', price: 36000, color: 'silver'},
    {name: 'Walton', Camera: 10, Storage: '32gb', price: 22000, color: 'silver'},
    {name: 'xaomi', Camera: 10, Storage: '32gb', price: 52000, color: 'silver'},
    {name: 'oppo', Camera: 10, Storage: '32gb', price: 42000, color: 'silver'},
    {name: 'iphone', Camera: 10, Storage: '32gb', price: 75000, color: 'silver'},
    {name: 'motorola', Camera: 10, Storage: '32gb', price: 65000, color: 'silver'},
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);