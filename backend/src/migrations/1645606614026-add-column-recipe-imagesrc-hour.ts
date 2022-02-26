import {MigrationInterface, QueryRunner} from "typeorm";

export class addColumnRecipeImagesrcHour1645606614026 implements MigrationInterface {
    name = 'addColumnRecipeImagesrcHour1645606614026'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`recipe\` ADD \`image_src\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`recipe\` ADD \`hour\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`recipe\` DROP COLUMN \`hour\``);
        await queryRunner.query(`ALTER TABLE \`recipe\` DROP COLUMN \`image_src\``);
    }

}
