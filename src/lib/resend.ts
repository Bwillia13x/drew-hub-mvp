import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendNewsletterEmail(email: string) {
  if (!process.env.RESEND_API_KEY) {
    console.warn('Resend API key not configured');
    return { success: false, error: 'Email service not configured' };
  }

  try {
    const result = await resend.emails.send({
      from: 'Drew Hub <noreply@drewhub.dev>',
      to: [email],
      subject: 'Welcome to Drew Hub Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #10b981; font-size: 24px;">Welcome to Drew Hub!</h1>
          <p>Thank you for subscribing to our newsletter. You'll receive updates about:</p>
          <ul>
            <li>Latest blog posts about web development</li>
            <li>New project launches and updates</li>
            <li>Tech tips and tutorials</li>
            <li>Industry insights and trends</li>
          </ul>
          <p>We're excited to have you on board!</p>
          <p style="color: #6b7280; font-size: 14px;">
            If you didn't subscribe to this newsletter, please ignore this email.
          </p>
        </div>
      `,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error: 'Failed to send email' };
  }
}
