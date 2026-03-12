"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Star, Handshake, Award, Clock, Search } from "lucide-react";

const pillars = [
    {
        Icon: Shield,
        title: "Garanti Edilmiş Özgünlük",
        desc: "Her araç; köken doğrulama, servis geçmişi incelemesi ve sertifikalı uzmanlar tarafından kapsamlı kontrol sürecinden geçirilir.",
    },
    {
        Icon: Star,
        title: "Özenle Seçilmiş Mükemmellik",
        desc: "Yalnızca en üstün örnekleri kabul ediyoruz. Seçim sürecimiz sıradanı eleyerek size yalnızca olağanüstünü sunar.",
    },
    {
        Icon: Handshake,
        title: "Kişisel İlişkiler",
        desc: "Ne aradığınızı anlamak için zaman ayırıyoruz. Danışmanlarımız önce tutkulu birer otomobil severdir — güvenilir rehberler.",
    },
    {
        Icon: Award,
        title: "Sektör Tanınırlığı",
        desc: "Üst üste üç yıl Türkiye Otomotiv Mükemmellik Ödülleri tarafından Bursa&apos;nın 1 numaralı premium otomotiv galerisi seçildik.",
    },
    {
        Icon: Clock,
        title: "Ömür Boyu Satış Sonrası Destek",
        desc: "İlişkimiz teslimatta bitmiyor. Hizmet verdiğimiz her müşterimize sürekli destek, kaynak bulma ve rehberlik sunuyoruz.",
    },
    {
        Icon: Search,
        title: "Global Kaynak Ağı",
        desc: "Dünya genelinde özel koleksiyonlardan ve müzayedelerden araçlara erişim. Var olan her şeyi bulabiliriz — ve kapınıza teslim ederiz.",
    },
];

export default function WhyUs() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="why-us" className="section-padding"
            style={{ background: "var(--color-charcoal)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
            <div className="container-site" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}
                    style={{ textAlign: "center", marginBottom: "4rem" }}
                >
                    <p className="label text-gold" style={{ marginBottom: "1rem" }}>Neden Biz?</p>
                    <h2 className="heading-lg" style={{ marginBottom: "1rem" }}>
                        Er Motors
                        <br />
                        <em style={{ color: "var(--color-gold)" }}>Farkı</em>
                    </h2>
                    <span className="gold-line-center" />
                    <p className="body-lg" style={{ color: "var(--color-muted)", maxWidth: "500px", margin: "0 auto" }}>
                        Türkiye&apos;de premium otomotiv hizmetinde standardı belirleyen altı temel ilkemiz.
                    </p>
                </motion.div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "var(--color-border)" }}
                    className="pillars-grid">
                    {pillars.map((pillar, i) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: i * 0.1 }}
                            style={{ background: "var(--color-charcoal)", padding: "2.5rem", transition: "background 0.3s", cursor: "default" }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.04)")}
                            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-charcoal)")}
                        >
                            <div style={{ width: "48px", height: "48px", border: "1px solid rgba(201,168,76,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                                <pillar.Icon size={20} color="var(--color-gold)" />
                            </div>
                            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 400, color: "var(--color-white)", marginBottom: "0.75rem" }}>
                                {pillar.title}
                            </h3>
                            <p className="body-sm" style={{ color: "var(--color-muted)" }}>{pillar.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 768px) { .pillars-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 769px) and (max-width: 1024px) { .pillars-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
        </section>
    );
}
