import * as sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const res = await request.json();

        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: 'info@rafaelasoftware.com.ar',
            from: res.from,
            subject: 'Consulta de contacto',
            html: `<strong>${res.text}</strong>`,
        }
        console.log(msg);
        await sgMail.send(msg);

        return NextResponse.json({ message: "POST" });
    } catch (e) {
        return NextResponse.json(e);
    }
}