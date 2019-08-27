var skillset = {
    'CxSystem': {
        'Programming/Scripting Languages': ['Python', 'JavaScript', 'HTML/CSS'],
        'Tools/Frameworks': ['Git', 'Pycharm'],
        'OS': ['Windows', 'Linux: Ubuntu', 'MacOS'],
        'Other Skills': ['HPC'],
        'description': `CxSystem is a simulation framework, which operates on personal computers. 
                        We have tested the simulation software with a simplified version of a comprehensive cortical microcircuit model,
                         which is available as configuration file. The CxSystem aims at easy testing and buildup of diverse models at single 
                         cell resolution. Implemented on the top of the Python-based Brian2 simulator, CxSystem supports the main goal of Brian, 
                         i.e. minimizing development time, by providing the user with a simplified interface. The code is available in 
                         <a href="https://github.com/VisualNeuroscience-UH/CxSystem" target="_blank">GitHub</a>.`
    },
    'MUD-Visualizer': {
        'Programming/Scripting Languages': ['JavaScript', 'HTML/CSS'],
        'Tools/Frameworks': ['Git', 'Electron', 'VS-Code'],
        'OS': ['Windows', 'Linux: Ubuntu', 'MacOS'],
        'Other Skills': [],
        'description': `As a software engineer intern at Cisco, I developed a visualizer for Manufacturer Usage Description (MUD) files. 
                        The code is available in <a href="https://github.com/Vafa-Andalibi/MUD-Visualizer" target="_blank">GitHub</a>.`
    },
    'Parking Monitoring': {
        'Programming/Scripting Languages': ['Wiring'],
        'Tools/Frameworks': ['Particle IDE'],
        'OS': ['Linux: Ubuntu'],
        'Other Skills': ['Prototyping', 'Image Processing'],
        'description': `In this project we developed a image processing based low-power solution using Particle Photon for parking lots where users can 
                        check available parking spots online.`
    },
    'Paradox Catcher': {
        'Programming/Scripting Languages': ['Python'],
        'Tools/Frameworks': ['Git', 'UML', 'Pycharm'],
        'OS': ['Linux: Ubuntu'],
        'Other Skills': ['Machine Learning'],
        'description': `ParadoxCatcher is a tool to generate valid configurations for spoofing to resist web tracking. 
                        The code is available in <a href="https://github.com/ParadoxCatcher/ParadoxCatcher" target="_blank">GitHub</a> 
                        and the paper is available <a href="https://helda.helsinki.fi/bitstream/handle/10138/232259/And.pdf?sequence=1" target="_blank">here</a>.`
    },
    'Securtle': {
        'Programming/Scripting Languages': ['Python'],
        'Tools/Frameworks': ['Git'],
        'OS': ['Linux: Raspbian'],
        'Other Skills': ['Prototyping'],
        'description': `Securtle uses simple colors, changing hues, intensity, and adding a blinking feature, to communicate the risk level of a home network. 
                Securtle uses both passive and active BL/BLE and Wi-Fi tools to rate  the real timerisks of a specific local installations of 
                    Internet of Things (IoT). `
    },

    'Auto-Scheduler': {
        'Programming/Scripting Languages': ['Google Apps Script'],
        'Tools/Frameworks': ['G-Suite'],
        'OS': [],
        'Other Skills': [],
        'description': `Google-Tasks-Autoscheduler reads from the note section of the tasks in your Google Tasks and automatically plan your daily routine in an 
                        efficient way so to meet your goals. The tasks are either recurrent, e.g. practice 
                        piano every two days, or one-time, e.g. Math Exercise, or extendable deadlines, e.g. weekly assignments. 
                        The code is available in <a href="https://github.com/Vafa-Andalibi/google-tasks-autoscheduler" target="_blank">GitHub</a>.`
    },
    'Cloudmesh': {
        'Programming/Scripting Languages': ['Python'],
        'Tools/Frameworks': ['Git', 'Pycharm'],
        'OS': ['Windows', 'Linux: Ubuntu', 'MacOS'],
        'Other Skills': ['DevOps'],
        'description': `I had the opportunity to contribute to Cloudmesh project. 
                        Cloudmesh enables you to access multi-cloud environments such as AWS, Azure, Google, and OpenStack Clouds very easily. 
                        The repository that I was mostly contributed to is available in <a href="https://github.com/cloudmesh/cloudmesh-cloud" target="_blank">GitHub</a>.
                        `
    },

    'Activity Trackers': {
        'Programming/Scripting Languages': ['Python'],
        'Tools/Frameworks': ['Pycharm'],
        'OS': ['Windows'],
        'Other Skills': ['Machine Learning'],
        'description': `In this project the performance of six activity trackers were evaluated and a regression-based method were proposed to 
                        improve the precision of the trackers. The paper is available <a href="https://www.researchgate.net/profile/Francois_Christophe/publication/277475610_Data_Correction_for_Seven_Activity_Trackers_Based_on_Regression_Models/links/55b7398208aed621de04539e/Data-Correction-for-Seven-Activity-Trackers-Based-on-Regression-Models.pdf" target="_blank">here</a>.`
    },
    'CUDA-Cox': {
        'Programming/Scripting Languages': ['CUDA', 'Python'],
        'Tools/Frameworks': ['Pycharm'],
        'OS': ['Linux: Ubuntu'],
        'Other Skills': ['HPC'],
        'description': `The Cox method has been thoroughly tested using multiple sets of data generated by the neural network model. 
                        In this project attempts are made to implement the Cox method in CUDA to speed up the runtime. The code is available in 
                        <a href="https://github.com/Vafa-Andalibi/CUDA_Cox" target="_blank">GitHub</a> and the paper is available
                        <a href="https://ieeexplore.ieee.org/abstract/document/7549047" target="_blank">here</a>.
                        `
    },
    'Dark-Sky': {
        'Programming/Scripting Languages': ['C'],
        'Tools/Frameworks': ['Git', 'CLion', 'KiCAD', 'CubeMX'],
        'OS': ['Linux: Ubuntu'],
        'Other Skills': ['Embedded Design', 'Prototyping'],
        'description': `Design and implementation of a light pollution measurement system for Hoosier National Forest,
                        including specification, hardware, software, and mechanical/environmental design. More information about the project is a available
                        <a href="https://shc.indiana.edu/doc/Final%20Bryce-Dark-Skies-Report.pdf" target="_blank">here</a>.`
    },
    // '': { 
    //         'Programming/Scripting Languages': [], 
    //         'Tools/Frameworks': [], 
    //         'OS': [], 
    //         'Other Skills': [] 
    //     },
}

var journal_bibtex = [
    `@article{christophe2015survey,
        title={Survey and evaluation of neural computation models for bio-integrated systems},
        author={Christophe, Francois and Andalibi, Vafa and Laukkarinen, Teemu and Mikkonen, Tommi and Koskimies, Kai},
        journal={Nano Communication Networks},
        volume={6},
        number={4},
        pages={155--165},
        year={2015},
        publisher={Elsevier}
      }`,
    `@article{honko2015w2e,
        title={W2E---Wellness Warehouse Engine for Semantic Interoperability of Consumer Health Data},
        author={Honko, Harri and Andalibi, Vafa and Aaltonen, Timo and Parak, Jakub and Saaranen, Mika and Viik, Jari and Korhonen, Ilkka},
        journal={IEEE journal of biomedical and health informatics},
        volume={20},
        number={6},
        pages={1632--1639},
        year={2015},
        publisher={IEEE}
      }`,
    `@article{andalibi2019controlling,
        title={Controlling complexity of cerebral cortex simulations—I: CxSystem, a flexible cortical simulation framework},
        author={Andalibi, Vafa and Hokkanen, Henri and Vanni, Simo},
        journal={Neural computation},
        volume={31},
        number={6},
        pages={1048--1065},
        year={2019},
        publisher={MIT Press}
      }`,
    `@article{hokkanen2019controlling,
        title={Controlling complexity of cerebral cortex simulations—II: Streamlined microcircuits},
        author={Hokkanen, Henri and Andalibi, Vafa and Vanni, Simo},
        journal={Neural computation},
        volume={31},
        number={6},
        pages={1066--1084},
        year={2019},
        publisher={MIT Press}
      }`,
    `@article{christophe2017building,
        title={Building wireless sensor networks with biological cultures: components and integration challenges},
        author={Christophe, Francois and Laukkarinen, Teemu and Mikkonen, Tommi and Massera, Jonathan and Andalibi, Vafa},
        journal={International Journal of Parallel, Emergent and Distributed Systems},
        volume={32},
        number={1},
        pages={56--73},
        year={2017},
        publisher={Taylor \& Francis}
      }`,
    `@article{andalibi2016effective,
        title={Effective Connectivity Analysis in Brain Networks: A GPU-Accelerated Implementation of the Cox Method},
        author={Andalibi, Vafa and Christophe, Francois and Laukkarinen, Teemu and Mikkonen, Tommi},
        journal={IEEE Journal of Selected Topics in Signal Processing},
        volume={10},
        number={7},
        pages={1226--1237},
        year={2016},
        publisher={IEEE}
      }`

]

var conference_bibtex = [
    `@inproceedings{andalibi2015data,
        title={Data correction for seven activity trackers based on regression models},
        author={Andalibi, Vafa and Honko, Harri and Christophe, Francois and Viik, Jari},
        booktitle={37th Annual International Conference of the IEEE Engineering in Medicine and Biology Society (EMBC)},
        pages={1592--1595},
        year={2015},
        organization={IEEE}
      }`,
    `@inproceedings{christophe2015pattern,
        title={Pattern recognition with spiking neural networks: a simple training method.},
        author={Christophe, Fran{\c{c}}ois and Mikkonen, Tommi and Andalibi, Vafa and Koskimies, Kai and Laukkarinen, Teemu},
        booktitle={SPLST},
        pages={296--308},
        year={2015}
      }`,
    `@inproceedings{andalibi2017analysis,
        title={Analysis of Paradoxes in Fingerprint Countermeasures},
        author={Andalibi, Vafa and Christophe, Francois and Mikkonen, Tommi and others},
        booktitle={Proceedings of the 21st Conference of Open Innovations Association FRUCT, University of Helsinki, Helsinki, Finland},
        year={2017},
        organization={FRUCT Oy}
      }`,
    `@inproceedings{andalibi2019throwing,
        title={Throwing MUD into the FOG: Defending IoT and Fog by expanding MUD to Fog network},
        author={Andalibi, Vafa and Kim, DongInn and Camp, Jean},
        booktitle={2nd $\{$USENIX$\}$ Workshop on Hot Topics in Edge Computing (HotEdge 19)},
        year={2019}
      }`,
    `@inproceedings{andalibi2016simea,
        title={SiMEA: a Framework for simulating neurons on Multi-Electrode Array},
        author={Andalibi, Vafa and Aaltonen, Timo and Christophe, Francois and Mikkonen, Tommi},
        booktitle={38th Annual International Conference of the IEEE Engineering in Medicine and Biology Society (EMBC)},
        pages={5965--5968},
        year={2016},
        organization={IEEE}
      }`,
    `@article{christophesilico,
        title={From in-silico Spiking Neural Networks to in-vitro Neural Networks},
        author={Christophe, Francois and Andalibi, Vafa and Lenk, Kerstin and Mikkonen, Tommi and Hyttinen, Jari},
        booktitle={38th Annual International Conference of the IEEE Engineering in Medicine and Biology Society (EMBC)},
        year={2016},
      }`
]