import {Entity, model, property} from '@loopback/repository';
import { StatusEnum } from '../enum/status.enum';

@model()
export class Shop extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @property({
    type: 'string',
    required: true,
    minLength: 10,
    maxLength: 10,
    errorMessage: {
      minLength: 'Telephone should be at least 10 characters.',
      maxLength: 'Telephone should not exceed 10 characters.',
    },
  })
  tel: string;

  @property({
    type: 'string',
    required: false,
    jsonSchema: {
      enum: Object.values(StatusEnum),
    },
  })
  status?: StatusEnum;

  @property({
    type: 'number',
    required: false,
  })
  ownerId?: number;

  constructor(data?: Partial<Shop>) {
    super(data);
  }
}

export interface ShopRelations {}

export type ShopWithRelations = Shop & ShopRelations;
