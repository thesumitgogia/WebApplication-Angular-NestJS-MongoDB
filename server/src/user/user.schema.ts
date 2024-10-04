// user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UUID } from 'crypto';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ required: true, default: uuidv4 })
    _id: UUID;

    @Prop({ required: true})
    name: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    // You can add more fields as necessary
}

export const UserSchema = SchemaFactory.createForClass(User);
