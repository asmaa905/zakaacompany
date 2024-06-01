import Vue from 'vue'

window.Vue = require('vue')

Vue.mixin({
  methods: {
    parseName(word, lang = 'ar'){
        console.log(lang)
        let lg = localStorage.getItem("lang") || "en"
        return word? word[`${lg}`] :word;
    }
  },
})
