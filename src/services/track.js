import platziMusicService from './vue-music'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'
  return platziMusicService.get('/search', {
    params: { q, type }
  })
    .then(res => res.data)
}
export default trackService
