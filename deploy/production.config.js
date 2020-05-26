module.exports = {
    apps: [{
        name: 'library',
        cmd: 'cps.py',
        interpreter:"python3",
        args: '',
        autorestart: true,
        watch: true,
        pid: '/path/to/pid/file.pid',
        instances: 1,
    }]
}; 