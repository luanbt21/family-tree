<script lang="ts">
  import { page } from "$app/state";
  import favicon from "$lib/assets/favicon.svg";
  import { locales, localizeHref } from "$lib/paraglide/runtime";
  import { ModeWatcher } from "mode-watcher";
  import "./layout.css";

  let { children } = $props();
</script>

<ModeWatcher />

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}

<div style="display:none">
  {#each locales as locale (locale)}
    <a href={localizeHref(page.url.pathname, { locale })}> {locale}</a>
  {/each}
</div>
