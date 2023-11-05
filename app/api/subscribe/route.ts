import mailchimp from '@mailchimp/mailchimp_marketing';
import { lists } from '@mailchimp/mailchimp_marketing';

export async function POST(request: Request) {
  const { email } = await request.json();

  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER,
  });

  await mailchimp.lists.addListMember('e67dcd7b3e', {
    email_address: email,
    status: 'subscribed',
  });

  async function getMembers() {
    const response = await mailchimp.lists.getListMembersInfo(
      'e67dcd7b3e'
    );
    console.log(response.members);
  }

  getMembers();

  return new Response('Hello, Next.js!');
}
