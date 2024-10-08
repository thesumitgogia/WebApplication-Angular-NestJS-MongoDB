// user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UUID } from 'crypto';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
    @Prop({ required: true })
    _id: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true})
    description: string;

    @Prop({ required: true })
    imageUrl: string;

    @Prop({ required: true })
    price: string;

    // You can add more fields as necessary
}

export const ProductSchema = SchemaFactory.createForClass(Product);
