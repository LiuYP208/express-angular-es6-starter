import template from './todoFooter.html';
import controller from './todoFooter.controller';
import './todoFooter.css';

let todoFooterComponent = function() {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'todoFooterCtrl',
    bindToController: {
      remainCount: '='
    }
  };
};

export default todoFooterComponent;