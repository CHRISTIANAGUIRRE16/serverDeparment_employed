import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
} from 'typeorm';
import { EmployeeEntity } from '../entities/employed.model';

@Entity('departments', { schema: 'department_employed' })
export class DepartmentEntity {
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

  @OneToMany(() => EmployeeEntity, employee => employee.department)
  employees: EmployeeEntity[];

  @Column('varchar', {
    name: 'code',
    nullable: false,
    comment: 'Nombre del código',
  })
  code: string;

  @Column('varchar', {
    name: 'title',
    nullable: false,
    comment: 'Nombre del departamento',
  })
  name: string;

  @Column('varchar', {
    name: 'description',
    nullable: true,
    comment: 'Descripción del departamento',
  })
  description: string;

  
/*
  @BeforeInsert()
  @BeforeUpdate()
  async setCode() {
    if (!this.code) {
      return;
    } else {
      return this.code.toLowerCase().trim();
    }
  }*/


  
}
