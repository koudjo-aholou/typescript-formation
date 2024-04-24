// Internal Error: ENOENT: no such file or directory, stat '/home/user/Documents/Kabolt/.yarn/releases/yarn-4.0.2.cjs'
// Error: ENOENT: no such file or directory, stat '/home/user/Documents/Kabolt/.yarn/releases/yarn-4.0.2.cjs'


interface Bike {
    model: Model,
    skud: number,
    isOnline: boolean

}
type Model ="bcd";
type Velo = {
    model: string,
    skud: number,
    isOnline: boolean

};
interface ExtendBike extends Bike { 
    carbu: string
};

type Carbu = { carbu: string, color: string};

type Bmx = Velo & Carbu;

const bike: Bike = {
    model: "bcd",
    skud: 123,
    isOnline: true,
}
 // spread operator block the error
const bikeType: Carbu = {...bike, carbu: "electric", color:"blue"}

const electricBike = 2 as any as Bmx