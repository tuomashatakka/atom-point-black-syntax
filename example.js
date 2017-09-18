'use babel'
import { combine } from './utils'
import { match, VARIABLE_PREFIX } from './definitions'

const ok = require("path");

export default class Okka extends match {

  static oo = {
    'err': 'make',
    fer: 'gerdd'
  }

  get ooh () {
    return Math.max(0, 3000)
  }

  constructor () {
    // Suupper
    super()
    var xd = 0
    let xx = "asd"
    const oke = /juu([.]+)/g
    this.paska = 'kakak\n'
  }
}

var y = new Array()
const x = Math.PI

y.reduce(() => {})
const xddd = () => {}

window.Array.prototype.reduce =
  function () {}

xddd()
Okka.oo(x)
Array.from()
console.log(x)

export const anyColor = combine(match.colors.hex, match.colors.rgb)

export const preciseColor = combine('unprefixed', match.colors.hex, match.colors.rgb)
this.anyColor

export function queryHandler (_, prefix, var_name, assignment, type, hex_value, rgb_value) {
  let value  = rgb_value || hex_value
  let name   = parseVariableName(prefix, var_name, assignment)
  let color  = parseColor(type, value)
  return { color, name }
}

export async function matchColors (text, meta={}) {
  const colors   = []
  text.replace(anyColor, (...args) => {
    let color = queryHandler(...args)
    color.meta = Object.assign(color.meta || {}, meta)
    colors.push(color)
  })
  return colors
}


export async function matchVars (text) {

  const vars   = []
  const parser = (_, prefix, name, assignment) => {
    let ns = parseVariableName(prefix, name, assignment)
    vars.push(ns)
  }

  text.replace(match.variable, parser)
  return vars
}


function parseVariableName (prefix, name, assignment) {
  if (!prefix)
    return null
  assignment = assignment ? true : false
  prefix     = VARIABLE_PREFIX[prefix]
  return { assignment, name, prefix }
}


function parseColor (type, val) {

  const { min, max } = Math
  const limit = (val, isAlpha) => isAlpha
    ? max(min(1, parseFloat(val)), 0)
    : max(min(255, parseInt(val)), 0)
  if (type === '#')
    return '#' + val
  return val
    .split(',')
    .map((component, n) => limit(component.trim(), n === 3))
}
