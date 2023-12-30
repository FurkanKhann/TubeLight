document.addEventListener('DOMContentLoaded', function () {
    // Get all switch elements
    var switches = document.querySelectorAll('.switch input');

    // Add a click event listener to each switch
    switches.forEach(function (switchElement, index) {
        switchElement.addEventListener('click', function () {
            // Toggle the "on" class for the corresponding light
            var light = document.getElementById('light' + (index + 1));
            light.classList.toggle('on');

            // Define background color and box shadow for each light
            var bgColor, boxShadow;

            switch (index + 1) {
                case 1:
                    bgColor = '#C724B1';
                    boxShadow = '10px 0px 100px 30px #C724B1';
                    break;
                case 2:
                    bgColor = '#4D4DFF';
                    boxShadow = '10px 0px 100px 30px #4d4dffdc';
                    break;
                case 3:
                    bgColor = '#E0E722';
                    boxShadow = '10px 0px 100px 30px #e0e722e2';
                    break;
                case 4:
                    bgColor = '#D22730';
                    boxShadow = '10px 0px 100px 30px #e13d45';
                    break;
                default:
                    bgColor = 'black';
                    boxShadow = 'none';
            }

            // If the light is on, set its background color and shadow
            if (light.classList.contains('on')) {
                light.style.backgroundColor = bgColor;
                light.style.boxShadow = boxShadow;
            } else {
                // If the light is off, set its background color to black and remove shadow
                light.style.backgroundColor = 'black';
                light.style.boxShadow = 'none';
            }
        });
    });
});