'use client';

import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle2, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/rojanm1000@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        window.location.href = `mailto:rojanm1000@gmail.com?subject=Portfolio%20Contact%20-%20${encodeURIComponent(
          formData.name
        )}&body=${encodeURIComponent(
          `From: ${formData.name} (${formData.email})\n\n${formData.message}`
        )}`;
        setSubmitted(true);
      }
    } catch {
      window.location.href = `mailto:rojanm1000@gmail.com?subject=Portfolio%20Contact%20-%20${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#fefae0] border-t border-[#3a2e2a]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#3a2e2a] font-primary border-b-2 border-[#3a2e2a] pb-2 inline-block">
                Get in Touch
              </h2>
              <p className="text-[#3a2e2a] text-sm sm:text-base font-secondary">
                Looking forward to hearing from you.
              </p>
            </div>

            <div className="space-y-6 pt-2 font-secondary">
              {/* Phone */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#3a2e2a]" />
                  <span id="phone" className="text-xs font-bold text-[#3a2e2a] font-primary">
                    Phone
                  </span>
                </div>
                <a
                  href="tel:+9779841994110"
                  className="text-sm text-[#3a2e2a] hover:text-[#b08968] block"
                >
                  +977 - 9841994110
                </a>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#3a2e2a]" />
                  <span id="email" className="text-xs font-bold text-[#3a2e2a] font-primary">
                    Email
                  </span>
                </div>
                <a
                  href="mailto:rojanm1000@gmail.com"
                  className="text-sm text-[#3a2e2a] hover:text-[#b08968] block"
                >
                  rojanm1000@gmail.com
                </a>
              </div>
            </div>

            {/* Other Contacts */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/9779841994110"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:rojanm1000@gmail.com"
                className="btn-outline"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
              </a>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7 bg-[#faedcd] border border-[#3a2e2a]/20 rounded-lg p-6 sm:p-8 space-y-4">
            {submitted ? (
              <div className="p-6 rounded-md bg-white border border-[#3a2e2a] text-[#3a2e2a] text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 mx-auto text-[#b08968]" />
                <h4 className="font-bold text-base font-primary">Message Sent Successfully!</h4>
                <p className="text-xs font-secondary">
                  Thank you for reaching out. I will respond to your email soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-semibold text-[#b08968] underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form id="contact_form" onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    required
                    name="fname"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-md bg-white border border-[#3a2e2a]/40 text-[#3a2e2a] placeholder-gray-500 text-sm focus:outline-none focus:border-[#3a2e2a]"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    name="email_addr"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-md bg-white border border-[#3a2e2a]/40 text-[#3a2e2a] placeholder-gray-500 text-sm focus:outline-none focus:border-[#3a2e2a]"
                  />
                </div>

                <div>
                  <textarea
                    rows={6}
                    required
                    name="msg"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Message"
                    className="w-full px-4 py-3 rounded-md bg-white border border-[#3a2e2a]/40 text-[#3a2e2a] placeholder-gray-500 text-sm focus:outline-none focus:border-[#3a2e2a] resize-none"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}


