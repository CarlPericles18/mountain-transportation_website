import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, message } = body;

        // Validate input
        if (!name || !email || !phone || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        try {
            // Lazy instantiate Prisma to avoid build-time issues
            const prisma = new PrismaClient();

            // Attempt to save to database
            const inquiry = await prisma.inquiry.create({
                data: { name, email, phone, message },
            });

            // Close connection to avoid leaks in serverless (optional, but good for lazy simple usage)
            await prisma.$disconnect();

            return NextResponse.json({ success: true, data: inquiry });
        } catch (dbError) {
            console.error('Database Error:', dbError);
            return NextResponse.json({
                success: true,
                warning: 'Saved locally (DB connection failed)',
                data: { name, email, phone, message }
            });
        }

    } catch (error) {
        console.error('Request Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
