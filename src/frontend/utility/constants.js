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
    path: '/bookmarks',
    isMobile: true,
    class: 'fa-solid fa-bookmark'
  },
  {
    id: 'N4',
    name: 'Notifications',
    path: '/notifications',
    class: 'fa-solid fa-bell'
  },
  {
    id: 'N5',
    name: 'Profile',
    path: '/profile',
    class: 'fa-solid fa-user'
  }
];

export const posts = [
  {
    _id: 'P1',
    username: 'Carlos',
    userId: '@carlos123',
    profilePic: 'https://www.w3schools.com/howto/img_avatar.png',
    title: 'Lorem Ipsum',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    banner:
      'https://cdn.pixabay.com/photo/2015/10/29/14/38/web-1012467__340.jpg',
    likes: 4,
    comments: 3,
    bookmarked: false,
    dateOfCreation: 1647076844
  },
  {
    _id: 'P2',
    username: 'Jane Doe',
    userId: '@janedoe234',
    profilePic: 'https://www.w3schools.com/w3images/avatar5.png',
    title: 'Lorem Ipsum',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    banner:
      'https://cdn.pixabay.com/photo/2015/10/29/14/38/web-1012467__340.jpg',
    likes: 2,
    comments: 3,
    bookmarked: true,
    dateOfCreation: 1649841644
  },
  {
    _id: 'P3',
    username: 'John Doe',
    userId: '@johndoe45',
    profilePic: 'https://www.w3schools.com/w3images/avatar2.png',
    title: 'Lorem Ipsum',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    likes: 5,
    comments: 3,
    bookmarked: false,
    dateOfCreation: 1641806444
  },
  {
    _id: 'P4',
    username: 'Carla Smith',
    userId: '@carla12',
    profilePic: 'https://www.w3schools.com/howto/img_avatar2.png',
    title: 'Lorem Ipsum',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    banner:
      'https://cdn.pixabay.com/photo/2015/10/29/14/38/web-1012467__340.jpg',
    likes: 6,
    comments: 3,
    bookmarked: false,
    dateOfCreation: 1646904044
  }
];

export const suggestions = [
  {
    id: 'S1',
    name: 'Carlos',
    userId: '@carlos121',
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
    name: 'John',
    userId: '@johndoe32',
    profilePic: 'https://www.w3schools.com/w3images/avatar2.png'
  },
  {
    id: 'S4',
    name: 'Jane',
    userId: '@jane100',
    profilePic: 'https://www.w3schools.com/howto/img_avatar2.png'
  },
  {
    id: 'S5',
    name: 'Jones',
    userId: '@jones99',
    profilePic: 'https://www.w3schools.com/howto/img_avatar.png'
  }
];

export const testCredentials = {
  username: 'Shrey Pandey',
  email: 'shreyp@gmail.com',
  password: 'shreypandey',
  confirmpassword: 'shreypandey'
};

export const loginCredentials = {
  email: 'carljones1234@gmail.com',
  password: 'carljones1234',
  username: 'Carl Jones'
};

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
