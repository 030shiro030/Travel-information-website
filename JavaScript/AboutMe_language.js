// 翻譯的字集
const translations = {
    zh:{ 
        //nav
        main : "首頁",
        header : "旅遊資訊",
        aboutMe : "關於我",
        languages : "語言",
        //nav dropdown
        allLocation : "所有地點",
        sevenContinents : "七大洲",
        asia : "亞洲",
        hongkong : "香港",
        japan : "日本",
        southKorea : "韓國",
        northAmerica : "北美洲",
        america : "美國",
        europe : "歐洲",
        iceland : "冰島",

        //nav side
        navside_main : "首頁",
        navside_hongKong : "香港",
        navside_japan : "日本",
        navside_southKorea : "韓國",
        navside_america : "美國",
        navside_iceland : "冰島",
        navside_aboutMe : "關於我",
        //About Me Content
        aboutMeH1 : "你好！我係莫智謙",
        aboutMeH3 : "這個網站係我整的，目前正在找工作",
        aboutMeH2 : "有興趣可以聯繫我。",
        aboutMeH4 : "電郵: mokchihim9666@gmail.com"
    },
    eng:{
        //nav
        main : "Home",
        header : "Travel Information",
        aboutMe : "About Me",
        languages : "Language",
        //nav dropdown
        allLocation : "All locations",
        sevenContinents : "Seven Continents",
        asia : "Asia",
        hongkong : "Hong Kong",
        japan : "Japan",
        southKorea : "South Korea",
        northAmerica : "North America",
        america : "America",
        europe : "Europe",
        iceland : "Iceland",
        //nav side
        navside_main : "Home",
        navside_hongKong : "Hong Kong",
        navside_japan : "Japan",
        navside_southKorea : "South Korea",
        navside_america : "North America",
        navside_iceland : "Iceland",
        navside_aboutMe : "About Me",
        //About Me Content
        aboutMeH1: "Hi! I am Mok Chi Him",
        aboutMeH3: "I built this website and I am currently looking for a job.",
        aboutMeH2: "Please feel free to contact me if you are interested.",
        aboutMeH4: "Gmail: mokchihim9666@gmail.com"
    },
    jp:{
        //nav
        main : "ホムペ",
        header : "旅行情報",
        aboutMe : "自己紹介",
        languages : "言語",
        
        //nav dropdown
        allLocation : "すべての場所",
        sevenContinents : "世界七大陸",
        asia : "アジア",
        hongkong : "香港",
        japan : "日本",
        southKorea : "韓国",
        northAmerica : "北米",
        america : "アメリカ",
        europe : "ヨーロッパ",
        iceland : "アイスランド",

        //nav side
        navside_main : "ホムペ",
        navside_hongKong : "香港",
        navside_japan : "日本",
        navside_southKorea : "韓国",
        navside_america : "北米",
        navside_iceland : "アイスランド",
        navside_aboutMe : "自己紹介",

        //About Me Content
        aboutMeH1: "こんにちは！莫智謙（バク・チヒム）です",
        aboutMeH3: "このサイトは私が制作しました。現在、求職中です。",
        aboutMeH2: "ご興味があれば、ぜひご連絡ください。",
        aboutMeH4: "メール: mokchihim9666@gmail.com"
    }
}

// 找網站要轉字的ID
//nav
let main = document.getElementById("nav_main")
let header = document.getElementById("header");
let aboutMe = document.getElementById("nav_aboutMe");
let languages = document.getElementById("language");

//nav dropdown
let allLocation = document.getElementById("all_location");
let sevenContinents = document.getElementById("sevenContinents");
let asia = document.getElementById("asia");
let hongkong = document.getElementById("hongKong");
let japan = document.getElementById("japan");
let southKorea = document.getElementById("southKorea");
let northAmerica = document.getElementById("northAmerica");
let america = document.getElementById("america");
let europe = document.getElementById("europe");
let iceland = document.getElementById("iceland");

//nav side
let navside_main = document.getElementById("navside_main");
let navside_hongKong = document.getElementById("navside_hongKong");
let navside_japan = document.getElementById("navside_japan");
let navside_southKorea = document.getElementById("navside_southKorea");
let navside_america = document.getElementById("navside_america");
let navside_iceland = document.getElementById("navside_iceland");
let navside_aboutMe = document.getElementById("navside_aboutMe");

let languagebtn = document.getElementById("languageBtn");
let asiabtn = document.getElementById("asiaBtn");
let northAmericabtn = document.getElementById("northAmericaBtn");
let europebtn = document.getElementById("europeBtn");

//About Me Content
let aboutMeH1 = document.getElementById("aboutMeH1");
let aboutMeH3 = document.getElementById("aboutMeH3");
let aboutMeH2 = document.getElementById("aboutMeH2");
let aboutMeH4 = document.getElementById("aboutMeH4");

function setLanguage (language) {

    //Set選擇的語言
    localStorage.setItem("selectedLanguage", language);

    if(language == "zh"){
        // console.log(language);

        // 中文
        //nav
        main.innerText = translations.zh.main;
        header.innerText = translations.zh.header;
        aboutMe.innerText = translations.zh.aboutMe;
        languages.innerText = translations.zh.languages;
        //nav dropdown
        allLocation.innerText = translations.zh.allLocation;
        sevenContinents.innerText = translations.zh.sevenContinents;
        asia.innerText = translations.zh.asia;
        hongkong.innerText = translations.zh.hongkong;
        japan.innerText = translations.zh.japan;
        southKorea.innerText = translations.zh.southKorea;
        northAmerica.innerText = translations.zh.northAmerica;
        america.innerText = translations.zh.america;
        europe.innerText = translations.zh.europe;
        iceland.innerText = translations.zh.iceland;
        //nav side
        navside_main.innerText = translations.zh.navside_main;
        navside_hongKong.innerText = translations.zh.navside_hongKong;
        navside_japan.innerText = translations.zh.navside_japan;
        navside_southKorea.innerText = translations.zh.navside_southKorea;
        navside_america.innerText = translations.zh.navside_america;
        navside_iceland.innerText = translations.zh.navside_iceland;
        navside_aboutMe.innerText = translations.zh.navside_aboutMe;

        languagebtn.innerText = translations.zh.languages;
        asiabtn.innerText = translations.zh.asia;
        northAmericabtn.innerText = translations.zh.northAmerica;
        europebtn.innerText = translations.zh.europe;
        //About Me Content
        aboutMeH1.innerText = translations.zh.aboutMeH1;
        aboutMeH3.innerText = translations.zh.aboutMeH3;
        aboutMeH2.innerText = translations.zh.aboutMeH2;
        aboutMeH4.innerText = translations.zh.aboutMeH4;
    }else if(language == "eng"){
        // console.log(language);

        // 英文
        //nav
        main.innerText = translations.eng.main;
        header.innerText = translations.eng.header;
        aboutMe.innerText = translations.eng.aboutMe;
        languages.innerText = translations.eng.languages;
        //nav dropdown
        allLocation.innerText = translations.eng.allLocation;
        sevenContinents.innerText = translations.eng.sevenContinents;
        asia.innerText = translations.eng.asia;
        hongkong.innerText = translations.eng.hongkong;
        japan.innerText = translations.eng.japan;
        southKorea.innerText = translations.eng.southKorea;
        northAmerica.innerText = translations.eng.northAmerica;
        america.innerText = translations.eng.america;
        europe.innerText = translations.eng.europe;
        iceland.innerText = translations.eng.iceland;
        //nav side
        navside_main.innerText = translations.eng.navside_main;
        navside_hongKong.innerText = translations.eng.navside_hongKong;
        navside_japan.innerText = translations.eng.navside_japan;
        navside_southKorea.innerText = translations.eng.navside_southKorea;
        navside_america.innerText = translations.eng.navside_america;
        navside_iceland.innerText = translations.eng.navside_iceland;
        navside_aboutMe.innerText = translations.eng.navside_aboutMe;

        languagebtn.innerText = translations.eng.languages;
        asiabtn.innerText = translations.eng.asia;
        northAmericabtn.innerText = translations.eng.northAmerica;
        europebtn.innerText = translations.eng.europe;
        //About Me Content
        aboutMeH1.innerText = translations.eng.aboutMeH1;
        aboutMeH3.innerText = translations.eng.aboutMeH3;
        aboutMeH2.innerText = translations.eng.aboutMeH2;
        aboutMeH4.innerText = translations.eng.aboutMeH4;
    }else if(language == "jp"){
        // console.log(language);

        // 日文
        //nav
        main.innerText = translations.jp.main;
        header.innerText = translations.jp.header;
        aboutMe.innerText = translations.jp.aboutMe;
        languages.innerText = translations.jp.languages;
        //nav dropdown
        allLocation.innerText = translations.jp.allLocation;
        sevenContinents.innerText = translations.jp.sevenContinents;
        asia.innerText = translations.jp.asia;
        hongkong.innerText = translations.jp.hongkong;
        japan.innerText = translations.jp.japan;
        southKorea.innerText = translations.jp.southKorea;
        northAmerica.innerText = translations.jp.northAmerica;
        america.innerText = translations.jp.america;
        europe.innerText = translations.jp.europe;
        iceland.innerText = translations.jp.iceland;
        //nav side
        navside_main.innerText = translations.jp.navside_main;
        navside_hongKong.innerText = translations.jp.navside_hongKong;
        navside_japan.innerText = translations.jp.navside_japan;
        navside_southKorea.innerText = translations.jp.navside_southKorea;
        navside_america.innerText = translations.jp.navside_america;
        navside_iceland.innerText = translations.jp.navside_iceland;
        navside_aboutMe.innerText = translations.jp.navside_aboutMe;

        languagebtn.innerText = translations.jp.languages;
        asiabtn.innerText = translations.jp.asia;
        northAmericabtn.innerText = translations.jp.northAmerica;
        europebtn.innerText = translations.jp.europe;
        //About Me Content
        aboutMeH1.innerText = translations.jp.aboutMeH1;
        aboutMeH3.innerText = translations.jp.aboutMeH3;
        aboutMeH2.innerText = translations.jp.aboutMeH2;
        aboutMeH4.innerText = translations.jp.aboutMeH4;
    }
}

// load選擇的語言
let savedLanguage = localStorage.getItem("selectedLanguage");
window.onload = setLanguage (savedLanguage);