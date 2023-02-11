let phrases = [
    { text: 'Мухамед', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif' },
    { text: 'Алим', image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png' },
    { text: 'Астемир', image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png' },
    { text: 'Муаед', image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png' },
    { text: 'Марита', image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png' }
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');
  
  button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);
  });
 