pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'cyberbuddy-app'
    }

    stages {
        stage('Build') {
            steps {
                echo '📦 Installing dependencies...'
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo '✅ Running tests...'
                bat 'npm test'
            }
        }

        stage('Security') {
            steps {
                echo '🔐 Running security audit...'
                // Allow audit to fail without breaking the pipeline
                bat 'npm audit || exit 0'
            }
        }

stage('Deploy') {
    steps {
        echo '🚀 Building Docker image...'
        bat 'docker build -t %DOCKER_IMAGE% .'

        echo '🧹 Removing any existing container...'
        bat 'docker rm -f cyberbuddy-container || exit 0'

        echo '🐳 Running Docker container...'
        bat 'docker run -d -p 3000:3000 --name cyberbuddy-container %DOCKER_IMAGE%'
    }
}

    }

    post {
        always {
            echo '🧹 Cleaning up...'
            bat 'docker rm -f cyberbuddy-container || exit 0'
        }
    }
}
