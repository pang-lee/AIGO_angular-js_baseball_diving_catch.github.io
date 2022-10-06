var app = angular.module('AIGO', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'view/team.html',
            controller: 'test_ctl'
        })
        .when('/company',{
            templateUrl: 'view/company.html'
        })
        .when('/demo',{
            templateUrl: 'view/AIGO.html',
            controller: 'demo_ctl'
        })
        .otherwise({
            redirectTo:'/'
        });
}]);

app.controller('test_ctl', ['$scope', function($scope) {
    $scope.msg = 'new msg apple'
}])

app.controller('demo_ctl', ['$scope', '$document', '$http', function($scope, $document, $http) {
    $http({
        method: 'GET',
        url: `/model/data.json`
        // url: `${$document[0].location.host}/model/data.json`
    }).then(function successCallback(response) {
        $scope.video_list = response.data;

        $scope.video_list.forEach(function(item, i) {
            switch (item.vid_folder) {
                case 'Origin':
                    $scope.ori_vid_num = item.vid_num
                    $scope.ori_vid_len = item.vid_len
                    break;
                    
                case '3DCNN':
                    if(item.vid_name == '18秒半撲接(1.mp4') $scope.cnn_vid_len = item.vid_len
                    $scope.cnn_vid_num = item.vid_num
                    break;

                case 'GRU':
                    $scope.gru_ori_vid_num = item.vid_num
                    $scope.gru_ori_vid_len = item.vid_len
                    break;

                case 'Mediapipe':
                    $scope.skleton_ori_vid_num = item.vid_num
                    $scope.skleton_ori_vid_len = item.vid_len
                    break;

                case 'NLP':
                    $scope.nlp_ori_vid_num = item.vid_num
                    $scope.nlp_ori_vid_len = item.vid_len
                    break;

                case 'Result':
                    $scope.res_ori_vid_num = item.vid_num
                    break;

                case 'Siamnese_3DCNN':
                    if(item.vid_name == '全撲接18秒(2.mp4') $scope.s_cnn_ori_vid_len = item.vid_len
                    $scope.s_cnn_ori_vid_num = item.vid_num
                    break;

                case 'Siamnese_GRU':
                    $scope.s_gru_ori_vid_num = item.vid_num
                    $scope.s_gru_ori_vid_len = item.vid_len
                    break;

                case 'Sliding_Video':
                    $scope.slice_video_ori_vid_num = item.vid_num
                    $scope.slice_video_ori_vid_len = item.vid_len
                    break;

                case 'Sliding_Skleton':
                    $scope.slice_skleton_ori_vid_num = item.vid_num
                    $scope.slice_skleton_ori_vid_len = item.vid_len
                    break;

                default:
                    break;
            }
        });
    
        }, function errorCallback(response) {
            console.log('fetch fail', response.statusText)
    });


    // angular.element($document[0]).ready(function(){
    //     var vid = angular.element('#myVideo')
    //     console
    // })

    // $scope.movie = { src: '../model/origin.mp4', title: "Egghead.io AngularJS Binding"};



    // $scope.msg = 'https://www.youtube.com/embed/zZK18a4QwK8'
}])