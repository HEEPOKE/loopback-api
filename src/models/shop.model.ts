import {Entity, model, property} from '@loopback/repository';
import {StatusEnum} from '../enum/status.enum';

@model({
  settings: {
    postgresql: {schema: 'public', table: 'shop'},
  },
})
export class Shop extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
    description: 'The unique identifier for the shop.',
    postgresql: {
      columnName: 'id',
      dataType: 'serial',
      nullable: 'NO',
    },
  })
  id: number;

  @property({
    type: 'string',
    required: true,
    description: 'The name of the shop.',
    postgresql: {
      columnName: 'name',
      dataType: 'text',
      nullable: 'NO',
    },
  })
  name: string;

  @property({
    type: 'string',
    required: true,
    description: 'A description of the shop.',
    postgresql: {
      columnName: 'description',
      dataType: 'text',
      nullable: 'NO',
    },
  })
  description: string;

  @property({
    type: 'string',
    required: true,
    description: 'The address of the shop.',
    postgresql: {
      columnName: 'address',
      dataType: 'text',
      nullable: 'NO',
    },
  })
  address: string;

  @property({
    type: 'string',
    required: true,
    minLength: 10,
    maxLength: 10,
    description: 'The telephone number of the shop.',
    postgresql: {
      columnName: 'tel',
      dataType: 'text',
      nullable: 'YES',
    },
    errorMessage: {
      minLength: 'Telephone should be at least 10 characters.',
      maxLength: 'Telephone should not exceed 10 characters.',
    },
  })
  tel: string;

  @property({
    type: 'string',
    required: false,
    description: 'The status of the shop.',
    jsonSchema: {
      enum: Object.values(StatusEnum),
    },
    postgresql: {
      columnName: 'status',
      dataType: 'text',
      nullable: 'YES',
    },
  })
  status?: StatusEnum;

  @property({
    type: 'number',
    required: false,
    description: 'The ID of the shop owner.',
    postgresql: {
      columnName: 'ownerId',
      dataType: 'integer',
      nullable: 'YES',
    },
  })
  ownerId?: number;

  @property({
    type: 'date',
    required: true,
    default: () => new Date(),
    postgresql: {
      columnName: 'created_at',
      dataType: 'timestamp',
      nullable: 'NO',
    },
  })
  createdAt: Date;

  @property({
    type: 'date',
    required: true,
    default: () => new Date(),
    postgresql: {
      columnName: 'updated_at',
      dataType: 'timestamp',
      nullable: 'NO',
    },
  })
  updatedAt: Date;

  constructor(data?: Partial<Shop>) {
    super(data);
  }
}

export interface ShopRelations {}

export type ShopWithRelations = Shop & ShopRelations;
