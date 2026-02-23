// import { getDb } from "../database";
// import { closeChat } from "./close_chat";

// const CHECK_INTERVAL: number = Number(process.env.CHECK_INTERVAL) || 5 * 60 * 1000;
// const TASK_DELAY: number = Number(process.env.TASK_DELAY) || 60 * 60 * 1000;



// export async function checkchats() {
//     const db = getDb();
//     const now = Date.now();
    
//     // Seleciona conversas com mais de 1 hora que ainda não foram finalizadas
//     const chats = await db.all(
//         'SELECT * FROM tb_chat WHERE created_at <= ? AND active = 1',
//         [now - TASK_DELAY]
//     );
    
//     for (const chat of chats) {
//         await closeChat(chat.id);
//         // console.log(`ID do chat: ${chat.id}`)
        
//         //marcar como processada
//         await db.run('UPDATE tb_chat SET active = 0 WHERE id = ?', [chat.id]);
//   }
// }

// // Rodar a rotina no tempo definido no .env ou 5 min
// setInterval(checkchats, CHECK_INTERVAL);
