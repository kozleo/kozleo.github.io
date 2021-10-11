This info sheet goes along with [this interactive dynamical systems demo](https://kozleo.github.io/ds_demo/index.html).

## [Lorenz Attractor](https://en.wikipedia.org/wiki/Lorenz_system)

A simple, 3-D, stripped-down weather model which gave rise to the entire field of Chaos research. Produces the famous 'butterfly attractor'. 

$$\dot{x} = \sigma(y -x)$$

$$\dot{y} = x(\rho - z) - y$$

$$\dot{z} = xy - \beta z$$

$$\{ \sigma, \rho, \beta \} = \{10, 28, \frac{8}{3} \}$$

## [Chen-Lee Attractor](https://ir.nctu.edu.tw/bitstream/11536/26522/1/000220413000019.pdf)

A lesser known chaotic attractor. Produces beautiful spirals and sometimes a thin wormhole between them. 

$$\dot{x} = ax - yz$$

$$\dot{y} = by + xz$$

$$\dot{z} = dz + \frac{1}{3}xy$$

$$\{a, b, d\} = \{5, -10,-0.38 \}$$

## [Rössler Attractor](https://en.wikipedia.org/wiki/R%C3%B6ssler_attractor)

A well-known chaotic attractor with a characteristic 'hump'. Trajectories go around in a loop, travel over the hump, come back down onto the loop.

$$\dot{x} = -y - z$$

$$\dot{y} = x + ay$$

$$\dot{z} = b + z(x-c)$$

$$\{a, b, c\} = \{0.2, 0.2,14 \}$$

## [Van der Pol](https://en.wikipedia.org/wiki/Van_der_Pol_oscillator)

Typically the first system with a 'limit cycle' students see. Basically a mass on a spring, where the spring has nonlinear damping. All trajectories are attracted towards a unique limit cycle.

$$\dot{x} = \mu(x - \frac{1}{3}x^3 - y)$$

$$\dot{y} = \frac{x}{\mu}$$

$$\dot{z} = -z$$

$$\{\mu\} = \{1\}$$

NOTE: This $$\dot{z} = -z$$ is *not* part of the Van der Pol system. Van der Pol is 2-D. I include this $$z$$ term to just decay trajectories onto the $$xy$$ plane in the simulation. 

## [Line Attractor](http://www.scholarpedia.org/article/Attractor_network)

A generic line attractor. There's a line in state space and all trajectories are sucked onto it.

$$\dot{x} = 0$$

$$\dot{y} = mx + b - y$$

$$\dot{z} = -z$$

$$\{m,b\} = \{3,-18\}$$

## [Multiple Point Attractors](http://www.scholarpedia.org/article/Attractor_network)

A system with multiple (in this case infinitely many) point attractors. This is a simple extension of example 2.4.1 in [Strogatz](https://www.stevenstrogatz.com/books/nonlinear-dynamics-and-chaos-with-applications-to-physics-biology-chemistry-and-engineering) to three dimensions, instead of one.

$$\dot{x} = -\alpha\sin(\omega x)$$

$$\dot{y} = -\alpha\sin(\omega y)$$

$$\dot{z} = -\alpha\sin(\omega z)$$

$$\{\alpha,\omega\} = \{50,\frac{1}{10}\}$$

## [Conservative Double Well System](https://en.wikipedia.org/wiki/Conservative_system)

A Newtonian particle with unit mass moving in a double-well potential. The trajectories live on closed curves defined by contours of constant energy. This is from example 6.5.2 in [Strogatz](https://www.stevenstrogatz.com/books/nonlinear-dynamics-and-chaos-with-applications-to-physics-biology-chemistry-and-engineering). 

$$\dot{x} = y$$

$$\dot{y} = x-x^3$$

$$\dot{z} = -z$$

NOTE: This $$\dot{z} = -z$$ is *not* part of the system. Same as the Van der Pol, I include this $$z$$ term to just decay trajectories onto the $$xy$$ plane in the simulation.

## [Contracting Dynamical System, with Input](http://web.mit.edu/nsl/www/preprints/contraction.pdf) 

A contracting [recurrent neural network](https://en.wikipedia.org/wiki/Recurrent_neural_network), driven by external input. Contracting systems forget their initial conditions exponentially. 

$$\dot{x} = -x + \tanh( \alpha(x - y - z) ) + \beta\cos(t) $$

$$ \dot{y} = -y + \tanh(\alpha(x - y - z)) + \beta\sin(\frac{t}{2} + \frac{t}{\pi})$$

   $$ \dot{z} = -z + \tanh(\alpha(x + y + z)) + \beta\cos(t)$$

$$\{\alpha,\beta\} = \{0.32258065,100\}$$

## Contracting Dynamical System, without Input 

The same system as above, with $$\beta = 0$$.



