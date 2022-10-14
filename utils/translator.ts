const ALPHABETH = 'ㄱㄴㄷㄹㅁㅂㅅㅐㅈㅊㅋㅌㅍㅎㅏㅑㅓㅕㅗㅛㅜㅠㅡㅣ';

const typeThis = (charsPerTime = 3, delay = 1, el, txt, i = 0) => {
  const length = txt.length;
  let chars = charsPerTime;

  chars = length / 35;
  if (i <= txt.length) {
    const newText = txt.slice(0, chars + i) + el.textContent.slice(i + chars, txt.length);
    el.textContent = newText;
    i += chars;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setTimeout(() => typeThis(chars, delay, el, txt, i), delay);
  }
};

function hasWhiteSpace(s) {
  if (!s) {
    return false;
  }
  const whitespaceChars = [' ', '\t', '\n'];
  return whitespaceChars.some((char) => s.includes(char));
}

export const typeWriter = (carsPerTime = 3, delay = 1): void => {
  const allElements = Array.from(document.getElementsByTagName('*'));

  // Skip script and img
  const whiteList = ['h2', 'p', 'pre', 'span', 'h3'];
  const changeAbleElements = Array.from(
    allElements.filter((element) => {
      return whiteList.includes(element.tagName.toLowerCase());
    })
  );
  const originalTexts = [];

  for (const element of changeAbleElements) {
    const originalText = element.textContent;
    const textLength = originalText.length;
    let randomText = '';
    originalTexts.push(originalText);

    for (let i = 0; i <= textLength; i++) {
      const isSpace = hasWhiteSpace(originalText[i]);
      if (!isSpace) {
        const index = Math.floor(Math.random() * ALPHABETH.length);
        randomText += ALPHABETH[index];
      }
    }
    element.textContent = randomText;
  }

  for (let i = 0; i < changeAbleElements.length; i++) {
    const el = changeAbleElements[i];
    const ogText = originalTexts[i];
    typeThis(carsPerTime, delay, el, ogText, 0);
  }
};
