[Lyapunov equations](https://en.wikipedia.org/wiki/Lyapunov_equation) are the bread and butter of control theory, stability theory and engineering. There are two forms of the Lyapunov equation, continuous and discrete. The discrete Lyapunov equation looks like this:

$$\mathbf{A}^T\mathbf{M}\mathbf{A} - \mathbf{M} = -\mathbf{Q}$$ 

and the continuous version looks like this: 

 $$\mathbf{A}^T\mathbf{M} + \mathbf{M}\mathbf{A} = -\mathbf{Q}$$ 

where $$\mathbf{A},\mathbf{M},\mathbf{Q} \in \mathcal{R}^{n \times n}$$ , and $$\mathbf{M}$$ and $$\mathbf{Q}$$ are restricted to be [symmetric positive definite](https://en.wikipedia.org/wiki/Definite_symmetric_matrix). I don't think I've ever seen a proof directly going from one Lyapunov equation to the other. I'm sure many proofs exist, I just haven't seen one. So here I'll show how to go between the two by looking at the discretization of a continuous linear dynamical system, computing the discrete time Lyapunov equation, and then letting the time-step size approach zero and recovering the continuous time equations. 

We start with the continuous-time linear dynamics:

$$\dot{\mathbf{x}} = \mathbf{A}\mathbf{x}$$

And then discretize it as follows:

$$\dot{\mathbf{x}} \approx \frac{\mathbf{x}_{t+1}-\mathbf{x}_{t}}{\delta}$$ 

Where $$\delta > 0 $$ indicates a small forward displacement in time. Substituting the bottom equation into the top and shuffling terms around, we get a discrete-time equation for $$\mathbf{x}_{t+1}$$.

$$\mathbf{x}_{t+1} = \mathbf{x}_t + \delta \mathbf{A} \mathbf{x}_t = (\mathbf{I} + \delta\mathbf{A})\mathbf{x}_t = \mathbf{B}\mathbf{x}_t$$ 

Where we've defined $$\mathbf{B} \equiv \mathbf{I} + \delta\mathbf{A}$$. Now we can use the discrete time Lyapunov equation for $$\mathbf{B}$$ :

$$\mathbf{B}^T\mathbf{M}\mathbf{B} - \mathbf{M} = -\delta\mathbf{Q}$$ 

Plugging in our definition for $$\mathbf{B}$$, we get:

$$(\mathbf{I} + \delta \mathbf{A})^T\mathbf{M}(\mathbf{I} + \delta \mathbf{A}) - \mathbf{M} = -\delta \mathbf{Q}$$ 

Expanding this expression out yields:

$$(\mathbf{M} + \delta \mathbf{A}^T\mathbf{M}) (\mathbf{I} + \delta \mathbf{A}) = \delta(\mathbf{A}^T\mathbf{M} + \mathbf{M}\mathbf{A}) + \delta^2 \mathbf{A}^T\mathbf{M}\mathbf{A} = -\delta \mathbf{Q}$$  

Recall that $$\delta$$ is a small displacement in time. Letting $$\delta$$ go to zero brings us closer and closer to having continuous dynamics--and in the limit we achieve them. It stands to reason that we should also recover the continuous-time Lyapunov equations in the limit as well. Dividing through by $$\delta$$ on both sides, and then letting $$\delta \rightarrow 0$$ we find that:

 $$\mathbf{A}^T\mathbf{M} + \mathbf{M}\mathbf{A} = -\mathbf{Q}$$ 

which of course is the continuous-time Lyapunov equation. 

I've also added this simple proof to the [Wiki page for Lyapunov equations](https://en.wikipedia.org/wiki/Lyapunov_equation#Relationship_Between_Discrete_and_Continuous_Lyapunov_Equations).







