module.exports = {
    apps: [{
        name: 'echo-python',
        cmd: 'cps.py',
        args: '',
        autorestart: true,
        watch: true,
        pid: '/path/to/pid/file.pid',
        instances: 1,
    }, {
        name: 'echo-python-3',
        cmd: 'cps.py',
        interpreter: 'python3'
    }],
}; 