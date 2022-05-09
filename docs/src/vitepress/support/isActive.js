export function isActive (
  currentPath,
  matchPath
) {

  if (`${matchPath}.html` === window.location.pathname) {
    return true
  }
  return false
}