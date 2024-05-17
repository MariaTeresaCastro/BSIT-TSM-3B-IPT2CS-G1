const input = document.getElementById('input');
const search_btn = document.getElementById('search_btn');
const apiKey = '87ba6aaf-16b8-4d00-8018-c8cd6c1d3b71';
const not_found = document.querySelector('.not_found');
const defination_box = document.querySelector('.def');
const audio_box = document.querySelector('.audio');


search_btn.addEventListener('click', e => {
    e.preventDefault();

    const word = input.value;
    if (word === "") {
        alert('Please type a word');
        return;
    }

    dataGet(word);

    audio_box.innerHTML = "";
    not_found.innerText = "";
    defination_box.innerText = "";
});

async function dataGet(word) {
    const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${apiKey}`);
    const data = await response.json();
    console.log(data);

    if (!data.length) {
        not_found.innerText = 'No result found';
        return;
    }

    if (typeof data[0] === 'string') { // if result is suggestions
        let heading = document.createElement('h3');
        heading.innerText = 'Did you mean?';
        not_found.appendChild(heading);

        data.forEach(element => {
            let suggestion = document.createElement('span');
            suggestion.classList.add('suggested');
            suggestion.innerText = element;
            not_found.appendChild(suggestion);
        })
        return;
    }

    let defination = data[0].shortdef[0];// find the result
    defination_box.innerText = defination;

    let sound_name = data[0].hwi.prs[0].sound.audio;
    if (sound_name) { // if sound is available
        soundRender(sound_name);
    }
}

function soundRender(sound_name) {
    let sub_folder = sound_name.charAt(0);
    let sound_src = `https://media.merriam-webster.com/soundc11/${sub_folder}/${sound_name}.wav?key=${apiKey}`;

    let aud = document.createElement('audio');
    aud.src = sound_src;
    aud.controls = true;
    audio_box.appendChild(aud)
}

particlesJS("particles-js", {
    particles: {
      number: {
        value: 210,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#b01279", "#3b48a4", "#5ebaa5"]
      },
      shape: {
        type: "polygon",
      },
      opacity: {
        value: 0.8,
        random: false,
        anim: {
          enable: false,
          speed: 10,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 8,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "bounce",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });