---
permalink: /chile/
title: "Hands-on section at Universidad Andrés Bello"
header:
  image: "chile_header.jpg"
  image_description: "Civita d'Antino, Italia (904 m)"
  caption: "Civita d'Antino, Italia (904 m)"
---

Here you can find the hands-on section exercises on cosmo$\mathcal{R}$ate held at Universidad Andrés Bello on August 6, 2024. Any comment is welcome. 

[Here](/assets/images/PopIII_Chile.pdf){: .btn--research}, you can download the slides used during the seminar. 

### Installation

- To clone cosmo$\mathcal{R}$ate [repository](https://gitlab.com/Filippo.santoliquido/cosmo_rate_public) (~ 60 MB) launch in a terminal:

	```
	git clone https://gitlab.com/Filippo.santoliquido/cosmo_rate_public.git
	```

- move to the folder you just downloaded:
	
	```
	cd cosmo_rate_public
	```

- install the conda envirorment following the  [instruction](https://gitlab.com/Filippo.santoliquido/cosmo_rate_public/-/blob/v2/README.md?ref_type=heads) found under **Installation**

- download cosmo$\mathcal{R}$ate [userguide](/assets/images/BrazilLectures/cosmorate_user_guide.pdf){: .btn--research} to learn how to use the code and interpret the output

- open Jupyter lab by launching in the terminal and in the folder ```cosmo_rate_public```:
	
	```
	jupyter lab
	```

### Exercise
	
The goal of this exercise is to make a plot of the merger rate density of binary black holes generated from Population III stars. We will change both the star formation rate and the initial conditions of the binary systems that generated these black holes. We will do that by modifying ```cosmo_params.py``` only. 
	
<div style="border: 2px solid red; padding: 5px; border-radius: 8px;">
  <strong>Warning:</strong> Please do not modify <code>
cosmo_rate_notebook.ipynb</code> or <code>cosmo_functions.py</code>
</div>
	
	
	
	

We need to change the default value of the following variables:

- ```cb_class = ['BBH']```
- ```Z_simulated = [1e-11]``` (You can comment and uncomment)
- ```formation_channel = 'popIII'```
- ```sim = 'popIII/LOG1/'```
- ```extension = '.dat'```
- ```N_z_bins = 400```
- ```zMAX = 40```
- ```pop = 'III'```
- ```SFRD_model = 'A-sloth_smooth_off'``` 

Run cosmo$\mathcal{R}$ate by launching ```cosmo_rate_notebook.ipynb```. You can do that by going to Kernel > Restart Kernel and Run all cells


<div style="border: 2px solid green; padding: 5px; border-radius: 8px;">
  Call me to check everything worked smoothly 😀
</div>
 
	  
Repeat this procedure for ```'LAR1'``` with ```'Jaacks'```, and for ```'TOP5'``` with ```'Skinner_smooth_off'```.

Make a plot with these three different models of the merger rate density of Pop. III BBHs. 
