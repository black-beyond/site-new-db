export const initialState = {
  pageMode: "", //db
  popupClosed: false,
  siteNavigation: "", //db?
  stream: {
    streamInfoLoaded: false,
    url: "", //db
    source: "", //db
    title: "", //db
    donateText: "" //db
  },
  schedule: "", //db
  assets: {
    logo: "",
    backgroundVideo: "",
    backgroundVideoFallback: "",
  },
  about: {
    copy: "", //db
    copyBrief: "" //db
  },
  credits: "", //db
  event: "", //db
  links: "", //db
  archive: "", //db
  archiveItem: ""
}

export const stateReducer = (state, action) => {
  switch (action.type) {
    case 'load-site-markdown':
      return {
        ...state,
        about: {
          copy: action.data.find(({id}) => id === "about").content,
          copyBrief: action.data.find(({id}) => id === "about_brief").content,
        }
      }
    case 'load-site-navigation':
      return {
        ...state,
        siteNavigation: action.data
      }
    case 'load-site-credits':
      const roles = [...new Set(action.data.map(({role}) => role))];
      const credits = roles.map(role => ({title: role, people: action.data.filter(dp => dp.role === role)}));
      return {...state, credits }

    case "set-navigation":
      return {
        ...state,
        siteNavigation: action.navigation
      }
    case "set-schedule":
      return { ...state, schedule: action.schedule }
    case "set-landing-assets":
      return {
        ...state,
        assets: {
          logo: action.assets.Logo[0].url,
          backgroundVideo: action.assets.BackgroundVideo ? action.assets.BackgroundVideo[0].url : "",
          backgroundVideoFallback: action.assets.BackgroundFallback[0].url,
        },
        pageMode: action.assets.PageMode
      }
    case "set-stream":
      return {
        ...state,
        stream: {
          streamInfoLoaded: true,
          source: action.stream.StreamSource,
          url: action.stream.StreamID,
          title: action.stream.StreamTitle,
          donateText: action.stream.DonateButtonText
        }
      }
    case "set-about-copy":
      return {
        ...state,
        about: {
          copy: action.copy.About,
          copyBrief: action.copy.AboutBrief
        }
      }
    case "set-credits":
      return {
        ...state,
        credits: action.credits
      }
    case "set-event":
      return {
        ...state,
        event: action.event
      }
    case "set-links":
      return {
        ...state,
        links: action.links
      }
    case "set-archive":
      return {
        ...state,
        archive: action.archive
      }
    case "set-archive-item":
      return {
        ...state,
        archiveItem: action.archiveItem
      }
    case "close-popup":
      return {
        ...state,
        popupClosed: true
      }
    case "reactivate-popup":
      return {
        ...state,
        popupClosed: false
      }
    default:
      return state
  }
}