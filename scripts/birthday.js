document.addEventListener('DOMContentLoaded', function () {
  const greetings = [
    "Happy Birthday! You're not getting older, just more distinguished!",
    "Happy Birthday! Don't worry, you don't look a day over fabulous!",
    "Happy Birthday! Another year older, but still looking as young and gorgeous as ever!",
    "Happy Birthday! Don't let aging get you down. It's too hard to get back up!",
    "Happy Birthday! You're not just a year older, you're also a year wiser. And probably a lot funnier too!",
    "Happy Birthday! Age is just a number, and you're rocking it!",
    "Happy Birthday! You're not just a year older, you're also a year closer to being able to do whatever you want and not caring what anyone thinks!",
    "Happy Birthday! Another year of fabulousness has begun!",
    "Happy Birthday! May your day be filled with laughter, cake, and lots of love!",
    "Happy Birthday! Don't worry, getting older just means you're becoming a vintage classic!",
    "Happy Birthday! Remember, age is just a number. And in your case, it's a very small number!",
    "Happy Birthday! You're not just getting older, you're also getting more awesome!",
    "Happy Birthday! You're not aging, you're just becoming more iconic!",
    "Happy Birthday! May all your birthday wishes come true, except for the one where you ask for more candles on your cake!",
    "Happy Birthday! You're not just another year older, you're also another year more amazing!",
    "Happy Birthday! You're like a fine wine - you just keep getting better with age!",
    "Happy Birthday! Don't worry about getting older, you're still hot as ever!",
    "Happy Birthday! You're not just getting older, you're also becoming more distinguished and sophisticated!",
    "Happy Birthday! Don't worry about aging, you're like a superhero - you just keep getting stronger!",
    "Happy Birthday! You're not just getting older, you're also becoming more wise and experienced!",
    "Happy Birthday! Don't worry about getting older, you're just adding more chapters to your amazing life story!",
    "Happy Birthday! Another year of awesomeness has just begun!",
    "Happy Birthday! You're not just a year older, you're also a year closer to being able to do whatever you want and not caring what anyone thinks!",
    "Happy Birthday! May your day be filled with lots of love, laughter, and cake!",
    "Happy Birthday! You're not just getting older, you're also getting better!",
    "Happy Birthday! You're not just another year older, you're also another year more fabulous!",
    "Happy Birthday! May all your birthday wishes come true, except for the one where you ask for more candles on your cake!",
    "Happy Birthday! You're not aging, you're just getting more stylish!",
    "Happy Birthday! You're not just another year older, you're also another year more awesome!",
    "Happy Birthday! It's your special day - let's party like it's your birthday!"
  ];

  const greetingBtn = document.getElementById('greeting-btn');
  const greetingEl = document.getElementById('greeting');
  const imagesContainer = document.getElementById('images-container');
  const container = document.querySelector('.container');

  const images = [
    './images/blue_balloon.png',
    './images/red_balloon.png',
    './images/yellow_balloon.png'
  ];

  let count = 0;

  const uniqueGreetings = [...greetings];
  const colorCounts = { red: 0, blue: 0, yellow: 0 };

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffleArray(uniqueGreetings);

  function displayGreeting() {
    if (uniqueGreetings.length === 0) return;

    const randomGreeting = uniqueGreetings.pop();
    greetingEl.style.opacity = 0;
    setTimeout(() => {
      greetingEl.innerHTML = randomGreeting;
      greetingEl.style.opacity = 1;
    }, 300);

    let color;
    do {
      color = Object.keys(colorCounts)[Math.floor(Math.random() * 3)];
    } while (colorCounts[color] >= 10);

    colorCounts[color]++;
    const balloonImage = `./images/${color}_balloon.png`;

    const imageEl = document.createElement('img');
    imageEl.src = balloonImage;
    imageEl.classList.add('balloon');
    imageEl.style.opacity = 0;

    const currentBalloonCount = imagesContainer.childElementCount;

    if (currentBalloonCount < 30) {
      const screenWidth = window.innerWidth;
      const greetingHeight = greetingEl.getBoundingClientRect().height;
      const buttonTop = greetingBtn.getBoundingClientRect().top;
      const balloonWidth = 60;
      const balloonsPerRow = Math.floor(screenWidth / balloonWidth);
      const rowIndex = Math.floor(currentBalloonCount / balloonsPerRow);
      const columnIndex = currentBalloonCount % balloonsPerRow;

      const x = columnIndex * balloonWidth;
      const y = greetingHeight + rowIndex * balloonWidth + 20 - 30;

      imageEl.style.left = `${x}px`;
      imageEl.style.top = `${y}px`;

      imagesContainer.appendChild(imageEl);

      setTimeout(() => {
        imageEl.style.opacity = 1;
        imageEl.style.transform = 'translateY(0)';
      }, 300);
    }

    if (currentBalloonCount === 29) {
      greetingBtn.disabled = true;
      greetingBtn.textContent = "You are too fabulous to be any older!";
    }
  }
  
  greetingBtn.addEventListener('click', displayGreeting);
});
