I recently found a weird way to integrate the function $$tanh(x)$$ only using derivatives. 

Take the first derivative of $$\phi = tanh(x)$$ with respect to $$x$$:

$$s = \frac{d\phi}{dx} = 1-\phi^2$$

Now differentiate $$s$$ with respect to some dummy variable $$t$$:

$$\dot{s} = -2\phi\dot{\phi}= -2 \phi s \dot{x}$$

The last equality is just the chain rule. Now divide both sides by $$s$$, we get 

$$\frac{\dot{s}}{s} = -2 \phi \dot{x}$$

At this point, you have to notice that the left side of this equation is something called the logarithmic derivative of $s$: 

$$\frac{d}{dt}ln(s) = \frac{\dot{s}}{s}$$

The logarithm is well defined because $$s>0$$. You also have to notice that the term $-2\phi\dot{x}$ can be written as the derivative of an integral:

$$-2\phi\dot{x}= -2 \frac{d}{dt}\int_{0}^{x}{\phi(x)dx}$$

Putting both these observations together, we get:

$$\frac{d}{dt}ln(s) = -2 \frac{d}{dt}\int_{0}^{x}{\phi(x)dx}$$

Integrating with respect to both sides gives us:

$$ln(s) = -2\int_{0}^{x}{\phi(x)dx}$$

Dividing through by $$-2$$ we get.

$$ln(\frac{1}{\sqrt{s}})= ln(\frac{1}{sech(x)}) = ln(cosh(x))= \int_{0}^{x}{\phi(x)dx}$$

So we get the final answer of:

$$\int_{0}^{x}{\phi(x)dx} =\int_{0}^{x}{tanh(x)dx}= ln(cosh(x))$$

Which according to the internet is correct. 
