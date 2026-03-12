"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const inputStyle = {
        width: "100%",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid var(--color-border)",
        color: "var(--color-white)",
        fontFamily: "var(--font-sans)",
        fontSize: "0.875rem",
        padding: "0.9rem 1rem",
        outline: "none",
        transition: "border-color 0.3s",
    };

    return (
        <section id="contact" className="section-padding" style={{ background: "var(--color-dark)", borderTop: "1px solid var(--color-border)" }}>
            <div className="container-site" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}
                    style={{ textAlign: "center", marginBottom: "4rem" }}
                >
                    <p className="label text-gold" style={{ marginBottom: "1rem" }}>İletişim</p>
                    <h2 className="heading-lg contact-h2" style={{ marginBottom: "1rem" }}>
                        Hayalinizdeki Araçla
                        <br />
                        <em style={{ color: "var(--color-gold)" }}>Tanışmaya Hazır mısınız?</em>
                    </h2>
                    <span className="gold-line-center" />
                    <p className="body-lg" style={{ color: "var(--color-muted)", maxWidth: "500px", margin: "0 auto" }}>
                        Bir sorunuz mu var ya da belirli bir araç mı arıyorsunuz? Ekibimiz size yardımcı olmaktan memnuniyet duyar.
                    </p>
                </motion.div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "4rem", alignItems: "start" }} className="contact-grid">
                    {/* Sol Panel: Bilgiler */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div style={{ marginBottom: "2.5rem" }}>
                            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontWeight: 400, color: "var(--color-white)", marginBottom: "0.5rem" }}>
                                Er Motors Showroom
                            </h3>
                            <div style={{ width: "40px", height: "1px", background: "var(--color-gold)", marginBottom: "1.5rem", opacity: 0.7 }} />
                            {[
                                { Icon: Phone, label: "Telefon", value: "0532 201 20 51", href: "tel:+905322012051" },
                                { Icon: Mail, label: "E-posta", value: "info@ermotors.com.tr", href: "mailto:info@ermotors.com.tr" },
                                { Icon: MapPin, label: "Adres", value: "23 Nisan Mah. Atatürk Bulvarı, Alpiş Plaza No:3/E, Nilüfer, Bursa 16130", href: undefined },
                                { Icon: Clock, label: "Çalışma Saatleri", value: "Pazartesi–Cumartesi: 09:00–19:00", href: undefined },
                            ].map(({ Icon, label, value, href }) => (
                                <div key={label} style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                                    <div style={{ width: "36px", height: "36px", border: "1px solid rgba(201,168,76,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                                        <Icon size={15} color="var(--color-gold)" />
                                    </div>
                                    <div>
                                        <div className="label text-muted" style={{ fontSize: "0.55rem", marginBottom: "0.2rem" }}>{label}</div>
                                        {href ? (
                                            <a href={href} style={{ color: "var(--color-white)", textDecoration: "none", fontSize: "0.9rem", lineHeight: 1.5, transition: "color 0.3s" }}
                                                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold)")}
                                                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-white)")}
                                            >{value}</a>
                                        ) : (
                                            <span style={{ color: "var(--color-white)", fontSize: "0.9rem", lineHeight: 1.5 }}>{value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ padding: "1.5rem", border: "1px solid rgba(201,168,76,0.2)", background: "rgba(201,168,76,0.03)" }}>
                            <p className="label text-gold" style={{ fontSize: "0.55rem", marginBottom: "0.5rem" }}>Özel Hizmet</p>
                            <p className="body-sm" style={{ color: "var(--color-muted)" }}>
                                Belirli bir araç mı arıyorsunuz ama listede yok mu? Bize ulaşın — dünya genelinde kaynak ağımızla size özel arama başlatalım.
                            </p>
                        </div>
                    </motion.div>

                    {/* Sağ Panel: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {submitted ? (
                            <div style={{ padding: "3rem", border: "1px solid rgba(201,168,76,0.3)", textAlign: "center" }}>
                                <CheckCircle2 size={48} color="var(--color-gold)" style={{ margin: "0 auto 1.5rem auto", display: "block" }} />
                                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", fontWeight: 300, color: "var(--color-white)", marginBottom: "1rem" }}>
                                    Mesajınız Alındı
                                </h3>
                                <p className="body-lg" style={{ color: "var(--color-muted)" }}>
                                    24 saat içinde kişisel danışmanınız sizinle iletişime geçecektir.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                                    <div>
                                        <label className="label text-muted" style={{ fontSize: "0.55rem", display: "block", marginBottom: "0.4rem" }}>Adınız Soyadınız *</label>
                                        <input
                                            required type="text"
                                            placeholder="Adınız Soyadınız"
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            style={inputStyle}
                                            onFocus={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.5)")}
                                            onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                                        />
                                    </div>
                                    <div>
                                        <label className="label text-muted" style={{ fontSize: "0.55rem", display: "block", marginBottom: "0.4rem" }}>E-posta *</label>
                                        <input
                                            required type="email"
                                            placeholder="e-posta@adresiniz.com"
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            style={inputStyle}
                                            onFocus={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.5)")}
                                            onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="label text-muted" style={{ fontSize: "0.55rem", display: "block", marginBottom: "0.4rem" }}>Telefon</label>
                                    <input
                                        type="tel"
                                        placeholder="05xx xxx xx xx"
                                        value={form.phone}
                                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                        style={inputStyle}
                                        onFocus={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.5)")}
                                        onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                                    />
                                </div>
                                <div>
                                    <label className="label text-muted" style={{ fontSize: "0.55rem", display: "block", marginBottom: "0.4rem" }}>İlgilendiğiniz Araç</label>
                                    <input
                                        type="text"
                                        placeholder="Porsche, Mercedes, BMW..."
                                        value={form.interest}
                                        onChange={(e) => setForm({ ...form, interest: e.target.value })}
                                        style={inputStyle}
                                        onFocus={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.5)")}
                                        onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                                    />
                                </div>
                                <div>
                                    <label className="label text-muted" style={{ fontSize: "0.55rem", display: "block", marginBottom: "0.4rem" }}>Mesajınız *</label>
                                    <textarea
                                        required rows={5}
                                        placeholder="Bize ne sormak istersiniz? Aradığınız araç veya hizmet hakkında bilgi verin..."
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        style={{ ...inputStyle, resize: "none" }}
                                        onFocus={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.5)")}
                                        onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                                    />
                                </div>
                                <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}>
                                    <span>Mesaj Gönder</span>
                                    <Send size={14} />
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .form-row { grid-template-columns: 1fr !important; }
          .contact-h2 { font-size: 2.2rem !important; }
        }
      `}</style>
        </section>
    );
}
