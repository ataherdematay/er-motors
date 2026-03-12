"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Instagram, Phone, Mail, MapPin, ArrowUp } from "lucide-react";

const footerLinks = {
    navigation: [
        { label: "Hakkımızda", href: "#about" },
        { label: "Showroom", href: "#showroom" },
        { label: "Teslimler", href: "#deliveries" },
        { label: "Vizyonumuz", href: "#vision" },
        { label: "İletişim", href: "#contact" },
    ],
    brands: ["Porsche", "Mercedes-Benz", "BMW", "Aston Martin", "Range Rover", "Bentley", "Ferrari", "Lamborghini"],
};

export default function Footer() {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 600);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (href: string) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer style={{ background: "#050505", borderTop: "1px solid var(--color-border)" }}>
            <div className="container-site" style={{ padding: "5rem 2rem 3rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1.3fr", gap: "3rem", marginBottom: "4rem" }} className="footer-grid">
                    {/* Marka */}
                    <div>
                        <Image src="/images/er-motors-logo.png" alt="Er Motors" width={160} height={44} style={{ objectFit: "contain", height: "44px", width: "auto", marginBottom: "1.2rem" }} />
                        <p className="body-sm" style={{ color: "var(--color-muted)", lineHeight: 1.8, marginBottom: "1.5rem", maxWidth: "260px" }}>
                            Bursa&apos;nın en güvenilir premium otomotiv galerisi. 2008&apos;den bu yana
                            lükste mükemmellik, dürüstlükte güven.
                        </p>
                        <div style={{ display: "flex", gap: "0.75rem" }}>
                            <a href="https://instagram.com/ermotors" target="_blank" rel="noreferrer"
                                style={{
                                    width: "36px", height: "36px", border: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center",
                                    color: "var(--color-muted)", textDecoration: "none", transition: "all 0.3s"
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--color-gold)"; e.currentTarget.style.color = "var(--color-gold)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--color-border)"; e.currentTarget.style.color = "var(--color-muted)"; }}
                            >
                                <Instagram size={15} />
                            </a>
                        </div>
                    </div>

                    {/* Navigasyon */}
                    <div>
                        <h4 className="label text-gold" style={{ fontSize: "0.6rem", marginBottom: "1.2rem" }}>Navigasyon</h4>
                        {footerLinks.navigation.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => scrollTo(link.href)}
                                style={{
                                    display: "block", background: "none", border: "none", color: "var(--color-muted)", fontFamily: "var(--font-sans)",
                                    fontSize: "0.875rem", marginBottom: "0.6rem", cursor: "pointer", padding: 0, transition: "color 0.3s", textAlign: "left"
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold)")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* Markalar */}
                    <div>
                        <h4 className="label text-gold" style={{ fontSize: "0.6rem", marginBottom: "1.2rem" }}>Sunduğumuz Markalar</h4>
                        {footerLinks.brands.map((brand) => (
                            <div key={brand} style={{ color: "var(--color-muted)", fontSize: "0.875rem", marginBottom: "0.6rem" }}>
                                {brand}
                            </div>
                        ))}
                    </div>

                    {/* İletişim */}
                    <div>
                        <h4 className="label text-gold" style={{ fontSize: "0.6rem", marginBottom: "1.2rem" }}>İletişim</h4>
                        {[
                            { Icon: Phone, value: "0532 201 20 51", href: "tel:+905322012051" },
                            { Icon: Mail, value: "info@ermotors.com.tr", href: "mailto:info@ermotors.com.tr" },
                            { Icon: MapPin, value: "23 Nisan Mah. Atatürk Bulvarı, Alpiş Plaza No:3/E, Nilüfer, Bursa 16130", href: undefined },
                        ].map(({ Icon, value, href }) => (
                            <div key={value} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.9rem", alignItems: "flex-start" }}>
                                <Icon size={13} color="var(--color-gold)" style={{ marginTop: "3px", flexShrink: 0 }} />
                                {href ? (
                                    <a href={href} style={{ color: "var(--color-muted)", fontSize: "0.8rem", textDecoration: "none", lineHeight: 1.5, transition: "color 0.3s" }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold)")}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
                                    >{value}</a>
                                ) : (
                                    <span style={{ color: "var(--color-muted)", fontSize: "0.8rem", lineHeight: 1.5 }}>{value}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Alt Bar */}
                <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                    <p className="body-sm" style={{ color: "var(--color-muted)", fontSize: "0.75rem" }}>
                        © {new Date().getFullYear()} Er Motors. Tüm hakları saklıdır.
                    </p>
                    <p className="body-sm" style={{ color: "var(--color-muted)", fontSize: "0.75rem" }}>
                        Premium Otomotiv Galerisi · Bursa
                    </p>
                </div>
            </div>

            {/* Yukarı Çık */}
            {visible && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="scroll-top-btn"
                    style={{
                        position: "fixed", zIndex: 50,
                        background: "var(--color-gold)", border: "none",
                        display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                        boxShadow: "0 4px 20px rgba(201,168,76,0.3)", transition: "transform 0.3s, opacity 0.3s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                >
                    <ArrowUp size={18} color="var(--color-black)" />
                </button>
            )}

            <style jsx>{`
        .scroll-top-btn { width: 44px; height: 44px; bottom: 2rem; right: 2rem; }
        @media (max-width: 768px) { 
          .footer-grid { grid-template-columns: 1fr 1fr !important; } 
          .scroll-top-btn { width: 36px; height: 36px; bottom: 1.5rem; right: 1.5rem; opacity: 0.8; }
        }
        @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
        </footer>
    );
}
