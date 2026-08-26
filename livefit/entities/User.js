const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "User",
    tableName: "USER",
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
        },
        email: {
            type: 'varchar', // 資料型態字串
            length: 320, // 字串長度限制
            nullable: false, // 不可為空
            unique: true, // 唯一值
        },
        role: {
            type: 'varchar', // 資料型態字串
            length: 20, // 字串長度限制
            nullable: false, // 不可為空
        },
        created_at: {
            type: 'timestamp', // 資料型態時間戳記
            createDate: true, // 新增資料時自動產生當下建立時間
            nullable: false, // 不可為空
        },
        updated_at: {
            type: 'timestamp', // 資料型態時間戳記
            updateDate: true, // 更新資料時自動產生當下更新時間
            nullable: false, // 不可為空
        }
    }
})