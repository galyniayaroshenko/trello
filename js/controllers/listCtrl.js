angular.module('app').controller('listCtrl', function (listFactory) {
    console.log('list');
    this.removeList = function (list) {
        listFactory.removeList(list);
    };
});
