module.exports = {
    apps: [
        {
            name: "proxy",
            script: "./start_proxy.sh",
            watch: true,
            ignore_watch: [
                "node_modules",
                "logs"
            ],
            instances: 2,
            exec_mode: "cluster"
        },
        {
            name: "backend",
            script: "./start_backend.sh",
            watch: true,
            ignore_watch: [
                "node_modules",
                "logs"
            ],
            instances: 2,
            exec_mode: "cluster"
        },
        {
            name: "frontend",
            script: "./start_frontend.sh",
            watch: true,
            ignore_watch: [
                "node_modules"
            ]
        }
    ]
}