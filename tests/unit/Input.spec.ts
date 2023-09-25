import { render, screen } from '@testing-library/vue';
import { composeStories } from '@storybook/testing-vue3';

import * as stories from '@/components/atoms/Input/Input.stories.ts';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';

const { Default } = composeStories(stories);

describe('Input component', () => {

  const placeholderText = ""

  it('renders with a default empty value', () => {
    render(Default());

    const wrapper = mount(Default, {
      props: {
        modelValue: placeholderText,
      },
    });

    expect(wrapper.text()).toMatch(placeholderText);
  });

  // it('emits an event when input value changes', async () => {
  //   const wrapper = mount(Default, {
  //     props: {
  //       modelValue: placeholderText,
  //     },
  //   });

  //   await wrapper.setData({ modelValue: 'New Value' });

  //   expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['New Value']);
  // });
});
