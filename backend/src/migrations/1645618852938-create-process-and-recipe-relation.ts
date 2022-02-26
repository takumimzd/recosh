import {MigrationInterface, QueryRunner} from "typeorm";

export class createProcessAndRecipeRelation1645618852938 implements MigrationInterface {
    name = 'createProcessAndRecipeRelation1645618852938'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`process\` (\`id\` int NOT NULL AUTO_INCREMENT, \`description\` varchar(255) NOT NULL, \`image_src\` varchar(255) NOT NULL, \`order\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`recipeId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`process\` ADD CONSTRAINT \`FK_bca8957672d34ce60b087506b3a\` FOREIGN KEY (\`recipeId\`) REFERENCES \`recipe\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`process\` DROP FOREIGN KEY \`FK_bca8957672d34ce60b087506b3a\``);
        await queryRunner.query(`DROP TABLE \`process\``);
    }

}
