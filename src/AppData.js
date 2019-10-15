
import img from './assets/pic/banner.png'
import feedbackExample from './assets/pic/feedback-example.png'

export default {
  main: {
    menu:[
      {href:"#portfolio", title:"ПОРТФОЛИО"},
      {href:"#partners", title:"ПАРТНЕРЫ"},
      {href:"#feedback", title:"ОТЗЫВЫ"},
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
        title:"ЗАГОЛОВОК МОЖЕТ БЫТЬ ОЧЕНЬ ДЛИННЫМ И СОДЕРЖАТЬ ВЕСЬ ТЕЗИС ОСНОВНОЙ СТАТЬИ", 
        desc:"Короткое описание содержания статьи, обычно это несколько первых предложений, но если это статья. Если же данный блок просто описание к графическому контенту — тогда важно поместить сюда весь посыл", 
        image:{
          src:img,
          title:"Вариант с раздевалкой без трибун"
        },
        characteristics:[
          {label:"АДРЕС:", value:"ул. Талалихана"},
          {label:"РАЗМЕРЫ:", value:"ДxШxВ (м)   26.9x13.2x4.5"},
          {label:"СТОИМОСТЬ:", value:"3 321 942 ₽"}
        ]
      },
      {
        title:"ЗАГОЛОВОК МОЖЕТ БЫТЬ ОЧЕНЬ ДЛИННЫМ И СОДЕРЖАТЬ ВЕСЬ ТЕЗИС ОСНОВНОЙ СТАТЬИ", 
        desc:"Короткое описание содержания статьи, обычно это несколько первых предложений, но если это статья. Если же данный блок просто описание к графическому контенту — тогда важно поместить сюда весь посыл", 
        image:{
          src:img,
          title:"Вариант с раздевалкой без трибун"
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
        src:img,
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
        }
      ]
    },
   
    auto: {
      title:"ГРУППА КОМПАНИЙ «СИТИ ЖКХ» ОБЛАДАЕТ  СОБСТВЕННЫМ АВТОПАРКОМ СПЕЦТЕХНИКИ, ПОЗВОЛЯЮЩИЙ ВЫПОЛНЯТЬ ПОЛНЫЙ КОМПЛЕКС РАБОТ ПО БЛАГОУСТРОЙСТВУ ТЕРРИТОРИЙ",
      desc:"У нас есть техника:<br/><br/> - Газель ГАЗ 2705 БИЗНЕС (серая)<br/>- Газель ГАЗ 300900 (бортовая)<br/>- Газель ГАЗ А32R32 NEXT<br/>- КАМАЗ 658600 (манипулятор)<br/>- JAC N75 (среднетонажный бортовой грузовик)<br/>- Самосвал КАМАЗ 20т/20м3<br/>",
      more:"Хотите получить дополнительные консультации? Звоните нам или напишите, мы обязательно перезвоним и ответим на все ваши  вопросы и вместе подберем решение именно для вас!", 
      video:{
        src:"https://youtube.com",
        title:"АВТОПАРК СПЕЦТЕХНИКИ",
        desc:"Презентация JCB 3CX, так же можно добавить не большое описание к видео файлу"
      }
    },

    partners:{
      title:"НАШИ САМЫЕ БЛИЗКИЕ ПАРТНЕРЫ",
      list:[
        {
          title:"Центральный Административный округ",
          city:"г. Москва",
          desc:"Совместно сделали более 1 0 0 успешных проектов",
          img:{
            src:""
          }
        }
      ]
    },
    pavilion:{
      title:"ПРОИЗВОДСТВО И МОНТАЖ ОРИГИНАЛЬНЫХ ПАВИЛЬОНОВ ДЛЯ КОНТЕЙНЕРОВ ТБО",
      desc:"В том числе подготовка места установки (укладка асфальта, выравнивание грунта, бордюрных камней). В 2017-2018 году ООО «Сити ЖКХ» произвело и установило 1086 павильонов различных типов. Контракт на сумму 300 млн. рублей. Данные работы были проведены по заказу Центрального Административного округа г. Москвы в рамках программы «Моя улица»",
      list:[
        {
          title:"ПОКРАСКА ПАВИЛЬОНОВ ПРОИЗВОДИТСЯ ЭЛЕКТРОСТАТИЧЕСКИМ СПОСОБОМ, ПОРОШКОВОЙ КРАСКОЙ ЛЮБОГО ЦВЕТА ПО RAL. ТАК-ЖЕ ВОЗМОЖЕН ВЫБОР ПО ТАБЛИЦЕ ЦВЕТОВ RAL DESIGN ЧТО ПОЗВОЛЯЕТ ВПИСАТЬ ИЗДЕЛИЕ В ЛЮБУЮ ЦВЕТОВУЮ КОНЦЕПЦИЮ БЛАГОУСТРОЙСТВ ТЕРРИТОРИИ.",
          img:{
            src:"",
            alt:""
          }
        }
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
  }
}