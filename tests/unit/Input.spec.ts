import { composeStories } from '@storybook/testing-vue3';
import * as stories from '@/components/atoms/Input/Input.stories.ts';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';

const { Default } = composeStories(stories);

describe('Input component', () => {

  const placeholderText = ""
  const userValue = "userValue"

  it('renders with a default empty value', () => {
    const wrapper = mount(Default, {
      props: {
        modelValue: placeholderText,
      },
    });

    expect(wrapper.text()).toMatch(placeholderText);
  });

  it('emits an event when input value changes', async ()=> {
    const wrapper = mount(Default());

    const buttonElement = wrapper.find('input');
    await buttonElement.setValue(userValue);
    expect(buttonElement.element.value).toEqual(userValue);
  });
  
});
