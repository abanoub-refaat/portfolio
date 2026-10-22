"use client";

import React, { useState, FormEvent } from "react";
import { about } from "@/data/about";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export const ContactSection: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => {
      setSent(false);
    }, 5000);
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
          <label>
            <span>Name</span>
            <input
              required
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
              rows={4}
              placeholder="Tell me a little about your project..."
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
            />
          </label>

          <button className="submit" type="submit">
            {sent ? (
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
