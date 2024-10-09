import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type CartDocument = Cart & Document;

@Schema({ versionKey: false })
export class Cart {
    @Prop({ required: true, default: () => uuidv4() })
    _id: string;

    @Prop({ required: true })
    userId: string;

    @Prop({ required: true })
    productId: string;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
