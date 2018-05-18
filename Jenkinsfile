pipeline {
  agent {
    docker {
      image 'node:9-alpine'
    }

  }
  stages {
    stage('test') {
      steps {
        sh '''yarn
yarn test'''
      }
    }
  }
  environment {
    ENV = 'DEV'
  }
}