import { render, screen } from '@testing-library/vue';
import { composeStories } from '@storybook/testing-vue3';

import * as stories from '@/components/atoms/Button/Button.stories';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils'

const { Primary, WithTextPassed } = composeStories(stories);

describe('Button component', () => {

  it('renders with default text', () => {
    render(Primary());
  
    const buttonElement = screen.getByRole('button');
    expect(buttonElement.textContent).toEqual(Primary.args.buttonText);
  });

  it('renders with passed text', () => {
    render(WithTextPassed());
    const buttonText = WithTextPassed.args.buttonText
    const buttonElement = screen.getByText(buttonText);
    expect(buttonElement.textContent).toEqual(buttonText);
  });

  it('emits a click event when the button is clicked', async () => {
    const wrapper = mount(Primary());
    render(Primary());
    const buttonElement = screen.getByText("Button");
    // is this correct approach to test click events?
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });
  
})