import zapresponderApi from "@api/zapresponder-api";

export async function closeChat(chatID: string) {
  const token = process.env.ZAP_API_TOKEN;
  if (!token) throw new Error("ZAP_API_TOKEN não definido no .env");

  zapresponderApi.auth(`Bearer ${token}`);
  zapresponderApi
    .criaConversaCopy({ chatId: chatID })
    .then(({ data }) => console.log(data))
    .catch((err) => console.error(err));
}
