/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "hsla(0, 0%, 100%, 1)",
        secondary: "hsla(0, 3%, 35%, 0.17)",
        "card-bg": "hsla(216, 33%, 28%, 0.6)",
        "card-bg-2": "rgba(48, 67, 96, 0.6)",

        // quarternary: "rgba(137, 137, 137, 1)",
        hover: "hsla(216, 98%, 80%, 1)",
        'text-gray': "hsla(198, 8%, 68%, 1)",
        blue: "blue",
        pink: "pink",
        peach:"peachpuff",
        red: "red",
        maroon: "rgba(94, 57, 55, 1)",
        yellow: "rgba(254, 195, 82, 1)",
        black: "hsla(228, 99%, 2%, 1)",
        gradient: "linear-gradient(90.89deg, hsla(284, 95%, 76%, 1) 5.39%, hsla(216, 98%, 80%, 1) 50.36%, hsla(203, 100%, 77%, 1) 99.23%)",
        green:"green",
        gray: "rgba(0, 0, 0, 0.22)",
        courseBg: "rgba(26, 33, 47, 0.5)",
        overlay: "rgba(0, 117, 73, 1)",
        'sectionOverlay': "rgba(26, 33, 47, 0.5)",
      },
      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        "extra-bold": "800",
        black: "900",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        astro: ["a Astro Space", "sans-serif"],
        lato: ['Lato', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        hero: "url('/src/assets/Hero_Background.png')",
        // map: "url('/src/assets/world-map-africa.svg')",
        backdrop: "url('/src/assets/backdrop.png')",
        stats: "url('/src/assets/Stats.png')",
        // sectiondrop: "url('/src/assets/participate.png')",
        // "hero-masked": "url('/src/assets/Hero_Image_Masked.png')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "100vw": "100vw",
        "90vw": "90vw",
        "100%": "100%",
        "90%": "90%",
        "80%": "80%",
        "70%": "70%",
        "60%": "60%",
        "55%": "55%",
        "50%": "50%",
        16: "4rem",
      },
      backgroundPosition: {
        bottom: "bottom",
        "bottom-6": "bottom 12.4rem",
        center: "center",
        "center-6": "center top 44.4rem",
        left: "left",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top",
        "top-4": "center top 1rem",
      },
      boxShadowColor: {

      },
      maxHeight: {
        '758': '758px',
        '100':'100px',
        '475': '475px',
      }
    },
  },
  plugins: [],
};
