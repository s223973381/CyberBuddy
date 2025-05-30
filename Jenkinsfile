pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'cyberbuddy-app'
    }

    stages {
        stage('Build') {
            steps {
                echo '📦 Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo '✅ Running tests...'
                sh 'npm test'
            }
        }

        stage('Security') {
            steps {
                echo '🔐 Running security audit...'
                // Continue build even if audit fails; good for learning stage
                sh 'npm audit || true'
            }
        }

        stage('Deploy') {
            steps {
                echo '🚀 Building Docker image...'
                sh 'docker build -t $DOCKER_IMAGE .'

                echo '🐳 Running Docker container...'
                sh 'docker run -d -p 3000:3000 --name cyberbuddy-container $DOCKER_IMAGE'
            }
        }
    }

    post {
        always {
            echo '🧹 Cleaning up...'
            sh 'docker rm -f cyberbuddy-container || true'
        }
    }
}
