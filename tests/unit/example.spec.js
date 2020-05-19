import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

describe('Home.vue', () => {
  it('renders data when passed', () => {
    const content = 'new messssage';
    const wrapper = shallowMount(Home, {
      data() {
        return { content };
      },
    });
    expect(wrapper.text()).to.include(content);
  });
});
