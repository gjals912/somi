import { motion } from "framer-motion";
import { useState } from "react";

const copy = {
  en: {
    navFeatures: "Features",
    navGet: "Notify Me",
    heroTitleTop: "Learn Korean with",
    heroTitleAccent: "Som-Yee",
    heroSub: "A playful 3D gamified app that helps children learn Hangul naturally.",
    ctaStore1: "App Store",
    ctaStore2: "Google Play",
    features: [
      { title: "3D Sheep Character", desc: "Interact with a cute sheep while learning Korean" },
      { title: "Game-Based Learning", desc: "Master letters and words through play" },
      { title: "Kid-Safe Design", desc: "No ads. Built for children and parents" }
    ],
    ctaBtn: "Notify Me"
  },
  ko: {
    navFeatures: "기능",
    navGet: "출시 알림",
    heroTitleTop: "솜이와 함께",
    heroTitleAccent: "한글을 즐겁게",
    heroSub: "놀이처럼 자연스럽게 익히는 한글 학습 앱",
    ctaStore1: "앱 스토어",
    ctaStore2: "구글 플레이",
    features: [
      { title: "3D 양 캐릭터", desc: "귀여운 양과 상호작용하며 배우는 한글" },
      { title: "놀이 기반 학습", desc: "게임처럼 즐기며 자음·모음·단어 습득" },
      { title: "아이 친화 설계", desc: "광고 없이 안전한 어린이 전용 환경" }
    ],
    ctaBtn: "알림 받기"
  }
};

export default function App() {
  const [lang, setLang] = useState("en");
  const t = copy[lang];

  return (
    <>
      <style>{`
        :root {
          --primary: #1aa798;
          --bg: #f5f5f7;
          --card: #ffffff;
          --text: #1d1d1f;
          --sub: #6e6e73;
          --border: #d2d2d7;
          --radius-xl: 28px;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
        .app-root { background: var(--bg); color: var(--text); overflow-x: hidden; }

        .nav {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(245,245,247,0.85);
          backdrop-filter: blur(14px);
          z-index: 10;
          border-bottom: 1px solid var(--border);
        }
        .nav-inner {
          max-width: 1040px;
          margin: 0 auto;
          padding: 14px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo { font-weight: 600; letter-spacing: -0.02em; }
        .menu { display: flex; align-items: center; }
        .menu a, .lang-btn {
          margin-left: 22px;
          text-decoration: none;
          color: var(--text);
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
          background: none;
          border: none;
        }
        .lang-btn.active { color: var(--primary); font-weight: 600; }
        .nav-cta { color: var(--primary); }

        .hero {
          max-width: 1040px;
          margin: 0 auto;
          padding: 180px 24px 120px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 80px;
          align-items: center;
        }
        .hero-content { text-align: left; }
        @media (max-width: 900px) {
          .hero { grid-template-columns: 1fr; text-align: center; }
          .hero-content { text-align: center; }
        }
        .hero-title {
          font-size: 56px;
          font-weight: 600;
          letter-spacing: -0.03em;
          line-height: 1.1;
        }
        .hero-accent { color: var(--primary); }
        .hero-sub {
          margin: 28px auto 0;
          font-size: 17px;
          color: var(--sub);
          line-height: 1.6;
          max-width: 520px;
        }
        .hero-buttons {
          margin-top: 44px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .btn-primary {
          background: var(--primary);
          color: #fff;
          border: none;
          border-radius: 999px;
          padding: 14px 36px;
          font-size: 16px;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
        }

        .preview {
          max-width: 1040px;
          margin: 0 auto;
          padding: 0 24px 140px;
          display: flex;
          justify-content: center;
        }
        .device-frame {
          width: 280px;
          height: 560px;
          border-radius: 48px;
          background: #000;
          box-shadow: 0 24px 48px rgba(0,0,0,0.18);
          position: relative;
        }
        .device-screen {
          position: absolute;
          inset: 12px;
          border-radius: 40px;
          overflow: hidden;
          background: #000;
        }
        .app-preview-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .features {
          max-width: 1040px;
          margin: 0 auto;
          padding: 120px 24px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px,1fr));
          gap: 40px;
        }
        .feature {
          background: var(--card);
          padding: 40px 32px;
          border-radius: var(--radius-xl);
          text-align: center;
          border: 1px solid var(--border);
        }
        .feature h3 {
          font-size: 20px;
          margin-bottom: 10px;
          font-weight: 600;
        }
        .feature p {
          color: var(--sub);
          line-height: 1.5;
          font-size: 15px;
        }

        .footer {
          text-align: center;
          padding: 40px 24px;
          color: var(--sub);
          border-top: 1px solid var(--border);
          font-size: 13px;
        }
      `}</style>

      <div className="app-root">
        <header className="nav">
          <div className="nav-inner">
            <div className="logo">
              Som-Yee <span style={{ fontWeight: 400, opacity: 0.6 }}>The Sheep</span>
            </div>
            <nav className="menu">
              <a href="#features">{t.navFeatures}</a>
              <a
                href="https://forms.gle/oufXA53KMtTa5Dke7"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-cta"
              >
                {t.navGet}
              </a>
              <button
                className={`lang-btn ${lang === "en" ? "active" : ""}`}
                onClick={() => setLang("en")}
              >
                EN
              </button>
              <button
                className={`lang-btn ${lang === "ko" ? "active" : ""}`}
                onClick={() => setLang("ko")}
              >
                한국어
              </button>
            </nav>
          </div>
        </header>

        <section className="hero">
          <div className="hero-content">
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t.heroTitleTop}
              <br />
              <span className="hero-accent">{t.heroTitleAccent}</span>
            </motion.h1>

            <motion.p
              className="hero-sub"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              {t.heroSub}
            </motion.p>

            <div className="hero-buttons">
              <motion.a
                href="https://forms.gle/izePy7tyYZwSxDFAA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                whileTap={{ scale: 0.95 }}
              >
                {t.ctaBtn}
              </motion.a>

              <span style={{ marginTop: "12px", fontSize: "14px", color: "var(--sub)" }}>
                {lang === "en" ? "Launching soon on iOS & Android" : "iOS / Android 출시 예정"}
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <div className="device-frame">
              <div className="device-screen">
                <video
                  className="app-preview-video"
                  src="/preview.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </motion.div>
        </section>

        <section id="features" className="features">
          {t.features.map((f, i) => (
            <Feature key={i} title={f.title} desc={f.desc} />
          ))}
        </section>

        <footer className="footer">© 2026 Oct1446. All rights reserved.</footer>
      </div>
    </>
  );
}

function Feature({ title, desc }) {
  return (
    <motion.div
      className="feature"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260 }}
    >
      <h3>{title}</h3>
      <p>{desc}</p>
    </motion.div>
  );
}
