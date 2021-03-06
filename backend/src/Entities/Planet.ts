// #region Global Imports
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// #endregion Global Imports

@Entity()
export class Planet {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name: string;

    @Column()
    shield: number;

    constructor(name: string, shield: number) {
        this.name = name;
        this.shield = shield;
    }
}
