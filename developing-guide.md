# Developing guide
This is a development guide, a how-to get started developing this website.
PM2 is a pain, especially on Windows, but once you get it set up, it's nice and straightforwards.

This guide includes:
- [Developing on Windows](#windows) (**Recommended**)
- [Developing on Linux](#linux)     (Slightly more difficult)

## Windows

## Linux
Similar to the [getting started](/getting-started.md) guide, you will need to install the following:

| Dependency | Install guide      |
|------------|--------------------|
| Node.JS    | [Node.js](#nodejs) |
| PM2        | [PM2](#pm2)        |

Once you have all of these dependencies installed, you can use your code editor of choice but you **must** use either `npm` or `pnpm`, Yarn must **not** be used.

Once you are in, locate the `npm_install.sh` file and run it. This will install all of the npm dependencies.

You can if you would like use the PM2 script provided, **however**, I do really suggest that you don't

### Node.js
Assuming you are using Ubuntu (The easiest of the bunch) run these commands:
```bash
sudo apt install nodejs
sudo apt install npm

sudo npm install n -g
sudo n latest
sudo npm install npm@latest
```
This should install the latest version of both Node.JS and NPM

### PM2
To install the latest version of PM2 globally:
```bash
sudo npm install pm2 -g
```