import {MigrationInterface, QueryRunner} from "typeorm";

export class removeReadonlyProcessRecipe1645631084636 implements MigrationInterface {
    name = 'removeReadonlyProcessRecipe1645631084636'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`process\` DROP COLUMN \`order\``);
        await queryRunner.query(`ALTER TABLE \`process\` ADD \`order\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`process\` DROP COLUMN \`order\``);
        await queryRunner.query(`ALTER TABLE \`process\` ADD \`order\` varchar(255) NOT NULL`);
    }

}
