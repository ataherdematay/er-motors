"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="hero"
            style={{
                position: "relative",
                height: "100vh",
                minHeight: "700px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                background: "var(--color-black)",
            }}
        >
            {/* Background Video and Curtains */}
            <div style={{ position: "absolute", inset: 0, zIndex: 0, background: "#050505" }}>
                {/* Center Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        objectPosition: "center",
                        opacity: 0.85,
                    }}
                >
                    <source src="/videos/hero.mp4" type="video/mp4" />
                </video>

                {/* Left Luxury Curtain */}
                <motion.div
                    initial={{ width: "50%" }}
                    animate={{ width: "max(0px, calc(50% - 28vh))" }}
                    transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: "100%",
                        background: "linear-gradient(90deg, #050505 0%, #111111 80%, #2a200a 100%)",
                        borderRight: "2px solid rgba(201,168,76,0.6)",
                        boxShadow: "10px 0 40px rgba(0,0,0,0.9)",
                        zIndex: 1,
                    }}
                >
                    <div style={{ position: "absolute", inset: 0, background: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")", opacity: 0.05, mixBlendMode: "overlay" }} />
                </motion.div>

                {/* Right Luxury Curtain */}
                <motion.div
                    initial={{ width: "50%" }}
                    animate={{ width: "max(0px, calc(50% - 28vh))" }}
                    transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        height: "100%",
                        background: "linear-gradient(-90deg, #050505 0%, #111111 80%, #2a200a 100%)",
                        borderLeft: "2px solid rgba(201,168,76,0.6)",
                        boxShadow: "-10px 0 40px rgba(0,0,0,0.9)",
                        zIndex: 1,
                    }}
                >
                    <div style={{ position: "absolute", inset: 0, background: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")", opacity: 0.05, mixBlendMode: "overlay" }} />
                </motion.div>

                {/* Cinematic Overlays */}
                <div style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 2,
                    background: "linear-gradient(180deg, rgba(8,8,8,0.3) 0%, rgba(8,8,8,0.1) 40%, rgba(8,8,8,0.5) 80%, rgba(8,8,8,0.95) 100%)",
                    pointerEvents: "none"
                }} />
            </div>

            {/* Content */}
            <div
                className="container-site"
                style={{
                    position: "relative",
                    zIndex: 3,
                    textAlign: "center",
                    maxWidth: "900px",
                }}
            >
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="label text-gold"
                    style={{ marginBottom: "1.5rem" }}
                >
                    ✦ &nbsp; Premium Otomotiv Galerisi &nbsp; ✦
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
                    className="heading-xl"
                    style={{ color: "var(--color-white)", marginBottom: "1.5rem" }}
                >
                    Tutkuyla
                    <br />
                    <em style={{ color: "var(--color-gold)", fontStyle: "italic" }}>Sürülen Prestij</em>
                </motion.h1>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
                    style={{
                        width: "80px",
                        height: "1px",
                        background: "var(--color-gold)",
                        margin: "0 auto 1.8rem auto",
                        transformOrigin: "left",
                    }}
                />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                    className="body-lg text-muted"
                    style={{ maxWidth: "600px", margin: "0 auto 3rem auto", color: "rgba(245,245,240,0.7)" }}
                >
                    Dünyanın en seçkin otomobillerinin buluştuğu özel bir atmosfer.
                    Lüksü yeniden keşfedin — showroomumuzdan kapınıza kadar.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.0 }}
                    style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
                >
                    <a
                        href="#showroom"
                        className="btn-primary"
                        onClick={(e) => { e.preventDefault(); document.getElementById("showroom")?.scrollIntoView({ behavior: "smooth" }); }}
                    >
                        <span>Showroom&apos;u Keşfet</span>
                    </a>
                    <a
                        href="#contact"
                        className="btn-outline"
                        onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                    >
                        <span>Bize Ulaşın</span>
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.8 }}
                style={{
                    position: "absolute",
                    bottom: "2.5rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.5rem",
                    cursor: "pointer",
                    zIndex: 3,
                }}
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
                <span className="label" style={{ color: "var(--color-muted)", fontSize: "0.6rem" }}>Kaydır</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <ArrowDown size={16} color="var(--color-gold)" />
                </motion.div>
            </motion.div>

            {/* Stats bar */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.8 }}
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "rgba(8,8,8,0.8)",
                    backdropFilter: "blur(20px)",
                    borderTop: "1px solid rgba(201,168,76,0.15)",
                    padding: "1.5rem 2rem",
                    display: "flex",
                    justifyContent: "center",
                    gap: "4rem",
                    flexWrap: "wrap",
                    zIndex: 3,
                }}
            >
                {[
                    { value: "500+", label: "Teslim Edilen Araç" },
                    { value: "15+", label: "Yıllık Deneyim" },
                    { value: "%98", label: "Müşteri Memnuniyeti" },
                    { value: "50+", label: "Premium Marka" },
                ].map((stat) => (
                    <div key={stat.label} style={{ textAlign: "center" }}>
                        <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", fontWeight: 300, color: "var(--color-gold)" }}>
                            {stat.value}
                        </div>
                        <div className="label text-muted" style={{ marginTop: "0.2rem", fontSize: "0.6rem" }}>{stat.label}</div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
