$(document).ready(function () {
    $(".navbar-nav li a").click(function (event) {
        $(".navbar-collapse").collapse('hide');
    });

    gsap.registerPlugin(ScrollTrigger);
    // let bodyScrollBar = Scrollbar.init('.scroller', {
    //     damping: 0.1,
    //     delegateTo: document,
    // });
    // ScrollTrigger.scrollerProxy(".scroller", {
    //     scrollTop(value) {
    //         if (arguments.length) {
    //             bodyScrollBar.scrollTop = value;
    //         }
    //         return bodyScrollBar.scrollTop;
    //     },
    // });
    // bodyScrollBar.addListener(ScrollTrigger.update);
    ScrollTrigger.matchMedia({

        // desktop
        "(min-width: 760px)": function () {
            gsap.set(".panel", {
                zIndex: (i, target, targets) => targets.length - i
            });

            var images = gsap.utils.toArray('.panel:not(.orange)');

            images.forEach((image, i) => {

                var tl = gsap.timeline({

                    scrollTrigger: {
                        trigger: "section.black",
                        // scroller: ".scroller",
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
                        opacity: 1,
                        y: "20%"
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
        // desktop
        // "(max-width: 480px)": function () {
        //     gsap.set(".panel", {
        //         zIndex: (i, target, targets) => targets.length - i
        //     });

        //     var images = gsap.utils.toArray('.panel:not(.orange)');

        //     images.forEach((image, i) => {

        //         var tl = gsap.timeline({

        //             scrollTrigger: {
        //                 trigger: "section.black",
        //                 // scroller: ".scroller",
        //                 scroller: false,
        //                 start: () => "top -" + (window.innerHeight * (i + 0.5)),
        //                 end: () => "+=" + window.innerHeight,
        //                 scrub: true,
        //                 toggleActions: "play none reverse none",
        //                 invalidateOnRefresh: true,
        //             }

        //         })

        //         tl
        //             .to(image, {
        //                 // height: 0
        //                 duration: 1,
        //                 opacity: 1,
        //                 y: "100%"
        //             });

        //     });

        //     gsap.set(".panel-text", {
        //         zIndex: (i, target, targets) => targets.length - i
        //     });

        //     var texts = gsap.utils.toArray('.panel-text');

        //     texts.forEach((text, i) => {

        //         var tl = gsap.timeline({

        //             scrollTrigger: {
        //                 trigger: "section.black",
        //                 scroller: false,
        //                 start: () => "top -" + (window.innerHeight * i),
        //                 end: () => "+=" + window.innerHeight,
        //                 scrub: true,
        //                 toggleActions: "play none reverse none",
        //                 invalidateOnRefresh: true,
        //             }

        //         })

        //         tl
        //             .to(text, {
        //                 duration: 1,
        //                 opacity: 1,
        //                 y: "20%"
        //             })
        //             .to(text, {
        //                 duration: 1,
        //                 opacity: 0,
        //                 y: "0%"
        //             }, 2);

        //     });

        //     ScrollTrigger.create({

        //         trigger: ".scroller__wrapper",
        //         scroller: false,
        //         scrub: 1,
        //         markers: true,
        //         pin: true,
        //         start: "top top",
        //         // end: "+=1850",
        //         end: () => "+=" + ((images.length + 1) * window.innerHeight),
        //         invalidateOnRefresh: true,
        //         anticipatePin: 1
        //     });

        // }
    })



    // $(window).scroll(function () {
    //     $('.started__main').css("opacity", 1 - $(window).scrollTop() / 700)
    // })

    // $('#content__wrapper').scroll(function () {
    //     $('[id^="box"]').each(function () {
    //         if (($(this).offset().top - $(window).scrollTop()) < 200) {
    //             $(this).stop().fadeTo(1000, 0.5);
    //         } else {
    //             $(this).stop().fadeTo('fast', 1);
    //         }
    //     });

    // });


    // $(document).ready(function () {
    //     $.jScrollability([{
    //         'selector': '.started__main__one',
    //         'start': 'parent',
    //         'end': 'parent',
    //         'fn': {
    //             'top': {
    //                 'start': 100,
    //                 'end': 15,
    //                 'unit': '%'
    //             }
    //         }
    //     }]);
    // });

    // $(document).ready(function () {
    //     $.jScrollability([{
    //         'selector': '.started__main__two',
    //         'start': 'parent',
    //         'end': 'parent',
    //         'fn': {
    //             'top': {
    //                 'start': 100,
    //                 'end': 15,
    //                 'unit': '%'
    //             }
    //         }
    //     }]);
    // });

    // $(document).ready(function () {
    //     $.jScrollability([{
    //         'selector': '.started__main__three',
    //         'start': 'parent',
    //         'end': 'parent',
    //         'fn': {
    //             'top': {
    //                 'start': 100,
    //                 'end': 15,
    //                 'unit': '%'
    //             }
    //         }
    //     }]);
    // });

    // function fader() {
    //     var r = $('.started__main__one'),
    //         b = $('.started__main__two'),
    //         wh = $(window).height(),
    //         dt = $(document).scrollTop(),
    //         redView = wh - (r.offset().top - dt),
    //         blueView = wh - (b.offset().top - dt),
    //         op;
    //     if (redView > 0) {
    //         op = 1 - 1 / (wh + b.height()) * redView;
    //         if (op > 0)
    //             b.css({
    //                 opacity: op
    //             });
    //     }
    //     if (blueView > 0) {
    //         op = 1 - 1 / (wh + b.height()) * blueView;
    //         if (op > 0)
    //             b.css({
    //                 opacity: op
    //             });
    //     }
    // }
    // // Event on scroll
    // $(document).bind('scroll', fader);



    // $('nav a[href*="#"]').on('click', function () {
    //     $('html, body').animate({
    //         scrollTop: $($(this).attr('href')).offset().top - 100
    //     }, 2000);
    // });


    // Select all links with hashes
    // $('a[href*="#"]')
    //     // Remove links that don't actually link to anything
    //     .not('[href="#"]')
    //     .not('[href="#0"]')
    //     .click(function (event) {
    //         // On-page links
    //         if (
    //             location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
    //             location.hostname == this.hostname
    //         ) {
    //             // Figure out element to scroll to
    //             var target = $(this.hash);
    //             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //             // Does a scroll target exist?
    //             if (target.length) {
    //                 // Only prevent default if animation is actually gonna happen
    //                 event.preventDefault();
    //                 $('html, body').animate({
    //                     scrollTop: target.offset().top
    //                 }, 1000, function () {
    //                     // Callback after animation
    //                     // Must change focus!
    //                     var $target = $(target);
    //                     $target.focus();
    //                     if ($target.is(":focus")) { // Checking if the target was focused
    //                         return false;
    //                     } else {
    //                         $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
    //                         $target.focus(); // Set focus again
    //                     };
    //                 });
    //             }
    //         }
    //     });

    // $('a[href*="#about"]').on('click', function () {
    //     $('html, body').animate({
    //         scrollTop: $($(this).attr('href')).offset().top - 300
    //     }, 2000);
    // });
})