document.addEventListener('DOMContentLoaded',()=>{
  const textElement = document.querySelector('#intro-text');
  const originalText = textElement.textContent;
    textElement.textContent = '';

    let i = 0;
    const typingInterval=setInterval(()=>{
      if (i < originalText.length)
        {
          textElement.textContent += originalText.charAt(i);
          i++;
        }
    },35);
});
