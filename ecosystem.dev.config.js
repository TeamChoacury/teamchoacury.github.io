module.exports = {
    apps: [
        {
            name: "proxy",
            script: "./start_proxy_dev.sh",
            watch: true,
            ignore_watch: [
                "node_modules",
                "logs"
            ],
            exec_mode: "cluster"
        },
        {
            name: "backend",
            script: "./start_backend_dev.sh",
            watch: true,
            ignore_watch: [
                "node_modules",
                "logs"
            ],
            exec_mode: "cluster"
        },
        {
            name: "frontend",
            script: "./start_frontend_dev.sh",
            watch: true,
            ignore_watch: [
                "node_modules"
            ]
        }
    ]
}