import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, type, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    console.log("Contact form submission:", {
      name, email, phone, type, message,
      timestamp: new Date().toISOString(),
    });

    // TODO Phase 2 — send to Express backend
    // await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/contact`, { ... })

    return NextResponse.json(
      { success: true, message: "Thank you for reaching out. We will be in touch within 24 hours." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}