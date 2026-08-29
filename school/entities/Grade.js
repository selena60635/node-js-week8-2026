const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'Grade',
    tableName: 'GRADE',
    columns: {
        id: {
            primary: true, // 主鍵
            type: 'uuid', // 資料型態唯一字串 ID
            generated: 'uuid', // 自動產生 UUID
            nullable: false, // 不可為空
        },
        score: {
            type: 'integer', // 資料型態整數
            nullable: false, // 不可為空
        }
    },
    relations: {
        student: {
            target: 'Student',  // 指向哪個 entity name
            type: 'many-to-one', // 多對一，站在 Grade 的角度：多個成績可以是同一個學生(一個學生可以有多個成績)
            joinColumn: {
                name: 'student_id', // 存放對應的學生 id
            },
            nullable: false, // 不可為空
        },
        subject: {
            target: 'Subject',  // 指向哪個 entity name
            type: 'many-to-one', // 多對一，站在 Grade 的角度：多個成績可以是同一個科目(一個科目可以有多個成績)
            joinColumn: {
                name: 'subject_id', // 存放對應的科目 id
            },
            nullable: false, // 不可為空
        }
    }
})