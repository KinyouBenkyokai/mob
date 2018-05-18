pipeline {
  agent {
    docker {
      args 'aaa'
      image 'node:9-alpine'
    }

  }
  stages {
    stage('test') {
      steps {
        sh 'npm test'
      }
    }
  }
  environment {
    ENV = 'DEV'
  }
}