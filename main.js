class Traveler {

    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true

    }
    hunt() {
        this.food += 2
    }
    eat() {
        if (this.food === 0) {
            this.isHealthy = false
        } else {
            this.food -= 1
        }

    }
}
let margie = new Traveler('Margie')
console.log(margie)
margie.hunt()
console.log(margie)
margie.eat()
console.log(margie)

class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passenger = [];

    }

    getAvailableSeatCount() {
        return this.capacity - this.passenger.length
    }

    join(Traveler) {
        if (this.capacity > this.passenger.length) {
            this.passenger.push(Traveler)
        }
    }

    shouldQuarantine() {
        const quarantinepassengers = this.passenger.some(function (user) {
            return user.isHealthy === false
        })
        return quarantinepassengers
    }
    // make new variable that keeps track of total food.
    // do for loop through passenger array
    // access the food attribute for each individual passenger then add them together.
    // return total variable 
    totalFood() {
        let totalfood = 0
        for (let index = 0; index < this.passenger.length; index++) {
            totalfood += this.passenger [index].food
        } return totalfood
    }






}
