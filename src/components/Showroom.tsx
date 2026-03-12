"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";

const galleryItems = [
    { src: "/images/showroom-interior.png", label: "Ana Showroom Katı" },
    { src: "/images/showroom-gallery.png", label: "Galeri Koleksiyonu" },
    { src: "/images/car-detail.png", label: "Detay Mükemmeliyeti" },
    { src: "/images/hero.png", label: "Dış Cephe" },
];

export default function Showroom() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
    const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

    return (
        <section id="showroom" className="section-padding" style={{ background: "var(--color-dark)" }}>
            <div className="container-site" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: "center", marginBottom: "4rem" }}
                >
                    <p className="label text-gold" style={{ marginBottom: "1rem" }}>Showroomumuz</p>
                    <h2 className="heading-lg" style={{ marginBottom: "1rem" }}>
                        Olağanüstü Makinelere
                        <br />
                        <em style={{ color: "var(--color-gold)" }}>Layık Bir Mekan</em>
                    </h2>
                    <span className="gold-line-center" />
                    <p className="body-lg" style={{ color: "var(--color-muted)", maxWidth: "550px", margin: "0 auto" }}>
                        Showroomumuz tek bir amaçla tasarlandı: dünyanın en seçkin araçlarını
                        prestijleriyle örtüşen bir ortamda sunmak.
                    </p>
                </motion.div>

                {/* Galeri Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gridTemplateRows: "auto auto", gap: "1rem" }}
                    className="gallery-grid">
                    {galleryItems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.8, delay: i * 0.15 }}
                            style={{
                                position: "relative",
                                aspectRatio: i === 0 ? "4/3" : "3/2",
                                overflow: "hidden", cursor: "pointer",
                                gridColumn: i === 0 ? "1" : undefined,
                                gridRow: i === 0 ? "1 / 3" : undefined,
                            }}
                            onMouseEnter={() => setHoveredIdx(i)}
                            onMouseLeave={() => setHoveredIdx(null)}
                            onClick={() => setLightboxIdx(i)}
                        >
                            <Image src={item.src} alt={item.label} fill
                                style={{ objectFit: "cover", transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)", transform: hoveredIdx === i ? "scale(1.05)" : "scale(1)" }} />
                            <div style={{
                                position: "absolute", inset: 0, background: "rgba(8,8,8,0.5)",
                                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                                opacity: hoveredIdx === i ? 1 : 0, transition: "opacity 0.4s ease",
                            }}>
                                <ZoomIn color="var(--color-gold)" size={28} />
                                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-white)", marginTop: "0.75rem" }}>
                                    {item.label}
                                </span>
                            </div>
                            <div style={{ position: "absolute", bottom: "1rem", left: "1rem", opacity: hoveredIdx === i ? 0 : 0.7, transition: "opacity 0.4s ease" }}>
                                <div style={{ width: "30px", height: "1px", background: "var(--color-gold)", marginBottom: "0.4rem" }} />
                                <span className="label" style={{ color: "var(--color-gold)", fontSize: "0.55rem" }}>{item.label}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Showroom istatistikleri */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{ background: "var(--color-border)", marginTop: "1rem" }}
                    className="showroom-stats"
                >
                    {[
                        { value: "2.500 m²", label: "Showroom Alanı" },
                        { value: "30+", label: "Teşhirdeki Araç" },
                        { value: "Özel", label: "VIP Görüntüleme Süitleri" },
                    ].map((item) => (
                        <div key={item.label} style={{ background: "var(--color-dark)", padding: "2rem", textAlign: "center" }}>
                            <div style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 300, color: "var(--color-gold)" }}>
                                {item.value}
                            </div>
                            <div className="label text-muted" style={{ marginTop: "0.4rem", fontSize: "0.6rem" }}>{item.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Lightbox */}
            {lightboxIdx !== null && (
                <div
                    style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(0,0,0,0.95)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}
                    onClick={() => setLightboxIdx(null)}
                >
                    <div style={{ position: "relative", width: "100%", maxWidth: "900px", aspectRatio: "4/3" }}>
                        <Image src={galleryItems[lightboxIdx].src} alt={galleryItems[lightboxIdx].label} fill style={{ objectFit: "contain" }} />
                    </div>
                </div>
            )}

            <style jsx>{`
        .showroom-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; }
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
          .showroom-stats { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
