import { shallowMount } from "@vue/test-utils";
import Posts from "@/components/Posts.vue";

describe("Posts.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Posts, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
