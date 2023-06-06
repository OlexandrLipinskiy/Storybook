import { Footer } from './Footer';

export default {
    title: 'Footer',
    component: Footer,
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
        link1: 'Login',
        link2: 'Categories',
        link3: 'FAQs',
        link4: 'About',
        company: '© 2022 Webstore, Inc',
    },
};
