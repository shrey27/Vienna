export const navlinks = [
  {
    id: 'N1',
    name: 'Home',
    path: '/',
    class: 'fa-solid fa-house'
  },
  {
    id: 'N2',
    name: 'Explore',
    path: '/explore',
    class: 'fa-solid fa-compass'
  },
  {
    id: 'N3',
    name: 'Bookmarks',
    path: '/bookmark',
    isMobile: true,
    class: 'fa-solid fa-bookmark'
  },
  {
    id: 'N4',
    name: 'Notifications',
    path: '/notification',
    class: 'fa-solid fa-bell'
  },
  {
    id: 'N5',
    name: 'Profile',
    path: '/profile',
    class: 'fa-solid fa-user'
  }
];

export const suggestions = [
  {
    id: 'S1',
    name: 'London Tipton',
    userId: '@tipton_london',
    profilePic: 'https://www.w3schools.com/howto/img_avatar.png'
  },
  {
    id: 'S2',
    name: 'Robin',
    userId: '@robin_y',
    profilePic: 'https://www.w3schools.com/w3images/avatar5.png'
  },
  {
    id: 'S3',
    name: 'Jay Rogers',
    userId: '@jayrogers32',
    profilePic: 'https://www.w3schools.com/w3images/avatar2.png'
  },
  {
    id: 'S4',
    name: 'Gloria Rogers',
    userId: '@gloria100',
    profilePic: 'https://www.w3schools.com/howto/img_avatar2.png'
  },
  {
    id: 'S5',
    name: 'Kevin Stacey',
    userId: '@kstacey99',
    profilePic: 'https://www.w3schools.com/howto/img_avatar.png'
  }
];

export const testCredentials = {
  username: 'Shrey Pandey',
  email: 'shreyp@gmail.com',
  password: 'shreypandey',
  confirmpassword: 'shreypandey'
};

export const loginCredentials = [
  {
    email: 'carljones1234@gmail.com',
    password: 'carljones1234',
    username: 'Carl Jones',
    authenticationUserId: 'U0'
  },
  {
    email: 'janedoe12@gmail.com',
    password: 'janedoe12',
    username: 'Jane Doe',
    authenticationUserId: 'U1'
  },
  {
    email: 'johndoe87@gmail.com',
    password: 'janedoe12',
    username: 'Jane Doe',
    authenticationUserId: 'U2'
  },
  {
    email: 'carlasmith27@gmail.com',
    password: 'carlasmith27',
    username: 'Carla Smith',
    authenticationUserId: 'U3'
  },
  {
    email: 'carlos123@gmail.com',
    password: 'carlos123',
    username: 'Carlos',
    authenticationUserId: 'U4'
  }
];

export const InputImages = {
  emoji:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABmJLR0QA/wD/AP+gvaeTAAAE+UlEQVRIiZ1WbWxTZRR+7n3vbXvbQr/Xdh+FzUECODEk4AAnMQhjIzjnQEBECYgOdKAgQZJBJPgDgiI/YCAxRIICiobFwNj8oZVBQjJAQeZwG+vo2Nw62nVdP9beL3907QZuY/j8u+ece573fLznvMDoUAIotBkV36WbFR0GLQkzhBINWhIy69nmcWryNYBFA3YjghpBznBKulTJUPuybApl8XNakjeNQ6qdgzlDhwf9FDq6Y/jtul86XeUJuTsjQjRGbRdF8TgAcSwkEyx6tjbbxqbtf8tCz53CASwBzHqAUwx7osu/92LT3qZQszvS1hcSFgJoG41kll5DnNuKjdyOEhMoCnHHVgNA06NlBLIM7DnWKuw7fi8YjkgLAFwbjmSCXkMajpRauRV54+MSTgHYjIizjQ2nqrrwzu47vaGIlJOIiAzoGIuevbm1yGDaUGCISwgN2E2PjeBR5EzSghfAXG8ILo7x0lEAMg0AnJIuzbaxaTtKTEljL6vBbVcEvCCP6pQXZNTfDcHXyydlu0onMk9lqByEkLVAPF1KvYb4zpenq+dO4QAAB6t6setbD0w6FixDoapiOrId3H8ImtwRFG68CUGQ4QsI2PNeJjatSgcA1N7wo2DDzZ5QRLLRAOZn2RTKBMG9bh57znTj1o+z4KqejdVLbNh2oHnYKLZ93ow1RXa4qmfjj7Mz8ckRF9z/9AMA8mbokW5TMgBepG1GxZpXc7WJ2sAbEPF6QQompqoAAOtLUkHTwxeeEArriu0AgMw0FVYttuGBfzBtKwusmnEaspzKsCg6Tn5gs8+bpo5rGAI4Ukatw1jhrPOj5MPbjXQwLBrSTeyghiEj//WESLMqEeWlFLqvX1IYtUPadITU/B+YdAz6Y5KWHsfRUW/fkHEjjd6yT4IHfh4qBd3HaDjS0+4TuGz7wFwSRSzd3oSfr3if2Gn+82ac3Zud/L7fFQXL0t2MIKL2Un14ebLwvIjeMPDs5nJkLSwcM0FLzQUErnz5kMxZ55d4QaplOn2xE+euBpfufM2crHjeZBrn7v4FnWPjmEkCzfXIz3l4Sp+p7gqFwuJZGsAvrR4+erkhklS+OUeFuxcqEbjvBgD09/hw/fAB1KxYgsqXclGzYgluVHyB/h5fnKDtHlou/oQ3Cgdb31nnR7snygP4lQAQRVn23Xbzhevm6yiKAvQchZhKhR8qKmGYOh2VryzA0423sBYxlKgIZkQCaLt2FeePVcCWOxfOLeuwqViLl+cZAcTHflHZrXCnV/xIluW6RL8yKXq2uWyxfkL5sviQlGkam7+P4NCpVhSYjPhqSiY4MtjqYVHC2w0uVHt9KFudhYNbHMmNsPNQi3Dwm/amYFjIASAOvRQOvYbcqSi1cisT+0SlQI0L2Hm4E/WNPcg0jIeJYeEVeLh6Apg22YBP37dj4Rxj0snJ853yu7v/7o1EpWcwsE8evXkzdRri3FpkUJcvMw/ZjEZ4/Dz+bIqPdKOORc4kDVKMg4WWZWDX4RbxwIm2YDgqLQBQl9ANd70dZj17KSuFyfhsjYXOm6oGGBqwGEbc8c46P8r2NoZaO6LuYEjIx2N2fAKMkqXXcwpq/0QrqyrO1ZIXpqqRalfDkjEengjQ0R2D85pfOn2xK9TuifLRmPSxKGLY18rjoACwyGpgT6dbFPcNWhIa8u5q0qjJcQD5A3Yj4l+7R9OYFcl7xAAAAABJRU5ErkJggg==',
  image:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAABmJLR0QA/wD/AP+gvaeTAAADb0lEQVRYhe2WS0wTURSG/zvTAtIo01ZAQWxLxUfAUkFETTQmRhcujEmDJiauXCuYmLhwpTGsWBjjzvrCKNEiBl3ISgMxPiIoT41QoKWlkRYoxT5ox5nrQksQpg8Kuuq3Pfec+917MmcukCZNmtWBxA/XsFptf5VISNFKN2Ioxmy20k7AIixbpqTEaMxWKCyGneXrNZriHLmcTSAeG54XqN0+4uvt65mcDYVMo98+9SYto9OV5avV6s7a8xc3uXxToIQCLJOSSEV1NViGBR8IYXJkDNdvNDhmvL5Kq/WzZ/FamVQBTqW8fLLm9MYRtxNVx45inZJLSWQhmQBkazJRYzpV0PTk4WUAdYvXSB6XIcwBvX4Lm6XOWRWRKBm5HPT6EpZl2INSccmbIQzLyOVyECa11oRDcxh4dQvZ8h9g1dUoqTwMAGBkMmRkZIAwLCuVl9puCfjS8Qhnjw7hzJEJKIOt8M/OJpX3T2RYGoZM9vvb4BQiInOhpPIk27RSNhmPw9zqgEoRxBTdBWNFPgDA9m0Q61ZDJhyaQ8OD+wgKIupMJuTm5cVcq9pQCNWJeoiCiKIFI2GtSgn43DHzkmpTeC6M+sZ7aNNvRvv2YlxpaYHbHbvofPFFs8lpHY6/PimR+3fxaosG9M/X1b1Nh6txhIKBAFqfWeBxTyySi9+IuDI8/3OJSJRYQkF/ALcf34F1ayYetFnw3eWaj20oKkxdprX9taTIQqFrT5vh+SMU9AdgbjIjUr0ZhCFAlQaPO57D5RwHAAz19acu4yEkpkiUT9v1uNLSAvuoHeYmM/j92r+GpVBeCMubF/NCKcskS/c2HS41NcK/I1dyakeFvNPefy8DAM59e9DT5UDYG5CMC+WFeNv9/v/IAMC4wYjuj/aYQmKm5C8pvgwVBZHnecjJ8t9T4wYjej6MIuz1L4mxhCASiYCKguRrT1JGpLTDOjwkaCiLLPfksoWcxgr0fLD9JRR2TYL7KYfVOigIotgulSd5dL3ekMcpVZ215y4Uvex6B08oBLrghme8XkSokPAFnc3zKCjYCEagyMlS4JBxL27cvD7m8o1XugYHl5wyZjmdrsyQw3HNZaWG9VptMbfSN/CobXimf6DPMz07ZXIMf5UcOIk2YHS60t0CqCZVkSiUEJtjZKALgLjSWmnSpEnEL64uV7uxdkeHAAAAAElFTkSuQmCC'
};

export const acceptedFileTypes = [
  'image/png',
  'image/jpeg',
  'image/jpg',
  'image/webp',
  'image/svg+xml',
  'images/gif'
];

export const emojis = [
  '🙂',
  '😊',
  '🤗',
  '😄',
  '😅',
  '😆',
  '😂',
  '🤣',
  '😘',
  '🥰',
  '😍',
  '🤩',
  '😇',
  '😎',
  '😋',
  '😜',
  '🙃',
  '😴',
  '🤯',
  '🥳'
];

export const notifications = [
  {
    _id: 'N1',
    liked: true,
    followed: false,
    comment: '',
    postId: 'P1',
    username: 'Carlos',
    profilePic: 'https://www.w3schools.com/w3images/avatar5.png'
  },
  {
    _id: 'N2',
    liked: true,
    followed: false,
    comment: '',
    postId: 'P2',
    username: 'Jane Doe',
    profilePic: 'https://www.w3schools.com/howto/img_avatar.png'
  },
  {
    _id: 'N3',
    liked: false,
    followed: false,
    comment: 'Nicely said',
    postId: 'P3',
    username: 'John Doe',
    profilePic: 'https://www.w3schools.com/w3images/avatar2.png'
  }
];
