/**
 * Created by winder on 2016/4/8.
 */
(function (angular) {
    angular.module('kityminderEditor').controller('KityMinderMainController',['$scope','valueTransfer',KityMinderMainController]);
    function KityMinderMainController($scope,valueTransfer) {
        valueTransfer.role = 'editor';

        $scope.initEditor = function(editor, minder) {
            window.editor = editor;
            window.minder = minder;
        };
    }
})(angular);