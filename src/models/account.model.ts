import {Entity, model, property} from '@loopback/repository';
import {RoleEnum} from '../enum/role.enum';

@model({
  settings: {
    postgresql: {schema: 'public', table: 'account'},
  },
})
export class Account extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
    description: 'The unique identifier for the account.',
    postgresql: {
      columnName: 'id',
      dataType: 'integer',
      nullable: 'NO',
    },
  })
  id: number;

  @property({
    type: 'string',
    required: true,
    description: 'The username of the account.',
    postgresql: {
      columnName: 'username',
      dataType: 'text',
      nullable: 'NO',
    },
  })
  username: string;

  @property({
    type: 'string',
    required: true,
    description: 'The email address associated with the account.',
    postgresql: {
      columnName: 'email',
      dataType: 'text',
      nullable: 'NO',
    },
  })
  email: string;

  @property({
    type: 'string',
    description: 'The password for the account.',
    postgresql: {
      columnName: 'password',
      dataType: 'text',
      nullable: 'YES',
    },
  })
  password?: string;

  @property({
    type: 'string',
    description: 'The telephone number associated with the account.',
    postgresql: {
      columnName: 'tel',
      dataType: 'text',
      nullable: 'YES',
    },
  })
  tel?: string;

  @property({
    type: 'string',
    description: 'The role of the account.',
    jsonSchema: {
      enum: Object.values(RoleEnum),
    },
    postgresql: {
      columnName: 'role',
      dataType: 'text',
      default: RoleEnum.USER,
    },
  })
  role?: RoleEnum;

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

  constructor(data?: Partial<Account>) {
    super(data);
  }
}

export interface AccountRelations {}

export type AccountWithRelations = Account & AccountRelations;
