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
  $("#warrior").on("click", twistTheIcon);

  $("#paladin").on("click", twistTheIcon);

  $("#dk").on("click", twistTheIcon);

  $("#hunter").on("click", twistTheIcon);

  $("#shaman").on("click", twistTheIcon);

  $("#druid").on("click", twistTheIcon);

  $("#monk").on("click", twistTheIcon);

  $("#priest").on("click", twistTheIcon);
  // function that scales the icon. Passed as a parameter to the 'on' method in the examples below.
  function scaleTheIcon() {
    $(this)
      .addClass("scale-it")
      .one(endAnimation, function() {
        $(this).removeClass("scale-it");
      });
  }

  // 2nd set of icons:
  $("#t-male").on("click", scaleTheIcon);

  $("#t-female").on("click", scaleTheIcon);

  $("#h-male").on("click", scaleTheIcon);

  $("#h-female").on("click", scaleTheIcon);
});
