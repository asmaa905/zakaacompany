import Vue from 'vue'

window.Vue = require('vue')

Vue.mixin({
  methods: {
    parseName(word, lang = localStorage.getItem("lang") ){
        let lg = lang || "en"
        return word? word[`${lg}`] :word;
    }
  },
})
