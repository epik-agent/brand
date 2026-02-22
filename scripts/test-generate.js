import { execSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

// Run the generate script
console.log('Running generate script...');
execSync('node scripts/generate.js', { cwd: root, stdio: 'inherit' });

// Check output files exist
const files = ['dist/brand.css', 'dist/brand.js', 'dist/brand.d.ts'];
let allGood = true;
for (const f of files) {
  const fullPath = join(root, f);
  if (existsSync(fullPath)) {
    const content = readFileSync(fullPath, 'utf-8');
    console.log(`OK: ${f} (${content.length} bytes)`);
  } else {
    console.error(`MISSING: ${f}`);
    allGood = false;
  }
}

console.log(allGood ? '\nAll generated files present.' : '\nSome files are missing!');
