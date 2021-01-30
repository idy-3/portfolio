export default {
  namespaced: true,
  state() {
    return {
      projects: [
        {
          id: "p1",
          img: "screen_shot_omiax_apartments.png",
          title: "Omiax Apartments",
          description: `This is a real estate site, built with react front and django backend,
                        implemented message queue / broker django_q`,
          code: "https://github.com/idy-3",
          demo: "https://omiaxapartments.com",
        },
        // {
        //   id: "p2",
        //   img:
        //     "https://www.stella-chung.com/static/forestAdventure-2747f6ef861381e9c761a4eeee75d1aa.gif",
        //   title: "Real Estate site",
        //   description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        //                     id a provident obcaecati animi repellendus ratione suscipit ea est
        //                     dolore in cum incidunt consequuntur modi, distinctio tenetur fugiat
        //                     assumenda hic?`,
        //   code: "https://github.com/idy-3",
        //   demo: "https://omiaxapartments.com",
        // },
      ],
    };
  },
  getters: {
    projects(state) {
      return state.projects;
    },
  },
};
