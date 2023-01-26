const wordEndings = {
  'dayEndings': {
    firstState: 'дней',
    secondState: 'день',
    thirdState: 'дня',
    fourthState: 'дней',
  },
  'hourEndings': {
    firstState: 'часов',
    secondState: 'час',
    thirdState: 'часа',
    fourthState: 'часов',
  },
  'minutEndings': {
    firstState: 'минут',
    secondState: 'минута',
    thirdState: 'минуты',
    fourthState: 'минут',
  },
  'secondEndings': {
    firstState: 'секунд',
    secondState: 'секунда',
    thirdState: 'секунды',
    fourthState: 'секунд',
  },
};

export const inclineWord = (num, type) => {
  let n = num ? num.toString() : '1';
  let last = n.slice(-1);
  let twoLast = n.slice(-2);
  if (twoLast === '11' || twoLast === '12' || twoLast === '13' || twoLast === '14') {
    return `${wordEndings[type].firstState}`;
  }
  if (last === '1') {
    return `${wordEndings[type].secondState}`;
  }
  if (last === '2' || last === '3' || last === '4') {
    return `${wordEndings[type].thirdState}`;
  }
  return `${wordEndings[type].fourthState}`;
};
