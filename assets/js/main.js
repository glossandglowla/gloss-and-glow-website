/* ==========================================================================
   GLOSS & GLOW — main.js
   Small dependency-free behaviour layer. Reads assets/data/config.js and
   assets/data/services.js. Nothing here needs editing for routine updates.
   ========================================================================== */
(function () {
  "use strict";

  var cfg = window.glossConfig;
  if (!cfg) return;

  function all(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }
  function one(sel, root) { return (root || document).querySelector(sel); }

  /* ------------------------------------------------ 1. text from config */
  function fillText() {
    var map = {
      businessName: cfg.businessName,
      categories: cfg.categoriesLine,
      street: cfg.address.street,
      cityStateZip: cfg.cityStateZip,
      fullAddress: cfg.fullAddress,
      phone: cfg.phone.display,
      year: String(new Date().getFullYear())
    };
    all("[data-cfg]").forEach(function (el) {
      var key = el.getAttribute("data-cfg");
      if (map[key] !== undefined) el.textContent = map[key];
    });
  }

  /* -------------------------------------------------- 2. links & booking
     Every booking button on the site is a [data-href="book"]. It points at
     the single Square URL in config.js. If that URL has not been pasted in
     yet, the button calls the salon instead of leading to a dead page. */
  function fillLinks() {
    var tel = "tel:" + cfg.phone.link;

    all('[data-href="tel"]').forEach(function (el) { el.setAttribute("href", tel); });

    all('[data-href="directions"]').forEach(function (el) {
      el.setAttribute("href", cfg.resolvedDirectionsUrl);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });

    all('[data-href="book"]').forEach(function (el) {
      if (cfg.bookingReady) {
        // A service can override the destination via data-booking-url.
        el.setAttribute("href", el.getAttribute("data-booking-url") || cfg.squareBookingUrl);
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");
      } else {
        el.setAttribute("href", tel);
        el.removeAttribute("target");
      }
    });

    // Short honest line wherever the page has room for it.
    all("[data-booking-note]").forEach(function (el) {
      if (cfg.bookingReady) {
        el.hidden = true;
      } else {
        el.hidden = false;
        el.textContent = "Online booking opens shortly. Call " + cfg.phone.display +
          " and we will get you scheduled.";
      }
    });

    // Social icons appear only once a real profile URL is set in config.js.
    all("[data-social]").forEach(function (el) {
      var url = cfg.social[el.getAttribute("data-social")];
      if (url) {
        el.setAttribute("href", url);
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");
        el.hidden = false;
      } else {
        el.hidden = true;
      }
    });
  }

  /* ----------------------------------------------------- 3. map embed */
  function mapEmbed() {
    var mount = one("[data-map]");
    if (!mount) return;
    if (!cfg.showMapEmbed) { mount.hidden = true; return; }
    var frame = document.createElement("iframe");
    frame.src = cfg.mapEmbedUrl;
    frame.title = "Map showing " + cfg.businessName + " at " + cfg.fullAddress;
    frame.loading = "lazy";
    frame.referrerPolicy = "no-referrer-when-downgrade";
    frame.setAttribute("allowfullscreen", "");
    mount.appendChild(frame);
  }

  /* --------------------------- 4. graceful fallback for missing images
     Photographs are referenced by path. Until a file exists its frame keeps
     a composed panel instead of showing a broken-image icon, so the page
     always looks finished. */
  function markMissing(img) {
    var box = img.closest(".frame, .badge");
    if (box) box.classList.add("is-empty");
    else img.style.display = "none";
  }
  document.addEventListener("error", function (e) {
    if (e.target && e.target.tagName === "IMG") markMissing(e.target);
  }, true);

  /* ---------------------------------------------------- 5. header state */
  function header() {
    var head = one(".masthead");
    if (!head) return;
    var onScroll = function () { head.classList.toggle("is-scrolled", window.scrollY > 20); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ----------------------------------------------------- 6. mobile menu */
  function mobileMenu() {
    var btn = one(".menu-toggle");
    var panel = one("#site-menu");
    if (!btn || !panel) return;

    function setOpen(open) {
      btn.setAttribute("aria-expanded", String(open));
      btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      panel.classList.toggle("is-open", open);
      document.body.classList.toggle("is-locked", open);
      if (open) { var a = panel.querySelector("a"); if (a) a.focus(); }
    }

    btn.addEventListener("click", function () {
      setOpen(btn.getAttribute("aria-expanded") !== "true");
    });
    all("a", panel).forEach(function (a) {
      a.addEventListener("click", function () { setOpen(false); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && panel.classList.contains("is-open")) {
        setOpen(false); btn.focus();
      }
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 900) setOpen(false);
    });
  }

  /* ------------------------------------------------------- 7. reveals */
  function reveals() {
    var items = all(".reveal");
    if (!items.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------------------------------------------------------- init */
  function init() {
    // Menus are built first so anything they add is styled and revealed too.
    if (window.glossMenu) window.glossMenu.render();
    fillText();
    fillLinks();
    mapEmbed();
    header();
    mobileMenu();
    reveals();
    all(".frame img, .badge img").forEach(function (img) {
      if (img.complete && img.naturalWidth === 0) markMissing(img);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
