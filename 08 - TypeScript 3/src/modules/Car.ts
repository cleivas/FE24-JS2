export class Car {
    //Ska varken kunna modifieras eller ses
    private readonly doorLockCode:number;


    constructor(
        public readonly make:string, 
        public readonly model:string, 
        public readonly year:number){

        //Koden genereras av en privat metod. En readonly kan tilldelas ett värde i construktorn men inte någon annanstans
        this.doorLockCode = this.generateDoorLockCode();
    }
    private generateDoorLockCode():number {
        return Math.round(Math.random() * 1000000);
    }

    //Publik metod som använder den privata koden
    public openAllDoors() {
        console.log('Opening with', this.doorLockCode);
    }
   
}
