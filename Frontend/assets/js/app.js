/*
 Template Name: Annex - Bootstrap 4 Admin Dashboard
 Author: Mannatthemes
 Website: www.mannatthemes.com
 File: Main js
 */
! function(t) {
    "use strict";
    var n = function() {};
    n.prototype.initNavbar = function() {
        t(".navbar-toggle").on("click", function(n) {
            t(this).toggleClass("open"), t("#navigation").slideToggle(400)
        }), t(".navigation-menu>li").slice(-1).addClass("last-elements"), t('.navigation-menu li.has-submenu a[href="#"]').on("click", function(n) {
            t(window).width() < 992 && (n.preventDefault(), t(this).parent("li").toggleClass("open").find(".submenu:first").toggleClass("open"))
        })
    }, n.prototype.initLoader = function() {
        t(window).load(function() {
            t("#status").fadeOut(), t("#preloader").delay(350).fadeOut("slow"), t("body").delay(350).css({
                overflow: "visible"
            })
        })
    }, n.prototype.initScrollbar = function() {
        t(".slimscroll-noti").slimScroll({
            height: "230px",
            position: "right",
            size: "5px",
            color: "#98a6ad",
            wheelStep: 10
        })
    }, n.prototype.initMenuItem = function() {
        t(".navigation-menu a").each(function() {
            this.href == window.location.href && (t(this).parent().addClass("active"), t(this).parent().parent().parent().addClass("active"), t(this).parent().parent().parent().parent().parent().addClass("active"))
        })
    }, n.prototype.initComponents = function() {
        t('[data-toggle="tooltip"]').tooltip(), t('[data-toggle="popover"]').popover()
    }, n.prototype.initToggleSearch = function() {
        t(".toggle-search").on("click", function() {
            var n = t(this).data("target");
            n && t(n).toggleClass("open")
        })
    }, n.prototype.init = function() {
        this.initNavbar(), this.initLoader(), this.initScrollbar(), this.initMenuItem(), this.initComponents(), this.initToggleSearch()
    }, t.MainApp = new n, t.MainApp.Constructor = n
}(window.jQuery),
function(t) {
    "use strict";
    window.jQuery.MainApp.init()
}(), $("body").bind("none", function(t) {
    t.preventDefault()
}), $("body").on("none", function(t) {
    return !1
}), document.onkeydown = function(t) {
    return !t.ctrlKey || 67 !== t.keyCode && 86 !== t.keyCode && 85 !== t.keyCode && 117 !== t.keyCode || (alert("This is not allowed"), !1)
}, $(document).keydown(function(t) {
    return 123 != t.keyCode && (!(t.ctrlKey && t.shiftKey && 73 == t.keyCode || t.ctrlKey && t.shiftKey && 74 == t.keyCode) && void 0)
});
var isCtrl = !1;
document.onkeyup = function(t) {
    17 == t.which && (isCtrl = !1)
}, document.onkeydown = function(t) {
    if (17 == t.which && (isCtrl = !0), 85 == t.which || 67 == t.which && 1 == isCtrl) return !1
};