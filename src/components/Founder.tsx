"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Founder() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="founder"
            className="section-padding"
            style={{
                background: "var(--color-charcoal)",
                borderTop: "1px solid var(--color-border)",
                borderBottom: "1px solid var(--color-border)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div style={{
                position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
                background: "radial-gradient(ellipse at 80% 50%, rgba(201,168,76,0.04) 0%, transparent 60%)",
            }} />

            <div className="container-site" ref={ref}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "5rem", alignItems: "center" }}
                    className="founder-grid">
                    {/* Fotoğraf */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        style={{ position: "relative" }}
                    >
                        <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", maxWidth: "420px", margin: "0 auto" }}>
                            <Image src="/images/founder.png" alt="Eren Erenler" fill
                                style={{ objectFit: "cover", objectPosition: "top center" }} />
                            <div style={{
                                position: "absolute", bottom: "-1.5rem", right: "-1.5rem",
                                width: "60%", height: "60%",
                                border: "1px solid var(--color-gold)", opacity: 0.3, pointerEvents: "none",
                            }} />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            style={{
                                position: "absolute", top: "2rem", left: "-2rem",
                                background: "var(--color-gold)", color: "var(--color-black)",
                                padding: "1.2rem 1.5rem", textAlign: "center",
                                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                            }}
                        >
                            <div style={{ fontFamily: "var(--font-serif)", fontSize: "2.5rem", fontWeight: 300, lineHeight: 1 }}>15</div>
                            <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.55rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "4px" }}>
                                Yıllık<br />Deneyim
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* İçerik */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p className="label text-gold" style={{ marginBottom: "1.2rem" }}>Kurucumuzla Tanışın</p>
                        <h2 className="heading-lg" style={{ marginBottom: "0.5rem" }}>Eren Erenler</h2>
                        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.1rem", color: "var(--color-gold)", marginBottom: "1.5rem", fontWeight: 400 }}>
                            Kurucu & Genel Müdür
                        </p>
                        <span className="gold-line" />
                        <p className="body-lg" style={{ color: "rgba(245,245,240,0.65)", marginBottom: "1.5rem" }}>
                            &ldquo;Arabalar sadece ulaşım aracı değil; hareket eden heykeller, mühendislik şiirleri ve
                            insanoğlunun dünyanın içinden güzelce geçme arzusunun bir yansımasıdır. Misyonum,
                            olağanüstü insanları olağanüstü makinelerle buluşturmaktır.&rdquo;
                        </p>
                        <p className="body-lg" style={{ color: "rgba(245,245,240,0.65)", marginBottom: "2.5rem" }}>
                            Makine mühendisliği geçmişi ve otomotive olan derin tutkusuyla Eren Erenler,
                            Er Motors&apos;u 2008 yılında net bir vizyonla kurdu: Bursa&apos;nın en güvenilir ve
                            rafine premium otomotiv destinasyonu olmak. Her araca gösterdiği özel ilgi,
                            eşsiz bir kalite standardını garanti eder.
                        </p>
                        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                            <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", fontStyle: "italic", color: "var(--color-gold)", fontWeight: 400 }}>
                                Eren Erenler
                            </div>
                            <div style={{ width: "1px", height: "40px", background: "var(--color-border)" }} />
                            <div>
                                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", color: "var(--color-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                                    Kurucu & CEO
                                </div>
                                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", color: "var(--color-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "2px" }}>
                                    Er Motors · Kur. 2008
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .founder-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
        </section>
    );
}
