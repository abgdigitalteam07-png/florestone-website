import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, postalCode, company, phone, role, interest, message } = body;

    if (!name || !email || !postalCode) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || 'sales@florestone.com';

    if (apiKey) {
      const emailBody = `
New Dealer Inquiry — ${interest || 'General'}

Name: ${name}
Company: ${company || '—'}
Email: ${email}
Phone: ${phone || '—'}
Postal Code: ${postalCode}
Role: ${role || '—'}
Product Interest: ${interest || '—'}
Message: ${message || '—'}
Timestamp: ${new Date().toISOString()}
      `.trim();

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Florestone Website <noreply@florestone.com>',
          to: [toEmail],
          subject: `New Florestone Inquiry — ${interest || 'General'}`,
          text: emailBody,
        }),
      });
    }

    return NextResponse.json({ success: true, message: 'Inquiry sent successfully' });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
