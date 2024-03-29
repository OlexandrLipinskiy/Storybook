import { Header } from './Header';

export default {
  title: 'Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Default = {};

export const Webstore = {
    args: {
        title: 'Store',
        link: 'Basket',
        dropdown: 'Categories',
        options: ['Shoes', 'T-Shirts', 'Accessories'],
        search: 'Find products',
    },
};
