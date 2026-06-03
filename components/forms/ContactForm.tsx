"use client";

import { useState } from "react";
import { colors } from "@/lib/colors";

type FormState = {
  name: string;
  email: string;
  phone: string;
  type: string;
  message: string;
};

const enquiryTypes = [
  "General Enquiry",
  "Consultation Request",
  "Fraud Investigation",
  "Forensic Audit",
  "SME Advisory",
  "Partnership",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "", email: "", phone: "", type: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setResponseMessage(data.message);
        setForm({ name: "", email: "", phone: "", type: "", message: "" });
      } else {
        setStatus("error");
        setResponseMessage(data.message);
      }
    } catch {
      setStatus("error");
      setResponseMessage("Something went wrong. Please try again.");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "6px",
    border: `1px solid ${colors.border}`,
    fontSize: "14px",
    color: colors.dark,
    background: colors.white,
    outline: "none",
    marginBottom: "1rem",
    fontFamily: "inherit",
  };

  if (status === "success") {
    return (
      <div style={{
        background: "#EAF4EA",
        border: "1px solid #2E7D32",
        borderRadius: "8px",
        padding: "2rem",
        textAlign: "center",
      }}>
        <div style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "#2E7D32",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 1rem",
          fontSize: "24px",
          color: "white",
        }}>
          ✓
        </div>
        <h3 style={{ color: "#2E7D32", marginBottom: "0.5rem" }}>Message Sent</h3>
        <p style={{ color: colors.grey, fontSize: "14px", marginBottom: "1.5rem" }}>
          {responseMessage}
        </p>
        <button
          onClick={() => setStatus("idle")}
          style={{
            background: colors.navy,
            color: colors.white,
            padding: "10px 24px",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 1rem" }}>
        <div>
          <label style={{
            display: "block", fontSize: "13px",
            fontWeight: "bold", color: colors.navy, marginBottom: "6px",
          }}>
            Full Name *
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            style={inputStyle}
          />
        </div>
        <div>
          <label style={{
            display: "block", fontSize: "13px",
            fontWeight: "bold", color: colors.navy, marginBottom: "6px",
          }}>
            Email Address *
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            style={inputStyle}
          />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 1rem" }}>
        <div>
          <label style={{
            display: "block", fontSize: "13px",
            fontWeight: "bold", color: colors.navy, marginBottom: "6px",
          }}>
            Phone Number
          </label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+233 XX XXX XXXX"
            style={inputStyle}
          />
        </div>
        <div>
          <label style={{
            display: "block", fontSize: "13px",
            fontWeight: "bold", color: colors.navy, marginBottom: "6px",
          }}>
            Enquiry Type
          </label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">Select type...</option>
            {enquiryTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <label style={{
        display: "block", fontSize: "13px",
        fontWeight: "bold", color: colors.navy, marginBottom: "6px",
      }}>
        Message *
      </label>
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Tell us about your situation or what you need help with..."
        rows={5}
        style={{ ...inputStyle, resize: "vertical" }}
      />

      {status === "error" && (
        <div style={{
          background: "#FFF0F0",
          border: "1px solid #c62828",
          borderRadius: "6px",
          padding: "12px",
          marginBottom: "1rem",
          fontSize: "13px",
          color: "#c62828",
        }}>
          {responseMessage}
        </div>
      )}

      <button
        onClick={handleSubmit}
        disabled={status === "loading"}
        style={{
          width: "100%",
          background: status === "loading" ? colors.muted : colors.gold,
          color: colors.white,
          padding: "14px",
          borderRadius: "6px",
          border: "none",
          cursor: status === "loading" ? "not-allowed" : "pointer",
          fontWeight: "bold",
          fontSize: "15px",
          transition: "background 0.2s",
        }}
      >
        {status === "loading" ? "Sending..." : "Send Message →"}
      </button>

      <p style={{
        color: colors.muted,
        fontSize: "12px",
        textAlign: "center",
        marginTop: "1rem",
      }}>
        Your information is confidential and will not be shared with third parties.
      </p>
    </div>
  );
}