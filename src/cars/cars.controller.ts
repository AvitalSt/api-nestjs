// import {  ,  ,, Param, Put, Delete} from '@nestjs/common';
import {} from '@nestjs/common'
import { CarsService } from './cars.service';
// import { create } from 'domain';
import {Car} from './car.model';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common/decorators';

@Controller('cars')
export class CarsController {
    constructor(private readonly _carsService: CarsService) { }

    @Post()
    async create(@Body() car: Car): Promise<Car> {
        return this._carsService.createCar(car);
    }

    @Get()
    async getAll():Promise<Car[]>{
        return this._carsService.getAllCars()
    }

    @Get(':id')
    async getById(@Param('id') id:string):Promise<Car>{
        return this._carsService.getByIdCar(id);
    }

    @Put(':id')
    async update(@Param('id') id:string,@Body() car:Car):Promise<Car>{
        return this._carsService.updateCar(id,car);
    }

    @Delete(':id')
    async remove(@Param('id') id:string):Promise<Car>{
        return this._carsService.removeCar(id)
    }
}
