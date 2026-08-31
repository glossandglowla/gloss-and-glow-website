/* ==========================================================================
   GLOSS & GLOW — services.js
   Builds every service menu on the site from assets/data/services.js.
   Nothing here needs editing to change a price or add a service.
   ========================================================================== */
(function (global) {
  "use strict";

  var data = global.glossServices;
  if (!data) return;

  /* ------------------------------------------------------------- helpers */
  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function byOrder(a, b) {
    return (a.order == null ? 0 : a.order) - (b.order == null ? 0 : b.order);
  }

  /* "$85+", "$45", "$5+ per nail", "Consultation Required" */
  function formatPrice(svc) {
    if (svc.priceLabel) return svc.priceLabel;
    if (svc.price == null) return "";
    var out = "$" + svc.price + (svc.from ? "+" : "");
    if (svc.unit) out += " " + svc.unit;
    return out;
  }

  function categories() {
    return data.categories.slice().sort(byOrder);
  }

  function getCategory(id) {
    for (var i = 0; i < data.categories.length; i++) {
      if (data.categories[i].id === id) return data.categories[i];
    }
    return null;
  }

  /* True when any service in the category uses a starting price. */
  function hasStartingPrices(cat) {
    return cat.groups.some(function (g) {
      return g.services.some(function (s) { return s.from && s.price != null; });
    });
  }

  /* Every service flagged featured, tagged with its category. */
  function featured() {
    var out = [];
    categories().forEach(function (cat) {
      cat.groups.forEach(function (group) {
        group.services.forEach(function (svc) {
          if (svc.featured) out.push({ service: svc, category: cat, group: group });
        });
      });
    });
    return out;
  }

  /* ------------------------------------------------------------ rendering */
  function serviceRow(svc) {
    var price = formatPrice(svc);
    var meta = [];
    if (svc.duration) meta.push('<span class="menu-item__duration">' + esc(svc.duration) + "</span>");

    var extra = "";
    if (svc.description) {
      extra += '<p class="menu-item__desc">' + esc(svc.description) + "</p>";
    }
    if (svc.includes && svc.includes.length) {
      extra += '<p class="menu-item__desc">Includes ' +
        svc.includes.map(esc).join(" \u00b7 ").toLowerCase() + ".</p>";
    }
    if (svc.addons && svc.addons.length) {
      extra += '<ul class="menu-item__addons">' + svc.addons.map(function (a) {
        return "<li>" + esc(a.name) + " <span>" + formatPrice(a) + "</span></li>";
      }).join("") + "</ul>";
    }

    return '<li class="menu-item">' +
             '<p class="menu-item__head">' +
               '<span class="menu-item__name">' + esc(svc.name) + "</span>" +
               '<span class="menu-item__lead" aria-hidden="true"></span>' +
               '<span class="menu-item__price">' + esc(price) + "</span>" +
             "</p>" +
             (meta.length ? '<p class="menu-item__meta">' + meta.join("") + "</p>" : "") +
             extra +
           "</li>";
  }

  function groupBlock(group) {
    var services = group.services.slice().sort(byOrder);
    return '<section class="menu-group reveal" id="' + esc(group.id) + '">' +
             '<h3 class="menu-group__title">' + esc(group.title) + "</h3>" +
             '<ul class="menu-list">' + services.map(serviceRow).join("") + "</ul>" +
           "</section>";
  }

  /* Fills <div data-service-menu="hair"></div> */
  function renderMenus() {
    var mounts = document.querySelectorAll("[data-service-menu]");
    Array.prototype.forEach.call(mounts, function (el) {
      var cat = getCategory(el.getAttribute("data-service-menu"));
      if (!cat) return;
      var html = cat.groups.slice().sort(byOrder).map(groupBlock).join("");
      if (hasStartingPrices(cat)) {
        html += '<p class="menu-note">' + esc(data.startingPriceNote) + "</p>";
      }
      if (cat.note) html += '<p class="menu-note">' + esc(cat.note) + "</p>";
      el.innerHTML = html;
    });
  }

  /* Fills <div data-featured-services></div> on the home page */
  function renderFeatured() {
    var mount = document.querySelector("[data-featured-services]");
    if (!mount) return;
    var rows = featured().map(function (entry) {
      var cat = entry.category, svc = entry.service;
      return '<li class="menu-item">' +
               '<p class="menu-item__head">' +
                 '<span class="menu-item__name">' +
                   '<a href="' + esc(cat.page) + '">' + esc(svc.name) + "</a>" +
                 "</span>" +
                 '<span class="menu-item__lead" aria-hidden="true"></span>' +
                 '<span class="menu-item__price">' + esc(formatPrice(svc)) + "</span>" +
               "</p>" +
               '<p class="menu-item__meta"><span class="menu-item__cat">' +
                 esc(cat.label) + "</span></p>" +
             "</li>";
    }).join("");
    mount.innerHTML = '<ul class="menu-list">' + rows + "</ul>";
  }

  /* Fills the group names on each home page service card */
  function renderCardGroups() {
    var els = document.querySelectorAll("[data-card-groups]");
    Array.prototype.forEach.call(els, function (el) {
      var cat = getCategory(el.getAttribute("data-card-groups"));
      if (!cat) return;
      el.textContent = cat.groups.map(function (g) { return g.title; }).join(" \u00b7 ");
    });
  }

  /* Fills category intro copy and taglines */
  function renderCopy() {
    var els = document.querySelectorAll("[data-category-copy]");
    Array.prototype.forEach.call(els, function (el) {
      var parts = el.getAttribute("data-category-copy").split(":");
      var cat = getCategory(parts[0]);
      if (cat && cat[parts[1]]) el.textContent = cat[parts[1]];
    });
  }

  global.glossMenu = {
    render: function () {
      renderMenus();
      renderFeatured();
      renderCardGroups();
      renderCopy();
    },
    formatPrice: formatPrice,
    getCategory: getCategory,
    categories: categories
  };
})(window);
