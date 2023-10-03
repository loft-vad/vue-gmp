import { mount } from '@vue/test-utils';
import YourComponent from '@/components/molecules/Switcher/Switcher.vue'; // Replace with the actual path to your component

describe('YourComponent', () => {
  it('renders label and buttons correctly', async () => {
    const label = 'Search by';
    const values = ['title', 'genre'];
    const modelValue = 'genre'; // Set an initial selected value

    const wrapper = mount(YourComponent, {
      props: {
        label,
        values,
        modelValue,
      },
    });
    expect(wrapper.find('label').text()).toBe(label);

    const buttons = wrapper.findAll('button');
    expect(buttons.length).toBe(values.length);

    values.forEach((value, index) => {
      expect(buttons[index].text()).toBe(value);
    });
    expect(buttons[1].classes('active')).toBe(true);

    await buttons[0].trigger('click');
    expect(wrapper.emitted('update:modelValue')[0]).toEqual(['title']);
  });
});
