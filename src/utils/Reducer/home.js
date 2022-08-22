export const HomeReducer = (
  state = {
    homeData: null,
    portfolio: null,
    frameworks: null,
    testimonials: null,
    teammember:null,
  },
  action
) => {
  switch (action.type) {
    case "Home_Detials":
      return { ...state, homeData: action.payload };
    case "Portfolio_Details":
      return { ...state, portfolio: action.payload };
    case "Framework":
      return { ...state, frameworks: action.payload };
    case "Testimonial":
      return { ...state, testimonials: action.payload };
    case "TeamMember":
      return { ...state, teammember: action.payload };
    default:
      return state;
  }
};
