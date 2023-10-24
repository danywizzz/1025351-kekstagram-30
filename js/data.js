const USERNAMES = ['Александра', 'Андрей', 'Екатерина', 'Иван', 'Мария', 'Сергей'];

const DESCRIPTIONS = [
  'Лучший способ начать день - с чашки кофе ☕️',
  'Никогда не забывайте, что вы - уникальны 🌟',
  'Сегодняшний день - это подарок, поэтому не забудьте наслаждаться каждым моментом 🎁',
  'Жизнь - это приключение, и я готов к нему 🌍',
  'Никогда не переставайте мечтать 💭',
  'Я люблю свою работу, потому что она позволяет мне быть творческим 🎨',
  'Никогда не забывайте, что вы можете достичь всего, что захотите 💪',
  'Сегодняшний день - это новая возможность стать лучше, чем вчера 🌅',
  'Я верю в себя и свои возможности 🙌',
  'Жизнь - это путешествие, а я готов к нему 🚀'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

import {getRandomItem, getRandomInteger} from './utilities.js';

const createCommentsData = (itemCount) => new Array(itemCount).fill(1).map((it, index) => ({
  id: it + index,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomItem(MESSAGES),
  name: getRandomItem(USERNAMES)
}));

const createPicturesData = (itemCount) => new Array(itemCount).fill(1).map((it, index) => ({
  id: it + index,
  url: `photos/${it + index}.jpg`,
  description: getRandomItem(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: createCommentsData(getRandomInteger(0, 30))
}));

export {createPicturesData};
