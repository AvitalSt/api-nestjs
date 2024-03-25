import { Document,Schema as MongooseSchema } from "mongoose";

export type CarDocument=Car& Document;

//מבנה האובייקט
export class Car{
    make:string;
    model:string;
    year:number;
    color:string
}
//מבנה במוסד הנתונים
export const CarSchema=new MongooseSchema({
    make:{type:String,require:true},
    model:{type:String,require:true},
    year:{type:Number,require:true},
    color:{type:String,require:true},
})