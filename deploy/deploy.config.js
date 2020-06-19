module.exports = {
    deploy: {
        production: {
            key: './deploy/Books',
            user: 'ubuntu',
            host: ["35.213.132.113"],
            ref: 'origin/master',
            repo: 'https://github.com/developer-student-club-thapar/calibre-web',
            path:'/home/ubuntu/library-production',
            "post-setup":'pip3 install -r requirements.txt',
            "post-deploy":"pm2 startOrRestart ./deploy/production.config.js"
        },
    }
} 
