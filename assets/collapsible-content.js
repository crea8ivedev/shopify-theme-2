document.querySelectorAll(".collapsible-container").forEach((section) => {
    let questions = section.querySelectorAll(".faq_question");
    let previousActive = null;

    questions.forEach((question) => {
        let icon = question.querySelector(".icon-shape");
        let answer = question.nextElementSibling;
        let answerId = answer.id;

        question.addEventListener("click", () => {
            toggleAnswer(question, icon, answer, answerId);
        });

        question.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleAnswer(question, icon, answer, answerId);
            }
        });

        if (question.classList.contains("open")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
            question.setAttribute("aria-expanded", "true");
            previousActive = question;
        }
    });

    function toggleAnswer(question, icon, answer, answerId) {
        let isOpen = question.classList.contains("active");

        if (previousActive && previousActive !== question) {
            previousActive.classList.remove("active");
            previousActive.querySelector(".icon-shape").classList.remove("active");
            previousActive.nextElementSibling.style.maxHeight = "0px";
            previousActive.setAttribute("aria-expanded", "false");
        }

        question.classList.toggle("active");
        icon.classList.toggle("active");
        answer.style.maxHeight = isOpen ? "0px" : answer.scrollHeight + "px";
        question.setAttribute("aria-expanded", isOpen ? "false" : "true");

        if (!isOpen) {
            previousActive = question;
        } else {
            previousActive = null;
        }
    }
});
