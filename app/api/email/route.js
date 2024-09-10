import * as sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

export async function POST(request) {
    const res = await request.json();
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: process.env.NEXT_PUBLIC_EMAIL_TO || "info@rafaelasoftware.com.ar",
        from: process.env.NEXT_PUBLIC_EMAIL_TO || "info@rafaelasoftware.com.ar",
        subject: 'Consulta de contacto',
        html: `<strong>${res.text}</strong>`,
    }
    try {
        await sgMail.send(msg);
        return NextResponse.json({
            message: "POST - Email sent successfully"
        });
    } catch (e) {
        console.error("Error sending email:", e);
        return NextResponse.json(e);
    }
}