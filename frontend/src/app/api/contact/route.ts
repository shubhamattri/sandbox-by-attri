import { NextRequest, NextResponse } from 'next/server';

// Only initialize Resend if API key is available
const getResend = () => {
  if (!process.env.RESEND_API_KEY) {
    return null;
  }
  // Dynamic import to avoid build-time errors
  const { Resend } = require('resend');
  return new Resend(process.env.RESEND_API_KEY);
};

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.warn('RESEND_API_KEY not configured - skipping email send');
      // Return success but log that email wasn't sent
      return NextResponse.json(
        { 
          message: 'Message received! (Email service not configured)' 
        },
        { status: 200 }
      );
    }

    // Send email if API key is available
    const resend = getResend();
    if (resend) {
      await resend.emails.send({
        from: 'Shubham Attri <noreply@yourdomain.com>',
        to: ['sattri12@gmail.com'],
        subject: `New message from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });
    }

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
} 