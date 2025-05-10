// 💗 Heart trail on mousemove (except over the heart button)
document.addEventListener('mousemove', (e) => {
  const isOverHeart = e.target.closest('#heartDiv');
  if (isOverHeart) return;

  const heart = document.createElement('span');
  heart.classList.add('heart');
  heart.style.left = e.pageX + 'px';
  heart.style.top = e.pageY + 'px';
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 2000);
});

// 🎯 Elements
const heartDiv = document.getElementById('heartDiv');
const loveMessage = document.getElementById('loveMessage');
const closeBtn = document.querySelector('#loveMessage .close');
const body = document.querySelector('body');

// 💌 Show the love message
heartDiv.addEventListener('click', () => {
  loveMessage.classList.remove('hidden');
});

// 💔 Close the love message
closeBtn.addEventListener('click', () => {
  loveMessage.classList.add('hidden');
});

document.body.addEventListener('click', (e) => {
  const heart = document.createElement('img');
  console.log("Splendid is my true love HAHAHHAHAHAHAHAHAHHAH")
  heart.src = 'heart.png'; // Make sure this matches your file name and location
  heart.style.position = 'absolute';
  heart.style.left = `${e.clientX}px`;
  heart.style.top = `${e.clientY}px`;
  heart.style.width = '50px';
  heart.style.height = '50px';
  heart.style.pointerEvents = 'none'; // so it doesn’t block clicks
  heart.style.zIndex = 9999;
  heart.style.transform = 'translate(-50%, -50%)'; // center the heart on the click

  document.body.appendChild(heart);

  // Optional: fade out and remove after 1 second
  setTimeout(() => {
    heart.style.transition = 'opacity 0.5s ease-out';
    heart.style.opacity = 0;
    setTimeout(() => heart.remove(), 500);
  }, 500);
});