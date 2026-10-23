"use client";

import React, { useState, FormEvent } from "react";
import { about } from "@/data/about";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

type FormStatus = "idle" | "submitting" | "success" | "error";

export const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    _honey: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Discard silently if honeypot was filled by a spam bot
    if (formData._honey) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "", _honey: "" });
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _honey: formData._honey,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          data?.error || "Unable to send your message. Please try again.",
        );
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "", _honey: "" });
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "An unexpected error occurred.",
      );
    }
  };

  return (
    <section className="panel-section contact" id="contact">
      {/* Hero-inspired ambient shapes */}
      <div className="contact-ambient-shapes" aria-hidden="true">
        <div className="contact-orbit-ring ring-1" />
      </div>

      <div className="page-shell contact-layout">
        <div className="contact-copy">
          <SectionHeading
            number="05"
            title="CONTACT ME"
            subtitle="LET’S MAKE SOMETHING GOOD"
          />

          <div className="contact-intro">
            <h2>
              Have an idea?
              <br />
              <em>Let’s talk.</em>
            </h2>
            <p>
              I’m always open to discussing thoughtful engineering, high-impact
              web architecture, mobile applications, or collaborative products.
            </p>
          </div>

          <div className="socials" aria-label="Social Profiles">
            {[
              {
                name: "linkedin",
                href: "https://www.linkedin.com/in/abanoubrefaat/",
              },
              { name: "github", href: "https://github.com/abanoub-refaat" },
            ].map(({ name, href }) => (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                key={name}
              >
                <Icon name={name} />
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Honeypot field to filter spam bots */}
          <input
            type="text"
            name="_honey"
            value={formData._honey}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, _honey: e.target.value }))
            }
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <label>
            <span>Name</span>
            <input
              required
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </label>

          <label>
            <span>Email</span>
            <input
              required
              type="email"
              name="email"
              placeholder="hello@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </label>

          <label className="message">
            <span>Message</span>
            <textarea
              required
              name="message"
              rows={4}
              placeholder="Tell me a little about your project..."
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
            />
          </label>

          {status === "error" && (
            <div className="contact-error" role="alert">
              <p>{errorMessage}</p>
              <a
                href={`mailto:${about.email}?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
                  formData.name || "Portfolio Visitor",
                )}&body=${encodeURIComponent(formData.message)}`}
              >
                Send directly via {about.email}
              </a>
            </div>
          )}

          <button
            className="submit"
            type="submit"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? (
              <>Sending message...</>
            ) : status === "success" ? (
              <>
                Message sent — thank you <Icon name="check" />
              </>
            ) : (
              <>
                Submit message <Icon name="arrow" />
              </>
            )}
          </button>
        </form>
      </div>

      <footer className="page-shell">
        © {new Date().getFullYear()} {about.name} <span>CODED WITH CARE</span>
      </footer>
    </section>
  );
};
