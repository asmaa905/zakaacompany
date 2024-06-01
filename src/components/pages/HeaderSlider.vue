<template>
    <div id="carouselExampleIndicators" class="carousel slide rounded-lg"
    style=" height: 90vh !important;padding-top:60px">
      <div class="carousel-inner" style="position: relative;">
        <div
          class="carousel-item "
          style="height:100%        
          "
          v-for="(item, i) in slides"
          :key="i"
          ref="carouselItem"
          :class="current == i ? 'active' : ''"
        >

        <div 
          id="overlay"
          style="max-height: 100%; max-width:100%; background-color: rgba(0,0,0,54%);"
          :style="`${lang=='en'?' direction: ltr;justify-content: left; text-align: left;':  ' direction: rtl;justify-content: right; text-align: right;'}`"

          >
          <div style="max-height: 100%; width:44%; padding-top:30px"
          :style="`${lang == 'en'?'padding-left: 30px; ':'padding-right: 30px;'}`"
          >
            <h2
            :style="`${lang=='en'?' text-align: left;' : 'text-align: right;'}`"
            v-text="parseName(Sliderheader)+ '.....'"
            />
              <div v-if="lang == 'ar'" class="input-wrapper">
              <br/>
                  <h1  
                      class="btn2 button"
                      style="font-size:40px;font-weight:bold; "
                      v-for="(itemm, i) in animatedWords"
                      :key="i"
                      :style="`display: ${currentWord == i ? 'block' : 'none'}`"                >
                  <div>
                      <span>{{ parseName(itemm.text) }}</span>
                  </div>
                </h1>
                <br/>

              </div>
              <div v-else style="height: 80px;"></div>
              <h4 v-text="parseName(paragragh)" />
              <b-button class="cc">{{ $t('contactUs') }}</b-button>
          </div>
        </div>
        <img 
        :src="item.src"
        style="max-width:100%; max-height:100%;       
        "
        alt="slider"
        
        />
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: "header-slider",
    data() {
      return {
        current: 0,
        timer: 0,
        timerWord:null,
        currentWord: 0,
        animatedWords:[
        {
            id: 1,
            text: {
              "ar":"البرمجة",
              "en":"Programming"
            },
          },
          {
            id: 2,
            
            text: {
              "ar":"تطبيقات",
              "en":"Applications"
            },
          },
          {
            id: 3,
            text: {
              "ar":"مواقع",
              "en":"Websites"
            }, 
          },
        ],
        slides: [
          {
            id: 1,
            src: "/imgsSlides/Pic1.jpg",
          },
          {
            id: 2,
            src: "/imgsSlides/Pic2.jpg",
          },
          {
            id: 3,
            src: "/imgsSlides/Pic3.jpg",
          },
          {
            id: 4,
            src: "/imgsSlides/Pic4.jpg",
          },
        ],
        paragragh:{
          "en":"We provide you with all website services, mobile applications, enterprise management programs, and all The smart technical solutions you need to create and develop your business to move your business to the futureKeeping pace with artificial intelligence technologies.",
          "ar":"نقدم لك جميع خدمات المواقع الإلكترونية وتطبيقات الموبايل وبرامج إدارة المؤسسات وكل الحلول التقنية الذكية التي تحتاجها في إنشاء وتطوير أعمالك لتنقل أعمالك للمستقبل وتواكب تقنيات الذكاء الاصطناعي."
        },
        Sliderheader:{
          "en":"Thaka international provides you",
          "ar":"ذكاء الدولية توفر لك"
        },
      };
    },
    computed :{
    lang() {
      return localStorage.getItem("lang") || "en";

    }
  },
    methods: {
      nextSlide() {
        this.current++;
        if (this.current >= this.slides.length) this.current = 0;
        this.resetPlay();
      },
      play() {
        let app = this;
        this.timer = setInterval(function () {
          app.nextSlide();
        }, 3000);
      },
      resetPlay() {
        clearInterval(this.timer);
        this.play();
      },
      prevSlide() {
        this.current--;
        if (this.current < 0) this.current = this.slides.length - 1;
        this.resetPlay();
      },
      selectSlide(i) {
        this.current = i;
        this.resetPlay();
      },
      // /* animate text */
      secondWord() {
        this.currentWord++;
        if (this.currentWord >= this.animatedWords.length) this.currentWord = 0;
        this.resetAnimateWord();
      },
      Animate() {
        let app = this;
        this.timerWord = setInterval(function () {
          app.secondWord();
        }, 3600);
      },
    
      resetAnimateWord() {
        clearInterval(this.timerWord);
        this.Animate();
      },
    },
    created() {
      this.Animate();
      this.play();
     
    },

  };
  </script>
  <style lang="scss" scoped>
  .carousel {
    text-align:justify;
    position: relative;
    overflow: hidden;
    height: 90vh !important;
    padding-top:1rem;

  }
  
 .carousel .carousel-inner {
  width: 100%;
  height:90%;

  overflow: hidden;  
  box-sizing: border-box;
}
  
  .carousel .carousel-inner img {
    width: 100%;
   max-height:100%;
  }
  .carousel-item {
    position: relative;

  }

#overlay  {
position: absolute;
  display: block;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  color:#ffffff !important;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;



}
#overlay .cc {

  width: 150px;
height: 40px;



padding: 4px, 8px, 6px, 8px;
border-radius: 4px;
gap: 8px;
color:#ffffff !important;
  background-color:  #00ABAD !important;
  font-size: 16px;

}

#overlay h4 {
//styleName: 16 Reg;
font-family: Cairo;
font-size: 16px;
line-height: 30px;
letter-spacing: 0em;
text-align: justify;
margin-bottom: 1rem;
padding: 20px 5px;
}
#overlay  h2 {
  //styleName: 20 Reg;
font-family: Cairo;
font-size: 20px;
/*line-height: 37px;*/
letter-spacing: 0em;
padding: 20px 5px;
font-weight: 300;
color: #fff;
// text-align: right;

}




/* The typewriter cursor effect colorchange*/
@keyframes blink-caret {
  from, to {  border-color: #28649C }
  50% { border-color: #09B9E1; }
}
@keyframes colorchange {
  from, to {  color: #28649C }
  50% { color: #09B9E1; }
}
#overlay  .button {
    // position: fixed;
    border-left: 5px solid #09B9E1;
    height:50px;
    font-size: 40px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    background:transparent;
    animation:borderMove 3.5s alternate-reverse step-end ,
    colorchange 7s  infinite ease-in,
    blink-caret 7s infinite ease-in;
    background: none;
    border-right:unset !important;
    border-top:unset !important;
    border-bottom:unset !important;
    line-height: 8px;
    font-family: cairo;
}

#overlay .btn2 {
  overflow: hidden;

    top:100px;
    width:130px;
    letter-spacing: 3px;
    font-weight: bold;
     display :none;
     line-height: 5px;
}
#overlay .btn2 div{
    position: relative;
    width:100%;
    
     left:-55%
}
#overlay .btn2 span{
    position: absolute;
   
}
@keyframes borderMove {
    0%{
        padding:  5px 0px 5px 0px;
    }
    2%{
        padding: 5px 0px 5px 5px;

    } 
    4%{
      padding: 5px 0px 5px 10px;

  }
 6%{
    padding:  5px 0px 5px 15px;

} 
    8%{
        padding:  5px 0px 5px 20px;

    } 
    12%{
        padding: 5px 0px 5px 30px;

    } 
    16%{
        padding: 5px 0px 5px 40px;

    } 
    20%{
        padding: 5px 0px 5px 50px;

    } 
    24%{
        padding: 5px  0px  5px 60px;
    } 
    28%{
        padding: 5px 0px 5px 70px

    } 
   32%{
        padding: 5px  0px 5px 80px;

    } 
    38%{
        padding: 5px 0px 5px 90px;

    } 
    42%{
        padding: 5px 0px 5px 100px;

    }
    46%{
        padding:  5px 0px 5px 110px;
    }
    58%{
        padding: 5px 0px 5px 120px;

    } 
    50%{
        padding: 5px 0px 5px 130px;

    } 
    54%{
        padding:  5px 0px 5px 120px;

    } 
    58%{
        padding: 5px 0px 5px 110px;

    } 
    62%{
        padding: 5px 0px 5px 100px;

    } 
    66%{
        padding: 5px 0px 5px 90px;

    } 
    70%{
        padding: 5px  0px  5px 80px;
    } 
    74%{
        padding: 5px 0px 5px 70px

    } 
    78%{
        padding: 5px  0px 5px 60px;

    } 
    82%{
        padding: 5px 0px 5px 50px;

    } 
    86%{
        padding: 5px 0px 5px 40px;

    } 
    90%{
        padding: 5px  0px  5px 30px;
    } 
    94%{
        padding: 5px 0px 5px 20px

    } 
    98%{
        padding: 5px 0px 5px 10px

    } 
    100%{
        padding: 5px 0px 5px 0px

    } 
}
  </style>