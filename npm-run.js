import { execa } from 'execa';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

const packagesPath = path.join(process.cwd(), 'packages');
const args = process.argv.slice(2);

const packages = await fs.readdir(packagesPath, {
    withFileTypes: true,
});

for (const pkg of packages) {
    if (!pkg.isDirectory()) {
        continue;
    }

    console.log(`Running "npm ${args[0]}" in package "${pkg.name}":`);

    await execa('npm', args, {
        cwd: path.join(packagesPath, pkg.name),
        stdio: 'inherit',
    });

    console.log(
        '----------------------------------------------------------------------\n',
    );
}
