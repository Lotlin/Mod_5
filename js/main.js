'use strict';

const spam = document.querySelector('.ads');
spam.remove();

const itemOne = document.querySelector('.item_one');
const itemTwo = document.querySelector('.item_two');
const itemThree = document.querySelector('.item_three');
const itemFour = document.querySelector('.item_four');
const itemFive = document.querySelector('.item_five');
const itemSix = document.querySelector('.item_six');

itemOne.after(itemTwo);
itemTwo.after(itemThree);
itemThree.after(itemFour);

const propTwoMixedUp = itemSix.querySelectorAll('.props__item_two');
const propsListTwo = itemTwo.querySelector('.props__list');
propsListTwo.append(propTwoMixedUp[0]);
propsListTwo.append(propTwoMixedUp[1]);

const propsThreeInFive = itemFive.querySelector('.props__list');
const clonePropsThree = propsThreeInFive.cloneNode(true);
const propsFiveInThree = itemThree.querySelector('.props__list');
const clonePropsFive = propsFiveInThree.cloneNode(true);
propsFiveInThree.replaceWith(clonePropsThree);
propsThreeInFive.replaceWith(clonePropsFive);

const propFourMixedUp = itemTwo.querySelector('.props__item_four');
const propFourThird = itemFour.querySelector('.props__item_four:nth-child(3)');
propFourThird.after(propFourMixedUp);
