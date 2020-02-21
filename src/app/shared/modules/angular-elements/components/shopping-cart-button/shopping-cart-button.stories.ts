import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { ShoppingCartButtonComponent } from './shopping-cart-button.component';

export default {
  title: 'Shopping Cart Button',
  component: ShoppingCartButtonComponent,
};

export const Text = () => ({
  component: ShoppingCartButtonComponent,
  props: {
    text: 'Hellos Button',
  },
});

export const Emoji = () => ({
  component: ShoppingCartButtonComponent,
  props: {
    text: '😀 😎 👍 💯',
  },
});

Emoji.story = {
  parameters: { notes: 'My notes on a button with emojis' },
};

export const WithSomeEmojiAndAction = () => ({
  component: ShoppingCartButtonComponent,
  props: {
    text: '😀 😎 👍 💯',
    onClick: action('This was clicked OMG'),
  },
});

WithSomeEmojiAndAction.story = {
  name: 'with some emoji and action',
  parameters: { notes: 'My notes on a button with emojis' },
};

export const ButtonWithLinkToAnotherStory = () => ({
  component: ShoppingCartButtonComponent,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome'),
  },
});

ButtonWithLinkToAnotherStory.story = {
  name: 'button with link to another story',
};
