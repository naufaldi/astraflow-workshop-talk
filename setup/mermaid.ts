import { defineMermaidSetup } from '@slidev/types'

// Light theme mapped to AstraFlow / UCLOUD colors (see style.css for the palette source).
export default defineMermaidSetup(() => ({
  theme: 'base',
  themeVariables: {
    fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
    fontSize: '15px',
    background: '#FFFFFF',
    primaryColor: '#EFEEFF',
    primaryBorderColor: '#4F3CD8',
    primaryTextColor: '#0F172A',
    secondaryColor: '#F8FAFC',
    secondaryBorderColor: '#CBD5E1',
    tertiaryColor: '#FFFFFF',
    lineColor: '#64748B',
    textColor: '#0F172A',
    clusterBkg: '#F8FAFC',
    clusterBorder: '#E2E8F0',
    edgeLabelBackground: '#FFFFFF',
    actorBkg: '#EFEEFF',
    actorBorder: '#4F3CD8',
    actorTextColor: '#0F172A',
    signalColor: '#475569',
    signalTextColor: '#0F172A',
    noteBkgColor: '#F1F5F9',
    noteBorderColor: '#CBD5E1',
  },
  flowchart: { curve: 'basis', padding: 12, nodeSpacing: 34, rankSpacing: 44 },
}))
