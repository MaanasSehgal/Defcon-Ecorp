module.exports = {
    apps: [
        {
            name: "defcon",
            script: "node_modules/next/dist/bin/next",
            args: "start -p 80",
            watch: false,
        },
    ],
};
