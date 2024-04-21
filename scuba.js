AFRAME.registerComponent('rotation', {
    init: function() {
        const diver = document.getElementById('diver');

        // Listen for keydown events
        window.addEventListener('keydown', function(event) {
            const currentPosition = diver.getAttribute('position');
            const currentRotation = diver.getAttribute('rotation');

            // Change diver's position or rotation based on key pressed
            switch (event.key) {
                case 'ArrowUp':
                    // Move diver forward
                    diver.setAttribute('position', {
                        x: currentPosition.x,
                        y: currentPosition.y,
                        z: currentPosition.z - 0.1
                    });
                    break;
                case 'ArrowDown':
                    // Move diver backward
                    diver.setAttribute('position', {
                        x: currentPosition.x,
                        y: currentPosition.y,
                        z: currentPosition.z + 0.1
                    });
                    break;
                case 'ArrowLeft':
                    // Rotate diver to the left
                    diver.setAttribute('rotation', {
                        x: currentRotation.x,
                        y: currentRotation.y - 5,
                        z: currentRotation.z
                    });
                    break;
                case 'ArrowRight':
                    // Rotate diver to the right
                    diver.setAttribute('rotation', {
                        x: currentRotation.x,
                        y: currentRotation.y + 5,
                        z: currentRotation.z
                    });
                    break;
            }
        });
    }
});