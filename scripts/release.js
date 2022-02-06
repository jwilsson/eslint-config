import { execaCommand } from 'execa';
import inquirer from 'inquirer';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

const getNewVersion = async () => {
    const packageJsonPath = path.join(
        process.cwd(),
        'packages',
        'eslint-config',
        'package.json',
    );

    const packageJsonContent = await fs.readFile(packageJsonPath, 'utf8');

    return JSON.parse(packageJsonContent).version;
};

const execaOpts = {
    stdio: 'inherit',
};

await execaCommand(`npm run version-all -- ${process.argv[2]}`, execaOpts);

const newVersion = await getNewVersion();

await execaCommand(`git commit -am ${newVersion}`, execaOpts);
await execaCommand(`git tag v${newVersion}`, execaOpts);
await execaCommand('git push', execaOpts);
await execaCommand('git push --tags', execaOpts);

const { otp } = await inquirer.prompt([
    {
        name: 'otp',
        message: 'OTP:',
    },
]);

await execaCommand(`npm run publish-all -- --otp=${otp}`, execaOpts);
