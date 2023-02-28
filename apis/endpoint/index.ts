export const BASE_URL_API = 'http://127.0.0.1:8000'

export const APP_API = {
  FEED: {
    list: BASE_URL_API + '/feed/',
    like: BASE_URL_API + '/feed/like/',
    create: BASE_URL_API + '/feed/create/',
    save: BASE_URL_API + '/feed/save/',
  },
  timeLine: {
    list: 'https://mocki.io/v1/767e1645-9d26-4ec1-b0c5-bdd0e87b5435',
  },
  stories: {
    list: 'https://mocki.io/v1/2435a89a-d728-4fe4-a385-58dd84e526c8',
  },
  suggestions: {
    list: 'https://mocki.io/v1/a8a63d2a-2438-43c4-ae22-5f767e6d5c45',
  },
}
