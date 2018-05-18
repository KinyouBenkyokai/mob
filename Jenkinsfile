pipeline {
  agent {
    docker {
      image 'node:9-alpine'
    }

  }
  stages {
    stage('test') {
      steps {
        sh '''npm install
npm test'''
      }
    }
  }
  environment {
    ENV = 'DEV'
  }
}