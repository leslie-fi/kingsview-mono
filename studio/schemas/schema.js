// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import localeString from './objects/localeString'

// document schemas
import navMenu from './documents/navMenu'
import author from './documents/author'
import category from './documents/category'
import post from './documents/post'
import page from './documents/page'
import teamMember from './documents/teamMember'
import siteSettings from './documents/siteSettings'
import route from './documents/route'

import experiment from './objects/experiment'
import simpleBlockContent from './objects/simpleBlockContent'

import * as plugs from './plugs'
import plugDefaultFields from './plugs/_plugDefaultFields'

// Object types
import iframeEmbed from './objects/iframeEmbed'
import { instagram, videoEmbed } from './objects/embeds'
import cta from './objects/cta'
import meta from './objects/meta'
import bodyPortableText from './objects/bodyPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import authorReference from './objects/authorReference'
import teamMemberReference from './objects/teamMemberReference'
import link from './objects/link'
import variation from './objects/variation'
import openGraph from './objects/openGraph'
import latex from './latex'

const allPlugs = Object.values(plugs).map((plug) => {
  return { ...plug, fields: plugDefaultFields.concat(plug.fields) }
})

export default createSchema({
  name: 'blog',
  types: schemaTypes // Built-in types
    // Our custom types
    .concat([
      latex,
      localeString,
      variation,
      openGraph,
      teamMember,
      experiment,
      route,
      link,
      simpleBlockContent,
      cta,
      siteSettings,
      post,
      navMenu,
      page,
      category,
      author,
      mainImage,
      authorReference,
      teamMemberReference,
      instagram,
      videoEmbed,
      iframeEmbed,
      bodyPortableText,
      excerptPortableText,
    ])
    .concat(allPlugs),
})
