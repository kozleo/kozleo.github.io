---
layout: post
tags: science+math
---

Robustness means that your system won't get knocked too far off course when it's perturbed. I've been going on about how stability equals robustness and why that's important for understanding the brain. But here's a particularly simple proof. Imagine the following system:

We have a state vector $x \in \mathbb{R}^n$ . At every time $t$, you update $x$ by running it through some nonlinear function $G : \mathbb{R}^n \rightarrow \mathbb{R}^n$. Then you take *that* vector and pass it through $G$, and so on. In math:

​																			$$x_{t+1} = G(x_t)$$ 

Stare at this long enough, you'll realize that there's something missing: $x_0$. The initial condition. Once you specify that, your system is off to the races. Let's imagine we take a different starting point, $y_0$, and run it through the same process:

​																			$$x_{t+1} = G(x_t)$$

​																			$$y_{t+1} = G(y_t)$$ 

Can we say something about the difference between vectors $x_t$ and $y_t$? Is this system very sensitive to initial conditions? Every time we pass our vectors through $G$, they get closer towards each other:

​													$$||G(x_t) - G(y_t)|| \leq \mu ||x_t - y_t||$$

Here $\mu$ is a positive number between zero and one: $0 \leq \mu < 1$. 
