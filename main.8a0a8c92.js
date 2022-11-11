parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"IkY8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.translationArr=void 0;var e={"header-description":{UA:"Для кави, вендингу та іншого рітейлу",EN:"For coffee, vending and other retail"},"header-button":{UA:"Зв’язатися з нами",EN:"Get in touch with us"},"why-prostoPay-title":{UA:"Чому ми?",EN:"Why ProstoPay?"},"why-prostoPay-benefit":{UA:"менше простоїв",EN:"less  downtime"},"services-title":{UA:"Наші сервіси",EN:"Our Services"},cashless:{UA:"Безготівкова <br /> оплата",EN:"Cashless"},feedback:{UA:"Відгуки <br /> клієнтів",EN:"Customer <br /> Feedback"},monitoring:{UA:"Онлайн <br /> моніторинг",EN:"Online <br /> Monitoring"},analytics:{UA:"Аналітика",EN:"Analytics"},remote:{UA:"Дистанційне <br /> керування",EN:"Remote <br /> Control"},fiscal:{UA:"Фіскалізація",EN:"Fiscal Services"},"more-button":{UA:"Більше",EN:"See more"},"services-benefit":{UA:"менше витрат",EN:"less  expenses"},"pay-service":{UA:"платіжні сервіси",EN:"payment services"},"products-title":{UA:"Продукти",EN:"Products"},"products-description":{UA:"Ми розробляємо IoT-пристрої і платіжні рішення для вендингу, кавомашин та інших видів роздрібного бізнесу",EN:"We develop IoT and Payment solutions for vending, coffee machines & other retail businesses"},"hardware-link-1":{UA:"Серія А",EN:"Series A"},"hardware-link-2":{UA:"Серія L",EN:"Series L"},"software-link-1":{UA:"WEB-кабінет",EN:"Dashboard"},"products-benefit-description":{UA:"на встановлення",EN:"on install"},"products-benefit-title":{UA:'20<span class="benefit__title--span">хв</span>',EN:'20<span class="benefit__title--span">mins</span>'},"about-description":{UA:"непотрібних відвідувань",EN:"unnecessary visits"},"about-title":{UA:"Про нас",EN:"About Us"},"about-text-p1":{UA:"&emsp; ProstoPay був створений в Україні. Простота керує нашим баченням. Ми робимо складні ІТ-рішення простими у використанні для партнерів і клієнтів. Наша місія допомагати кавовим і вендинговим компаніям вести свій бізнес на новому рівні операційної ефективності та продуктивності, а також насолоджуватися зростанням доходу завдяки сучасним платіжним рішенням.",EN:"&emsp; ProstoPay was born in Ukraine. “Prosto” means “simple” in Ukrainian. Simplicity is driving our vision - to remove the barriers in coffee and snack consumption. We make complicated IT solutions easy to use for partners and customers. We see our mission in helping coffee and vending companies to run their business at the new level of operational efficiency and productivity and to enjoy higher sales driven by modern payment solutions."},"about-text-p2":{UA:"&emsp; Ми почали в 2016 році з простим рішенням для RFID-карт на автоматах з продажу снеків. Це був лише початок, далі ми продовжили зростати, створюючи нові IoT-пристрої та програмні продукти. Сьогодні наші продукти підтримують телеметрію та безготівкові платежі для кави, снеків, автоматів з розливу води, їжї, іграшок, автомийок та на інших торгових апаратах.",EN:"&emsp; We started in 2016 as an ordinary RFID card solution for <strong>snack vending machines</strong>. It was just the beginning and we continued to develop our product. We’ve been growing, creating new IoT devices and software. In-house hardware & software teams provide variety of flexible client-oriented solutions. Today our products support telemetry and cashless payments for <strong>coffee, snack, water, food,  toys, car washes and other vending machines</strong>."},"about-text-p3":{UA:"&emsp; Не варто забувати і про нашу підтримку: ProstoPay не зміг би розвиватися без швидкої та якісної підтримки клієнтів. Ми пишаємося тим, що завжди готові прийти на допомогу і вирішити будь-яку проблему для наших партнерів і клієнтів. Обираючи ProstoPay, ви отримуєте сучасний продукт, швидку та якісну техпідтримку, конфіденційність даних та надійні і дружні відносини.",EN:"&emsp; We should not forget about our customer service team: ProstoPay couldn’t evolve without fast and quality customer support. We are proud to be always ready to assist and resolve any problem for our partners and customers."},"footer-text":{UA:"ProstoPay — ваш постачальник незамінних рішень для кави та вендінгу в сучасному цифровому світі.",EN:"ProstoPay is your provider of must-have solutions for coffee and vending in modern digital world."},"footer-copyright":{UA:'© 2016 - 2022 ТОВ "Простопей". Всі права захищено.',EN:"Copyright © 2016 - 2022 Prostopay LLC. All rights reserved."},"contacts-address":{UA:"вул. Оболонська 7, м. Київ",EN:"7 Obolonska St, Kyiv, Ukraine"},"about-us":{UA:"Про нас",EN:"About us"},services:{UA:"Сервіси",EN:"Services"},products:{UA:"Продукти",EN:"Products"},contacts:{UA:"Контакти",EN:"Contacts"},"cashless-title":{UA:"Безготівкова оплата",EN:"Cashless"},"cashless-p1":{UA:"Згідно  дослідженнями ринку за останні роки використання готівки різко скоротилось у всьому світі, в той час як використання карток все більше зміщується в сторону мобільних/цифрових гаманців. І ця тенденція продовжується, тому давайте спільно долучимось до платіжної революції.",EN:"According to market researches cash circulation dropped sharplyall around the world in the recent years while card usage is increasingly shifting to mobile/digital wallets. And this trend continues, so let’s join the payment revolution together."},"cashless-p2":{UA:"ProstoPay фокусується на найбільш зручних способах мобільних оплат і пропонує 2 платіжні методи:",EN:"ProstoPay focuses on the most comfortable moblie wallet solutions and offers  2 non-cards payment methods:"},"cashless-p3":{UA:"<strong>WEB-оплата.</strong> Сплачуйте за допомогою QR-коду або NFC-мітки на апараті. Вам не потрібно завантажувати жодного додатку, щоб придбати горнятко кави. Все у браузері смартфона - розрахунок в один клік за допомогою Apple Pay, Google Pay або інших популярних локальних гаманців.",EN:"<strong>WEB-payment.</strong> Pay by QR-code or NFC tag at the machine. You don’t need to download any app just to purchase a cup of coffee. It is in the smartphone browser - one-click checkout using Apple Pay, Google Pay or other popular local wallets."},"cashless-p4":{UA:"<strong>Додаток для оплат.</strong> Ви постійний клієнт автоматів? Вітаємо, ви любите смачні продукти та цінуєте свій час! І ми вас підтримуємо: просто завантажте додаток ProstoPay та отримайте ще простіший спосіб оплати з додатковими можливостями. Бонуси вже на підході!",EN:"<strong>App payment.</strong> Are you a regular customer of the vending machines? Congrats, you like tasty products and appreciate your time! And we support you there: just download the ProstoPay app and receive even easier payment method with additional features. Bonuses are coming!"},"cashless-p5":{UA:"Інші способи безготівкової оплати:",EN:"Other cashless solutions include:"},"cashless-p6":{UA:"<strong>RFID-картки (картки-перепустки, дисконтні картки тощо).</strong> Рішення для всіх організацій з картковою системою доступу, наприклад, офісів, заводів, складів тощо. Роботодавець може забезпечити співробітників повністю або частково оплаченими снеками та кавою, використовуючи гнучкі тарифні плани ProstoPay. Звісно, працівники також можуть поповнювати картку самостійно.",EN:"<strong>RFID (Employee identification and other) cards.</strong> Solution for all organizations with card access system, e.g. offices, factories, warehouses etc. Employer could provide employees with fully paid or semi-paid snacks and coffee using ProstoPay’s flexible tariff plans. Of course, employees can also top-up the card by themselves."},"cashless-p7":{UA:"<strong>QR-чеки.</strong> Бажаєте контролювати продажі ваших настільних кавомашин з вільним доступом клієнтів в рітейлі? Ми допоможемо це зробити. Клієнт робить замовлення на касі та отримує чек з надрукованим QR-кодом. Після сканування QR-чеку на кавомашині клієнт насолоджується напоєм. Таке рішення унеможливлює помилки покупця та запобігає шахрайству.",EN:"<strong>QR-receipt.</strong> Do you want to control sales of your tabletop coffee machines with the free customer access in retail? We can do it. Customers place an order at the cash desk and receive receipt with printed QR-code. They enjoy drink after scanning QR-receipt on the machine. This solution makes customer mistakes impossible and prevents fraud."},"monitoring-p1":{UA:"Завдяки онлайн моніторингу ви завжди можете слідкувати за вашим парком апаратів, отримуючи дані за допомогою WEB-кабінету та через сервісний застосунок ProstoService:",EN:"Stay always in touch with your machines getting info with dashboard and through the service app with push notifications, including but not limiting to:"},"monitoring-li1":{UA:"Помилки апаратів",EN:"Machine errors"},"monitoring-li2":{UA:"Помилки платіжних систем",EN:"Payment system errors"},"monitoring-li3":{UA:"Наявність живлення",EN:"Power supply"},"monitoring-li4":{UA:"Температура",EN:"Temperature"},"monitoring-li5":{UA:"Статус дверей",EN:"Door Status"},"monitoring-li6":{UA:"Контроль залишків інгредієнтів та продуктів",EN:"Stocks Control"},"monitoring-li7":{UA:"Дані з платіжних протоколів",EN:"Data from Payment Protocols"},"monitoring-li8":{UA:"Дані <strong>EVA-DTS</strong> з інформацією про продажі, оплати, стан обладнання, обслуговування тощо",EN:"<strong>EVA-DTS</strong> files with plenty of sales, payments, system, service and other info"},"monitoring-title":{UA:"Онлайн моніторинг",EN:"Online Monitoring"},"feedback-title":{UA:"Відгуки клієнтів",EN:"Feedback from your Customer"},"feedback-text":{UA:"Незалежно від того, в якій галузі ви працюєте, клієнти є найважливішою частиною бізнесу. Комунікація з клієнтами ще важливіша в сфері самообслуговування, наприклад, в кавових та торгових апаратах. ProstoPay надає зручний сервіс для отримання зворотного зв'язку від клієнтів, використовуючи лише смартфон. За допомогою функції відгуків ви будете знати, що відбувається, що зроблено добре, а що потрібно покращити, і зможете поступово вдосконалювати свій сервіс.",EN:"Regardless of what industry you're in, your customers are the most important part of your business. Communication with them is even more important in the self-served industry like coffee and vending machines business. ProstoPay provides direct service to get feedback from customers by letting them leave their comments using only a smartphone. With feedback feature you will know what's going on, what is well done and what are the areas to improve, and you can gradually make your service better."},"analytics-title":{UA:"Аналітика",EN:"Analytics"},"analytics-li1":{UA:"Динаміка продажів у графіках та таблицях",EN:" Sales dynamics graphs and tables"},"analytics-li2":{UA:"Розбивка по товарах, часу споживання тощо",EN:"Breakdown by goods, consumption time etc."},"analytics-li3":{UA:"Контроль залишків (інформація в реальному часі про кількість інгредієнтів та продуктів в апараті)",EN:"Supply control (real time data about the stock of ingredients and goods in the machines)"},"analytics-li4":{UA:"Аналітика простоїв та втрат",EN:"Downtime and loss analysis"},"analytics-li5":{UA:"Порівняння продажів по апаратам/клієнтам",EN:"Machines/customers sales comparison"},"analytics-li6":{UA:"Перевірка цін, щоб уникати помилок персоналу",EN:"Price checks  to avoid staff mistakes"},"analytics-li7":{UA:"Дані про джерела оплати (готівка та різні безготівкові способи)",EN:"Payment sources data (cash and diffrent cashless options)"},"analytics-li8":{UA:"Інтерфейси API для інтеграції з обліковими системами",EN:"Accounting system integration APIs"},"analytics-li9":{UA:"Інші дані для ефективного управління бізнесом",EN:"And other data to manage your business effectively"},"remote-title":{UA:"Дистанційне керування",EN:"Remote Control"},"remote-li1":{UA:"Віддаленне управління налаштуваннями (для деяких брендів)",EN:"Machine Settings Remote Management (for some Brands)"},"remote-li2":{UA:"Перезавантаження",EN:"Machine Remote Reset"},"remote-li3":{UA:"Віддалений продаж товару",EN:"Remote Vends"},"remote-li4":{UA:"Гнучке керування цінами",EN:"Flexible pricing management"},"remote-li5":{UA:"Скидання помилок",EN:"Machine Errors Reset"},"fiskal-title":{UA:"Фіскалізація",EN:"Fiscal Services"},"fiskal-text":{UA:"            Кавовий та вендинговий бізнес працює на створення послуг та продуктів для задоволення потреб клієнтів. Для керівництва важливіше приділяти увагу розвитку бізнеса, а не юридичним складнощам. ProstoPay може допомогти кавовому та вендинговому бізнесу вести справи відповідно до фіскальних вимог та надсилати дані до податкових органів у разі необхідності. В Україні з 2022 року вступили в дію  зміни до Закону про реєстрацію розрахункових операцій (РРО). Щоб допомогти нашим клієнтам, ми реалізували сервіс Програмного РРО (фіскалізації) для вендингових та торгових апаратів.",EN:"The coffee and vending busineses work for creating services and delivering products to meet customer needs. Management prefers to pay attention to business, not to the legal complications. ProstoPay is able to assist coffee and vending businesses to run the service in compliance with the local fiscal requirments and to send data to the tax authorities if needed. "},"services-button":{UA:"Зв'язатися",EN:"Get in touch with us"},"products-dashboard":{UA:"WEB-кабінет",EN:"Dashboard"},"dashboard-text":{UA:"Основне місце для моніторингу бізнес-потоків, відповідних  даних та підтримки операційної ефективності. Основні показники розміщені на WEB-сторінці: аналітичні графіки, інформація про продажі, моніторинг обладнання, залишків товарів та інгредієнтів, коштів тощо. Рівень доступу легко змінюється в залежності від ролі та зони відповідальності вашого співробітника.",EN:"The main gateway to monitor the business flows and related data and to sustain operational efficiency.  Key indicators are at the WEB-page: analytical graphs, information about sales, machine monitoring, goods and ingredients stock, money etc. Access level is easily managed depending on your empolyee’s role and area of responsibility."},"seriesA-title":{UA:"Серія A",EN:"Series A"},"seriesA-text":{UA:" Це наш перший пристрій. Пристрій Серії A  забезпечує:",EN:"It is our very first device. Series A device provides you with:"},"seriesA-li1":{UA:"Безготівкові платіжні методи",EN:"Cashless payment methods"},"seriesA-li2":{UA:"Розширена телеметрія з додатковими датчиками",EN:"Extended telemetry with additional sensors"},"seriesA-li3":{UA:"Деякі функції віддаленого контролю",EN:"Some Remote Control Features"},"button-order":{UA:"Замовити",EN:"Order"},"prosto-service-text":{UA:" Потужний додаток для внутрішнього використання вашим персоналом. Ви отримуєте швидкий доступ до ключових показників бізнесу. ProstoService допомагає операторам, мерчендайзерам та технікам виконувати щоденні операції. У додатку ви можете контролювати обладнання, бачити основні тенденції, обліковувати  обслуговування апаратів, отримувати сповіщення про помилки обладнання. Найважливіші операційні функції просто у вашому смартфоні.",EN:"Power application for the internal usage by your staff. Management gets quick access to key indicators about business activities. ProstoService helps merchandisers and technicians to perform day-to-day operations. In the app you can monitor machines, observe key trends, make records about machine servicing, get notifications about machine errors. The most important operational features are just in your smartphone."},"seriesL-title":{UA:"Серія L",EN:"Series L"},"seriesL-text":{UA:"Маленький, але потужний. Серія L забезпечує:",EN:"Small but powerful. Series L device includes:"},"seriesL-li1":{UA:"Телеметрія",EN:"Telemetry"},"seriesL-li2":{UA:"Віддалене перезавантаження",EN:"Machine Remote Reset"},"seriesL-li3":{UA:"Скидання помилок",EN:"Machine Errors Reset"},"seriesL-li4":{UA:"Відслідковування місцезнаходження",EN:"Location tracking by geocoordinates"},"button-toTry":{UA:"Спробувати",EN:"To try"},"app-and-web-text":{UA:" WEB-оплата - найцікавіший спосіб безготівкової оплати в сучасному світі. Клієнти просто сканують QR-код або торкаються NFC-мітки смартфоном і здійснюють оплату в один клік в браузері. Крім того, ми створюємо інтеграцію з деякими популярними платіжними додатками на локальних ринках, що дозволяє клієнтам платити в один клік за допомогою цих додатків. Також ми можемо розробляти додатки для ваших потреб на основі нашої технології.",EN:"WEB-payment is the most exciting way to pay cashless in the modern world. Customers just scan QR-code or tap NFC tag by smartphone and pay in one click in the browser. Alternatively, we build the integration with some popular payment apps on local markets allowing customers to pay in one-click using these apps. Please take in mind, we can develop any app based on our technology."},"form-title":{UA:"Почнемо?",EN:"Let’s start"},"form-description":{UA:"Заповніть форму і ми зв’яжемося з вами найближчим часом",EN:"Just fill out the form below and we will contact you shortly"},"form-interest":{UA:"Чим ми вас зацікавили?",EN:"How can we assist you?"},"form-telemetry":{UA:"Телеметрія",EN:"Telemetry"},"form-cashless":{UA:"Безготівкова оплата",EN:"Cashless"},"form-remote":{UA:"Віддалений контроль",EN:"Remote Control"},"form-fiscal":{UA:"Фіскалізація",EN:"Fiscal Services"},"form-feedback":{UA:"Відгуки клієнтів",EN:"Customer Feedback"},"form-button":{UA:"Відправити",EN:"Send"},"try-it-description ":{UA:"Клієнт взаємодіє зі стікером, який розміщений на апараті",EN:"Customer interacts with a sticker placed at the coffee/vending machine "},"try-it-press":{UA:"НАТИСНИ",EN:"Press"},"try-it-video":{UA:"ВІДЕО",EN:"Video"},"try-it-close-button":{UA:"Закрити",EN:"Close"},"our-partners":{UA:"Наші партнери",EN:"Our partners"},address:{UA:"Адреса",EN:"Address"},phone:{UA:"Телефон",EN:"Phone"}};exports.translationArr=e;
},{}],"KIzB":[function(require,module,exports) {
"use strict";var e=require("./translate");function t(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=n(e))){var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,c=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){s=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(s)throw i}}}}function n(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var r=navigator.language||navigator.userLanguage,i=["UA","ua","UK","uk","BY","by","BE","be","RU","ru"],c=i.some(function(e){return r.includes(e)}),s=window.localStorage.getItem("lang");s||(c?(window.localStorage.setItem("lang","UA"),d()):(window.localStorage.setItem("lang","EN"),d()));var a=document.querySelectorAll(".select-lang");function l(e){var t=e.innerHTML;window.localStorage.setItem("lang",t),s=window.localStorage.getItem("lang"),u(),_(),f(),m(),S(),U(),C()}function d(){s=window.localStorage.getItem("lang"),u(),_(),f(),m(),S(),U(),C()}function u(){document.querySelectorAll(".current-lang").forEach(function(e){e.innerHTML=s});var t=function(t){var n=document.querySelectorAll("._lang__"+t);n&&n.forEach(function(n){void 0!==e.translationArr[t][s]&&(n.innerHTML=e.translationArr[t][s])})};for(var n in e.translationArr)t(n)}function m(){var e=document.getElementsByClassName("touch-form__data-field"),n=document.getElementsByClassName("touch-form__textarea");if("EN"===s){var o,r=t(e);try{for(r.s();!(o=r.n()).done;){var i=o.value;"Ім'я"===i.placeholder&&(i.placeholder="Name"),"Країна"===i.placeholder&&(i.placeholder="Country"),"Телефон/Email"===i.placeholder&&(i.placeholder="Phone/Email"),"Кількість апаратів"===i.placeholder&&(i.placeholder="Quantity of machines")}}catch(_){r.e(_)}finally{r.f()}}if("UA"===s){var c,a=t(e);try{for(a.s();!(c=a.n()).done;){var l=c.value;"Name"===l.placeholder&&(l.placeholder="Ім'я"),"Country"===l.placeholder&&(l.placeholder="Країна"),"Phone/Email"===l.placeholder&&(l.placeholder="Телефон/Email"),"Number of machines"===l.placeholder&&(l.placeholder="Кількість апаратів")}}catch(_){a.e(_)}finally{a.f()}}if("EN"===s){var d,u=t(n);try{for(u.s();!(d=u.n()).done;){d.value.placeholder="Are you interested in something else?"}}catch(_){u.e(_)}finally{u.f()}}if("UA"===s){var m,f=t(n);try{for(f.s();!(m=f.n()).done;){m.value.placeholder="Можливо вас цікавить ще щось?"}}catch(_){f.e(_)}finally{f.f()}}}function f(){document.querySelectorAll(".services-section__text-open-btn").forEach(function(e){"EN"===s?("Більше"===e.innerHTML&&(e.innerHTML="See more"),"Менше"===e.innerHTML&&(e.innerHTML="Less")):("See more"===e.innerHTML&&(e.innerHTML="Більше"),"Less"===e.innerHTML&&(e.innerHTML="Менше"))})}function _(){document.querySelectorAll("._lang__img").forEach(function(e){e.classList.remove("_lang__img--visible"),window.innerWidth>=768?e.classList.contains(s)&&e.classList.contains("wide-screen")&&e.classList.add("_lang__img--visible"):e.classList.contains(s)&&e.classList.contains("mobile")&&e.classList.add("_lang__img--visible")}),document.querySelectorAll(".main-block__img-mobile").forEach(function(e){e.classList.remove("main-block__img-mobile--visible"),e.classList.contains(s)&&e.classList.add("main-block__img-mobile--visible")})}a.forEach(function(e){var n,o=t(e.children);try{var r=function(){var e=n.value;e.addEventListener("click",function(){return l(e)})};for(o.s();!(n=o.n()).done;)r()}catch(i){o.e(i)}finally{o.f()}}),u(),m(),f(),_(),window.addEventListener("resize",_),window.addEventListener("resize",f);var v=document.getElementById("dropdownOpen"),y=document.getElementById("dropdownMenu");v.addEventListener("click",function(){y.classList.contains("dropdown__animation")?y.classList.remove("dropdown__animation"):y.classList.add("dropdown__animation"),window.addEventListener("scroll",function(){y.classList.remove("dropdown__animation")})});var h=document.querySelectorAll(".button__form"),L=document.querySelectorAll(".touch-form__close-cross");function g(){document.querySelectorAll(".touch-form").forEach(function(e){e.classList.contains("touch-form--active")&&e.classList.toggle("touch-form--active")})}function b(e){var t,n,o,r=document.querySelectorAll(".touch-form"),i=(n=e,o=n.getBoundingClientRect(),{left:o.left+window.scrollX,top:o.top+window.scrollY}).top;e.className.trim().split(" ").map(function(e){e.includes("button__form--")&&(t=e.slice(-1))}),r.forEach(function(e){e.classList.contains("touch-form--".concat(t))&&(e.classList.toggle("touch-form--active"),"2"===t&&(e.style.top="".concat(i-50,"px")))})}h.forEach(function(e){return e.addEventListener("click",function(){return b(e)})}),L.forEach(function(e){return e.addEventListener("click",g)});var E=document.querySelectorAll(".button__try-it"),p=document.querySelector(".try-it__close-cross");function w(){document.getElementById("try-it").classList.toggle("try-it--active")}function S(){document.querySelectorAll(".try-it__QR-image").forEach(function(e){e.classList.add("try-it__QR-image--close"),e.classList.contains(s)&&e.classList.remove("try-it__QR-image--close")})}E.forEach(function(e){return e.addEventListener("click",w)}),p&&p.addEventListener("click",w),S();var A=document.querySelectorAll(".try-it__QR-image"),k=document.querySelector(".try-it__demo-video"),q=document.querySelector(".try-it__video-close-button");A.forEach(function(e){e&&e.addEventListener("click",function(){e.classList.add("try-it__QR-image--close"),k.classList.add("try-it__demo-video--show"),q.classList.add("try-it__video-close-button--show")}),q&&q.addEventListener("click",function(){e.classList.contains(s)&&e.classList.remove("try-it__QR-image--close"),k.classList.remove("try-it__demo-video--show");var t=k.src;k.src=t,q.classList.remove("try-it__video-close-button--show")})});var x=document.querySelector(".try-it__close-cross"),M=document.querySelectorAll(".try-it__video-item");x&&x.addEventListener("click",function(){M.forEach(function(e){var t=e.src;e.src=t})});var N=document.querySelectorAll(".services-section__text-open-btn");N&&N.forEach(function(e){e.addEventListener("click",function(){var t=e.closest(".services-section__mobile").querySelector(".services-section__mobile-text");t.classList.contains("services-section__mobile-text--close")?(t.classList.remove("services-section__mobile-text--close"),t.classList.add("services-section__mobile-text--open"),e.innerHTML="UA"===s?"Менше":"Less"):(t.classList.remove("services-section__mobile-text--open"),t.classList.add("services-section__mobile-text--close"),e.innerHTML="UA"===s?"Більше":"See more")})});var T=document.querySelectorAll(".services-section__mobile-img");T.forEach(function(e){e.addEventListener("click",function(){var t=e.closest(".services-section__mobile").querySelector(".services-section__mobile-text");t.classList.contains("services-section__mobile-text--close")?(t.classList.remove("services-section__mobile-text--close"),t.classList.add("services-section__mobile-text--open")):(t.classList.remove("services-section__mobile-text--open"),t.classList.add("services-section__mobile-text--close"))})});var H=document.querySelector(".pay-service__button"),I=document.querySelector(".partners-layout__close-cross"),B=document.getElementById("partners-layout");function U(){document.querySelectorAll(".touch-form__form").forEach(function(e){e.action="EN"===s?"https://formsubmit.co/9ac3bb0099f26da215a604d9ba0c10e9":"https://formsubmit.co/51caef3694f7691cae1d35f0ffc5e349"})}function C(){var e=document.querySelector(".diagram"),t=document.querySelector(".diagram__cashless-link"),n=document.querySelector(".diagram__feedback-link"),o=document.querySelector(".diagram__fiscal-link"),r=document.querySelector(".diagram__remote-link");e&&("EN"===s?(t.classList.add("diagram__cashless-link--en"),n.classList.add("diagram__feedback-link--en"),o.classList.add("diagram__fiscal-link--en"),r.classList.add("diagram__remote-link--en")):(t.classList.remove("diagram__cashless-link--en"),n.classList.remove("diagram__feedback-link--en"),o.classList.remove("diagram__fiscal-link--en"),r.classList.remove("diagram__remote-link--en")))}function R(){var e=document.getElementsByClassName("header-mobile")[0],t=document.getElementsByClassName("header-mobile__content")[0];window.innerWidth<430?(document.body.style.zoom="80%",e.style.height="120vh",t.style.zoom="130%"):(document.body.style.zoom="100%",e.style.height="100vh",t.style.zoom="100%")}H&&H.addEventListener("click",function(){B.classList.add("partners-layout--show")}),H&&I.addEventListener("click",function(){B.classList.remove("partners-layout--show")}),U(),C(),R(),window.addEventListener("resize",R);
},{"./translate":"IkY8"}]},{},["KIzB"], null)
//# sourceMappingURL=main.8a0a8c92.js.map