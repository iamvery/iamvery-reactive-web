const url = 'https://gist.githubusercontent.com/iamvery/a46ba7af5cf5e017c6865bc8455ca05a/raw/60fae242a4d531a767c154f1d5d07560103e6e09/feed.json';

const fetchData = async () => {
  const response = await fetch(url);
  const json = await response.json();
  return json.posts;
  // TODO how to handle errors in this function?
};

export default fetchData;
