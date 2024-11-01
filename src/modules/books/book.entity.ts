import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../core/entity/base.entity';

@Entity('books')
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  ageRestriction: number;

  @Column({ nullable: true })
  ownerId: number;

  @Column({ nullable: true })
  image?: string;
}