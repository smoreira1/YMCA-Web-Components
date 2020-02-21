import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { AlertMessageComponent } from './alert-message.component';

export default {
  title: 'Alert Message',
  component: AlertMessageComponent,
};

export const Text = () => ({
  component: AlertMessageComponent,
  props: {
    text: 'Hellos Button',
  },
});

export const Emoji = () => ({
  component: AlertMessageComponent,
  props: {
    text: '😀 😎 👍 💯',
  },
});

Emoji.story = {
  parameters: { notes: 'My notes on a button with emojis' },
};

export const WithSomeEmojiAndAction = () => ({
  component: AlertMessageComponent,
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
  component: AlertMessageComponent,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome'),
  },
});

ButtonWithLinkToAnotherStory.story = {
  name: 'button with link to another story',
};
