var faq = [
    {
        label: "faq.label1",
        answer: "faq.answer1"
    },
    {
        label: "faq.label2",
        answer: "faq.answer2"
    },
    {
        label: "faq.label3",
        answer: "faq.answer3"
    },
    {
        label: "faq.label4",
        answer: "faq.answer4"
    },
    {
        label: "faq.label5",
        answer: "faq.answer5"
    },
    {
        label: "faq.label6",
        answer: "faq.answer6"
    },
];

function renderFAQ() {
    const faqWrapper = document.getElementById('faq-box');

    if (faqWrapper) {
        faqWrapper.innerHTML = faq.map(element => {
            return `
                        <div class="accordion-item">
                            <div class="accordion-header">
                                <div class="accordion-title primary-text" data-key="${element.label}"></div>
                                
                                <img src="/assets/images/accordion/plus.png" class="hidden"/>
                                <img src="/assets/images/accordion/minus.png" class="expanded"/>
                            </div>
                            
                            <div class="content-inner">
                                <div class="accordion-content section-text" data-key="${element.answer}"></div>
                            </div>
                        </div>
            `;
        }).join("");
    }

    triggerAccordionChange();
}

function triggerAccordionChange() {
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;

            header.classList.toggle('active');

            if (content.classList.contains('active')) {
                content.classList.remove('active');
            } else {
                document.querySelectorAll('.content-inner.active').forEach(activeContent => {
                    activeContent.previousElementSibling.classList.remove('active');
                    activeContent.classList.remove('active');
                });
                content.classList.add('active');
            }
        });
    });
}