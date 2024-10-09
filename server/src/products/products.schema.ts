import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type ProductDocument = Product & Document;

@Schema({ versionKey: false })
export class Product {
    @Prop({ required: true, default: ()=> uuidv4() })
    _id: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    imageUrl: string;

    @Prop({ required: true })
    price: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
