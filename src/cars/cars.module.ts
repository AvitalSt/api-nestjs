import { Module } from '@nestjs/common/decorators';
import { MongooseModule } from '@nestjs/mongoose';
//מטפל בבקשות HTTP
import { CarsController } from './cars.controller';
//מטפל באינטרקציה עם מוסד הנתונים
import { CarsService } from './cars.service';
import { Car, CarSchema } from './car.model';

@Module({
  imports:[MongooseModule.forRoot('mongodb://localhost:27017'),MongooseModule.forFeature([{name:Car.name,schema:CarSchema}])],
  controllers: [CarsController],
  providers: [CarsService]
})

export class CarsModule {}

 