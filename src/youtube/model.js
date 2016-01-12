import { compose, composeP, invoker, map, prop } from 'ramda';
import Maybe from 'data.maybe';
import Task from 'data.task';
import daggy from 'daggy';

const Video = daggy.tagged('id', 'thumbnail', 'url', 'title');

// Alias for Url
// type Url = String;

// makeUrl :: String -> Maybe Url
const makeUrl = (term) =>
  term && term.length > 0
    ? Maybe.Just(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&type=video&q=${term}&key=AIzaSyBn6VAt-hqQEowrEouhsL_k7RqJ2zSsoNI`)
    : Maybe.Nothing()
  ;

// getJson -> HttpResponse -> Promise JSON
const getJson = invoker(0, 'json');

// httpGet :: String -> Task Error JSON
const httpGet = (url) =>
  new Task((rej, res) =>
    fetch(url).then(composeP(res, getJson)).catch(rej)
  );

// maybeHttpGet :: Maybe String -> Task Error JSON
const maybeHttpGet = (url) =>
  url.cata({
    Just: httpGet,
    Nothing: () => Task.of({ items: [] })
  });

// toVideo :: JSON -> Video
const toVideo = json => {
  const {
    id: { videoId },
    snippet: { thumbnails: { high: { url: thumbnail } }, title }
  } = json;
  return Video(videoId, thumbnail, `https://www.youtube.com/watch?v=${videoId}`, title);
};

// toVideos :: JSON -> [Video]
const toVideos = compose(map(toVideo), prop('items'));

// searchVideos :: String -> Task Error [Video]
export const searchVideos = compose(map(toVideos), maybeHttpGet, makeUrl);
