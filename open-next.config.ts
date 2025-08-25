import { defineCloudflareConfig } from '@opennextjs/cloudflare'

const cfg = defineCloudflareConfig()

;(cfg as any).edgeExternals = ['node:crypto', 'bufferutil', 'utf-8-validate']

;(cfg as any).functions = {
  edgeOg: {
    runtime: 'edge',
    routes: ['app/(app)/og/route'],
  },
  edgeXlog: {
    runtime: 'edge',
    routes: ['app/api/xlog/summary/route'],
  },
  edgeGh: {
    runtime: 'edge',
    routes: ['app/api/gh/[...all]/route'],
  },
  edgeTmdb: {
    runtime: 'edge',
    routes: ['app/api/tmdb/[...all]/route'],
  },
  edgeBilibili: {
    runtime: 'edge',
    routes: ['app/api/bilibili/check_live/route'],
  },
  edgeBangumi: {
    runtime: 'edge',
    routes: ['app/api/bangumi/[...all]/route'],
  },
}

export default cfg
