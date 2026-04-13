import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { fullName, phoneNumber, service, message } = body;

        // Validate required fields
        if (!fullName || !phoneNumber || !service) {
            return NextResponse.json(
                { error: 'Full name, phone number, and service are required.' },
                { status: 400 }
            );
        }

        // Create transporter with SMTP settings
        const transporter = nodemailer.createTransport({
            host: 'smtp.hostinger.com',
            port: 465,
            secure: true,
            auth: {
                user: 'Info@xntric.ca',
                pass: '@Infoxntric@123',
            },
        });

        // Verify transporter configuration
        await transporter.verify();

        // Send email
        const mailOptions = {
            from: '"Contact Form" <Info@xntric.ca>',
            to: 'Info@xntric.ca',
            subject: `New Contact Form Submission - ${service}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border: 1px solid #ddd;">Full Name</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">${fullName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border: 1px solid #ddd;">Phone Number</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">${phoneNumber}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border: 1px solid #ddd;">Service</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">${service}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border: 1px solid #ddd;">Message</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">${message || 'No message provided'}</td>
                    </tr>
                </table>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { success: true, message: 'Email sent successfully.' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email. Please try again later.' },
            { status: 500 }
        );
    }
}
