$(document).ready(function () {

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".coinOne", {
        scrollTrigger: {
            trigger: ".home",
            scrub: true
        },
        rotation: 240,
        duration: 1
    })

    gsap.to(".coinTwo", {
        scrollTrigger: {
            trigger: ".home",
            scrub: true
        },
        rotation: 120,
        duration: 1
    })

    ScrollTrigger.matchMedia({

        // desktop
        "(min-width: 480px)": function () {
            gsap.set(".panel", {
                zIndex: (i, target, targets) => targets.length - i
            });

            var images = gsap.utils.toArray('.panel:not(.orange)');

            images.forEach((image, i) => {

                var tl = gsap.timeline({

                    scrollTrigger: {
                        trigger: "section.black",
                        scroller: false,
                        start: () => "top -" + (window.innerHeight * (i + 0.5)),
                        end: () => "+=" + window.innerHeight,
                        scrub: true,
                        toggleActions: "play none reverse none",
                        invalidateOnRefresh: true,
                    }

                })

                tl
                    .to(image, {
                        // height: 0
                        duration: 2,
                        opacity: 1,
                        y: "100%"
                    });

            });

            gsap.set(".panel-text", {
                zIndex: (i, target, targets) => targets.length - i
            });

            var texts = gsap.utils.toArray('.panel-text');

            texts.forEach((text, i) => {

                var tl = gsap.timeline({

                    scrollTrigger: {
                        trigger: "section.black",
                        scroller: false,
                        start: () => "top -" + (window.innerHeight * i),
                        end: () => "+=" + window.innerHeight,
                        scrub: true,
                        toggleActions: "play none reverse none",
                        invalidateOnRefresh: true,
                    }

                })

                tl
                    .to(text, {
                        duration: 1,
                        zIndex: 100,
                        opacity: 1,
                        y: "10%"
                    })
                    .to(text, {
                        duration: 1,
                        opacity: 0,
                        y: "0%"
                    }, 2);

            });

            ScrollTrigger.create({

                trigger: ".scroller__wrapper",
                scroller: false,
                scrub: true,
                markers: false,
                pin: true,
                start: "top top",
                // end: "+=1850",
                end: () => "+=" + ((images.length + 1) * window.innerHeight),
                invalidateOnRefresh: true,
                anticipatePin: 1
            });

        },
    })

    $(document).on('click', '.navbar-nav li a', function (e) {
        var targetHref = $(this).attr('href');
        $(".navbar-collapse").collapse('hide');
        $('html, body').animate({
            scrollTop: $(targetHref).offset().top - 100
        }, 1000);

        e.preventDefault();
    })

    window.onload = function(){
        document.querySelector('.toggler').onclick = () => {
            document.querySelector('.nav').classList.toggle('open');
        }
    }
})
