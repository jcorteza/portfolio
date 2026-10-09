import 'server-only';
import { Resend } from 'resend';
import { htmlEncodePreserveSpaces } from './utils';

const resend = new Resend(process.env.RESEND_API_KEY);

export const emailContactRequest = async (name: string, email: string, message: string) => {
    const subject = `New Contact Request from ${name}`;
    const { data, error } = await resend.emails.send({
        from: 'JCortez Portfolio <automated@jcortez.dev>',
        to: 'hello@jcortez.dev',
        subject,
        // react: EmailTemplate({ name, email, message }),
        html: `
            <html>
                <head>
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                    <title>${subject}</title>
                </head>
                <body style="font-family: sans-serif; background-color: #f6f6f6; padding: 20px; color: black;">
                    <h1>New Contact Request</h1>
                    <p>Name: ${htmlEncodePreserveSpaces(name)}</p>
                    <p>Email: ${htmlEncodePreserveSpaces(email)}</p>
                    <p>Message:<br/>${htmlEncodePreserveSpaces(message)}</p>
                </body>
            </html>
        `
    });

    if (error) {
        throw new Error('Unable to send contact request')
    }

    console.info('Processed contact request: ', data.id);
};