import { linkUrl } from './regexp';

const ruleTexts = {
  required: 'Поле обов\'язково має бути заповнене',
  minLength: (minLength) => `У полі має бути більше ${minLength} символів`,
  maxLength: (maxLength) => `У полі має бути менше ${maxLength} символів`,
};

const linck = { value: linkUrl, message: 'Поле має містити лише посилання' };

export const quizRules = {

  quizz: {
    required: { value: true, message: ruleTexts.required },
    minLength: { value: 3, message: ruleTexts.minLength(3) },
    maxLength: { value: 15, message: ruleTexts.maxLength(15) },
  },

  description: {
    required: { value: true, message: ruleTexts.required },
    minLength: { value: 100, message: ruleTexts.minLength(100) },
    maxLength: { value: 1000, message: ruleTexts.maxLength(1000) },
  },

  img: {
    required: { value: true, message: ruleTexts.required },
    pattern: linck,
  },

};
