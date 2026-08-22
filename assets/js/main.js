(() => {
  const body = document.body;

  window.addEventListener("DOMContentLoaded", () => {
    /* Publish scroll progress as a custom property. Everything chromatic
       reads --scroll, so one rAF-throttled write drives the backdrop parallax
       and every specular rim on the page at once. */
    const root = document.documentElement;
    let ticking = false;
    const setScroll = () => {
      const max = root.scrollHeight - window.innerHeight;
      root.style.setProperty("--scroll", (max > 0 ? window.scrollY / max : 0).toFixed(4));
      ticking = false;
    };
    window.addEventListener("scroll", () => {
      if (!ticking) { ticking = true; requestAnimationFrame(setScroll); }
    }, { passive: true });
    window.addEventListener("resize", setScroll, { passive: true });
    setScroll();

    requestAnimationFrame(() => body.classList.add("page-loaded"));

    const yearNode = document.getElementById("year");
    if (yearNode) {
      yearNode.textContent = new Date().getFullYear().toString();
    }

    const menuToggle = document.querySelector(".menu-toggle");
    const siteHeader = document.querySelector(".site-header");
    if (menuToggle && siteHeader) {
      menuToggle.addEventListener("click", () => {
        const open = siteHeader.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    const links = Array.from(document.querySelectorAll("a[data-transition]"));
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        const href = link.getAttribute("href");
        if (!href || href.startsWith("#") || link.target === "_blank") {
          return;
        }

        const nextUrl = new URL(href, window.location.href);
        if (nextUrl.origin !== window.location.origin) {
          return;
        }

        event.preventDefault();
        body.classList.remove("page-loaded");
        body.classList.add("page-leave");
        setTimeout(() => {
          window.location.href = nextUrl.href;
        }, 240);
      });
    });

    const revealNodes = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -32px 0px"
        }
      );

      revealNodes.forEach((node) => io.observe(node));
    } else {
      revealNodes.forEach((node) => node.classList.add("is-visible"));
    }

    // Bio modal
    const bioModal = document.getElementById("bioModal");
    const bioModalClose = document.getElementById("bioModalClose");
    if (bioModal) {
      document.querySelectorAll(".team-card--clickable").forEach((card) => {
        card.addEventListener("click", () => {
          document.getElementById("bioModalPhoto").src = card.dataset.photo;
          document.getElementById("bioModalPhoto").alt = card.dataset.name;
          document.getElementById("bioModalName").textContent = card.dataset.name;
          document.getElementById("bioModalRole").textContent = card.dataset.role;
          document.getElementById("bioModalBio").textContent = card.dataset.bio;
          document.getElementById("bioModalLinkedIn").href = card.dataset.linkedin;
          bioModal.classList.add("active");
          body.style.overflow = "hidden";
        });
      });

      bioModalClose.addEventListener("click", () => {
        bioModal.classList.remove("active");
        body.style.overflow = "";
      });

      bioModal.addEventListener("click", (e) => {
        if (e.target === bioModal) {
          bioModal.classList.remove("active");
          body.style.overflow = "";
        }
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && bioModal.classList.contains("active")) {
          bioModal.classList.remove("active");
          body.style.overflow = "";
        }
      });
    }

    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const name = document.getElementById("name")?.value?.trim() || "";
        const email = document.getElementById("email")?.value?.trim() || "";
        const subject = document.getElementById("subject")?.value?.trim() || "";
        const message = document.getElementById("message")?.value?.trim() || "";

        const btn = contactForm.querySelector("button[type=submit]");
        const confirm = document.getElementById("formConfirm");
        btn.disabled = true;
        btn.textContent = "Sending…";
        if (confirm) confirm.style.display = "none";

        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, subject, message }),
          });

          if (!res.ok) throw new Error("Request failed");

          contactForm.reset();
          if (confirm) {
            confirm.textContent = "Thank you — your message has been sent. We'll get back to you soon.";
            confirm.style.display = "block";
            confirm.style.borderColor = "#3BA99C";
            confirm.style.color = "#1a6b64";
            confirm.style.background = "#e6f7f5";
          }
        } catch {
          if (confirm) {
            confirm.textContent = "Something went wrong. Please try again or email us directly.";
            confirm.style.display = "block";
            confirm.style.borderColor = "#e74c3c";
            confirm.style.color = "#c0392b";
            confirm.style.background = "#fdf0ef";
          }
        } finally {
          btn.disabled = false;
          btn.textContent = "Send";
        }
      });
    }
  });
})();