# Podcast App Folder Structure

## SCSS structure
styles
  - base
    - the normalize setup stuff and fonts (importing fonts e.g. google fonts)
  - components
    - more customized css for each component
  - layout
    - standard global styling e.g. body, h, a, p tags, etc.
  - utilities
    - common stuff that are reused goes here e.g. mixins, variables, etc.
  - App.scss - all partials go here
  
  Note: utlizing `@use` instead of `@import` because it's being deprecated
https://sass-lang.com/documentation/at-rules/import

## Components
All React components are saved here