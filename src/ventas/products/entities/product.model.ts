import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products', { schema: 'ventas' })
export class ProductEntity {
  @PrimaryGeneratedColumn({
    id: string;
  })
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestampz',
    default: () => 'CURRENT_TIMESTAMP,'
  })
  createAt: Date;
  @UpdateDateColumn({
    name: 'update_at',
    type: 'timestampz',
    default:()=> 'CURRENT_TIMESTAMP,'
  })
  updateAt: Date;
  @DeleteDateColumn({
    name: 'delete_at',
    type: 'timestampz',
    nullable: true,
  })
  deleteAt: Date;
}
