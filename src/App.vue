<template>
  <div id="app" :style="`direction: ${(lang == 'en' )? 'rtl': 'ltr' }`">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";


export default {
  name: 'App',
  computed : {
    ...mapGetters({
      app: "app"
    }),
    lang() {
      return localStorage.getItem("lang") || "en";

    },
    pageRoute() {
      let routename = this.$route.name;
        if (!routename) return this.$t(  "zakaa-company" );
        document.title = ` ${this.$t( "zakaa-company" )} | ${this.$t("routes." + routename)} `;
      return ` ${this.$t( "zakaa-company" )} | ${this.$t("routes." + routename)} `
    }
  },
  created(){
    this.updateTitle();
  },
  methods:{
    updateTitle: function () {
      let routename = this.$route.name;
      if (!routename) {
        if(this.$route.path == '/')
          routename = 'home' ;
        else {
          document.title = this.$t("zakaa-company"); 
          return this.$t("zakaa-company");
        }
      }
      document.title =` ${this.$t( "zakaa-company" )} | ${this.$t("routes." + routename)} `;
    },
  },
  watch: {
    "$route.fullPath": function (val) {
      console.log(val)
     this.updateTitle();
    },
    lang: {
      handler: "updateTitle",
      immediate: true,
    },
},
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
*{
  box-sizing: border-box;
  --webkit-moz-box-sizing: border-box;
  --webkit-edge-box-sizing: border-box;
  --webkit-moz-box-sizing: border-box;

}
#app {
   font-family:cairo;
   
}  body { padding: 0; margin: 0; }

</style>
