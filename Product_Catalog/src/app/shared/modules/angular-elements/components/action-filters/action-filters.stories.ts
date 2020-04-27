import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { ActionFiltersComponent } from './action-filters.component';


export default {
  title: 'Action Filters',
  component: ActionFiltersComponent,
};

export const Text = () => ({
  component: ActionFiltersComponent,
  props: {
    text: 'Hellos Button',
  },
});

export const Emoji = () => ({
  component: ActionFiltersComponent,
  props: {
    text: '😀 😎 👍 💯',
  },
});

Emoji.story = {
  parameters: { notes: 'My notes on a button with emojis' },
};

export const WithSomeEmojiAndAction = () => ({
  component: ActionFiltersComponent,
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
  component: ActionFiltersComponent,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome'),
  },
});

ButtonWithLinkToAnotherStory.story = {
  name: 'button with link to another story',
};
