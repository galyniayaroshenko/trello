angular.module('app').controller('listCtrl', function (listFactory, cardFactory) {
    console.log('list');
    this.removeList = function (list) {
        listFactory.removeList(list);
    };

    this.getCards = function (list) {
        return cardFactory.getCards(list);
    };
});
