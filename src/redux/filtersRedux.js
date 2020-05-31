/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const CHANGE_DURATION = createActionName('CHANGE_DURATION');
export const CHANGE_TAG = createActionName('CHANGE_TAG');
// TODO - add other action types

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
export const changeDuration = payload => ({ payload, type: CHANGE_DURATION });
export const changeTag = payload => ({ payload, type: CHANGE_TAG });
// TODO - add other action creators

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    case CHANGE_DURATION:
      return {
        ...statePart,
        duration: {
          from: action.payload.type === 'from' && +action.payload.value <= +statePart.duration.to ? action.payload.value : statePart.duration.from,
          to: action.payload.type === 'to' && +action.payload.value >= +statePart.duration.from ? action.payload.value : statePart.duration.to,
        },
      };
    case CHANGE_TAG:
      return {
        ...statePart,
        tags: action.payload.checked ? [ ...statePart.tags, action.payload.tag] : statePart.tags.filter(tag => tag != action.payload.tag),
      };
    // TODO - handle other action types
    default:
      return statePart;
  }
}
