#!/usr/bin/env node
// Quick validation: run the generate script and verify outputs exist
import { execSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const root = '/vercel/share/v0-project'

try {
  execSync('node scripts/generate.js', { cwd: root, stdio: 'pipe' })
  console.log('[v0] generate.js ran successfully')
} catch (e) {
  console.error('[v0] generate.js FAILED:', e.stderr?.toString() || e.message)
  process.exit(1)
}

const files = ['dist/brand.css', 'dist/brand.js', 'dist/brand.d.ts']
for (const f of files) {
  const path = join(root, f)
  if (existsSync(path)) {
    const size = readFileSync(path).length
    console.log(`[v0] ${f} exists (${size} bytes)`)
  } else {
    console.error(`[v0] MISSING: ${f}`)
  }
}
