const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'Course',
    tableName: 'COURSE',
    columns: {
        id: {
            primary: true, // 主鍵
            type: 'uuid', // 資料型態唯一字串 ID
            generated: 'uuid', // 自動產生 UUID
            nullable: false, // 不可為空
        },
        name: {
            type: 'varchar', // 資料型態字串
            length: 100, // 字串長度限制
            nullable: false, // 不可為空
        },
        description: {
            type: 'text', // 資料型態文字
            nullable: false, // 不可為空
        },
        start_at: {
            type: 'timestamp', // 資料型態時間戳記
            nullable: false, // 不可為空
        },
        end_at: {
            type: 'timestamp', // 資料型態時間戳記
            nullable: false, // 不可為空
        },
        max_participants: {
            type: 'integer', // 資料型態整數
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
        },
    },
    relations: {
        user: {
            target: 'User',  // 指向哪個 entity name
            type: 'many-to-one', // 多對一，站在 Course 的角度：多堂課可以是同一個教練(一個教練可以教多堂課)
            joinColumn: {
                name: 'user_id', // 存放對應的教練使用者 id
            }
        },
        skill: {
            target: 'Skill',  // 指向哪個 entity name
            type: 'many-to-one', // 多對一，站在 Course 的角度：多堂課可以是同一個技能(一個技能可以有多堂課)
            joinColumn: {
                name: 'skill_id', // 存放對應的技能 id
            }
        }
    }
})