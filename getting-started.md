# Getting started

> [!WARNING]
> This will **not** work on Windows, because PM2 and scripts are a pain.
> Test it in a VM or manually start each of processes
> Check out the [developing guide](/developing-guide.md) for more information on Windows

To host this website you will need the following dependencies:

| Dependency | Install guide      |
|------------|--------------------|
| Node.JS    | [Node.js](#nodejs) |
| PM2        | [PM2](#pm2)        |

Once you have all of the dependencies installed, to get things setup:

- Make sure that you have this entire directory downloaded
- You may need to reboot
- Head into the root of the directory
- Locate the `ecosystem.config.js` file
- Start it with `sudo pm2 start ecosystem.config.js`
  - This will automatically watch for any changes and restart it
  - This will most likely use up a ton of system resources (Clustering)
- Run `sudo pm2 startup` to create the PM2 startup script
- Check that it is running

To stop it, use `sudo pm2 stop all`.<br />
To reload it, use `sudo pm2 reload all`.<br />
To list all processes, use `sudo pm2 list`.

In the case that something does go wrong, stop all, check logs and report to the developers.

The logs are located in each of the folders, include them all.
You may also be able to download the log files via the dashboard (Though, it does require having access to both the frontend and the backend).

## Node.js
Assuming you are using Ubuntu (The easiest of the bunch) run these commands:
```bash
sudo apt install nodejs
sudo apt install npm

sudo npm install n -g
sudo n latest
sudo npm install npm@latest
```
This should install the latest version of both Node.JS and NPM

## PM2
To install the latest version of PM2 globally:
```bash
sudo npm install pm2 -g
```