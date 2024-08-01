---
permalink: /chile/
title: "Hands-on section at Universidad Andrés Bello"
header:
  image: "chile_header.jpg"
  image_description: "Civita d'Antino, Italia (904 m)"
  caption: "Civita d'Antino, Italia (904 m)"
---

Here you can find the hands-on section exercises on cosmo$\mathcal{R}$ate held at Universidad Andrés Bello on August 6, 2024. Any comment is welcome. 

### Instructions

- To clone cosmo$\mathcal{R}$ate [repository](https://gitlab.com/Filippo.santoliquido/cosmo_rate_public) (~ 60 MB) launch in a terminal:
```git clone https://gitlab.com/Filippo.santoliquido/cosmo_rate_public.git```

- move to the folder you just downloaded:
```cd cosmo_Rate_public```

- install the conda envirorment following the  [instruction](https://gitlab.com/Filippo.santoliquido/cosmo_rate_public/-/blob/v2/README.md?ref_type=heads) found under **Installation**

- download cosmo$\mathcal{R}$ate [userguide](/assets/images/BrazilLectures/cosmorate_user_guide.pdf){: .btn--research} to learn how to use the code and interpret the output

- open Jupyter lab by launching in the terminal and in the folder ```cosmo_Rate_public```:
```jupyter lab```

- **Exercise**: 
	The goal of this exercise is to make a plot of the merger rate density of binary black holes generated from Population III stars. We will change both the star formation rate and the initial conditions of the binary systems that generated these black holes. We will do that by modifying ```cosmo_params.py``` only. 
	<div style="border: 2px solid red; padding: 10px; border-radius: 5px;">
  <strong>Warning:</strong> Please do not modify ```cosmo_rate_notebook.ipynb``` or ```cosmo_functions.py```
</div>
	- change ```cb_class``` to ```cb_class = ['BBH']```
	- change ```Z_simulated``` to ```Z_simulated = [1e-11]``` (You can comment and uncomment)
	- change ```formation_channel``` to ```formation_channel = 'iso'```
	- change ```sim_name``` to ```sim_name='popIII/LOG1/'```
	- change ```extension``` to ```extension='.dat'```
	- change ```N_z_bins``` to ```N_z_bins = 400```
	- change ```zMAX``` to  ```zMAX = 40```
	- change ```pop``` to ```pop = 'III'```
	- change ```SFRD_model``` to  ```SFRD_model = 'A-sloth_smooth_off'``` 
	- run cosmo$\mathcal{R}$ate by launching ```cosmo_rate_notebook.ipynb```. You can do that by going to Kernel > Restart Kernel and Run all cells
	- Call me to check everything worked smoothly 
	  
Repeat this procedure for ```'LAR1'``` with ```'Jaacks'```, and for ```'TOP5'``` with ```''Skinner_smooth_off''```.

Make a plot with these three different models of the merger rate density of Pop. III BBHs. 
