"use client";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: i * 0.15, ease: "easeOut" },
    }),
};

export default function BrandStory() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="section-padding" style={{ background: "var(--color-black)", position: "relative", overflow: "hidden" }}>
            <div style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                fontFamily: "var(--font-serif)", fontSize: "clamp(6rem, 18vw, 20rem)",
                fontWeight: 300, color: "rgba(201,168,76,0.03)", whiteSpace: "nowrap",
                userSelect: "none", pointerEvents: "none", letterSpacing: "0.1em",
            }}>
                MÜKEMMEL
            </div>

            <div className="container-site" ref={ref}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}
                    className="grid-responsive">
                    {/* Sol: Metin */}
                    <div>
                        <motion.p custom={0} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
                            className="label text-gold" style={{ marginBottom: "1.2rem" }}>
                            Hikayemiz
                        </motion.p>
                        <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
                            className="heading-lg" style={{ color: "var(--color-white)", marginBottom: "1rem" }}>
                            En İyisini Hak Eden
                            <br />
                            <em style={{ color: "var(--color-gold)" }}>Müşteriler İçin</em>
                        </motion.h2>
                        <span className="gold-line" />
                        <motion.p custom={3} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
                            className="body-lg" style={{ color: "rgba(245,245,240,0.65)", marginBottom: "1.5rem" }}>
                            Otomobilin sıradan bir taşıt değil; karakterin bir ifadesi, zevkin yansıması ve
                            başarının kanıtı olduğuna dair sarsılmaz bir inançla kurulan Er Motors, lüks araç
                            dünyasında fark yaratmayı sürdürüyor.
                        </motion.p>
                        <motion.p custom={4} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
                            className="body-lg" style={{ color: "rgba(245,245,240,0.65)", marginBottom: "2.5rem" }}>
                            Bursa&apos;nın en güvenilir premium otomotiv markası olarak 15 yılı aşkın süredir hizmet veren
                            Er Motors, sadece araç satmıyor; deneyimler yaşatıyor, ilişkiler kuruyor ve müşterilerine
                            gerçekten onları yansıtan araçlara kavuşmalarında rehberlik ediyor.
                        </motion.p>
                        <motion.div custom={5} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
                            style={{ display: "flex", gap: "3rem" }}>
                            {[
                                { num: "2008", label: "Kuruluş Yılı" },
                                { num: "500+", label: "Mutlu Müşteri" },
                                { num: "50+", label: "Marka" },
                            ].map((item) => (
                                <div key={item.label}>
                                    <div style={{ fontFamily: "var(--font-serif)", fontSize: "2.2rem", fontWeight: 300, color: "var(--color-gold)" }}>
                                        {item.num}
                                    </div>
                                    <div className="label text-muted" style={{ marginTop: "0.2rem", fontSize: "0.6rem" }}>{item.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Sağ: Değerler */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                        {[
                            {
                                number: "01",
                                title: "Özenle Seçilmiş Koleksiyon",
                                desc: "Koleksiyonumuzdaki her araç, kalite, köken ve durum açısından titiz standartlarımızı karşılaması için bizzat incelenerek seçilmiştir.",
                            },
                            {
                                number: "02",
                                title: "Beyaz Eldiven Hizmet",
                                desc: "İlk görüşmeden anahtarların elinize geçtiği ana kadar, özel ekibimiz temsil ettiğimiz araçlar kadar rafine bir deneyim sunar.",
                            },
                            {
                                number: "03",
                                title: "Güvenilir Uzmanlık",
                                desc: "15 yılı aşkın premium otomotiv deneyimiyle bilgimiz kadar tutkuluyuz. Dürüstlük ve bütünlükle tavsiye ediyor, dinliyor ve teslim ediyoruz.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={item.number} custom={i + 2} variants={fadeUp}
                                initial="hidden" animate={inView ? "visible" : "hidden"}
                                style={{
                                    display: "flex", gap: "1.5rem", padding: "1.5rem",
                                    borderLeft: "1px solid var(--color-border)", transition: "border-color 0.3s",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-gold)")}
                                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                            >
                                <span style={{ fontFamily: "var(--font-serif)", fontSize: "3rem", fontWeight: 300, color: "rgba(201,168,76,0.25)", lineHeight: 1, flexShrink: 0 }}>
                                    {item.number}
                                </span>
                                <div>
                                    <div className="heading-sm" style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>{item.title}</div>
                                    <p className="body-sm" style={{ color: "var(--color-muted)" }}>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .grid-responsive { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
        </section>
    );
}
