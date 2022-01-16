---
tags: computers math+science
---

This works for me.  First you need to ssh into your remote machine with:

`ssh -L 8001:localhost:8888 -L 16006:127.0.0.1:6006 leo@my_server_ip`

The command `-L 8001:localhost:8888` transfers the port 8888 of the remote server into the port 8001 of the local machine you're using.  The command `-L 16006:127.0.0.1:6006` transfers the port 6006 of the remote server into the port 16006 of the local machine you're using. 

Then, you can launch tensorboard on your remote server with 

`--logdir <logs_directory> --port 6006`

and on your local machine go to [http://127.0.0.1:16006](http://127.0.0.1:16006/) in your browser. Now you can launch jupyter lab (for example) on your remote server by navigating to the top directory you want open and typing:

`jupyter lab`

and then on your local machine go to http://localhost:8001/ in your browser. 

