import { v1 as uuid } from 'uuid';

export const winner = {
  name: 'Power of the Dog',
  images: [
    'https://toigingiuvedep.vn/wp-content/uploads/2021/06/hinh-anh-suy-tu-dep-nghe-thuat.jpg',
    'https://toigingiuvedep.vn/wp-content/uploads/2021/06/hinh-anh-suy-tu-dep-cho-dien-thoai.jpg',
    'https://toigingiuvedep.vn/wp-content/uploads/2021/06/hinh-anh-suy-tu-co-gai-dang-suy-tu.jpg',
  ],
};

export const winnerActress = {
  name: 'Rachel Zegler',
  images: [
    'https://www.goldenglobes.com/sites/default/files/styles/portrait_medium/public/2022_possible_nominees_people/2022_possible_nominees_people/Rachel%20Zegler-GettyImages-1340371490.jpg?format=pjpg&auto=webp&optimize=high',
    'https://www.goldenglobes.com/sites/default/files/styles/portrait_medium/public/2022_possible_nominations_films/2022_possible_nominations_films/West%20Side%20Story%20%282021%29.jpg?format=pjpg&auto=webp&optimize=high',
    'https://www.goldenglobes.com/sites/default/files/styles/4_3_large/public/2022-01/west-side-story-02.jpg?format=pjpg&auto=webp&optimize=high',
  ],
};

export const nominees = [
  {
    id: uuid(),
    name: 'Belfast',
    images: 'https://assets.vogue.in/photos/5f16b3bc9ffca08d1848369b/3:2/w_1919,h_1280,c_limit/must-watch%20action%20movies.jpg',
  },
  {
    id: uuid(),
    name: 'CODA',
    images: 'https://www.slashfilm.com/img/gallery/the-20-best-action-movies-of-2021-ranked/sentinelle-1639081726.jpg',
  },
  {
    id: uuid(),
    name: 'Dune',
    images: 'https://toigingiuvedep.vn/wp-content/uploads/2021/06/hinh-anh-suy-tu-ve-cuoc-doi.jpg',
  },
  {
    id: uuid(),
    name: 'King Richard',
    images: 'https://cdn.mos.cms.futurecdn.net/DMcdHfpMEcYrfaSpMM5rJn.jpg',
  },
];

export const nominees2 = [
  {
    id: uuid(),
    name: 'Belfast',
    images: 'https://www.goldenglobes.com/sites/default/files/styles/portrait_medium/public/people/cover_images/mahershala_ali-gt.jpg?format=pjpg&auto=webp&optimize=high',
  },
  {
    id: uuid(),
    name: 'CODA',
    images: 'https://www.goldenglobes.com/sites/default/files/styles/portrait_medium/public/people/cover_images/javier_bardem.jpg?format=pjpg&auto=webp&optimize=high',
  },
  {
    id: uuid(),
    name: 'Dune',
    images: 'https://www.goldenglobes.com/sites/default/files/styles/portrait_medium/public/landing-benedictcumberbatch-012115.jpg?format=pjpg&auto=webp&optimize=high',
  },
  {
    id: uuid(),
    name: 'King Richard',
    images: 'https://www.goldenglobes.com/sites/default/files/styles/portrait_medium/public/people/cover_images/denzel_washington_120116_fences_00002.jpg?format=pjpg&auto=webp&optimize=high',
  },
];

export const awards = [
  {
    id: uuid(),
    name: 'Best Picture Drama',
    winner,
    nominees,
  },{
    id: uuid(),
    name: 'Best Actress - Motion Picture – Musical/Comedy',
    winner: winnerActress,
    nominees: nominees2,
  },
];