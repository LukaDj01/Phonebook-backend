import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AdditionalInfos {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    birthDate: Date;

    @Column()
    description: string;
}