$(function() {
  const scenes = [
    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(scenes/scene1.jpg)",
    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(scenes/scene2.jpg)",
    "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(scenes/scene3.jpg)",
    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(scenes/scene4.jpg)",
    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(scenes/scene5.jpg)",
    "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(scenes/scene6.jpg)",
    "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(scenes/scene7.jpg)",
    "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(scenes/scene8.jpg)"
  ];

  let scIndex = 0;
  //Go through the array + add FadeOut effect

  $(".moo").on("click", function() {
    $("#bg-switch").fadeTo(450, 0, function() {
      $(this)
        .css("background-image", scenes[scIndex])
        .fadeTo(450, 1);
      scIndex = (scIndex + 1) % scenes.length;
    });
  });
});
