<template>
  <div class="content d-flex">
    <div class="leftSide d-flex align-items-end flex-column">
      <div v-for="service in services" :key="service.id">
        <h2 v-if="currentServieee.id == service.id"
        :style="`text-align:${ lang=='en'?'left'  : 'right'};`"

        >{{ parseName(currentServieee.title) }}</h2>
        <h3 v-else @click="showServies(service.id)">{{ parseName(service.title) }}</h3>
        <p  
          v-if="currentServieee.id == service.id" 
          class="current-service" 
          style="text-wrap: wrap;"
          :style="`text-align:${ lang=='en'?'left'  : 'right'};`"
        > {{ parseName(currentServieee.details) }}
      </p>
      </div>
    </div>
    <div class="middle ">
      <div v-if="currentServieee.id!== 3" class="chield m-auto"  :style="`top:${currentServieee.id *40}px;`"></div>
      <div v-if="currentServieee.id === 3" class="chield m-auto"  :style="`top:160px;bottom:0x`"></div>

    </div>
    <div class="d-flex justify-content-between" style="">
      <img 
        v-if="currentServieee.id !== 3" 
        class="img" 
        :src="`/servicesIcons/${currentServieee.icon}`" 
        alt=""
        :style="`margin-top:${currentServieee.id *40}px;`"
      />
      <img 
        v-else 
        class="img" 
        :src="`/servicesIcons/${currentServieee.icon}`"         
        alt=""
        :style="`margin-top:160px;`"
      />
      <div class="rightSide d-flex flex-column align-items-end">
          <h2
          :style="`${lang=='en'?'text-align: left;':'text-align: right; '}`"

          >{{ $t('ourServies') }}</h2>
          <p
          :style="`${lang=='en'?'text-align: left;':'text-align: right; '}`"
          >{{ parseName(OurServicesParagraph) }}</p>
          <button @click="showMore()">{{ $t('ShowMore') }}</button>
          <p v-show="show" class="mt-3">{{ parseName(OurServicesParagraph) }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  name:"our-services",
  data(){
    return{ 
      show:false,
      Servicetimer:null,
      ServiceCurrent:0,
      OurServicesParagraph: {
        "ar":"نساعد عملائنا على تبسيط أعمالهم من خلال مجموعة الحلول والخدمات والتطبيقات التي تساعد على تسهيل سير وتكامل الأعمال بالإضافة إلى الدعم التقني والمتابعة المستمرة.",
        "en":"We help our customers simplify their business through a set of solutions, services and applications that help facilitate the flow and integration of business, in addition to technical support and continuous follow-up."
      },
      currentServie:{
          id:0,
          title:'حلول تقنية متكاملة',
          details:{
        "ar":"نساعد عملائنا على تبسيط أعمالهم من خلال مجموعة الحلول والخدمات والتطبيقات التي تساعد على تسهيل سير وتكامل الأعمال بالإضافة إلى الدعم التقني والمتابعة المستمرة.",
        "en":"We help our customers simplify their business through a set of solutions, services and applications that help facilitate the flow and integration of business, in addition to technical support and continuous follow-up."
      },
           icon:'fa_solid_laptop_code.svg'
        },
      services:[
      {
          id:0,
          title:{
            "ar":'حلول تقنية متكاملة',
            "en":'Integrated technical solutions',
          },
          details:{
            "ar":"نساعد عملائنا على تبسيط أعمالهم من خلال مجموعة الحلول والخدمات والتطبيقات التي تساعد على تسهيل سير وتكامل الأعمال بالإضافة إلى الدعم التقني والمتابعة المستمرة.",
            "en":"We help our customers simplify their business through a set of solutions, services and applications that help facilitate the flow and integration of business, in addition to technical support and continuous follow-up."
          },
           icon:'fa_solid_laptop_code.svg'},
        {
          id:1,
          title:{
            "en":'Marketing and business development',
            "ar":'تسويق وتطوير الاعمال',
          },
          details:{
          "ar":"نوفر لك كافة وسائل التسويق الالكتروني ونعملُ لك عليها، لتسويق أعمالك مُنتجاتك ونشر هويتك لأكبر قدر ممكن من العملاء المحتملين.",
          "en":"We provide you with all electronic marketing methods and work on them, to market your business and products and spread your identity to the largest possible number of potential customers."
        },
           icon:'uil_chart_line.svg'},        
         {
          id:2,
          title:{
            "ar":"الدراسات والاستشارات",
            "en":"Studies and consultations",
          },
          details:{
            "ar":"تواصل مع طاقمنا الاستشاري للحصول على خدمات استشارية في المجالات التقنية والإدارية تدعم نمو أعمالك.",
            "en":"Contact our consulting team to obtain consulting services in the technical and administrative fields that support the growth of your business."
          },
           icon:'ph_users_three_fill.svg'},
        {
          id:3,
          title:{
            "ar":"التدريب والتأهيل",
            "en":"Training and qualification"
          },
          details:{
            "ar":"نهدف في ذكاء الدولية إلى تطوير أداء المؤسسات ورفع مهارة الأفراد من خلال إعداد البرامج التدريبية التي توفر الأدوات اللازمة لزيادة الخبرات والمهارات .",
            "en":"At Zakaa International, we aim to develop the performance of institutions and raise the skills of individuals by preparing training programs that provide the necessary tools to increase experience and skills."
          },
           icon:'icon_park_solid_every_user.svg' }
      ]
    }
  },
  computed :{
    lang() {
      return localStorage.getItem("lang") || "en";
    },
    currentServieee:{
      get(){
        return this.currentServie
      },
      set (val){
        this.currentServie = val
      } 
    }
  },
  mounted(){
    this.ourServicesAnimate();
  },
  methods:{
    showMore(){
      this.show=!this.show
    },
    showServies(id) {
      this.services.forEach((s)=>{
        if(s.id === id){
          this.currentServieee = s
          this.ServiceCurrent = s.id;
        }

      })
    },
    
    nextService() {
      this.ServiceCurrent++;
      if (this.ServiceCurrent >= this.services.length)
        this.ServiceCurrent = 0;
      this.currentServieee = this.services[this.ServiceCurrent];
      this.resetServiesAnimate();
    },
    ourServicesAnimate() {
      let app = this;

      this.Servicetimer = setInterval(function(){
        app.nextService(); // Call the nextService method using app.nextService()
      }, 3000);
    },
      resetServiesAnimate() {
        clearInterval(this.Servicetimer);
        this.ourServicesAnimate();
      },
  },
}
</script>
<style scoped>
.content{
  padding:40px 120px;
  
}
.leftSide{
  width:50%
}
h2{
  color: var(--Primary2, #00ABAD);
/* text-align: right; */

/* 24 Bold */
font-family: Cairo;
font-size: 24px;
font-style: normal;
font-weight: 700px;
font-weight: bold;
line-height: normal;
}
.leftSide p{
  color: var(--Black, #12151C);
text-align: justify;
width:474px;
/* direction: rtl; */
font-family: Cairo;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.7;
margin: left;


}
.leftSide h3{
  color: var(--Light-blue2, #09B9E1);
/* text-align: right; */

/* 18 Reg */
font-family: Cairo;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 2;
cursor: pointer;
}
.middle{
  border-radius: 4px;
background: var(--light-gry, #D0D0D2);
width: 4px;
height: 263px;
flex-shrink: 0;
margin:0 18px;
position: relative;

}
.chield{
  border-radius: 4px;
background: var(--Primary2, #00ABAD);
width: 8px;
height: 104px;
flex-shrink: 0;
position: absolute;
/* right:2px; */
}
.rightSide h3{
  color: var(--Blue2, #28649C);
/* text-align: right; */

/* 18 Bold */
font-family: Cairo;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
button{
  color: var(--White, #FFF);
text-align: justify;

font-family: Cairo;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
border:none;
border-radius: 8px;
display: inline-flex;
padding: 4px 8px 6px 8px;
justify-content: center;
align-items: center;
gap: 8px;
background: var(--Primary2, #00ABAD);
width: fit-content;
margin-top: 28px;
}
.img{
  /* margin-right: 132px; */
  width: 80px;
height: 80px;
flex-shrink: 0;
margin-top: 16px;

}
.rightSide p{
  width: 389px;
   /* //  direction: rtl; */
    /* text-align: right; */

}

</style>
