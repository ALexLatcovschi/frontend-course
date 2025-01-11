var reviews = [
    {
        content: "reviews.reviewContent",
        name: "Jane Doe",
        position: "CEO of Inkyy.com",
        rate: 5
    },
    {
        content: "reviews.reviewContent",
        name: "Jane Doe",
        position: "CEO of Inkyy.com",
        rate: 3
    },
    {
        content: "reviews.reviewContent",
        name: "Jane Doe",
        position: "CEO of Inkyy.com",
        rate: 4
    },
    {
        content: "reviews.reviewContent",
        name: "Jane Doe",
        position: "CEO of Inkyy.com",
        rate: 1
    },
    {
        content: "reviews.reviewContent",
        name: "Jane Doe",
        position: "CEO of Inkyy.com",
        rate: 2
    }
];

function loadReviews() {
    const slidesWrapper = document.getElementById('reviews-slider');

    if (slidesWrapper) {
        slidesWrapper.innerHTML = reviews.map(review => {
            return `
                        <div class="swiper-slide">
                            <div class="slide-outer">
                                <div class="slide-content" data-key="${review.content}"></div>
                                
                                <div class="separator"></div>
                                
                                <div class="bottom-review">
                                    <div class="author">
                                        <div class="icon">
                                            <img src="/assets/images/author.png" alt="Author Icon">
                                        </div>
                                        
                                        <div class="author-info">
                                            <div class="name">
                                                ${review.name}
                                            </div>
                                            
                                            <div class="position">
                                                ${review.position}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="rate star-${review.rate}">
                                        <img src="/assets/images/star.png" alt="Rate 1">
                                        <img src="/assets/images/star.png" alt="Rate 2">
                                        <img src="/assets/images/star.png" alt="Rate 3">
                                        <img src="/assets/images/star.png" alt="Rate 4">
                                        <img src="/assets/images/star.png" alt="Rate 5">
                                    </div>
                                </div>
                            </div>
                        </div>
            `;
        }).join();
    }
    ;

    new Swiper('.reviews-slider', {
        loop: true,
        autoplay: {
            delay: 4000,
        },
        slidesPerView: 2.5,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });
}