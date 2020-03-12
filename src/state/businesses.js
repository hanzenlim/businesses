const types = {
  SET_BUSINESSES: "SET_BUSINESSES"
};

export const setBusinesses = businesses => ({ type: types.SET_BUSINESSES, businesses });

const defaultState = [
  {
    "name": "Mari Vanna",
    "address": "41 E 20th Street, New York, NY 10003, USA"
  },
  {
    "name": "Punch",
    "address": "913 Broadway, New York, NY 10010, USA"
  },
  {
    "name": "The Greats of Craft",
    "address": "983 1st Avenue, New York, NY 10022, USA"
  }
];

export default function (state = defaultState, action) {
  switch (action.type) {
    case types.SET_BUSINESSES:
      return action.businesses;

    default:
      return state;
  }
}
