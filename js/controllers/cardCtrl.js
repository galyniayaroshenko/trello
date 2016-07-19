angular.module('app').controller('cardCtrl', function (cardFactory) {
    console.log('cardCtrl');

    this.deleteCard = function (card) {
        cardFactory.deleteCard(card);
    };
});
