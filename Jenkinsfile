pipeline {
    agent any

    environment {
    // 项目凭证
        GITHUB_CRED = credentials('f2e774a2-c3e5-477f-bf49-2ca8f0141984')
    }

    tools {
        nodejs 'NodeJS_18.19.0'
    }

    stages {
        stage('Checkout') {
          //  拉取代码
            steps {
                git branch: 'master', credentialsId: 'f2e774a2-c3e5-477f-bf49-2ca8f0141984', url: 'https://github.com/WalkerChan2019/liebianwang_admin.git'
            }
        }

//  检查package.json是否有修改 && node_modules是否存在
        stage('Check Dependencies') {
            steps {
                script {
                    env.PACKAGE_CHANGED = sh(script: 'git diff HEAD^ HEAD --name-only | grep "package.json" || true', returnStdout: true).trim()
                    env.NODE_MODULES_EXISTS = sh(script: '[ -d "node_modules" ] && echo "true" || echo "false"', returnStdout: true).trim()
                }
            }
        }

//  安装pnpm && 安装依赖 如果Check Dependencies条件判断通过则跳过此步骤
        stage('Install pnpm and Dependencies') {
            when {
                expression { env.PACKAGE_CHANGED != '' || env.NODE_MODULES_EXISTS == 'false' }
            }
            steps {
                sh 'npm install -g pnpm'
                sh 'pnpm install'
            }
        }
//  构建
        stage('Build') {
            steps {
                sh 'pnpm run build'
            }
        }
//  压缩
        stage('compress dist') {
            steps {
                sh 'tar -czf dist.tar -C dist . || echo "Failed to create dist.tar"'
                sh 'ls -l dist.tar || echo "dist.tar not found"'
            }
        }
//  部署云服务器
        stage('Deploy to Server') {
            steps {
                sshPublisher(
                    publishers: [
                        sshPublisherDesc(
                            configName: 'nas',
                            transfers: [
                                sshTransfer(
                                    cleanRemote: false,
                                    excludes: '',
                                    execCommand: '''
                                        cd /vol1/1000/docker/jenkins/code/webCollection
                                        find . -maxdepth 1 ! -name . ! -name dist.tar -exec rm -rf {} +
                                        ls
                                        tar zxvf dist.tar
                                        rm dist.tar
                                    ''',
                                    execTimeout: 120000,
                                    flatten: false,
                                    makeEmptyDirs: false,
                                    noDefaultExcludes: false,
                                    patternSeparator: '[, ]+',
                                    remoteDirectory: '/docker/nginx/html/test',
                                    remoteDirectorySDF: false,
                                    removePrefix: '',
                                    sourceFiles: 'dist.tar'
                                )
                            ],
                            usePromotionTimestamp: false,
                            useWorkspaceInPromotion: false,
                            verbose: false
                        )
                    ]
                )
            }
        }
    }
}
