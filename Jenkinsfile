pipeline {
    agent any

    triggers {
        cron('H */2 * * *')
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/lizakravchuk-cmyk/my-cypress-project.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('UI Tests') {
            steps {
                echo 'Running UI tests with Cypress...'
                sh 'npx cypress run'
            }
        }

        stage('API Tests') {
            steps {
                echo 'API Tests stage - placeholder (no dedicated API tests in this repo yet)'
                sh 'echo "API tests would run here"'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
    }
}
