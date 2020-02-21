import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { YmcaEventsComponent } from './ymca-events.component';

export default {
  title: 'Snack Bar',
  component: YmcaEventsComponent,
};

export const Text = () => ({
  component: YmcaEventsComponent,
  props: {
    text: 'Hellos Button',
  },
});

export const Emoji = () => ({
  component: YmcaEventsComponent,
  props: {
    text: '😀 😎 👍 💯',
  },
});

Emoji.story = {
  parameters: { notes: 'My notes on a button with emojis' },
};

export const WithSomeEmojiAndAction = () => ({
  component: YmcaEventsComponent,
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
  component: YmcaEventsComponent,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome'),
  },
});

ButtonWithLinkToAnotherStory.story = {
  name: 'button with link to another story',
};
