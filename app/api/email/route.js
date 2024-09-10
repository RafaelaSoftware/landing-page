import * as sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

export async function POST(request) {
    const res = await request.json();

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('es-AR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    });

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: process.env.NEXT_PUBLIC_EMAIL_TO || "info@rafaelasoftware.com.ar",
        from: process.env.NEXT_PUBLIC_EMAIL_TO || "info@rafaelasoftware.com.ar",
        subject: 'Consulta de contacto',
        templateId: process.env.SENDGRID_TEMPLATE_ID || "d-468b716348124bee9a9a72d487708eee",
        dynamic_template_data: {
            name: res.text.name,
            email: res.text.email,
            phone: res.text.phone,
            message: res.text.message,
            date: formattedDate
        }

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