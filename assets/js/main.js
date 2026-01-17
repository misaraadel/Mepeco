$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $(".scroll-top-button").fadeIn();
    } else {
      $(".scroll-top-button").fadeOut();
    }
  });

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
  });

  $(".scroll-top-button").on("click", function () {
    $("html , body").animate(
      {
        scrollTop: 0,
      },
      100
    );
  });

  $(".hamburger").click(function () {
    $(".hamburger").toggleClass("active");
    $(".nav-contain").toggleClass("active-nav");
    $("body").toggleClass("overflowNone");
  });

  var swiper = new Swiper(".swiper-header", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".swiper-speakers", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 1.2,
        spaceBetween: 18,
      },
      640: {
        slidesPerView: 1.2,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 1.2,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 5.3,
        spaceBetween: 18,
      },
    },
  });

  var swiper = new Swiper(".swiper-gallery", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 2.2,
        spaceBetween: 18,
      },
      640: {
        slidesPerView: 2.2,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 2.2,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 6.2,
        spaceBetween: 18,
      },
    },
  });

  var swiper = new Swiper(".swiper-review", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 18,
      },
    },
  });

  var swiper = new Swiper(".swiper-products", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 18,
      },
    },
  });

  var swiper = new Swiper(".gallery-thumbs", {
    slidesPerView: 4,
    spaceBetween: 7,
    freeMode: true,
    watchSlidesProgress: true,
    centerSlides: true,
    loop: true,
  });
  var swiper2 = new Swiper(".gallery-swiper", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  $("[data-fancybox]").fancybox({
    selector: '[data-fancybox="images"]',
    loop: true,
  });

  AOS.init();

  // Scroll line animation
  function initScrollLine() {
    const path = document.querySelector("#scroll-line path");
    if (path) {
      const pathLength = path.getTotalLength();
      path.style.strokeDasharray = pathLength;
      path.style.strokeDashoffset = pathLength;
      path.style.stroke = "#E7EDED";
      path.style.strokeWidth = "2";

      window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight;
        const drawLength = pathLength * scrollPercent;
        path.style.strokeDashoffset = pathLength - drawLength;
      });
    }
  }

  // Initialize scroll line when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollLine);
  } else {
    initScrollLine();
  }
});

const countries = [
  { name: "السعودية", code: "+966", flag: "https://flagcdn.com/sa.svg" },
  { name: "مصر", code: "+20", flag: "https://flagcdn.com/eg.svg" },
  { name: "فلسطين", code: "+970", flag: "https://flagcdn.com/ps.svg" },
  { name: "الأردن", code: "+962", flag: "https://flagcdn.com/jo.svg" },
  { name: "الكويت", code: "+965", flag: "https://flagcdn.com/kw.svg" },
  { name: "الإمارات", code: "+971", flag: "https://flagcdn.com/ae.svg" },
  { name: "قطر", code: "+974", flag: "https://flagcdn.com/qa.svg" },
  { name: "البحرين", code: "+973", flag: "https://flagcdn.com/bh.svg" },
  { name: "عمان", code: "+968", flag: "https://flagcdn.com/om.svg" },
  { name: "اليمن", code: "+967", flag: "https://flagcdn.com/ye.svg" },
  { name: "المغرب", code: "+212", flag: "https://flagcdn.com/ma.svg" },
  { name: "تونس", code: "+216", flag: "https://flagcdn.com/tn.svg" },
  { name: "الجزائر", code: "+213", flag: "https://flagcdn.com/dz.svg" },
  { name: "السودان", code: "+249", flag: "https://flagcdn.com/sd.svg" },
  { name: "العراق", code: "+964", flag: "https://flagcdn.com/iq.svg" },
  { name: "لبنان", code: "+961", flag: "https://flagcdn.com/lb.svg" },
  { name: "سوريا", code: "+963", flag: "https://flagcdn.com/sy.svg" },
  { name: "تركيا", code: "+90", flag: "https://flagcdn.com/tr.svg" },
];

const selectedBtn = document.getElementById("selected-country");
const countryDropdown = document.getElementById("country-dropdown");
const countryList = document.getElementById("country-list");
const dialCode = document.getElementById("dial-code");
const searchInput = document.getElementById("country-search");

// فتح/غلق القائمة
selectedBtn.addEventListener("click", () => {
  countryDropdown.classList.toggle("hidden");
  searchInput.value = "";
  renderCountries(countries);
});

// عرض الدول
function renderCountries(list) {
  countryList.innerHTML = "";
  list.forEach((c) => {
    const li = document.createElement("li");
    li.innerHTML = `<img src="${c.flag}" alt=""> ${c.name} <span>${c.code}</span>`;
    li.addEventListener("click", () => {
      selectedBtn.querySelector("img").src = c.flag;
      dialCode.textContent = c.code;
      countryDropdown.classList.add("hidden");
    });
    countryList.appendChild(li);
  });
}

renderCountries(countries);

// البحث
searchInput.addEventListener("input", () => {
  const val = searchInput.value.trim();
  const filtered = countries.filter(
    (c) => c.name.includes(val) || c.code.includes(val)
  );
  renderCountries(filtered);
});

// غلق القائمة لما تضغط بره
document.addEventListener("click", (e) => {
  if (!e.target.closest(".country-select")) {
    countryDropdown.classList.add("hidden");
  }
});

const fileInput = document.getElementById("fileInput");
const loader = document.getElementById("loader");
const fileName = document.getElementById("fileName");
const uploadBtn = document.querySelector(".upload-btn");

fileInput.addEventListener("change", () => {
  if (fileInput.files.length > 0) {
    fileName.textContent = fileInput.files[0].name;

    // إظهار اللودر
    loader.style.display = "inline-block";
    uploadBtn.style.display = "none";

    // محاكاة رفع الملف (3 ثواني)
    setTimeout(() => {
      loader.style.display = "none";
      uploadBtn.style.display = "flex";
      fileName.textContent = "✔ تم رفع الملف: " + fileInput.files[0].name;
    }, 3000);
  }
});


// قائمة الجنسيات
const nationalities = [
  "السعودية", "مصر", "فلسطين", "الأردن", "الكويت", "الإمارات العربية المتحدة",
  "قطر", "البحرين", "عمان", "اليمن", "المغرب", "تونس", "الجزائر", "السودان",
  "العراق", "لبنان", "سوريا", "تركيا", "إيران", "أفغانستان", "باكستان",
  "الهند", "بنغلاديش", "سريلانكا", "ماليزيا", "إندونيسيا", "سنغافورة",
  "تايلاند", "فيتنام", "الفلبين", "الصين", "اليابان", "كوريا الجنوبية",
  "كوريا الشمالية", "منغوليا", "روسيا", "أوكرانيا", "بيلاروسيا", "بولندا",
  "ألمانيا", "فرنسا", "إيطاليا", "إسبانيا", "البرتغال", "هولندا", "بلجيكا",
  "سويسرا", "النمسا", "السويد", "النرويج", "الدنمارك", "فنلندا", "آيسلندا",
  "المملكة المتحدة", "أيرلندا", "اليونان", "رومانيا", "بلغاريا", "المجر",
  "التشيك", "سلوفاكيا", "كرواتيا", "صربيا", "البوسنة والهرسك", "ألبانيا",
  "مقدونيا", "سلوفينيا", "إستونيا", "لاتفيا", "ليتوانيا", "مولدوفا",
  "جورجيا", "أرمينيا", "أذربيجان", "كازاخستان", "أوزبكستان", "تركمانستان",
  "طاجيكستان", "قرغيزستان", "الولايات المتحدة", "كندا", "المكسيك", "غواتيمالا",
  "السلفادور", "هندوراس", "نيكاراغوا", "كوستاريكا", "بنما", "كوبا", "جامايكا",
  "هايتي", "جمهورية الدومينيكان", "بورتوريكو", "كولومبيا", "فنزويلا", "غيانا",
  "سورينام", "البرازيل", "الإكوادور", "بيرو", "بوليفيا", "باراغواي", "أوروغواي",
  "الأرجنتين", "تشيلي", "الأوروغواي", "أستراليا", "نيوزيلندا", "فيجي", "بابوا غينيا الجديدة",
  "جنوب أفريقيا", "نيجيريا", "كينيا", "تنزانيا", "أوغندا", "إثيوبيا", "السودان",
  "موريتانيا", "السنغال", "مالي", "بوركينا فاسو", "النيجر", "تشاد", "الكاميرون",
  "الغابون", "جمهورية الكونغو", "جمهورية الكونغو الديمقراطية", "أنغولا", "زامبيا",
  "زيمبابوي", "بوتسوانا", "ناميبيا", "موزمبيق", "مدغشقر", "موريشيوس", "سيشل"
];

// عناصر الجنسية
const selectedNationalityBtn = document.getElementById("selected-nationality");
const nationalityDropdown = document.getElementById("nationality-dropdown");
const nationalityList = document.getElementById("nationality-list");
const nationalityText = document.getElementById("nationality-text");
const nationalitySearch = document.getElementById("nationality-search");
const nationalityValue = document.getElementById("nationality-value");

// التحقق من وجود العناصر قبل إضافة الأحداث
if (selectedNationalityBtn && nationalityDropdown && nationalityList && nationalityText && nationalitySearch) {
  // فتح/غلق القائمة
  selectedNationalityBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    nationalityDropdown.classList.toggle("hidden");
    nationalitySearch.value = "";
    renderNationalities(nationalities);
    if (!nationalityDropdown.classList.contains("hidden")) {
      nationalitySearch.focus();
    }
  });

  // عرض الجنسيات
  function renderNationalities(list) {
    nationalityList.innerHTML = "";
    if (list.length === 0) {
      const li = document.createElement("li");
      li.textContent = "لا توجد نتائج";
      li.style.padding = "12px";
      li.style.color = "#999";
      li.style.cursor = "default";
      nationalityList.appendChild(li);
      return;
    }
    list.forEach((nationality) => {
      const li = document.createElement("li");
      li.textContent = nationality;
      li.addEventListener("click", () => {
        nationalityText.textContent = nationality;
        if (nationalityValue) {
          nationalityValue.value = nationality;
        }
        nationalityDropdown.classList.add("hidden");
      });
      nationalityList.appendChild(li);
    });
  }

  // عرض جميع الجنسيات عند التحميل
  renderNationalities(nationalities);

  // البحث
  nationalitySearch.addEventListener("input", () => {
    const val = nationalitySearch.value.trim();
    const filtered = nationalities.filter((n) => n.includes(val));
    renderNationalities(filtered);
  });

  // غلق القائمة عند الضغط خارجها
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nationality-select-wrapper")) {
      nationalityDropdown.classList.add("hidden");
    }
  });
}