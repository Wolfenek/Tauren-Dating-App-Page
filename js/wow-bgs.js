const scenes = ['linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(scenes/scene1.jpg)', 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(scenes/scene2.jpg)', 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(scenes/scene3.jpg)', 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(scenes/scene4.jpg)'];
        
        let currImg = ''

        function randomScene() {
              const shuffle = Math.floor(Math.random() * (scenes.length));
              if (scenes[shuffle] === currImg) {
                randomScene()
              } else {
                document.getElementById('bg-switch').style.backgroundImage = scenes[shuffle];
                currImg = scenes[shuffle];
              }
            };