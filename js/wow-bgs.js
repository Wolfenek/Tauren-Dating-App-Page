const scenes = ['linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(scenes/scene1.jpg)', 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(scenes/scene2.jpg)', 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(scenes/scene3.jpg)', 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(scenes/scene4.jpg)', 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(scenes/scene5.jpg)', 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(scenes/scene6.jpg)', 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(scenes/scene7.jpg)', 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(scenes/scene8.jpg)'];
    
//Go through the array + add FadeOut effect
let scIndex = 0;
let tauren = document.getElementById('bg-switch');

function newScene() {
    tauren.style.backgroundImage = scenes[scIndex];
    scIndex = (scIndex + 1)%(scenes.length);
};