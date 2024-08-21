import React, { useEffect } from "react";

const LandingLayout = ({ children }) => {
  useEffect(() => {
    // Define styles and scripts in the scope of useEffect
    const styles = [
      "/assets/conbiz/css/conbiz.css",
      "/assets/conbiz/css/conbiz-responsive.css",
      "/assets/xbuild/css/main.css",
      "/assets/xbuild/css/bootstrap.min.css",
      "/assets/xbuild/css/all.min.css",
      "/assets/xbuild/css/animate.css",
      "/assets/xbuild/css/splitting.css",
      "/assets/xbuild/css/magnific-popup.css",
      "/assets/xbuild/css/meanmenu.css",
      "/assets/xbuild/css/swiper-bundle.min.css",
      "/assets/xbuild/css/nice-select.css",
      "/assets/xbuild/css/color.css",
      "/assets/metro/css/font-awesome-all.css",
      "/assets/metro/css/flaticon.css",
      "/assets/metro/css/owl.css",
      "/assets/metro/css/bootstrap.css",
      "/assets/metro/css/jquery.fancybox.min.css",
      "/assets/metro/css/animate.css",
      "/assets/metro/css/nice-select.css",
      "/assets/metro/css/elpath.css",
      "/assets/metro/css/color/theme-color.css",
      "/assets/metro/css/switcher-style.css",
      "/assets/metro/css/rtl.css",
      "/assets/metro/css/style.css",
      "/assets/metro/css/module-css/banner.css",
      "/assets/metro/css/module-css/feature.css",
      "/assets/metro/css/module-css/about.css",
      "/assets/metro/css/module-css/service.css",
      "/assets/metro/css/module-css/video.css",
      "/assets/metro/css/module-css/card.css",
      "/assets/metro/css/module-css/funfact.css",
      "/assets/metro/css/module-css/process.css",
      "/assets/metro/css/module-css/apps.css",
      "/assets/metro/css/module-css/news.css",
      "/assets/metro/css/module-css/subscribe.css",
      "/assets/metro/css/responsive.css",
      "/assets/conbiz/vendors/bootstrap/css/bootstrap.min.css",
      "/assets/conbiz/vendors/animate/animate.min.css",
      "/assets/conbiz/vendors/animate/custom-animate.css",
      "/assets/conbiz/vendors/fontawesome/css/all.min.css",
      "/assets/conbiz/vendors/jarallax/jarallax.css",
      "/assets/conbiz/vendors/jquery-magnific-popup/jquery.magnific-popup.css",
      "/assets/conbiz/vendors/nouislider/nouislider.min.css",
      "/assets/conbiz/vendors/nouislider/nouislider.pips.css",
      "/assets/conbiz/vendors/odometer/odometer.min.css",
      "/assets/conbiz/vendors/swiper/swiper.min.css",
      "/assets/conbiz/vendors/icomoon-icons/style.css",
      "/assets/conbiz/vendors/tiny-slider/tiny-slider.min.css",
      "/assets/conbiz/vendors/reey-font/stylesheet.css",
      "/assets/conbiz/vendors/owl-carousel/owl.carousel.min.css",
      "/assets/conbiz/vendors/owl-carousel/owl.theme.default.min.css",
      "/assets/conbiz/vendors/twentytwenty/twentytwenty.css",
    ];

    const scripts = [
      "/assets/metro/js/jquery.js",
      "/assets/metro/js/bootstrap.min.js",
      "/assets/metro/js/owl.js",
      "/assets/metro/js/wow.js",
      "/assets/metro/js/validation.js",
      "/assets/metro/js/jquery.fancybox.js",
      "/assets/metro/js/appear.js",
      "/assets/metro/js/isotope.js",
      "/assets/metro/js/parallax-scroll.js",
      "/assets/metro/js/jquery.nice-select.min.js",
      "/assets/metro/js/jQuery.style.switcher.min.js",
      "/assets/metro/js/script.js",
      "/assets/vendors/jquery/jquery-3.5.1.min.js",
      "/assets/vendors/bootstrap/js/bootstrap.bundle.min.js",
      "/assets/vendors/jarallax/jarallax.min.js",
      "/assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js",
      "/assets/vendors/jquery-appear/jquery.appear.min.js",
      "/assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js",
      "/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js",
      "/assets/vendors/jquery-validate/jquery.validate.min.js",
      "/assets/vendors/nouislider/nouislider.min.js",
      "/assets/vendors/odometer/odometer.min.js",
      "/assets/vendors/swiper/swiper.min.js",
      "/assets/vendors/tiny-slider/tiny-slider.min.js",
      "/assets/vendors/wnumb/wNumb.min.js",
      "/assets/vendors/wow/wow.js",
      "/assets/vendors/isotope/isotope.js",
      "/assets/vendors/countdown/countdown.min.js",
      "/assets/vendors/owl-carousel/owl.carousel.min.js",
      "/assets/vendors/twentytwenty/twentytwenty.js",
      "/assets/vendors/twentytwenty/jquery.event.move.js",
      "/assets/metro/js/conbiz.js",
      "/assets/xbuild/js/jquery-3.7.1.min.js",
      "/assets/xbuild/js/viewport.jquery.js",
      "/assets/xbuild/js/bootstrap.bundle.min.js",
      "/assets/xbuild/js/gsap/gsap.js",
      "/assets/xbuild/js/gsap/gsap-scroll-to-plugin.js",
      "/assets/xbuild/js/gsap/gsap-scroll-smoother.js",
      "/assets/xbuild/js/gsap/gsap-scroll-trigger.js",
      "/assets/xbuild/js/splitting.js",
      "/assets/xbuild/js/jquery.nice-select.min.js",
      "/assets/xbuild/js/jquery.waypoints.js",
      "/assets/xbuild/js/jquery.counterup.min.js",
      "/assets/xbuild/js/swiper-bundle.min.js",
      "/assets/xbuild/js/jquery.meanmenu.min.js",
      "/assets/xbuild/js/jquery.magnific-popup.min.js",
      "/assets/xbuild/js/wow.min.js",
      "/assets/xbuild/js/splitting-animation.js",
    ];

    // Load all external CSS files
    const loadStyles = () => {
      styles.forEach((href) => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
      });
    };

    // Load all external JS files
    const loadScripts = () => {
      scripts.forEach((src) => {
        const script = document.createElement("script");
        script.src = src;
        document.body.appendChild(script);
      });
    };

    loadStyles();
    loadScripts();

    return () => {
      // Cleanup function to remove the styles and scripts when navigating away
      document.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
        if (styles.includes(link.href)) {
          document.head.removeChild(link);
        }
      });

      document.querySelectorAll("script").forEach((script) => {
        if (scripts.includes(script.src)) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return <>{children}</>;
};

export default LandingLayout;
