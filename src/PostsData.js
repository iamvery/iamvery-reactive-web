import request from 'request-promise';
const url = 'https://gist.githubusercontent.com/iamvery/a46ba7af5cf5e017c6865bc8455ca05a/raw/60fae242a4d531a767c154f1d5d07560103e6e09/feed.json';

export default async function () {
  const json = await request({ uri: url, json: true});
  const posts = json.posts.map(post => post.title);
  return posts;
}
