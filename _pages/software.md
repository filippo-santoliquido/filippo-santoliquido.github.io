---
permalink: /software/
title: "Software"
header:
    image: software_header.jpg
    image_description: "Monte Pelvoux (3 946 m), Francia"
    caption: "Monte Pelvoux (3 946 m), Francia"
---

<img src="/assets/images/dingo_logo.png"  width="300" height="150">

[Dingo (Deep Inference for Gravitational-wave Observations)](https://dingo-gw.readthedocs.io/en/latest/) is a Python framework for gravitational-wave parameter estimation based on neural posterior estimation. Instead of running a sampler for every event, it trains a normalizing flow to represent the Bayesian posterior conditioned on the data, enabling amortized inference: once the network is trained, source parameters for new observations can be recovered in seconds rather than hours or days. This speed makes it well suited to the high event rates and rapid multi-messenger follow-up demanded by current and future detectors.

I am a user of Dingo and have applied it in my work on gravitational-wave inference ([Santoliquido et al. 2025](https://ui.adsabs.harvard.edu/abs/2025PhRvD.112j3015S/abstract), [2026](https://ui.adsabs.harvard.edu/abs/2026A%26A...708A.175S/abstract)). I also maintain a fork, [dingo-ET](https://github.com/filippo-santoliquido/dingo-ET), in which I implemented changes that adapt Dingo to next-generation detectors such as the Einstein Telescope, extending the pipeline to high-redshift signals these observatories will detect.


<img src="/assets/images/cosmorate_logo.png"  width="300" height="150">


cosmo$\mathcal{R}$ate is written in Python 
and evaluates the astrophysical rates of compact object mergers and the evolution of their properties across cosmic time [(Santoliquido et al. 2020)](https://ui.adsabs.harvard.edu/abs/2020ApJ...898..152S/abstract). 
It combines catalogues obtained through any formation channel with an observational-based prescription of the metallicity-dependent star formation rate. 
It is open source and available on <span style="color:orange">GitLab</span> at 
[https://gitlab.com/Filippo.santoliquido/cosmo_rate_public](https://gitlab.com/Filippo.santoliquido/cosmo_rate_public) [<img src="/assets/images/gitlab_logo.png" width="30" height="15">](https://gitlab.com/Filippo.santoliquido/cosmo_rate_public)






<img src="/assets/images/galaxyrate_logo.png"  width="200" height="100">


galaxy$\mathcal{R}$ate is written in Jupyter Notebooks and is a unique tool for studying in an unravelled fast way the properties of host galaxies of compact object mergers [(Santoliquido et al., 2022)](https://ui.adsabs.harvard.edu/abs/2022MNRAS.516.3297S/abstract). 
<!-- galaxy$\mathcal{R}$ate requires a minimal set of assumptions on observational scaling relations. -->
It is open source and available on <span style="color:orange">GitLab</span> at [https://gitlab.com/Filippo.santoliquido/galaxy_rate_open](https://gitlab.com/Filippo.santoliquido/galaxy_rate_open) [<img src="/assets/images/gitlab_logo.png" width="30" height="15">](https://gitlab.com/Filippo.santoliquido/galaxy_rate_open)
