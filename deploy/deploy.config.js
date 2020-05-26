module.exports = {
    deploy: {
        production: {
            key: './deploy/Books',
            user: 'ubuntu',
            host: ["library.dsctiet.tech"],
            ref: 'origin/master',
            repo: 'https://github.com/developer-student-club-thapar/calibre-web',
            path:'/home/ubuntu/library-production',
            "post-setup":'pip3 install -r requirements.txt',
            "post-deploy":"sudo pm2 startOrRestart ./deploy/production.config.js"
        },
    }
} 