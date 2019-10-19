<template>
  <header></header>
  <main class="page">
    <article class="main-content">
      <header class="article-title">{{page.frontmatter.title}}</header>
      <slot name="default"/>
    </article>
  </main>
  <footer></footer>
</template>
