import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { BrowserWarningComponent } from './browser-warning.component';

export default {
  title: 'Browser Warning',
  component: BrowserWarningComponent,
};

export const Text = () => ({
  component: BrowserWarningComponent,
  props: {
    text: 'Hellos Button',
  },
});

export const Emoji = () => ({
  component: BrowserWarningComponent,
  props: {
    text: '😀 😎 👍 💯',
  },
});

Emoji.story = {
  parameters: { notes: 'My notes on a button with emojis' },
};

export const WithSomeEmojiAndAction = () => ({
  component: BrowserWarningComponent,
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
  component: BrowserWarningComponent,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome'),
  },
});

ButtonWithLinkToAnotherStory.story = {
  name: 'button with link to another story',
};
