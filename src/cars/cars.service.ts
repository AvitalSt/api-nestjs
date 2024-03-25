//  import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car,CarDocument } from './car.model';
import { InjectModel } from '@nestjs/mongoose';
 import { Injectable } from '@nestjs/common/decorators';

@Injectable()
export class CarsService {
    constructor(@InjectModel(Car.name) private carModel:Model<CarDocument>){}

        async createCar(car:Car):Promise<Car>{
            try{
                const createdCar=await new this.carModel(car).save()
                return createdCar
            }
            catch(err){
                console.log(err)
            }
        }

        async getAllCars():Promise<Car[]>{
            try{
                const cars= await this.carModel.find()
                return cars;
            }
            catch(err){
                console.log(err)
            }      
        }

        async getByIdCar(id:string):Promise<Car>{
            try{
                const car=await this.carModel.findById(id);
                return car;
            }
            catch(err){
                console.log(err)
            }  
        }

        async updateCar(id: string,car:Car):Promise<Car>{
            try{
                const updatedCar=await this.carModel.findByIdAndUpdate(id,car,{new:true})
                return updatedCar
            }
            catch(err){
                console.log(err)
            } 
        }

        async removeCar(id:string):Promise<Car>{
            try{
                const deletedCar= await this.carModel.findByIdAndDelete(id)
                return deletedCar;
            }
            catch(err){
                console.log(err)
            } 
        }
}
