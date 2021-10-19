

//slider
let slideWidth = $(".slide").width()

$(".slide:last-child").prependTo(".slides")

let leftBtn = $(".leftBtn")
let slideDuration = 1000;

$(".leftBtn").click(
    function(){
        $(".slides").animate(
            {left:slideWidth},
            slideDuration,
            function(){
               $(".slide:last-child").prependTo(".slides")
               $(".slides").css("left","") 
               $(".slide").removeClass("show")
               $(".slide:last-child").addClass("show")
            }
        )
    }
)

$(".rightBtn").click(
    function(){
        $(".slides").animate(
            {right:slideWidth},
            slideDuration,
            function(){
               $(".slide:first-child").appendTo(".slides")
               $(".slides").css("right","") 
               $(".slide").removeClass("show")
               $(".slide:first-child").addClass("show")
            }
        )
    }
)

// cycle for next / prev images of slide
// $(".leftbtn").click(function(){
//     cycleSlide(-1)
// });
// $(".rightbtn").click(function(){
//     cycleSlide(1)
// });
// const cycleSlide = (action) => {
//     current = $(".slide.show-slide").index() // get the current index of shown image
//     if (action > 0) {
//         if (current == 2) {
//             $(".slide").eq(0).addClass("show-slide")
//         } else {
//             $(".slide").eq(current + 1).addClass("show-slide")
//         }
//     } else {
//         if (current == 0) {
//             $(".slide").eq(2).addClass("show-slide")
//         } else {
//             $(".slide").eq(current - 1).addClass("show-slide")
//         }
//     }
//     $(".slide").eq(current).removeClass("show-slide")
// }