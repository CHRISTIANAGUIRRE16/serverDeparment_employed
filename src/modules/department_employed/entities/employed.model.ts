import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { DepartmentEntity } from '../entities/department.model';

@Entity('employees', { schema: 'ventas' })
export class EmployeeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
  })
  deletedAt: Date;

  @ManyToOne(() => DepartmentEntity, department => department.employees)
  department: DepartmentEntity;

  @Column('varchar', {
    name: 'name',
    nullable: false,
    comment: 'Nombre del empleado',
  })
  name: string;

  @Column('varchar', {
    name: 'position',
    nullable: false,
    comment: 'Cargo del empleado',
  })
  position: string;


}
