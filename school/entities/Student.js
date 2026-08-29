const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'Student',
    tableName: 'STUDENT',
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
    },
    relations: {
        class: {
            target: 'Class',  // 指向哪個 entity name
            type: 'many-to-one', // 多對一，站在 Student 的角度：多個學生可以是同一個班級(一個班級可以有多個學生)
            joinColumn: {
                name: 'class_id', // 存放對應的班級 id
            },
            nullable: false, // 不可為空
        }
    } 
})