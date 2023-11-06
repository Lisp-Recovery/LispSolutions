interface MailSenderReq {
    name: string,
    subject?: string,
    email: string,
    content: string,
}

interface MailSenderRes {
  message: string;
  sucess: boolean;
}

export const mailSender = async ({ name, email, content, subject }: MailSenderReq): Promise<any> => {
  return await fetch('/api/mailSender', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, content })
  })
    .catch((err) => console.error(err));
};