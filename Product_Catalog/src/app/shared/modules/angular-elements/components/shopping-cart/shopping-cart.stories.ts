import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { ShoppingCartComponent } from './shopping-cart.component';

export default {
  title: 'Shopping Cart',
  component: ShoppingCartComponent,
};

export const Text = () => ({
  component: ShoppingCartComponent,
  props: {
    text: 'Hellos Button',
  },
});

export const Emoji = () => ({
  component: ShoppingCartComponent,
  props: {
    text: '😀 😎 👍 💯',
  },
});

Emoji.story = {
  parameters: { notes: 'My notes on a button with emojis' },
};

export const WithSomeEmojiAndAction = () => ({
  component: ShoppingCartComponent,
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
  component: ShoppingCartComponent,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome'),
  },
});

ButtonWithLinkToAnotherStory.story = {
  name: 'button with link to another story',
};
