import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { RESEND_API_KEY, CONTACT_INFO } from '@/constants';

const resend = new Resend(RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Use Resend's default sender
      to: [CONTACT_INFO.email],
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      replyTo: email,
    });

    if (!data) {
      throw new Error('Failed to send email: No response from Resend');
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Contact form error:', error);
    
    // Return a more specific error message
    const errorMessage = error instanceof Error ? error.message : 'Failed to send message';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
} 