import {MigrationInterface, QueryRunner} from "typeorm";

export class editProcessAllowEmptyImageSrc1647851530707 implements MigrationInterface {
    name = 'editProcessAllowEmptyImageSrc1647851530707'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`process\` CHANGE \`image_src\` \`image_src\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`process\` CHANGE \`image_src\` \`image_src\` varchar(255) NOT NULL`);
    }

}
