## RNNs of RNNs: Recursive Construction of Stable Assemblies of Recurrent Neural Networks

If you're reading this, you probably like recurrent neural networks (RNNs). Me too! RNNs are great. They have helped us understand lots of things in neuroscience, from content-adressable memory to context-dependent sensory integration to multi-task compositionaility. Most of us think of RNNs as models of "local" neural activity--maybe a few hundred neurons or so.

But we know that the brain is not "just" one big RNN. It is more like many thousands, perhaps millions of RNNs all connected together. And these connections between RNNs are not just feed-forward--they are *also* recurrent. So what is the brain then? Well, it is an RNN *of* RNNs: a bunch of recurrently connected recurrent models (...dude, woah...). 

But so what? What can we *do* with that framing? OK, imagine this. Say someone (e.g God, deep learning, a senior postdoc in the lab) hands you two trained RNNs. Let's call them RNN A and RNN V. These RNNs have been trained to do two seperate behaviors. To make it concrete, let's say RNN A does audition and RNN V does vision. Now, say you want to create a simple creature out these RNNs. You want this creature to see and hear. And you read in some neuroscience textbook that the brain's visual and audio channels are coupled somehow. So you do the most natural thing and recurrently combine RNN A and RNN V. What does that mean? It means there are outgoing connections from RNN A that hit RNN V, and there are outgoing connections from RNN V that hit RNN A. This coupled system is a simple RNN of RNNs. What can we say about it? What does it do? 

The answer is: *probably nothing, obviously...*



