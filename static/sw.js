importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/00428218afff24670c72.js",
    "revision": "b343d53f630eba8f6f0c8f50d5d260bc"
  },
  {
    "url": "/_nuxt/36c7beb41ae40cd40fe6.js",
    "revision": "cdefb3697baac5e4583ecee3c8c05181"
  },
  {
    "url": "/_nuxt/58aefe7bd8a3579eb5da.js",
    "revision": "e6bee2de954a3199eb10345fd9524782"
  },
  {
    "url": "/_nuxt/79ae9e6f6e5351a47dc0.js",
    "revision": "e4def35a817a9d7a6995e4502eaa0df4"
  },
  {
    "url": "/_nuxt/95fb4b818dbae9082c87.js",
    "revision": "9f308917d731b77f3b03e7d0b81f0a24"
  },
  {
    "url": "/_nuxt/a5bbcc05d10e5a4ed772.js",
    "revision": "4d33d4e329c2cf159ab6dbce79081c6e"
  },
  {
    "url": "/_nuxt/b395cbd01074a73a856a.js",
    "revision": "6f4c74291fe926489f538d6042dcb83e"
  },
  {
    "url": "/_nuxt/e1c0d4e201664c64afff.js",
    "revision": "d941f888454375df22d6ce7ab03ce390"
  }
], {
  "cacheId": "dart-score-manager-vuetify",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
