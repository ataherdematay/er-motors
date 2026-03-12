"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const values = [
    { title: "Dürüstlük", desc: "Her işlemde tam şeffaflık. Söylediklerimizi yapıyoruz." },
    { title: "Tutku", desc: "Her araç, bir aşk hikayesidir. Bu coşkuyu sizinle paylaşıyoruz." },
    { title: "Hassasiyet", desc: "Her detay önemlidir. Mükemmelliğin sınırı yoktur." },
    { title: "Miras", desc: "İtibarımız biriktirmek için on yıllar sürdü. Her gün yeniden kazanıyoruz." },
];

export default function BrandVision() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="vision"
            className="section-padding"
            style={{ position: "relative", overflow: "hidden", isolation: "isolate" }}
        >
            <div style={{ position: "absolute", inset: 0, zIndex: -1 }}>
                <Image src="/images/car-detail.png" alt="Er Motors Vizyon" fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(8,8,8,0.88)" }} />
            </div>

            <div className="container-site" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}
                    style={{ textAlign: "center", marginBottom: "4rem" }}
                >
                    <p className="label text-gold" style={{ marginBottom: "1rem" }}>Temel Değerlerimiz</p>
                    <h2 className="heading-lg" style={{ marginBottom: "1rem" }}>
                        Tutku ile Yönelmiş,
                        <br />
                        <em style={{ color: "var(--color-gold)" }}>Mükemmellikle Rehberlenmiş</em>
                    </h2>
                    <span className="gold-line-center" />
                </motion.div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "rgba(201,168,76,0.15)", marginBottom: "4rem" }} className="values-grid">
                    {values.map((val, i) => (
                        <motion.div
                            key={val.title}
                            initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: i * 0.12 }}
                            style={{ background: "rgba(8,8,8,0.6)", backdropFilter: "blur(10px)", padding: "2.5rem 2rem", textAlign: "center", transition: "background 0.3s" }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.08)")}
                            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(8,8,8,0.6)")}
                        >
                            <div style={{ width: "1px", height: "40px", background: "var(--color-gold)", margin: "0 auto 1.5rem auto", opacity: 0.5 }} />
                            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontWeight: 400, color: "var(--color-gold)", marginBottom: "1rem" }}>
                                {val.title}
                            </h3>
                            <p className="body-sm" style={{ color: "rgba(245,245,240,0.6)" }}>{val.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.blockquote
                    initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 0.6 }}
                    style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}
                >
                    <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", fontStyle: "italic", fontWeight: 300, lineHeight: 1.6, color: "rgba(245,245,240,0.85)", marginBottom: "1.5rem" }}>
                        &ldquo;Her araç bir ruh taşır. Er Motors&apos;taki her şey, o ruhu saygıyla teslim etmek için var.&rdquo;
                    </p>
                    <div style={{ fontFamily: "var(--font-serif)", color: "var(--color-gold)", fontStyle: "italic", fontSize: "1.1rem" }}>— Eren Erenler</div>
                    <div className="label text-muted" style={{ marginTop: "0.3rem", fontSize: "0.6rem" }}>Kurucu & CEO, Er Motors</div>
                </motion.blockquote>
            </div>

            <style jsx>{`
        @media (max-width: 768px) { .values-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .values-grid { grid-template-columns: 1fr !important; } }
      `}</style>
        </section>
    );
}
