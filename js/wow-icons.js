$(function() {
  const endAnimation =
    "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oAnimationEnd animationend";

  // function that twists the icon. Passed as a parameter to the 'on' method in the examples below.
  function twistTheIcon() {
    $(this)
      .addClass("twist-it")
      .one(endAnimation, function() {
        $(this).removeClass("twist-it");
      });
  }
  // 1st set of icons:
  $(".wow-class-icons img").on("click", twistTheIcon);

  // function that scales the icon. Passed as a parameter to the 'on' method in the examples below.
  function scaleTheIcon() {
    $(this)
      .addClass("scale-it")
      .one(endAnimation, function() {
        $(this).removeClass("scale-it");
      });
  }

  // 2nd set of icons:
  $(".wow-tauren-icons img").on("click", scaleTheIcon);
});
