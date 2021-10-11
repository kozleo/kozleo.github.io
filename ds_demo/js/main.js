//Original code written by Chris Wellons (aka skeeto): https://github.com/skeeto/lorenz-webgl

var lorenz = null;
var controls = null;

window.addEventListener('load', function() {
    var canvas = document.querySelector('#lorenz');
    lorenz = Lorenz.run(canvas);
    controls = new Controls(lorenz);

    window.addEventListener('keypress', function(e) {
        if (e.which === '?'.charCodeAt(0)) {
            var h = document.querySelector('#help');
            h.style.display = h.style.display == 'none' ? 'block' : 'none';
        }
    });
    window.addEventListener('touchstart', function self(e) {
        var h = document.querySelector('#help');
        h.style.display = 'none';
    });

    var stats = document.querySelector('#stats');
    function update_stats() {
        var fps = lorenz.fps;
        var count = lorenz.solutions.length.toLocaleString();
        stats.textContent = count + ' @ ' + fps + ' FPS';
    }
    window.setInterval(update_stats, 1000);
    controls.listeners.push(update_stats);

    var preset = document.querySelector('#preset');
    preset.addEventListener('change', function() {
        if (preset.value === 'chaos') {
            controls.clear();
            controls.add();
            for (var i = 0; i < 100; i++)
                controls.clone();
            //controls.set_simType(0);            
        } else if (preset.value === 'gentle') {
            while (lorenz.solutions.length < 100)
                controls.add();
            lorenz.display.rotationd[0] = 0;
            lorenz.display.rotationd[1] = 0;
            lorenz.display.rotationd[2] = 0.007;
            lorenz.display.damping = false;
        } else if (preset.value === 'chenlee') {  
            controls.add();          
            while (lorenz.solutions.length < 100)
                controls.clone();
            controls.set_simType(1);  
        } else if (preset.value === 'rossler') {
            controls.add()
            while (lorenz.solutions.length < 100)
                controls.clone();
            controls.set_simType(2);            
        } else if (preset.value === 'vdp') {
            controls.add()
            while (lorenz.solutions.length < 100)
                controls.clone();
            controls.set_simType(3);     
        } else if (preset.value === 'contracting_input') {
            controls.add()            
            while (lorenz.solutions.length < 100)
                controls.clone();
            controls.set_simType(4);
                 
        } else if (preset.value === 'contracting_noinput') {
            controls.add()            
            while (lorenz.solutions.length < 100)
                controls.clone();
            controls.set_simType(5);
                 
        } else if (preset.value === 'line_attractor') {
            controls.add()            
            while (lorenz.solutions.length < 100)
                controls.clone();
            controls.set_simType(6);
                 
        } else if (preset.value === 'conservative') {
            controls.add()            
            while (lorenz.solutions.length < 100)
                controls.clone();
            controls.set_simType(7);
                 
        } else if (preset.value === 'lorenz') {  
            controls.add();          
            while (lorenz.solutions.length < 100)
                controls.clone();
            controls.set_simType(0);  
        } else if (preset.value === 'multipa') {  
            controls.add();          
            while (lorenz.solutions.length < 100)
                controls.clone();
            controls.set_simType(8);  
        }
    });
});
