"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        name: "Burak Erdoğan",
        title: "Girişimci, Bursa",
        quote:
            "Son beş yılda Er Motors aracılığıyla üç araç aldım ve her deneyim kusursuzdur. Eren Bey ve ekibi, gerçek lüks hizmetin ne anlama geldiğini çok iyi biliyor. 911 Turbo S'in teslimi, yılın en unutulmaz anlarından biriydi.",
        vehicle: "Porsche 911 Turbo S",
        stars: 5,
    },
    {
        name: "Selin Arslan",
        title: "Mimar, Bursa",
        quote:
            "Çok özel bir Range Rover konfigürasyonu arıyordum ve Türkiye'nin hiçbir yerinde bulamadım. Er Motors iki hafta içinde Londra'dan tam istediğimi buldu. İlk aramadan anahtar teslime kadar her şey kusursuz ve gerçekten keyifliydi.",
        vehicle: "Range Rover SV",
        stars: 5,
    },
    {
        name: "Mehmet Can Yıldız",
        title: "CEO, Yıldız Holding",
        quote:
            "20 yıllık premium araç satın alma deneyimimde, bu düzeyde ilgi, bilgi ve dürüstlük ile hiçbir galeride karşılaşmadım. Size araç satmıyorlar — doğru olanı bulmanızı sağlıyorlar. Başka hiçbir yere gitmezdim.",
        vehicle: "Mercedes-Benz S 580",
        stars: 5,
    },
    {
        name: "Ceyda Kaya",
        title: "Yatırım Direktörü, Bursa",
        quote:
            "Er Motors ekibi, ilk görüşmemizden itibaren bana saygı ve uzmanlıkla yaklaştı. Dikkatle dinlediler, doğru soruları sordular ve beklentilerimi aşan bir araç teslim ettiler. Her anlamda gerçekten premium.",
        vehicle: "BMW M5 Competition",
        stars: 5,
    },
];

export default function Testimonials() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const [current, setCurrent] = useState(0);
    const total = testimonials.length;
    const prev = () => setCurrent((c) => (c - 1 + total) % total);
    const next = () => setCurrent((c) => (c + 1) % total);
    const t = testimonials[current];

    return (
        <section id="testimonials" className="section-padding" style={{ background: "var(--color-dark)" }}>
            <style jsx>{`
                .testimonials-nav { gap: 1.5rem; }
                @media (max-width: 768px) {
                    .testimonials-nav { gap: 2.5rem; margin-top: 1rem; }
                }
            `}</style>
            <div className="container-site" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}
                    style={{ textAlign: "center", marginBottom: "4rem" }}
                >
                    <p className="label text-gold" style={{ marginBottom: "1rem" }}>Müşteri Görüşleri</p>
                    <h2 className="heading-lg" style={{ marginBottom: "1rem" }}>
                        Müşterilerimiz
                        <br />
                        <em style={{ color: "var(--color-gold)" }}>Ne Diyor?</em>
                    </h2>
                    <span className="gold-line-center" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ maxWidth: "780px", margin: "0 auto", padding: "3rem", border: "1px solid var(--color-border)", background: "var(--color-charcoal)", position: "relative" }}
                >
                    <div style={{ display: "flex", gap: "4px", marginBottom: "1.8rem", justifyContent: "center" }}>
                        {[...Array(t.stars)].map((_, i) => (
                            <Star key={i} size={16} fill="var(--color-gold)" color="var(--color-gold)" />
                        ))}
                    </div>
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: "6rem", lineHeight: 0.5, color: "var(--color-gold)", opacity: 0.2, position: "absolute", top: "2rem", left: "2.5rem", userSelect: "none" }}>
                        &ldquo;
                    </div>
                    <motion.blockquote
                        key={current} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                        style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1rem, 2vw, 1.3rem)", fontWeight: 300, fontStyle: "italic", lineHeight: 1.7, color: "rgba(245,245,240,0.8)", textAlign: "center", marginBottom: "2rem" }}
                    >
                        {t.quote}
                    </motion.blockquote>
                    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                        <div style={{ width: "40px", height: "1px", background: "var(--color-gold)", margin: "0 auto 1rem auto" }} />
                        <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 500, color: "var(--color-white)" }}>{t.name}</div>
                        <div className="label text-muted" style={{ marginTop: "0.3rem", fontSize: "0.6rem" }}>{t.title}</div>
                        <div className="label text-gold" style={{ marginTop: "0.2rem", fontSize: "0.55rem" }}>{t.vehicle}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }} className="testimonials-nav">
                        <button onClick={prev} style={{ background: "transparent", border: "1px solid var(--color-border)", color: "var(--color-muted)", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.3s" }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--color-gold)"; e.currentTarget.style.color = "var(--color-gold)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--color-border)"; e.currentTarget.style.color = "var(--color-muted)"; }}>
                            <ChevronLeft size={18} />
                        </button>
                        <div style={{ display: "flex", gap: "6px" }}>
                            {testimonials.map((_, i) => (
                                <button key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? "24px" : "6px", height: "6px", background: i === current ? "var(--color-gold)" : "var(--color-border)", border: "none", borderRadius: "3px", cursor: "pointer", transition: "all 0.3s" }} />
                            ))}
                        </div>
                        <button onClick={next} style={{ background: "transparent", border: "1px solid var(--color-border)", color: "var(--color-muted)", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.3s" }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--color-gold)"; e.currentTarget.style.color = "var(--color-gold)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--color-border)"; e.currentTarget.style.color = "var(--color-muted)"; }}>
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
