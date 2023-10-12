document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    const gdaiCasesTabs = document.getElementById("gdai_cases_tabs");

    const swiperConfigs = [
        {
            slidesPerView: 1,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            loop: true,
            autoplay: {
                delay: 3000,
            },
        },
        {
            slidesPerView: 1,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            loop: true,
            autoplay: {
                delay: 3000,
            },
        },
    ];

    const swipers = [];

    tabButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            tabButtons.forEach((btn) => btn.classList.remove("active"));
            tabContents.forEach((content) => content.classList.remove("active"));
            button.classList.add("active");
            tabContents[index].classList.add("active");

            if (!swipers[index]) {
                swipers[index] = new Swiper(tabContents[index].querySelector(".swiper-container"), swiperConfigs[index]);
            }

            // Зміна класів у залежності від активного tabButton
            if (button.id === "tab1Button") {
                gdaiCasesTabs.classList.remove("gdai-two-buttons-background-green");
                gdaiCasesTabs.classList.add("gdai-two-buttons-background-blue");
            } else if (button.id === "tab2Button") {
                gdaiCasesTabs.classList.remove("gdai-two-buttons-background-blue");
                gdaiCasesTabs.classList.add("gdai-two-buttons-background-green");
            }
        });
    });

    tabButtons[0].click();
});
