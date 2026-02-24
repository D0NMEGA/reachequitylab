(() => {
  const body = document.body;

  window.addEventListener("DOMContentLoaded", () => {
    requestAnimationFrame(() => body.classList.add("page-loaded"));

    const yearNode = document.getElementById("year");
    if (yearNode) {
      yearNode.textContent = new Date().getFullYear().toString();
    }

    const menuToggle = document.querySelector(".menu-toggle");
    const siteHeader = document.querySelector(".site-header");
    if (menuToggle && siteHeader) {
      menuToggle.addEventListener("click", () => {
        siteHeader.classList.toggle("open");
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