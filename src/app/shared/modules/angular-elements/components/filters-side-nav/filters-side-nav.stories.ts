import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { FiltersSideNavComponent } from './filters-side-nav.component';


export default {
  title: 'Browser Warning',
  component: FiltersSideNavComponent,
};

export const Text = () => ({
  component: FiltersSideNavComponent,
  props: {
    text: 'Hellos Button',
  },
});

export const Emoji = () => ({
  component: FiltersSideNavComponent,
  props: {
    text: '😀 😎 👍 💯',
  },
});

Emoji.story = {
  parameters: { notes: 'My notes on a button with emojis' },
};

export const WithSomeEmojiAndAction = () => ({
  component: FiltersSideNavComponent,
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
  component: FiltersSideNavComponent,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome'),
  },
});

ButtonWithLinkToAnotherStory.story = {
  name: 'button with link to another story',
};
