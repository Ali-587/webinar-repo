pipeline {
    agent any
	stages{
	   stage('Test'){
            steps{
                 script {
                sshPublisher(
                    publishers: [
                        sshPublisherDesc(configName: 'Test',
                        transfers:
                        [
                            sshTransfer(cleanRemote: false,
                            excludes: '',
                            execCommand: "cd /root/webinar-repo && sudo pm2 stop all && sudo git pull https://github.com/Ali-587/webinar-repo && sudo -H -u root bash -c 'pm2 restart all'"
                            ,
                            execTimeout: 12000000,
                            flatten: false,
                            makeEmptyDirs: false,
                            noDefaultExcludes: false,
                            patternSeparator: '[, ]+',
                            remoteDirectory: '',
                            remoteDirectorySDF: false,
                            removePrefix: '',
                            sourceFiles: '')
                        ],
                        usePromotionTimestamp: false,
                        useWorkspaceInPromotion: false,
                        verbose: false)
                    ]
                )
            }
           
        }
            }
            }  
 }
