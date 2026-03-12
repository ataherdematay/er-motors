"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";

const deliveries = [
    {
        image: "/images/delivery-1.png",
        model: "Porsche 911 Turbo S",
        year: "2024",
        location: "Nilüfer, Bursa",
        desc: "Önemli bir başarısını kutlayan uzun süreli müşterimize özenle teslim edildi.",
        color: "Jet Siyah Metalik",
    },
    {
        image: "/images/delivery-2.png",
        model: "Range Rover SV",
        year: "2024",
        location: "Osmangazi, Bursa",
        desc: "Özel villa kapısına kadar eksiksiz servis anlayışıyla teslim edilen SV Edisyon.",
        color: "Santorini Beyazı",
    },
    {
        image: "/images/delivery-3.png",
        model: "Mercedes-Benz S 580",
        year: "2023",
        location: "Mudanya, Bursa",
        desc: "Bursa&apos;nın kalbinde, törenle teslim edilen amiral gemisi S-Serisi.",
        color: "Rubellite Kırmızısı",
    },
];

export default function DeliveredVehicles() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="deliveries" className="section-padding" style={{ background: "var(--color-black)" }}>
            <div className="container-site" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: "center", marginBottom: "4rem" }}
                >
                    <p className="label text-gold" style={{ marginBottom: "1rem" }}>Gururla Teslim Edildi</p>
                    <h2 className="heading-lg" style={{ marginBottom: "1rem" }}>
                        Her Teslimat,
                        <br />
                        <em style={{ color: "var(--color-gold)" }}>Unutulmaz Bir An</em>
                    </h2>
                    <span className="gold-line-center" />
                    <p className="body-lg" style={{ color: "var(--color-muted)", maxWidth: "550px", margin: "0 auto" }}>
                        Teslim anının, aracın kendisi kadar olağanüstü olması gerektiğine inanıyoruz.
                        Memnun müşterilerimizden birkaç hikaye.
                    </p>
                </motion.div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="deliveries-grid">
                    {deliveries.map((car, i) => (
                        <motion.article
                            key={car.model}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                            style={{ background: "var(--color-charcoal)", border: "1px solid var(--color-border)", overflow: "hidden", transition: "border-color 0.3s", cursor: "pointer" }}
                            whileHover={{ y: -8 }}
                            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)")}
                            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                        >
                            <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                                <Image src={car.image} alt={car.model} fill style={{ objectFit: "cover", transition: "transform 0.7s ease" }} />
                                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(26,26,26,1) 0%, transparent 50%)" }} />
                                <div style={{
                                    position: "absolute", top: "1rem", right: "1rem",
                                    background: "rgba(8,8,8,0.7)", backdropFilter: "blur(8px)",
                                    border: "1px solid rgba(201,168,76,0.3)", padding: "0.35rem 0.75rem",
                                }}>
                                    <span className="label" style={{ color: "var(--color-gold)", fontSize: "0.55rem" }}>{car.color}</span>
                                </div>
                            </div>
                            <div style={{ padding: "1.5rem" }}>
                                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", fontWeight: 400, color: "var(--color-white)", marginBottom: "0.5rem" }}>
                                    {car.model}
                                </h3>
                                <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                                    <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                                        <Calendar size={11} color="var(--color-gold)" />
                                        <span className="label" style={{ color: "var(--color-muted)", fontSize: "0.55rem" }}>{car.year}</span>
                                    </span>
                                    <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                                        <MapPin size={11} color="var(--color-gold)" />
                                        <span className="label" style={{ color: "var(--color-muted)", fontSize: "0.55rem" }}>{car.location}</span>
                                    </span>
                                </div>
                                <div style={{ width: "30px", height: "1px", background: "var(--color-gold)", marginBottom: "0.8rem", opacity: 0.6 }} />
                                <p className="body-sm" style={{ color: "var(--color-muted)" }}>{car.desc}</p>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    style={{ textAlign: "center", marginTop: "3.5rem" }}
                >
                    <p className="body-sm" style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>
                        Kendi teslim hikayenizi yazmaya hazır mısınız?
                    </p>
                    <a href="#contact" className="btn-primary"
                        onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>
                        <span>Yolculuğunuzu Başlatın</span>
                    </a>
                </motion.div>
            </div>

            <style jsx>{`
        @media (max-width: 768px) { .deliveries-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 769px) and (max-width: 1024px) { .deliveries-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
        </section>
    );
}
