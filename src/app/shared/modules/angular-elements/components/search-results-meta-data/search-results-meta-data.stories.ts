import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { SearchResultsMetaDataComponent } from './search-results-meta-data.component';


export default {
  title: 'Search Results Meta Data',
  component: SearchResultsMetaDataComponent,
};

export const Text = () => ({
  component: SearchResultsMetaDataComponent,
  props: {
    text: 'Hellos Button',
  },
});

export const Emoji = () => ({
  component: SearchResultsMetaDataComponent,
  props: {
    text: '😀 😎 👍 💯',
  },
});

Emoji.story = {
  parameters: { notes: 'My notes on a button with emojis' },
};

export const WithSomeEmojiAndAction = () => ({
  component: SearchResultsMetaDataComponent,
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
  component: SearchResultsMetaDataComponent,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome'),
  },
});

ButtonWithLinkToAnotherStory.story = {
  name: 'button with link to another story',
};
