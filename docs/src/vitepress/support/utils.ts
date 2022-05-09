import { withBase } from 'vitepress'
import { ref } from 'vue'

export const hashRE = /#.*$/
export const extRE = /(index)?\.(md|html)$/
export const outboundRE = /^[a-z]+:/i

export function isExternal(path: string): boolean {
  return outboundRE.test(path)
}

export function ensureStartingSlash(path: string): string {
  return /^\//.test(path) ? path : `/${path}`
}

export function normalizeLink(url: string): string {
  if (isExternal(url)) {
    return url
  }
  const { pathname, search, hash } = new URL(url, 'http://vuejs.org')
  return withBase(
    pathname.endsWith('/') || pathname.endsWith('.html')
      ? url
      : `${pathname.replace(/(\.md)?$/, '.html')}${search}${hash}`
  )
}

const inBrowser = typeof window !== 'undefined'
const hashRef = ref(inBrowser ? location.hash : '')
if (inBrowser) {
  window.addEventListener('hashchange', () => {
    hashRef.value = location.hash
  })
}

export function isActive(
  currentPath: string,
  matchPath: string
): boolean {
  
  if (`${matchPath}.html` === window.location.pathname) {
    return true
  }
  return false
}

export function normalize(path: string): string {
  return decodeURI(path).replace(hashRE, '').replace(extRE, '')
}
