import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';
import { SiDevdotto } from 'react-icons/si';
import { LINKS, mailto } from '../config/links';

const MotionDiv = motion.div;

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
const WEB3FORMS_CONFIGURED = Boolean(ACCESS_KEY);
const STATUS_MESSAGE_MS = 5000;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  useEffect(() => {
    if (!submitStatus.message) return undefined;
    const timer = setTimeout(() => {
      setSubmitStatus({ success: false, message: '' });
    }, STATUS_MESSAGE_MS);
    return () => clearTimeout(timer);
  }, [submitStatus.message]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ success: false, message: '' });
    setIsSubmitting(true);

    try {
      if (!WEB3FORMS_CONFIGURED) {
        setSubmitStatus({
          success: false,
          message: 'Form is not configured yet. Please email me directly.',
        });
        return;
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: formData.name,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          success: true,
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus({
          success: false,
          message: result.message || 'Something went wrong. Try again or email me directly.',
        });
      }
    } catch {
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Try again or email me directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full rounded-lg border border-gray-600/40 bg-gray-900/50 px-3 py-2 text-sm text-gray-100 shadow-inner outline-none transition placeholder:text-gray-500 focus:border-cyan-500/60 focus:bg-gray-900/70 focus:ring-2 focus:ring-cyan-400/20';

  return (
    <section id="contact" className="relative overflow-x-clip overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 py-8 md:py-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          background:
            'radial-gradient(ellipse 70% 45% at 15% 0%, rgba(34,211,238,0.12), transparent), radial-gradient(ellipse 55% 40% at 100% 100%, rgba(59,130,246,0.1), transparent)',
        }}
        aria-hidden
      />

      <div className="container relative mx-auto max-w-5xl px-4">
        <MotionDiv
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-5 text-center md:mb-7"
        >
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Contact{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
          <p className="mx-auto max-w-2xl px-1 text-xs leading-relaxed text-slate-400 sm:text-sm sm:leading-[1.75] sm:text-[15px]">
            I&apos;d love to hear from you! Whether you have a{' '}
            <span className="text-slate-300">question</span>,{' '}
            <span className="text-slate-300">feedback</span>, a{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text font-medium text-transparent">
              collaboration opportunity
            </span>
            , or simply want to say hello — fill out the form and I&apos;ll respond as soon as I can.
          </p>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.04 }}
          className="relative overflow-hidden rounded-2xl border border-gray-700/60 bg-gray-800/40 shadow-xl shadow-black/10 backdrop-blur-sm"
        >
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-600 opacity-90 md:block" aria-hidden />

          <div className="grid md:grid-cols-[minmax(0,0.9fr)_1px_minmax(0,1.1fr)]">
            <div className="flex flex-col p-4 pl-5 sm:p-6 sm:pl-7">
              <h3 className="text-base font-semibold text-white sm:text-lg">Reach me</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-gray-400 sm:text-[13px]">
                Prefer email for detailed notes — I usually reply shortly
              </p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={mailto}
                    className="flex items-center gap-3 rounded-xl border border-transparent bg-gray-900/30 px-3 py-2.5 text-sm text-gray-100 transition hover:border-cyan-500/25 hover:bg-cyan-500/[0.06]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-400">
                      <FaEnvelope />
                    </span>
                    <span className="min-w-0 break-all font-medium text-[13px] sm:text-sm">
                      {LINKS.email}
                    </span>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-3 rounded-xl border border-transparent bg-gray-900/30 px-3 py-2.5 text-sm text-gray-100">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-400">
                      <FaMapMarkerAlt />
                    </span>
                    <span className="font-medium text-[13px] sm:text-sm">Hyderabad, India</span>
                  </div>
                </li>
              </ul>
              <p className="mb-2 mt-5 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                Connect
              </p>
              <div className="flex gap-2">
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-600/50 bg-gray-900/40 text-sky-400 transition hover:border-sky-500/40 hover:bg-sky-500/10 hover:text-sky-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-600/50 bg-gray-900/40 text-gray-200 transition hover:border-gray-500 hover:bg-white/5"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href={LINKS.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-600/50 bg-gray-900/40 text-gray-200 transition hover:border-gray-500 hover:bg-white/5"
                  aria-label="DEV Community"
                >
                  <SiDevdotto />
                </a>
              </div>
            </div>

            <div className="mx-5 h-px bg-gradient-to-r from-transparent via-gray-600/70 to-transparent md:mx-0 md:h-auto md:w-px md:bg-gradient-to-b md:from-transparent md:via-cyan-500/40 md:to-transparent" aria-hidden />

            <form onSubmit={handleSubmit} className="flex flex-col p-4 sm:p-6">
              <div className="mb-4">
                <h3 className="text-base font-semibold text-white sm:text-lg">Send a message</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-400 sm:text-[13px]">
                  Share a few details below — your note is sent securely from this form.
                </p>
              </div>

              <div className="flex flex-1 flex-col space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-xs font-medium text-gray-400">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputClass}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-xs font-medium text-gray-400">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@gmail.com"
                      className={inputClass}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1 block text-xs font-medium text-gray-400">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project idea, role, or feedback or collaboration opportunity"
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-xs font-medium text-gray-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me a bit about your idea, timeline, or collaboration opportunity or how I can help… "
                    className={`${inputClass} min-h-[72px] resize-none`}
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-0.5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-900/25 transition hover:shadow-cyan-800/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 enabled:hover:opacity-[0.97] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Sending…'
                  ) : (
                    <>
                      <FaPaperPlane className="text-sm" />
                      Send message
                    </>
                  )}
                </button>

                {submitStatus.message && (
                  <div
                    role="status"
                    className={`rounded-lg border px-3 py-2 text-center text-xs sm:text-sm ${
                      submitStatus.success
                        ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-200'
                        : 'border-red-500/35 bg-red-500/10 text-red-200'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
              </div>
            </form>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Contact;
