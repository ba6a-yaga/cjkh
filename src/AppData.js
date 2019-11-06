
import img from './assets/pic/banner.png'
import moreBanner from './assets/pic/more_banner.png'
import worksBanner from './assets/pic/works_banner.png'
import partner1 from './assets/pic/partners/partner-1.png'
import partner2 from './assets/pic/partners/partner-2.png'
import partner3 from './assets/pic/partners/partner-3.png'
import partner4 from './assets/pic/partners/partner-4.png'
import feedbackExample from './assets/pic/feedback-example.png'

import pavilion1 from './assets/pic/pavilions/pavilion1.png'
import pavilion2 from './assets/pic/pavilions/pavilion2.png'
import pavilion3 from './assets/pic/pavilions/pavilion3.png'
import pavilion4 from './assets/pic/pavilions/pavilion4.png'
import pavilion5 from './assets/pic/pavilions/pavilion5.png'
import { requiredValidator, emailValidator, lengthValidator } from './utils/validators'


export default {
  main: {
    menu:[
      {href:"#portfolio", title:"ПОРТФОЛИО"},
      {href:"#feedback", title:"ОТЗЫВЫ"},
      {href:"#partners", title:"ПАРТНЕРЫ"},
      {href:"#contact", title:"КОНТАКТЫ"},
    ],
    social: [
      {link:"https://youtube.com", icon:"youtube", name:"YouTube"},
      {link:"https://instagram.com", icon:"instagram", name:"Instagram"},
      {link:"https://vk.com", icon:"vk", name:"Вконтакте"},
      {link:"https://ok.ru", icon:"ok", name:"Однокласники"},
    ],
    banners:[
      {
        title:"1. ЗАГОЛОВОК МОЖЕТ БЫТЬ ОЧЕНЬ ДЛИННЫМ И СОДЕРЖАТЬ ВЕСЬ ТЕЗИС ОСНОВНОЙ СТАТЬИ", 
        desc:"Короткое описание содержания статьи, обычно это несколько первых предложений, но если это статья. Если же данный блок просто описание к графическому контенту — тогда важно поместить сюда весь посыл", 
        image:{
          src:img,
          title:"Вариант с раздевалкой (без трибун)"
        },
        moreImage:{
          src:moreBanner,
          title:""
        },
        characteristics:[
          {label:"АДРЕС:", value:"ул. Талалихана"},
          {label:"РАЗМЕРЫ:", value:"ДxШxВ (м)   26.9x13.2x4.5"},
          {label:"СТОИМОСТЬ:", value:"3 321 942 ₽"}
        ]
      },
      {
        title:"2. ЗАГОЛОВОК МОЖЕТ БЫТЬ ОЧЕНЬ ДЛИННЫМ И СОДЕРЖАТЬ ВЕСЬ ТЕЗИС ОСНОВНОЙ СТАТЬИ", 
        desc:"Короткое описание содержания статьи, обычно это несколько первых предложений, но если это статья. Если же данный блок просто описание к графическому контенту — тогда важно поместить сюда весь посыл", 
        image:{
          src:img,
          title:"Вариант с раздевалкой без трибун"
        },
        moreImage:{
          src:moreBanner,
          title:""
        },
        characteristics:[
          {label:"АДРЕС:", value:"ул. Талалихана"},
          {label:"РАЗМЕРЫ:", value:"ДxШxВ (м)   26.9x13.2x4.5"},
          {label:"СТОИМОСТЬ:", value:"3 321 942 ₽"}
        ]
        
      },
      {
        title:"3. ЗАГОЛОВОК МОЖЕТ БЫТЬ ОЧЕНЬ ДЛИННЫМ И СОДЕРЖАТЬ ВЕСЬ ТЕЗИС ОСНОВНОЙ СТАТЬИ", 
        desc:"Короткое описание содержания статьи, обычно это несколько первых предложений, но если это статья. Если же данный блок просто описание к графическому контенту — тогда важно поместить сюда весь посыл", 
        image:{
          src:img,
          title:"Вариант с раздевалкой без трибун"
        },
        moreImage:{
          src:moreBanner,
          title:""
        },
        characteristics:[
          {label:"АДРЕС:", value:"ул. Талалихана"},
          {label:"РАЗМЕРЫ:", value:"ДxШxВ (м)   26.9x13.2x4.5"},
          {label:"СТОИМОСТЬ:", value:"3 321 942 ₽"}
        ]
        
      }
    ],

    works:{
      title:"ГРУППА КОМПАНИЙ «СИТИ ЖКХ» ВЫПОЛНЯЕТ РАБОТЫ ПО ПОДГОТОВКЕ И БЛАГОУСТРОЙСТВУ ДВОРОВЫХ И ПРИЛЕГАЮЩИХ ТЕРРИТОРИЙ СВЯЗАТЬСЯ С НАМИ",
      desc:"Мы оказываем следующие виды работ:<br/><br/>- Земляные и планировочные работы<br/>- Укладка асфальта<br/>- Укладка тротуарной плитки любого вида и сложности<br/>- Устройство посевного газона<br/>- Укладка рулонного газона<br/>- Посадка кустарников и деревьев, в т.ч. крупномеров<br/>- Поставка нерудных строительных материалов (щебень, песок, гравий, ПГС и др.)<br/>- Общестроительные работы (отделка помещений)<br/>",
      image:{
        src:worksBanner,
        title:"ГРУППА КОМПАНИЙ «СИТИ ЖКХ» ВЫПОЛНЯЕТ РАБОТЫ ПО ПОДГОТОВКЕ И БЛАГОУСТРОЙСТВУ ДВОРОВЫХ И ПРИЛЕГАЮЩИХ ТЕРРИТОРИЙ СВЯЗАТЬСЯ С НАМИ"
      }
    },

    feedback: {
      title:"ОТЗЫВЫ НАШИХ КЛИЕНТОВ",
      list: [
        {
          image:{
            src:feedbackExample,
            alt:"Марья Васильевна"
          },
          title:"Марья Васильевна",
          position:"ГЛАВНЫЙ РЕДАКТОР",
          place:"Комсомольская правда",
          desc:"Делают в срок, соотношение цена качество отличное. Благодарны за проделанную работу!",
        },
        {
          image:{
            src:feedbackExample,
            alt:"Марья Васильевна"
          },
          title:"Марья Васильевна",
          position:"ГЛАВНЫЙ РЕДАКТОР",
          place:"Комсомольская правда",
          desc:"Делают в срок, соотношение цена качество отличное. Благодарны за проделанную работу!",
        },
        {
          image:{
            src:feedbackExample,
            alt:"Марья Васильевна"
          },
          title:"Марья Васильевна",
          position:"ГЛАВНЫЙ РЕДАКТОР",
          place:"Комсомольская правда",
          desc:"Делают в срок, соотношение цена качество отличное. Благодарны за проделанную работу!",
        },
        {
          image:{
            src:feedbackExample,
            alt:"Марья Васильевна"
          },
          title:"Марья Васильевна",
          position:"ГЛАВНЫЙ РЕДАКТОР",
          place:"Комсомольская правда",
          desc:"Делают в срок, соотношение цена качество отличное. Благодарны за проделанную работу!",
        },
        {
          image:{
            src:feedbackExample,
            alt:"Марья Васильевна"
          },
          title:"Марья Васильевна",
          position:"ГЛАВНЫЙ РЕДАКТОР",
          place:"Комсомольская правда",
          desc:"Делают в срок, соотношение цена качество отличное. Благодарны за проделанную работу!",
        },
        {
          image:{
            src:feedbackExample,
            alt:"Марья Васильевна"
          },
          title:"Марья Васильевна",
          position:"ГЛАВНЫЙ РЕДАКТОР",
          place:"Комсомольская правда",
          desc:"Делают в срок, соотношение цена качество отличное. Благодарны за проделанную работу!",
        },
        {
          image:{
            src:feedbackExample,
            alt:"Марья Васильевна"
          },
          title:"Марья Васильевна",
          position:"ГЛАВНЫЙ РЕДАКТОР",
          place:"Комсомольская правда",
          desc:"Делают в срок, соотношение цена качество отличное. Благодарны за проделанную работу!",
        },
        {
          image:{
            src:feedbackExample,
            alt:"Марья Васильевна"
          },
          title:"Марья Васильевна",
          position:"ГЛАВНЫЙ РЕДАКТОР",
          place:"Комсомольская правда",
          desc:"Делают в срок, соотношение цена качество отличное. Благодарны за проделанную работу!",
        },
        {
          image:{
            src:feedbackExample,
            alt:"Марья Васильевна"
          },
          title:"Марья Васильевна",
          position:"ГЛАВНЫЙ РЕДАКТОР",
          place:"Комсомольская правда",
          desc:"Делают в срок, соотношение цена качество отличное. Благодарны за проделанную работу!",
        },
        {
          image:{
            src:feedbackExample,
            alt:"Марья Васильевна"
          },
          title:"Марья Васильевна",
          position:"ГЛАВНЫЙ РЕДАКТОР",
          place:"Комсомольская правда",
          desc:"Делают в срок, соотношение цена качество отличное. Благодарны за проделанную работу!",
        },
        {
          image:{
            src:feedbackExample,
            alt:"Марья Васильевна"
          },
          title:"Марья Васильевна",
          position:"ГЛАВНЫЙ РЕДАКТОР",
          place:"Комсомольская правда",
          desc:"Делают в срок, соотношение цена качество отличное. Благодарны за проделанную работу!",
        }
      ]
    },
   
    auto: {
      title:"ГРУППА КОМПАНИЙ «СИТИ ЖКХ» ОБЛАДАЕТ  СОБСТВЕННЫМ АВТОПАРКОМ СПЕЦТЕХНИКИ, ПОЗВОЛЯЮЩИЙ ВЫПОЛНЯТЬ ПОЛНЫЙ КОМПЛЕКС РАБОТ ПО БЛАГОУСТРОЙСТВУ ТЕРРИТОРИЙ",
      desc:"У нас есть техника:<br/><br/> - Газель ГАЗ 2705 БИЗНЕС (серая)<br/>- Газель ГАЗ 300900 (бортовая)<br/>- Газель ГАЗ А32R32 NEXT<br/>- КАМАЗ 658600 (манипулятор)<br/>- JAC N75 (среднетонажный бортовой грузовик)<br/>- Самосвал КАМАЗ 20т/20м3<br/> - Газель ГАЗ 2705 БИЗНЕС (серая)<br/>- Газель ГАЗ 300900 (бортовая)<br/>- Газель ГАЗ А32R32 NEXT<br/>- КАМАЗ 658600 (манипулятор)<br/>- JAC N75 (среднетонажный бортовой грузовик)<br/>- Самосвал КАМАЗ 20т/20м3<br/>",
      more:"Хотите получить дополнительные консультации? Звоните нам или напишите, мы обязательно перезвоним и ответим на все ваши  вопросы и вместе подберем решение именно для вас!", 
      video:{
        src:"https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        title:"АВТОПАРК СПЕЦТЕХНИКИ",
        desc:"Презентация JCB 3CX, так же можно добавить не большое описание к видео файлу"
      }
    },

    partners:{
      title:"НАШИ САМЫЕ БЛИЗКИЕ ПАРТНЕРЫ",
      list:[
        {
          title:"Центральный Административный округ",
          place:"г. Москва",
          desc:"Совместно сделали более 100 успешных проектов",
          image:{
            alt:"Центральный Административный округ",
            src:partner1
          }
        },
        {
          title:"Управа Красносельского района",
          place:"г. Москва",
          desc:"Совместно сделали более 100 успешных проектов",
          image:{
            alt:"Управа Красносельского района",
            src:partner2
          }
        },
        {
          title:"Управа Басманного района",
          place:"г. Москва",
          desc:"Совместно сделали более 100 успешных проектов",
          image:{
            alt:"Управа Басманного района",
            src:partner3
          }
        },
        {
          title:"Центральный Административный округ",
          place:"г. Москва",
          desc:"Совместно сделали более 100 успешных проектов",
          image:{
            alt:"Центральный Административный округ",
            src:partner4
          }
        }
      ]
    },
    pavilion:{
      title:"ПРОИЗВОДСТВО И МОНТАЖ ОРИГИНАЛЬНЫХ ПАВИЛЬОНОВ ДЛЯ КОНТЕЙНЕРОВ ТБО",
      desc:"В том числе подготовка места установки (укладка асфальта, выравнивание грунта, бордюрных камней). В 2017-2018 году ООО «Сити ЖКХ» произвело и установило 1086 павильонов различных типов. Контракт на сумму 300 млн. рублей. Данные работы были проведены по заказу Центрального Административного округа г. Москвы в рамках программы «Моя улица»",
      list:[
        {
          title:"Покраска павильонов",
          text:"Производится электростатическим способом, порошковой краской любого цвета по ral. Так-же возможен выбор по таблице цветов ral design что позволяет вписать изделие в любую цветовую концепцию благоустройств территории.",
          image:{
            src:pavilion1,
            alt:""
          }
        },
        {
          title:"Покраска павильонов",
          text:"Производится электростатическим способом, порошковой краской любого цвета по ral. Так-же возможен выбор по таблице цветов ral design что позволяет вписать изделие в любую цветовую концепцию благоустройств территории.",
          image:{
            src:pavilion2,
            alt:""
          }
        },
        {
          title:"Покраска павильонов",
          text:"Производится электростатическим способом, порошковой краской любого цвета по ral. Так-же возможен выбор по таблице цветов ral design что позволяет вписать изделие в любую цветовую концепцию благоустройств территории.",
          image:{
            src:pavilion3,
            alt:""
          }
        },
        {
          title:"Покраска павильонов",
          text:"Производится электростатическим способом, порошковой краской любого цвета по ral. Так-же возможен выбор по таблице цветов ral design что позволяет вписать изделие в любую цветовую концепцию благоустройств территории.",
          image:{
            src:pavilion4,
            alt:""
          }
        },
        {
          title:"Покраска павильонов",
          text:"Производится электростатическим способом, порошковой краской любого цвета по ral. Так-же возможен выбор по таблице цветов ral design что позволяет вписать изделие в любую цветовую концепцию благоустройств территории.",
          image:{
            src:pavilion5,
            alt:""
          }
        },
      ]
    },
    news:{
      title:"СЛЕДИТЕ ЗА НАШИМИ НОВОСТЯМИ В СОЦИАЛЬНЫХ СЕТЯХ"
    },
    consult:{
      title:"Хотите получить дополнительные консультации? Звоните нам или напишите, мы обязательно перезвоним и ответим на все ваши  вопросы и вместе подберем решение именно для вас!",
      button:{
        title:"СВЯЗАТЬСЯ С НАМИ", 
      }
    }
  },
  contacts:{
    title:"Общество с ограниченной ответственностью «Сити ЖКХ» ",
    phone:"+7 (905) 123-45-67",
    email:"info@sitizkh.ru",
    formSuccess:"Сообщение успешно отправлено, мы в скором времени вам ответим, спасибо!",
    form:[
      { 
        title:"Ваше имя",
        type:"text",
        validators:[{validator:requiredValidator, options:{error:"Имя не должно быть пустым"}}],
        placeholder:"Введите Ваше имя",
        name:"name",
        required:true
      },
      { 
        title:"Ваш email",
        type:"text",
        validators:[
            {validator:requiredValidator, options:{error:"Поле email не должно быть пустым"}}, 
            {validator:emailValidator, options:{error:"Некорректный адрес электронной почты"}}, 
            {validator:lengthValidator, options:{max:255, error:"Email не должен быть длиннее 255 симоволов"}}, 
        ],
        placeholder:"Введите Ваш email",
        name:"email",
      },
      { 
        title:"Текст сообщения",
        type:"textarea",
        validators:[{validator:requiredValidator, options:{error:"Текст сообщения не должен быть пустым"}}],
        placeholder:"Введите текст обращения",
        name:"message",
        required:true
      },
      { 
        title:"ОТПРАВИТЬ",
        type:"submit",
      }
    ],
  }
}