import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
  ManyToOne,
} from 'typeorm'; //  COMANDO A INSTALAR TYPEORM: npm i --save @nestjs/typeorm typeorm    npm install class-validator --save.

@Entity('products', { schema: 'ventas' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid') //codigo generico para poner el Id. unico Pk
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP,',
  })
  createAt: Date; //nombre del atributo
  @UpdateDateColumn({
    name: 'update_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP,',
  })
  updateAt: Date;
  @DeleteDateColumn({
    name: 'delete_at',
    type: 'timestamp',
    nullable: true,
  })
  deleteAt: Date;
  @ManyToOne(() => CategoryEntity, category => category.products)
  category: CategoryEntity;   // crear el category model con las columnas y las relacion oneToMany

  @Column('varchar', {
    // para crear las tablas se crear con @column y se agregan los atributos con el tipo
    name: 'code',
    nullable: false, //para que el campo sea obligatorio
    comment: 'Nombre del codigo',
  })
  code: string;

  @Column('varchar', {
    // para crear las tablas se crear con @column y se agregan los atributos con el tipo
    name: 'title',
    nullable: false, //para que el campo sea obligatorio
    comment: 'Nombre del producto',
  })
  name: string;

  @Column('integer', {
    name: 'price',
    nullable: false,
    comment: 'Precio del producto',
  })
  price: number;

  @Column('varchar', {
    name: 'description',
    nullable: true,
    comment: 'descripcion del producto',
  })
  description: string;
  @Column('varchar', {
    name: 'images',
    nullable: true,
    comment: 'imagen del producto',
  })
  images: string;

  /* @beforeInsert() //metodo para antes de insertar
  @beforeUpdate()
  async setMail() {
    if (!this.email) {
      return;
    } 
    this.mail = this.setMail.toLowerCase().trim;
  }*/

  @BeforeInsert() //metodo para hacer conversiones antes de insertar
  @BeforeUpdate() // metodo para antes de actualizar.
  async setCode() {
    if (!this.code) {
      return;
    } else {
      return this.code.toLowerCase().trim();
    } // metodo para antes de actualizar.
  }
}
  /*@BeforeInsert()
  @BeforeUpdate()
  async setPassword() {
    if (!this.password) {
      return;
    } else{
      return this.password.bcrypt().trim();
    }
  }
}*/
