export default {
  namespaced: true,
  state: {
    tutors: [
      {
        id: "a1",
        first_name: "Albert",
        last_name: "Einstein",
        teaches: ["German", "French", "English"],
        description:
          "Albert Einstein was a German-born theoretical physicist, widely acknowledged to be one of the greatest physicists of all time. Einstein is known widely for developing the theory of relativity, but he also made important contributions to the development of the theory of quantum mechanics. Relativity and quantum mechanics are together the two pillars of modern physics.",
        hourly_rate: 140,
      },
      {
        id: "b2",
        first_name: "Isaac",
        last_name: "Newton",
        teaches: ["English", "Chinese", "Italian"],
        description:
          "Sir Isaac Newton was an English mathematician, physicist, astronomer, theologian, and author (described in his time as a natural philosopher) who is widely recognised as one of the greatest mathematicians and most influential scientists of all time and as a key figure in the scientific revolution. His book Philosophiæ Naturalis Principia Mathematica (Mathematical Principles of Natural Philosophy), first published in 1687, established classical mechanics. Newton also made seminal contributions to optics, and shares credit with Gottfried Wilhelm Leibniz for developing the infinitesimal calculus.",
        hourly_rate: 120,
      },
      {
        id: "c3",
        first_name: "Niels",
        last_name: "Bohr",
        teaches: ["Danish", "Italian", "Spanish"],
        description:
          "Niels Henrik David Bohr was a Danish physicist who made foundational contributions to understanding atomic structure and quantum theory, for which he received the Nobel Prize in Physics in 1922. Bohr was also a philosopher and a promoter of scientific research.",
        hourly_rate: 90,
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    tutors(state) {
      return state.tutors;
    },
  },
};
