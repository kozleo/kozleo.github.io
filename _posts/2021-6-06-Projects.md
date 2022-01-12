<style> H1{color:ForestGreen !important;} H2{color:DarkOrange !important;} p{color:Black !important;} </style>



Here is a running list of project I'm working on or have worked on. 

# Robust Working Memory Through Stabilizing Plasticity (In Progress)

Authors: Leo Kozachkov, John Tauber, Mikael Lundqvist, Scott Brincat, Jean-Jacques Slotine, Earl K. Miller

[[Paper]](https://www.biorxiv.org/content/10.1101/2022.01.09.475558v1) [[Talk]](https://www.youtube.com/watch?v=xmC8CqSaZeg)

TLDR: We trained a non-human primate on a memory task. Then we recorded from its brain while it did the task. We expected the cells inside its brain to have a lot of 'information' about the item it was remembering. We found that this wasn't true--there wasn't a lot of information in the cells. This was very confusing. Then we trained artificial neural networks on the same task using deep learning and it became less confusing.

Abstract: Working memory has long been thought to arise from sustained spiking/attractor dynamics. However, recent work has suggested that short-term synaptic plasticity (STSP) may help maintain attractor states over gaps in time with little or no spiking. To determine if STSP endows additional functional advantages, we trained artificial recurrent neural networks (RNNs) with and without STSP to perform an object working memory task. We found that RNNs with and without STSP were both able to maintain memories over distractors presented in the middle of the memory delay. However, RNNs with STSP showed activity that was similar to that seen in the cortex of monkeys performing the same task. By contrast, RNNs without STSP showed activity that was less brain-like. Further, RNNs with STSP were more robust to noise and network degradation than RNNs without STSP. These results show that STSP can not only help maintain working memories, it also makes neural networks more robust.

# Recursive Construction of Stable Assemblies of Recurrent Neural Networks (2021)

Authors: Leo Kozachkov, Michaela Ennis, Jean-Jacques Slotine

[[Paper]](https://arxiv.org/abs/2106.08928) [[Open Review]](https://openreview.net/forum?id=qTBC7E4c454)

TLDR: Stability is hard to prove for recurrent neural networks. Even when you do prove it for one network, combining that network with another stable network might mess up all your hard work--the combined network will probably not be stable. We show that for certain stability conditions and combination types, you can avoid this problem--stability will be automatically conserved for the whole 'network of networks'. We show that these stable networks are better than other stable networks at doing stuff. 

Abstract: Advanced applications of modern machine learning will likely involve combinations of trained networks, as are already used in spectacular systems such as DeepMind's AlphaGo. Recursively building such combinations in an effective and stable fashion while also allowing for continual refinement of the individual networks - as nature does for biological networks - will require new analysis tools. This paper takes a step in this direction by establishing contraction properties of broad classes of nonlinear recurrent networks and neural ODEs, and showing how these quantified properties allow in turn to recursively construct stable networks of networks in a systematic fashion. The results can also be used to stably combine recurrent networks and physical systems with quantified contraction properties. Similarly, they may be applied to modular computational models of cognition. We perform experiments with these combined networks on benchmark sequential tasks (e.g permuted sequential MNIST) to demonstrate their capacity for processing information across a long timescale in a provably stable manner.

# Achieving Stable Dynamics in Neural Circuits (2020)

Authors: Leo Kozachkov, Mikael Lundqvist, Jean-Jacques Slotine, Earl K. Miller

[[Paper]](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1007659) [[Press]](https://picower.mit.edu/news/math-shows-how-brain-stays-stable-amid-internal-noise-and-widely-varying-world?fbclid=IwAR0o4TaX2XFfczCfu-iaZYODRhHKgpeFTcft3udFKEV4yHyODbt8fAk2ZhQ)

TLDR: The brain is bombarded by external input (sounds, sights, smells etc). It somehow stays stable despite that. We offer some theories explaining how. 

Scientific TLDR: Most stability-based theories in neuroscience (e.g Hopfield networks, line attractors, etc) assume either linearity of the neural dynamics or constant input. However the real brain is *very* nonlinear and driven by time-varying inputs. Despite this, neural trajectories observed in the brain are reproducible. Complex, but reproducible. Thus we looked for a stability condition which guaranteed convergence *between* neural trajectories, without reference to their asymptotic behavior. In other words, separate what the neurons *do* from the question of if they do it consistently. We found that many known synaptic mechanisms (e.g anti-Hebbian plasticity) give rise to this phenomenon. 

Abstract: The brain consists of many interconnected networks with time-varying, partially autonomous activity. There are multiple sources of noise and variation yet activity has to eventually converge to a stable, reproducible state (or sequence of states) for its computations to make sense. We approached this problem from a control-theory perspective by applying contraction analysis to recurrent neural networks. This allowed us to find mechanisms for achieving stability in multiple connected networks with biologically realistic dynamics, including synaptic plasticity and time-varying inputs. These mechanisms included inhibitory Hebbian plasticity, excitatory anti-Hebbian plasticity, synaptic sparsity and excitatory-inhibitory balance. Our findings shed light on how stable computations might be achieved despite biological complexity. Crucially, our analysis is not limited to analyzing the stability of fixed geometric objects in state space (e.g points, lines, planes), but rather the stability of state trajectories which may be complex and time-varying.

# Sequence Learning in Associative Neuronal-Astrocytic Networks (2018/2020)

Authors: Leo Kozachkov, Konstantinos P. Michmizos

[[Paper]](https://arxiv.org/pdf/1707.05649.pdf) (Second Best Paper Award at ICBI, 2020)

TLDR: The brain is mostly made up of cells that aren't neurons. These cells, glial cells, were once thought to be boring 'glue' that holds neurons together so that they can do the interesting stuff. That view has been challenged over the last 10 years or so by experimentalists. However there aren't many computational theories of what glial cells do in the brain. Here's one. 

Abstract: The neuronal paradigm of studying the brain has left us with limitations in both our understanding of how neurons process information to achieve biological intelligence and how such knowledge may be translated into artificial intelligence and its most brain-derived branch, neuromorphic computing. Overturning our fundamental assumptions of how the brain works, the recent exploration of astrocytes is revealing that these long-neglected brain cells dynamically regulate learning by interacting with neuronal activity at the synaptic level. Following recent experimental evidence, we designed an associative, Hopfield-type, neuronal-astrocytic network and analyzed the dynamics of the interaction between neurons and astrocytes. We show that astrocytes were sufficient to trigger transitions between learned memories in the neuronal component of the network. Further, we mathematically derived the timing of the transitions that was governed by the dynamics of the calciumdependent slow-currents in the astrocytic processes. Overall, we provide a brain-morphic mechanism for sequence learning that is inspired by, and aligns with, recent experimental findings. To evaluate our model, we emulated astrocytic atrophy and showed that memory recall becomes significantly impaired after a critical point of affected astrocytes was reached. This brain-inspired and brainvalidated approach supports our ongoing efforts to incorporate non-neuronal computing elements in neuromorphic information processing.

# The Causal Role of Astrocytes in Slow-Wave Rhythmogenesis: A Computational Modelling Study (2017)

Authors: Leo Kozachkov, Konstantinos P. Michmizos

TLDR: We show that simple biological facts about glial cells suggest a role for them in producing slow-wave neural oscillations. 

Abstract: Finding the origin of slow and infra-slow oscillations could reveal or explain brain mechanisms in health and disease. Here, we present a biophysically constrained computational model of a neural network where the inclusion of astrocytes introduced slow and infra-slow-oscillations, through two distinct mechanisms. Specifically, we show how astrocytes can modulate the fast network activity through their slow inter-cellular calcium wave speed and amplitude and possibly cause the oscillatory imbalances observed in diseases commonly known for such abnormalities, namely Alzheimer's disease, Parkinson's disease, epilepsy, depression and ischemic stroke. This work aims to increase our knowledge on how astrocytes and neurons synergize to affect brain function and dysfunction.

