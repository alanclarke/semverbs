module.exports = { eq: eq, gt: gt, lt: lt, compare: compare, parse: parse }

function parse (version) {
  version = version.replace(/[^\d.]/gi, '').split('.')
  return {
    major: Number(version[0] || 0),
    minor: Number(version[1] || 0),
    patch: Number(version[2] || 0)
  }
}

function compare (versionA, versionB) {
  versionA = parse(versionA)
  versionB = parse(versionB)
  if (versionA.major !== versionB.major) return versionA.major > versionB.major
  if (versionA.minor !== versionB.minor) return versionA.minor > versionB.minor
  if (versionA.patch !== versionB.patch) return versionA.patch > versionB.patch
  return null
}

function gt (versionA, versionB) {
  return Boolean(compare(versionA, versionB))
}

function lt (versionA, versionB) {
  return gt(versionB, versionA)
}

function eq (versionA, versionB) {
  return compare(versionB, versionA) === null
}
