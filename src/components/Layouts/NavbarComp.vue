<template>
  <div style="
    background-color: #fff;
    width: 100%;
    position: fixed;
    z-index: 99999;
    top: 0;
    box-shadow: 0 2px 2px rgba(112, 174, 170, .2);
    height: auto;
    overflow: visible;
  ">
    <div class="container">
      <nav class="mx-auto d-flex-center navbar navbar-expand-lg align-items-center" style="color:#D0D0D2;">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav " :class="`text-align-${lang == 'en' ? 'right' : 'left'}`">
            <li class="d-flex-column translation nav-item" style="border: 1px solid #8A8A8A; z-index: 99999 !important;">
              <div class="d-flex select-lang">
                <img src="@/assets/fluent-mdl2_world.svg" alt="trans" style="width: 16px; height: 16px; top: -0px" />
                <div class="d-flex" @click="showLang = !showLang">
                  <p style="cursor: pointer !important; border: none !important; text-transform: uppercase;" class="custom-select">
                    {{ lang }}
                  </p>
                  <img src="@/assets/arrow.png" style="width: 23px" />
                </div>
              </div>
              <ul v-if="showLang == true" class="menu-lang">
                <li class="nav-link lang border-bottom bg-hover-light w-100" style="list-style: none; text-transform: uppercase;" v-for="(llang, index) in langs.filter((l) => l !== lang)" :key="index" @click="handleChange(llang)">{{ llang }}</li>
              </ul>
            </li>
            <li v-for="(link, index) in navLinks" :key="index" class="nav-item" :class="link.path == $route.path ? 'active' : ''">
              <router-link class="nav-link" :class="link.path == $route.path ? 'active-route' : ''" :to="link.path">{{ $t(`${link.name}`) }}</router-link>
            </li>
          </ul>
        </div>
        <div>
          <img class="navbar-brand" style="height: 56px; width: 104px" src="@/assets/logo.png" />
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar-comp",
  data() {
    const lang = localStorage.getItem("lang") || "en";
    return {
      lang: lang,
      navLinks: [
        {
          name: "blog",
          path: "/blog"
        },
        {
          name: "jobs",
          path: "/jobs"
        },
        {
          name: "contactUs",
          path: "/contactUs"
        },
        {
          name: "OurWorks",
          path: "/OurWorks"
        },
        {
          name: "ourServies",
          path: "/ourServies"
        },
        {
          name: "AboutUs",
          path: "/about"
        },
        {
          name: "Home",
          path: "/"
        }
      ],
      langs:[
        'ar',
        'en'
      ],
      showLang: false
    };
  },
  methods: {
    handleChange(lang) {
      localStorage.setItem("lang", lang);
      window.location.reload();
    }
  }
};
</script>

<style scoped>
nav {
  font-family: cairo;
  z-index: 99999;
}

.nav-item {
  position: relative;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  margin: 0 15px;
}

.nav-item::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 4px;
  bottom: -12px;
  left: 0;
  background-color: #00ABAD;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.active::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.active {
  color: #00ABAD !important;
}

.select-lang {
  width: 80px;
  height: 40px;
  padding: 4px 1px 6px 1px;
}

.select-lang img {
  margin: auto !important;
}

.translation {
  border-radius: 8px;
  border: 1px solid #444;
  font-size: 16px;
  font-family: cairo;
  color: #8A8A8A;
  font-weight: 400px;
  line-height: 29.98px;
}

.active-route {
  color: #00ABAD !important;
}

.menu-lang {
  position: absolute;
  top: 57px;
  z-index: 99999;
  box-shadow: burlywood;
  width: 80px;
  background-color: #ffffff;
}

@media (max-width: 990px) {
  .nav-data {
    display: none;
  }
}

@media (min-width: 990px) {
  .nav-data {
    display: none;
  }
}
</style>