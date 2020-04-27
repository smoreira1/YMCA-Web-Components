import { SnackBarComponent } from './snack-bar.component';

export default {
  title: 'Snack Bar',
  component: SnackBarComponent
};

export const AddToCart = () => ({
  component: SnackBarComponent,
  props: {
    message: 'Successfully Added to Cart.'
  }
});

export const SlotsTaken = () => ({
  component: SnackBarComponent,
  props: {
    message: 'Slots No Longer Available.'
  }
});

SlotsTaken.story = {
  parameters: { notes: 'Occurs when slots are taken up from an event.' }
};

export const GeneralError = () => ({
  component: SnackBarComponent,
  message: {
    text: 'An Error Occured.'
  }
});

GeneralError.story = {
  name: 'with some emoji and action',
  parameters: { notes: 'My notes on a button with emojis' }
};
