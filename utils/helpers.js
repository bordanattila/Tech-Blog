const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const mon = new Date()

module.exports = {
    format_time: (date) => {
      return date.toLocaleTimeString();
    },
    format_date: (date) => {
      return `${monthNames[mon.getMonth()]}/${new Date(date).getDate()}/${
        new Date(date).getFullYear()
      }`;
    },
  };