document.querySelectorAll(".collapsible-container").forEach((section) => {
    let questions = section.querySelectorAll(".faq_question");
    let previousActive = null;

    questions.forEach((question) => {
        let icon = question.querySelector(".icon-shape");
        let answer = question.nextElementSibling;

        question.addEventListener("click", () => {
            if (previousActive && previousActive !== question) {
                previousActive.classList.remove("active");
                previousActive.querySelector(".icon-shape").classList.remove("active");
                previousActive.nextElementSibling.style.maxHeight = "0px";
            }

            question.classList.toggle("active");
            icon.classList.toggle("active");

            if (question.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
                previousActive = question;
            } else {
                answer.style.maxHeight = "0px";
                previousActive = null;
            }
        });

        if (question.classList.contains("open")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
            previousActive = question;
        }
    });
});