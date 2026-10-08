<template>
  <!-- Light AstraFlow-styled code card: the two apps Aldi builds and runs. -->
  <div class="id-card">
    <div class="id-card-bar"><span /><span /><span /></div>
    <pre class="id-card-code"><span class="c">// things I build and run</span>
<span class="k">const</span> apps = [
  <span class="s">"monitor.naufaldi.com"</span>,
  <span class="s">"monitor-pangan-support"</span>,
];</pre>
  </div>
</template>

<style scoped>
.id-card { width: 300px; border-radius: 18px; padding: 3px; background: linear-gradient(135deg, var(--af-star), var(--af-primary) 45%, var(--af-mint)); box-shadow: 0 12px 30px rgba(79, 60, 216, 0.16); }
.id-card-bar { display: flex; gap: 5px; padding: 8px 12px 6px; }
.id-card-bar span { width: 8px; height: 8px; border-radius: 50%; background: rgba(255, 255, 255, 0.75); }
.id-card-code { margin: 0; background: #fff; border-radius: 0 0 15px 15px; padding: 12px 16px 14px; font-family: 'JetBrains Mono', monospace; font-size: 0.74rem; line-height: 1.6; color: var(--af-ink); white-space: pre; }
.c { color: var(--af-muted); }
.k { color: var(--af-primary); font-weight: 600; }
.s { color: var(--af-blue); }
</style>
