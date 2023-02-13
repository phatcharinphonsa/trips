import axios from '@axios';

export const useCalendarStore = defineStore('calendar', {
  // arrow function recommended for full type inference
  state: () => ({
    availableCalendars: [
      {
        color: 'error',
        label: 'Personal',
      },
      {
        color: 'primary',
        label: 'Business',
      },
      {
        color: 'warning',
        label: 'Family',
      },
      {
        color: 'success',
        label: 'Holiday',
      },
      {
        color: 'info',
        label: 'ETC',
      },
    ],
    selectedCalendars: ['Personal', 'Business', 'Family', 'Holiday', 'ETC'],
  }),
  actions: {
    async fetchEvents() {
      return axios.get('/apps/calendar/events', { params: { calendars: this.selectedCalendars.join(',') } })
    },
    async addEvent(event) {
      returnaxios
      .post("http://localhost:1337/api/trips", event.value)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    },
    async updateEvent(event) {
      return axios.post(`/apps/calendar/events/${event.id}`, { event })
    },
    async removeEvent(eventId) {
      return axios.delete(`/apps/calendar/events/${eventId}`)
    },
  },
})
