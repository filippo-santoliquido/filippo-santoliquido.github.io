---
permalink: /Brazil/
title: "Cosmological History: from Gravitational Waves to Exoplanets"
header:
    image: Brazil_header.jpg
    image_description: "La catena del Gran Sasso, Italia"
    caption: "La catena del Gran Sasso, Italia"
---

Here you can find the slides and the hands-on section exercises we used during the course on **Gravitational Wave Astrophysics**. Any comment is welcome. 

Check [school website](https://www.ictp-saifr.org/chgwe2024/) for further information

## Lectures


[Lecture 1](/assets/images/BrazilLectures/Lecture_1.pdf){: .btn--research} [Lecture 2](/assets/images/BrazilLectures/Lecture_2.pdf){: .btn--research} [Lecture 3](/assets/images/BrazilLectures/Lecture_3.pdf){: .btn--research} [Lecture 4](/assets/images/BrazilLectures/Lecture_4.pdf){: .btn--research}

## Hands-on

### Section 1

- clone cosmo$\mathcal{R}$ate repository 
[https://gitlab.com/Filippo.santoliquido/cosmo_rate_public](https://gitlab.com/Filippo.santoliquido/cosmo_rate_public) 

- install the conda envirorment following the instruction 

- activate the envirorment by doing  ```conda activate cosmo_env```

- clone ```GWFish``` git repository at [https://github.com/janosch314/GWFish](https://github.com/janosch314/GWFish) 

- open and run the notebook ```gwfish_tutorial.ipynb``` (ignore conda environment instructions)

- [hint](https://lscsoft.docs.ligo.org/lalsuite/lalsimulation/group___l_a_l_sim_inspiral__h.html#gab955e4603c588fe19b39e47870a7b69c) :)

### Section 2

- download cosmo$\mathcal{R}$ate [userguide](/assets/images/BrazilLectures/cosmorate_user_guide.pdf){: .btn--research} to learn how to use the code
- **Exercises**: 
	- create a figure where you compare the primary mass distribution $m_1$
at diﬀerent redshifts ($z = 0, 2, 8$) of binary black holes (BBHs) evaluated with two diﬀerent values of $\sigma_Z = 0.1, 0.6$. Use the astrophysical model provided. *Hint:* you need to update also the variable ```sim_name```
	- Do the same for BHNSs

### Section 3

- download [this Jupyter notebook](/assets/images/BrazilLectures/tsunami_sevn_analysis.ipynb) and [this file](/assets/images/BrazilLectures/tsunami_sevn_data.h5) containing the catalogs (~ 10 MB). Open ```jupyter lab``` with  ```cosmo_env``` kernel in the same folder where you downloaded the data. [*A special thank goes to [Alessandro Trani](https://nbia.nbi.ku.dk/members/postdoctoral-fellows/nbia-alessandro-trani/) for preparing this exercises.*] 
