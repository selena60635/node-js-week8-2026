const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'Class',
    tableName: 'CLASS',
    columns: {
        id: {
            primary: true, // 主鍵
            type: 'uuid', // 資料型態唯一字串 ID
            generated: 'uuid', // 自動產生 UUID
            nullable: false, // 不可為空
        },
        name: {
            type: 'varchar', // 資料型態字串
            length: 50, // 字串長度限制
            nullable: false, // 不可為空
        }
    }
})