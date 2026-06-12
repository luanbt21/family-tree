<script lang="ts">
  import { onMount } from "svelte";
  import { browser } from "$app/environment";

  interface Props {
    siteKey: string;
    theme?: "light" | "dark" | "auto";
    size?: "normal" | "flexible" | "compact";
    onSuccess: (token: string) => void;
    onError?: (error: any) => void;
    onExpired?: () => void;
    reset?: () => void;
  }

  let {
    siteKey,
    theme = "auto",
    size = "normal",
    onSuccess,
    onError,
    onExpired,
    reset = $bindable()
  }: Props = $props();

  let container = $state<HTMLDivElement>();
  let widgetId = $state<string>();

  // Expose the reset function to parent components
  reset = () => {
    if (browser && widgetId && window.turnstile) {
      window.turnstile.reset(widgetId);
    }
  };

  onMount(() => {
    if (!browser) return;

    const initialize = () => {
      if (!window.turnstile || !container) return;
      
      // Remove any existing widget before rendering a new one
      if (widgetId) {
        window.turnstile.remove(widgetId);
      }

      widgetId = window.turnstile.render(container, {
        sitekey: siteKey,
        theme,
        size,
        callback: (token: string) => {
          onSuccess(token);
        },
        "error-callback": (err: any) => {
          if (onError) onError(err);
        },
        "expired-callback": () => {
          if (onExpired) onExpired();
        }
      });
    };

    const scriptId = "cloudflare-turnstile-script";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (window.turnstile) {
      initialize();
    } else {
      // Set the onload callback on window if not already defined
      if (!window.onloadTurnstileCallback) {
        window.onloadTurnstileCallback = () => {
          window.dispatchEvent(new CustomEvent("turnstile:ready"));
        };
      }

      window.addEventListener("turnstile:ready", initialize);

      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback";
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }
    }

    return () => {
      window.removeEventListener("turnstile:ready", initialize);
      if (widgetId && window.turnstile) {
        window.turnstile.remove(widgetId);
      }
    };
  });
</script>

<div bind:this={container} class="turnstile-container min-h-[65px] flex items-center justify-center"></div>
