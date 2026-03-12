"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
    { label: "Hakkımızda", href: "#about" },
    { label: "Showroom", href: "#showroom" },
    { label: "Teslimler", href: "#deliveries" },
    { label: "Vizyonumuz", href: "#vision" },
    { label: "İletişim", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setMenuOpen(false);
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
                style={{
                    background: scrolled ? "rgba(8,8,8,0.95)" : "transparent",
                    backdropFilter: scrolled ? "blur(20px)" : "none",
                    borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
                    padding: scrolled ? "0.75rem 0" : "1.25rem 0",
                }}
            >
                <div className="container-site" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    {/* Logo */}
                    <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                        style={{ textDecoration: "none", display: "flex", alignItems: "center" }}
                    >
                        <Image
                            src="/images/er-motors-logo.png"
                            alt="Er Motors Logo"
                            width={160}
                            height={44}
                            style={{ objectFit: "contain", height: "44px", width: "auto" }}
                            priority
                        />
                    </a>

                    {/* Desktop Links */}
                    <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }} className="hidden-mobile">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNavClick(link.href)}
                                style={{
                                    background: "none",
                                    border: "none",
                                    color: "var(--color-muted)",
                                    fontFamily: "var(--font-sans)",
                                    fontSize: "0.68rem",
                                    fontWeight: 500,
                                    letterSpacing: "0.2em",
                                    textTransform: "uppercase",
                                    cursor: "pointer",
                                    transition: "color 0.3s ease",
                                    padding: "0.25rem 0",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold)")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
                            >
                                {link.label}
                            </button>
                        ))}
                        <button
                            onClick={() => handleNavClick("#contact")}
                            className="btn-primary"
                            style={{ padding: "0.65rem 1.6rem", fontSize: "0.62rem" }}
                        >
                            <span>Bize Ulaşın</span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="show-mobile"
                        onClick={() => setMenuOpen(!menuOpen)}
                        style={{ background: "none", border: "none", color: "var(--color-white)", cursor: "pointer", padding: "0.5rem" }}
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: "fixed",
                            inset: 0,
                            zIndex: 40,
                            background: "rgba(8,8,8,0.98)",
                            backdropFilter: "blur(20px)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "2.5rem",
                        }}
                    >
                        <Image src="/images/er-motors-logo.png" alt="Er Motors" width={200} height={56} style={{ objectFit: "contain", marginBottom: "1rem" }} />
                        {navLinks.map((link, i) => (
                            <motion.button
                                key={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.07 }}
                                onClick={() => handleNavClick(link.href)}
                                style={{
                                    background: "none",
                                    border: "none",
                                    color: "var(--color-white)",
                                    fontFamily: "var(--font-serif)",
                                    fontSize: "2rem",
                                    fontWeight: 300,
                                    cursor: "pointer",
                                }}
                            >
                                {link.label}
                            </motion.button>
                        ))}
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            onClick={() => handleNavClick("#contact")}
                            className="btn-primary"
                            style={{ marginTop: "1rem" }}
                        >
                            <span>Bize Ulaşın</span>
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
        </>
    );
}
