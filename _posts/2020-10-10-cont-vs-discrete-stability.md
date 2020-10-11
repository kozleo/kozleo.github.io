Dynamical systems are systems which evolve in time. When time is a continous quantity, this evolution is described by a differential equation. When time is a discrete quantity, this evolution is described by a difference equation. 

A differential equation looks like this:

$$ \frac{dx}{dt} = f(x) $$

A difference equation looks like this:

$$ x_{t+1} = f(x_t) $$

Where $f$ is some nonlinear function. A big chunk of nonlinear systems analysis is trying to figure out what conditions $f$ needs to satisfy so that $x(t)$ is stable (e.g doesn't blow up, stays within some bounds, converges to something, etc). An important subset of $f$ is when $f = Ax$--in other words, when f is *linear*.



