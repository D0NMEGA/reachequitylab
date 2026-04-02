"use client";

import { useState, useEffect, useRef, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./RecruitmentPage.module.css";

const COLORS = [
  "#1f3a5f",
  "#3ba99c",
  "#5fa8d3",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#ec4899",
  "#10b981",
];

interface PersonData {
  name: string;
  responded: boolean;
  response?: string;
}

interface Particle {
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
  vx: number;
  vy: number;
  rot: number;
  rotV: number;
  opacity: number;
}

function ResourceLinks() {
  return (
    <>
      <a
        className={styles.resourceLink}
        href="https://discord.gg/W6BTV5Pqy"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.rIcon}>D</div>
        <div>
          <strong>REACH Discord Server</strong>
          <span>Team communication and updates</span>
        </div>
      </a>
      <a
        className={styles.resourceLink}
        href="https://utexas.box.com/s/5kledxwf0o15le1gfnq5c96gfyg6m0pz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.rIcon}>B</div>
        <div>
          <strong>UT Box Drive</strong>
          <span>Star this folder for quick access</span>
        </div>
      </a>
      <a
        className={styles.resourceLink}
        href="https://drive.google.com/drive/folders/1LE0Mknn_3d9yqtK6n442ig6YU2WHqAU1?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.rIcon}>G</div>
        <div>
          <strong>Google Drive</strong>
          <span>Star this folder for quick access</span>
        </div>
      </a>
    </>
  );
}

function RecruitmentPageInner() {
  const searchParams = useSearchParams();
  const token = searchParams.get("t");

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animatingRef = useRef(false);

  type ViewState =
    | "landing"
    | "envelope"
    | "offer"
    | "invalid"
    | "already";

  const [view, setView] = useState<ViewState>("landing");
  const [personData, setPersonData] = useState<PersonData | null>(null);

  // Envelope animation phases
  const [envelopeActive, setEnvelopeActive] = useState(false);
  const [envelopeRise, setEnvelopeRise] = useState(false);
  const [flapOpen, setFlapOpen] = useState(false);
  const [letterEmerge, setLetterEmerge] = useState(false);
  const [envelopeFadeOut, setEnvelopeFadeOut] = useState(false);

  // Offer state
  const [responseStatus, setResponseStatus] = useState<
    "idle" | "loading" | "success" | "declined" | "already" | "error"
  >("idle");
  const [showResources, setShowResources] = useState(false);

  // Resize canvas
  useEffect(() => {
    function resize() {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    }
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // If no token, show invalid immediately
  useEffect(() => {
    if (!token) {
      setView("invalid");
    }
  }, [token]);

  const animateConfetti = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = 0;

    for (const p of particlesRef.current) {
      if (p.opacity <= 0) continue;
      alive++;
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.04;
      p.rot += p.rotV;
      if (p.y > canvas.height + 20) p.opacity -= 0.02;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }

    if (alive > 0) {
      requestAnimationFrame(animateConfetti);
    } else {
      animatingRef.current = false;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, []);

  const launchConfetti = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const newParticles: Particle[] = [];
    for (let i = 0; i < 250; i++) {
      newParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        w: Math.random() * 10 + 5,
        h: Math.random() * 6 + 3,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        vx: (Math.random() - 0.5) * 5,
        vy: Math.random() * 3 + 2,
        rot: Math.random() * 360,
        rotV: (Math.random() - 0.5) * 10,
        opacity: 1,
      });
    }
    particlesRef.current = newParticles;

    if (!animatingRef.current) {
      animatingRef.current = true;
      animateConfetti();
    }
  }, [animateConfetti]);

  const runEnvelopeAnimation = useCallback(() => {
    // Step 1: Darken backdrop + envelope rises
    setView("envelope");
    setEnvelopeActive(true);
    requestAnimationFrame(() => setEnvelopeRise(true));

    // Step 2: Flap opens
    setTimeout(() => setFlapOpen(true), 1000);

    // Step 3: Letter emerges
    setTimeout(() => setLetterEmerge(true), 1600);

    // Step 4: Fade out envelope
    setTimeout(() => setEnvelopeFadeOut(true), 2400);

    // Step 5: Show offer card with confetti
    setTimeout(() => {
      setView("offer");
      setTimeout(() => launchConfetti(), 400);
    }, 3000);
  }, [launchConfetti]);

  async function handleClickHere() {
    if (!token) {
      setView("invalid");
      return;
    }

    try {
      const res = await fetch(
        "/api/respond?token=" + encodeURIComponent(token)
      );
      if (!res.ok) {
        setView("invalid");
        return;
      }
      const data: PersonData = await res.json();
      setPersonData(data);

      if (data.responded) {
        setView("already");
        return;
      }

      runEnvelopeAnimation();
    } catch {
      setView("invalid");
    }
  }

  async function respond(decision: "accept" | "decline") {
    setResponseStatus("loading");

    try {
      const res = await fetch("/api/respond", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, decision }),
      });

      const data = await res.json();

      if (res.status === 409) {
        setResponseStatus("already");
        return;
      }

      if (!res.ok) {
        setResponseStatus("error");
        return;
      }

      if (decision === "accept") {
        setResponseStatus("success");
        setShowResources(true);
        launchConfetti();
      } else {
        setResponseStatus("declined");
      }
    } catch {
      setResponseStatus("error");
    }
  }

  const envelopeOverlayClass = [
    styles.envelopeOverlay,
    envelopeActive ? styles.envelopeOverlayActive : "",
  ]
    .filter(Boolean)
    .join(" ");

  const envelopeSceneClass = [
    styles.envelopeScene,
    envelopeRise ? styles.envelopeSceneRise : "",
    envelopeFadeOut ? styles.envelopeSceneFadeOut : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <canvas ref={canvasRef} className={styles.confettiCanvas} />

      {/* Landing view */}
      {view === "landing" && (
        <main>
          <div className={styles.landingContent}>
            <div className={styles.landingCard}>
              <h2>
                You have an update on your REACH Equity Lab application
              </h2>
              <p>
                We have finished reviewing applications for the Spring 2026
                cohort. Please check below for your status.
              </p>
              <button
                className={styles.clickHereLink}
                onClick={handleClickHere}
              >
                Click Here
              </button>
            </div>
          </div>
        </main>
      )}

      {/* Envelope animation overlay */}
      {view === "envelope" && (
        <>
          <main>
            <div className={styles.landingContent}>
              <div className={styles.landingCard}>
                <h2>
                  You have an update on your REACH Equity Lab application
                </h2>
              </div>
            </div>
          </main>
          <div className={envelopeOverlayClass}>
            <div className={envelopeSceneClass}>
              <div
                className={`${styles.envelopeLetter} ${
                  letterEmerge ? styles.envelopeLetterEmerge : ""
                }`}
              >
                <div className={styles.letterSeal}>
                  <span>R</span>
                </div>
                <div className={styles.letterLines}>
                  <div className={styles.letterLine} />
                  <div className={styles.letterLine} />
                  <div className={styles.letterLine} />
                </div>
              </div>
              <div
                className={`${styles.envelopeFlap} ${
                  flapOpen ? styles.envelopeFlapOpen : ""
                }`}
              />
              <div className={styles.envelopeBody}>
                <img
                  src="/icon-banner-transparent.png"
                  alt=""
                  className={styles.envelopeLogo}
                />
              </div>
            </div>
          </div>
        </>
      )}

      {/* Offer view */}
      {view === "offer" && (
        <main>
          <div className={`${styles.offerWrap} ${styles.offerWrapVisible}`}>
            <div className={styles.offerCard}>
              <div className={styles.offerBadge}>Application Update</div>
              <h1>Congratulations, {personData?.name ?? ""}!</h1>
              <p className={styles.subtitle}>
                REACH Equity Lab -- Spring 2026
              </p>
              <p>
                After careful review of your application, we are pleased to
                inform you that you have been{" "}
                <strong>selected to join the REACH Equity Lab</strong> research
                team.
              </p>
              <p>
                Your background and interests align well with our mission to
                advance undergraduate research on health disparities. We are
                excited about the contributions you will bring to our work.
              </p>
              <p>
                Please confirm your decision below. Once you respond, this link
                will be deactivated.
              </p>

              {responseStatus === "idle" && (
                <div className={styles.offerActions}>
                  <button
                    className={`btn ${styles.btnAccept}`}
                    onClick={() => respond("accept")}
                  >
                    Accept Offer
                  </button>
                  <button
                    className={`btn ${styles.btnDecline}`}
                    onClick={() => respond("decline")}
                  >
                    Decline
                  </button>
                </div>
              )}

              {responseStatus === "loading" && (
                <div className={styles.loadingState}>
                  Processing your response...
                </div>
              )}

              {responseStatus === "success" && (
                <div className={`${styles.statusMsg} ${styles.statusSuccess}`}>
                  Welcome to REACH Equity Lab! We are excited to have you on
                  the team.
                </div>
              )}

              {responseStatus === "declined" && (
                <div
                  className={`${styles.statusMsg} ${styles.statusDeclined}`}
                >
                  We understand. Thank you for your interest in REACH Equity
                  Lab.
                </div>
              )}

              {responseStatus === "already" && (
                <div className={`${styles.statusMsg} ${styles.statusAlready}`}>
                  You have already responded to this offer.
                </div>
              )}

              {responseStatus === "error" && (
                <>
                  <div
                    className={`${styles.statusMsg} ${styles.statusError}`}
                  >
                    Network error. Please check your connection and try again.
                  </div>
                  <div className={styles.offerActions}>
                    <button
                      className={`btn ${styles.btnAccept}`}
                      onClick={() => respond("accept")}
                    >
                      Accept Offer
                    </button>
                    <button
                      className={`btn ${styles.btnDecline}`}
                      onClick={() => respond("decline")}
                    >
                      Decline
                    </button>
                  </div>
                </>
              )}

              {showResources && (
                <div className={styles.resources}>
                  <h3>
                    Get started -- bookmark and star these folders:
                  </h3>
                  <ResourceLinks />
                </div>
              )}
            </div>
          </div>
        </main>
      )}

      {/* Invalid state */}
      {view === "invalid" && (
        <main>
          <div className={`${styles.offerWrap} ${styles.offerWrapVisible}`}>
            <div className={`${styles.offerCard} ${styles.invalidState}`}>
              <h1>Link Not Found</h1>
              <p>This link is invalid or has expired.</p>
              <a className="btn" href="/">
                Go to Home
              </a>
            </div>
          </div>
        </main>
      )}

      {/* Already responded state */}
      {view === "already" && personData && (
        <main>
          <div className={`${styles.offerWrap} ${styles.offerWrapVisible}`}>
            <div className={styles.offerCard}>
              <h1>Hi {personData.name},</h1>
              <div
                className={`${styles.statusMsg} ${
                  personData.response === "accept"
                    ? styles.statusSuccess
                    : styles.statusAlready
                }`}
              >
                {personData.response === "accept"
                  ? "You have already accepted this offer. Welcome to REACH Equity Lab!"
                  : "You have already responded to this offer."}
              </div>
              {personData.response === "accept" && (
                <div className={styles.resources}>
                  <h3>Your team resources:</h3>
                  <ResourceLinks />
                </div>
              )}
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export function RecruitmentPage() {
  return (
    <Suspense
      fallback={
        <main>
          <div
            style={{
              minHeight: "calc(100vh - 140px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>Loading...</p>
          </div>
        </main>
      }
    >
      <RecruitmentPageInner />
    </Suspense>
  );
}
